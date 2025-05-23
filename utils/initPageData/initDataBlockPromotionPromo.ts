import type { IResponse } from '~/types/ResponseType'
import type { IHouse, INavGroup } from '~/types/FrontTypes'
import type { IBlockPromotionPromo } from '~/components/Block/Promotion/Promo/BlockPromotionPromo.vue'

export default (
  path: string,
  data_block_promotion_promo: Ref<IBlockPromotionPromo>,
  links_plan_group: Ref<INavGroup[]>,
  response_data: IResponse
) => {
  var promo = response_data?.payload.objects[0].promotion.find((i) => i.anchor_link === 'promo')

  if (!promo) return
  switch (path) {
    case '/promo': {
      var house_list: IHouse[] = []

      promo.elements.forEach((i) => {
        var house_anchor_link = i.slug!.split('/')[0]
        var plan_article = i.slug!.split('/').slice(1).join('/')

        var house = house_list.find((j) => j.anchor_link === house_anchor_link)

        if (!house) {
          house = {
            anchor_link: house_anchor_link,
            house_name: getHouseNameByAnchorLink(house_anchor_link),
            links: [],
            plans_groups: [],
            ready_date: 'II кв. 2026',
          }
          house_list.push(house)
        }

        var plan_code = PlanArticleHelpers.getCodeByArticle(plan_article)
        var house_plan_group_link = `${house_anchor_link}-${plan_code}`
        var house_plan_group = house.plans_groups.find((j) => j.link === house_plan_group_link)

        if (!house_plan_group) {
          house_plan_group = {
            link: house_plan_group_link!,
            plans: [],
            type: PlanArticleHelpers.getTypeByCode(plan_code),
          }
          house.plans_groups.push(house_plan_group)
        }

        house_plan_group.plans.push({
          article: plan_article,
          type: plan_code,
          images: i.media.map((i) => convertMediaToImage(i)),
          square: i.square,
          ready_date: i.ready_date,
          old_payment: +i.old_payment,
          programs: [
            {
              name: i.mortgage_name,
              min_payment: i.payment.toLocaleString('fr'),
              tooltip: `Рассчитан по ставке ${i.mortgage_rate}%
                <br> с первоначальным взносом ${i.availability_percent}% 
                <br> на срок 30 лет`,
            },
          ],

          fact_init_fee_percent: i.availability_percent,
        })

        var link = house.links.find((j) => j.href === `#${house_anchor_link}-${plan_code}`)

        if (!link) {
          house.links.push({
            href: `#${house_anchor_link}-${plan_code}`,
            title: PlanArticleHelpers.getTypeByCode(plan_code),
          })
        }
      })

      data_block_promotion_promo.value.house_list = house_list
      links_plan_group.value = getLinksGroupPlans(house_list)

      break
    }
  }
}

// --------------------------------------- HELPERS ---------------------------------------
var getHouseNameByAnchorLink = (anchor_link: string) => {
  if (anchor_link === 'single-villa') return 'СИНГЛ-ВИЛЛА'
  return 'ДОМ 1.1'
}

var getLinksGroupPlans = (houses: IHouse[]): INavGroup[] =>
  houses.reduce((res: INavGroup[], house) => [...res, { title: house.house_name, children: house.links }], [])
