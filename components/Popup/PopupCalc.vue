<script lang="ts" setup>
import gsap from 'gsap'

export interface IPopupCalcProps {
  cost: number
  additional_comments?: string[]
}

var props = defineProps<IPopupCalcProps>()
var emit = defineEmits(['close'])
var node_ref = ref<HTMLElement>()

var { user_name, user_phone, sendFormRequest } = useFormRequest(() => {
  closePopup()
})

var closePopup = () => {
  gsap.to(node_ref.value!.querySelector('.PopupCalc__content'), {
    y: '100%',
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!.querySelector('.PopupCalc__contentWrapper'), {
    y: '-120%',
    duration: 1,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!.querySelector('.PopupCalc__UIButtonClose'), {
    duration: 1,
    opacity: 0,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!, {
    duration: 1,
    backgroundColor: '#00000000',
    ease: 'power1.inOut',
    onComplete: () => {
      emit('close')
    },
  })

  window.removeEventListener('message', handleOnFrameLoaded)
  window.removeEventListener('message', handleOnLeadFormSubmit)
}

var handleOnFrameLoaded = (event: MessageEvent<any>) => {
  const msg = event.data

  if (typeof msg !== 'object' || msg.method !== 'SdelkaIpoCalc.onFrameLoaded') return

  var iframe_window = node_ref.value!.querySelector('iframe')!.contentWindow!

  iframe_window.postMessage({ method: 'SdelkaIpoCalc.setWhereIAm', data: { url: location.href }, to: 'iframe' }, '*')
  iframe_window.postMessage({ method: 'SdelkaIpoCalc.setPrice', data: { price: +props.cost, to: 'iframe' } }, '*')

  gsap.to(node_ref.value!.querySelector('.PopupCalc__contentWrapper'), {
    y: '0%',
    duration: 1,
    opacity: 1,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!.querySelector('.PopupCalc__UIButtonClose'), {
    duration: 1,
    opacity: 1,
    ease: 'power1.inOut',
  })

  window.removeEventListener('message', handleOnFrameLoaded)
  window.addEventListener('message', handleOnLeadFormSubmit)
}

var handleOnLeadFormSubmit = (event: MessageEvent<any>) => {
  var msg = event.data

  if (typeof msg !== 'object' || msg.method !== 'SdelkaIpoCalc.onLeadFormSubmit') return

  var form_data = msg.data as {
    agreement: boolean
    amount: number
    anyBanks: boolean
    initialPayment: number
    interest: number
    name: string
    phone: string
    price: number
    years: number
  }

  user_name.value = form_data.name
  user_phone.value = form_data.phone.replace(/[^0-9]/g, '')

  var comment =
    `- Стоимость квартиры: ${form_data.price.toLocaleString('fr')} ₽
    - Первый взнос: ${Math.round(form_data.initialPayment * 100)} %
    - Срок кредита: ${form_data.years} лет` + (props.additional_comments || []).reduce((acc, i) => acc + `\n- ${i}`, '')

  sendFormRequest({
    lead_title: 'Заявка из калькулятора СделкаРФ (ЗпСП)',
    additional_info_source: 'Ипотечный калькулятор',
    comment,
  })
}

usePopup(closePopup)

onMounted(async () => {
  gsap.to(node_ref.value!, {
    opacity: 1,
    duration: 0.5,
  })

  gsap.to(node_ref.value!.querySelector('.PopupCalc__content'), {
    y: '0%',
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut',
  })

  window.addEventListener('message', handleOnFrameLoaded)
})
</script>

<template>
  <div class="PopupCalc" ref="node_ref" @click.self="closePopup">
    <div class="PopupCalc__contentWrapper">
      <div class="PopupCalc__content">
        <header class="PopupCalc__header">
          <UIButtonClose class="PopupCalc__UIButtonClose" @click="closePopup" />
        </header>

        <div class="PopupCalc__iframeWrapper">
          <iframe
            width="100%"
            height="100%"
            class="PopupCalc__iframe"
            name="sdelkaWidgetIpoCalcIframe"
            src="https://xn--d1aqf.xn--80ahdue7a.xn--p1ai/widget/ipo-calc/OVi9pVJPsI6vR9EaKbdxayz9bIH0o32Qh4Dg6Yy8bJzsjFT2rEQqxcAhJgz%2FX7jtRnUsdvJWx87%2FAq3SkLZ2MA%3D%3D#1"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.PopupCalc {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000cc;
  opacity: 0;

  z-index: 6000;

  will-change: opacity;
}

.PopupCalc__contentWrapper {
  position: relative;

  width: calc(100% - 80px);
  max-width: 1500px;
  height: 90%;
  max-height: 1024px;
  transform: translateY(-120%);
  overflow: hidden;
  opacity: 0;
}

.PopupCalc__content {
  position: absolute;
  inset: 0;
  transform: translateY(100%);
  background-color: #fff;
}

.PopupCalc__header {
  position: absolute;
  top: 0px;
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
}

.PopupCalc__UIButtonClose {
  overflow: hidden;
  opacity: 0;
}

.PopupCalc__iframeWrapper {
  position: absolute;
  top: 60px;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 0 16px;
}

.PopupCalc__iframe {
  border: none;
}

@media (max-width: 1200px) {
  .PopupCalc__iframeWrapper {
    bottom: 0;
  }

  .PopupCalc__contentWrapper {
    max-width: 1100px;
    width: calc(100% - 32px);
  }
}
</style>
