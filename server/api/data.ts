import { IResponse } from '~/types/ResponseType'

export default defineEventHandler(async (event) => {
  var config = useRuntimeConfig()
  var cache_data = (await useStorage('redis').getItem(config.REDIS_KEY)) as null | IResponse
  if (cache_data) return cache_data

  var config = useRuntimeConfig()
  // var url_request = `${config.BASE_URL}/api/v1/public/data-by-complex/${config.COMPLEX_UID}?scopes=${config.SCOPES}`
  var url_request = `${config.BASE_URL}/api/v1/public/resources/${config.RESOURCE_UID}`


  var respone = await fetch(url_request)
  var data = (await respone.json()) as IResponse

  useStorage('redis').setItem(config.REDIS_KEY, data, { ttl: config.REDIS_TTL })

  return data
})
