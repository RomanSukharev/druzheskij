import type { IPopupFormProps } from '~/components/PopupForm.vue'

export default (popup_form_props: Ref<IPopupFormProps | null>) => {
  window.addEventListener('openForm:getCall', (event) => {
    //@ts-ignore
    var price = parseInt(event.detail?.price).toLocaleString('fr')
    //@ts-ignore
    var square = parseInt(event.detail?.area)

    //@ts-ignore
    var link = event.detail?.website_url

    var comment = ``
    price !== 'NaN' && (comment += `- Стоимость квартиры: ${price} р\n`)
    square && (comment += `- Площадь: ${square} кв. м\n`)
    link && (comment += `- Ссылка на квартиру: ${link}`)

    popup_form_props.value = {
      data: {
        text_header: 'Заказать звонок',
        text_content:
          'Укажите имя и телефон, мы перезвоним и ответим на ваши вопросы о квартале. Не будем беспокоить вас пустыми звонками, покупка квартиры — только ваше решение.',
        text_btn: 'Заказать звонок',
        fields: {
          lead_title: 'Заказать звонок (ЗпОД)',
          additional_info_source: 'ИдаЧат',
          comment,
        },
      },
    }
  })
}
