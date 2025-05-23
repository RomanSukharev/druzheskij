import ymReachGoal from '@/utils/ymReachGoal'
import { IPopupFormProps } from '@/components/PopupForm.vue'

export type BannerActionWrapperFormDataType =
  Omit<IPopupFormProps['data'], 'cbSuccessFetch' | 'popup_notify_props_success'>
  & Partial<Pick<IPopupFormProps['data'], 'popup_notify_props_success'>>;

interface IBannerActionOptions {
  ym_target_name: string;
  form_data_options: BannerActionWrapperFormDataType
}

export const useBannerAction = (options: IBannerActionOptions) => {
  const { ym_target_name, form_data_options } = options

  const ym_target_action_map = {
    open_form: `open_form-${ym_target_name}`,
    send_form: `send_form-${ym_target_name}`,
  }

  var popup_form_props = useState<IPopupFormProps | null>('popup_form_props', () => null) //prettier-ignore

  var handleClickBtnBanner = () => {
    ymReachGoal(ym_target_action_map.open_form)

    popup_form_props.value = {
      data: {
        cbSuccessFetch: () => ymReachGoal(ym_target_action_map.send_form),
        ...form_data_options,
        popup_notify_props_success: form_data_options.popup_notify_props_success ?? {
          status: 'succes',
          text_btn: 'Понятно',
          text_content: 'Получили вашу заявку. <br/> Скоро свяжемся и&nbsp;ответим на&nbsp;все&nbsp;вопросы.',
          max_width: 560,
        },
      },
    }
  }
  return { handleClickBtnBanner }
}