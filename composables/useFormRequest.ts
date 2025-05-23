import type { IPopupNotifyProps } from '@/components/PopupNotify.vue'
import type { IPopupNotifyPromoProps } from '@/components/PopupNotifyPromo.vue'

export var useFormRequest = (
  cbSuccessFetch?: () => void,
  popup_notify_props_success?: IPopupNotifyProps | null,
  ignore_name?: boolean,
  popup_notify_promo_props_success?: IPopupNotifyPromoProps
) => {
  var route = useRoute()
  var config = useRuntimeConfig()
  var popup_notify_props = useState<IPopupNotifyProps | null>('popup_notify_props', () => null)
  var popup_notify_promo_props = useState<IPopupNotifyPromoProps | null>('popup_notify_promo_props', () => null)
  var is_loading = useState<boolean>("is_loading", () => false); //prettier-ignore

  var user_name = ref('')
  var user_phone = ref('')
  var error_user_name = ref('')
  var error_user_phone = ref('')

  var re_captcha = ref<boolean>(false)

  var verifyCaptcha = (): Promise<boolean> =>
    new Promise((resolve) => {
      window.grecaptcha?.ready(async () => {
        const token = await window.grecaptcha?.execute(config.public.RECAPTCHA_SITE_KEY, { action: 'homepage' })

        if (!token) return
        const response = await $fetch('/api/siteverify', { method: 'post', body: { token } })
        resolve(!!response?.success)
      })
    })

  var validateForm = () => {
    if (!user_name.value && !ignore_name) {
      error_user_name.value = 'Заполните ваше имя'
    } else {
      error_user_name.value = ''
    }

    if (!/\d{11}/.test(user_phone.value)) {
      error_user_phone.value = 'Заполните ваш телефон'
    } else {
      error_user_phone.value = ''
    }
  }

  var sendFormRequest = async (fields: IFormFields) => {
    validateForm()
    if (error_user_phone.value || (error_user_name.value && !ignore_name)) {
      return
    }

    var utm = JSON.parse(localStorage.getItem('utm') || '{}')
    document.cookie = `previousUrl=${document.location.host + route.path + route.hash}`
    try {
      is_loading.value = true

      re_captcha.value = await verifyCaptcha()
      if (!re_captcha.value) return (is_loading.value = false)
      await $fetch('/api/sendform', {
        method: 'post',
        body: {
          name: user_name.value,
          phone: user_phone.value,
          ...fields,
          lead_title: 'Дружеский - ' + fields.lead_title,
          ...utm,
        },
      })

      cbSuccessFetch && cbSuccessFetch()
      ymReachGoal('send-form_any') //ym_target - Успешно отправленные формы

      //@ts-ignore
      route.path === "/ipoteka_299" && window?._tmr?.push && _tmr.push({ type: "reachGoal", id: 3383457, goal: "C_goal_lead" }); //prettier-ignore

      if (popup_notify_promo_props_success) {
        popup_notify_promo_props.value = popup_notify_promo_props_success
        return
      }

      popup_notify_props.value = popup_notify_props_success || {
        status: 'succes',
        text_btn: 'Понятно',
        text_content:
          'Мы&nbsp;отправили ваши данные менеджерам. С&nbsp;вами свяжутся и&nbsp;ответят на&nbsp;все вопросы в&nbsp;ближайшее время.',
        max_width: 500,
      }
    } catch (error) {
      popup_notify_props.value = {
        text_header: 'Заявка не принята',
        text_content: 'Произошла ошибка. Повторите или попробуйте позже',
        status: 'error',
      }
    } finally {
      is_loading.value = false
    }
  }

  return {
    user_name,
    user_phone,
    error_user_name,
    error_user_phone,
    sendFormRequest,
    validateForm,
  }
}

export interface IFormFields {
  lead_title: string
  comment?: string
  additional_info_source?: string
}
