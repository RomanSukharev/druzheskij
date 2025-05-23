import type { IResponsePlansPlansItems } from '@/types/ResponseType'

export interface IProgram {
  name: string
  min_payment: string
  tooltip: string
}

export default class MortgagePrograms {
  /**
   * @description Сначала пытаемся собрать программу из полей props.plan.min_payment_priority.
   * Если их нет, то пытаемся найти её в props.plan.payments и собрать от туда.
   * Если и там не получилось собрать, то возвращаем null
   */
  static getProgramFamily = (plan: IResponsePlansPlansItems): IProgram | null => {
    if (
      plan?.min_payment_priority?.min_payment &&
      plan?.min_payment_priority?.mortgage?.base_rate &&
      plan?.fact_init_fee_percent &&
      plan?.min_payment_priority?.mortgage?.mortgage_term
    ) {
      var tooltip = `Рассчитан по ставке
                ${plan.min_payment_priority.mortgage.base_rate}%
                <br> с первоначальным взносом 
                ${plan.fact_init_fee_percent}% 
                <br> на срок 
                ${plan.min_payment_priority.mortgage.mortgage_term / 12} лет`

      return {
        min_payment: plan.min_payment_priority.min_payment,
        name: 'семейная ипотека',
        tooltip: tooltip,
      }
    }

    var program_family = plan?.payments?.find(i => i.mortgage.title.includes('Семейная ипотека для сайтов')) //prettier-ignore
    if (
      program_family &&
      program_family.min_payment &&
      program_family.mortgage.base_rate &&
      program_family.mortgage.mortgage_init_fee &&
      program_family.mortgage.mortgage_term
    ) {
      var tooltip = `Рассчитан по ставке
                    ${program_family.mortgage.base_rate}%
                    <br> с первоначальным взносом ${program_family.mortgage.mortgage_init_fee}%
                    <br> на срок
                    ${program_family.mortgage.mortgage_term / 12} лет`

      return {
        name: 'семейная ипотека',
        min_payment: program_family.min_payment,
        tooltip: tooltip,
      }
    }

    return null
  }

  static getPrograms = (plan: IResponsePlansPlansItems) => {
    var result: IProgram[] = []

    var program_family = this.getProgramFamily(plan)
    program_family && result.push(program_family)

    var program_state = plan?.payments?.find?.(i => i?.mortgage?.title?.includes?.('Госпрограмма для сайтов')) //prettier-ignore
    if (
      program_state &&
      program_state.min_payment &&
      program_state.mortgage.base_rate &&
      program_state.mortgage.mortgage_init_fee &&
      program_state.mortgage.mortgage_term
    ) {
      var tooltip = `Рассчитан по ставке 
                      ${program_state.mortgage.base_rate}%
                      <br> с первоначальным взносом ${program_state.mortgage.mortgage_init_fee}% 
                      <br> на срок
                      ${program_state.mortgage.mortgage_term / 12} лет`

      result.push({
        name: 'госпрограмма',
        min_payment: program_state.min_payment,
        tooltip: tooltip,
      })
    }


    var program_new_building = plan?.payments?.find?.(i => i?.mortgage?.title === "Новостройка, 16.5% от банка") //prettier-ignore
    if (
      program_new_building &&
      program_new_building.min_payment &&
      program_new_building.mortgage.base_rate &&
      program_new_building.mortgage.mortgage_init_fee &&
      program_new_building.mortgage.mortgage_term
    ) {
      var tooltip = `Рассчитан по ставке 
                      ${program_new_building.mortgage.base_rate}%
                      <br> с первоначальным взносом ${program_new_building.mortgage.mortgage_init_fee}% 
                      <br> на срок
                      ${program_new_building.mortgage.mortgage_term / 12} лет`

      result.push({
        name: 'стандартный платеж',
        min_payment: program_new_building.min_payment,
        tooltip: tooltip,
      })
    }

    return result
  }
}
