export default (url: string): { video_link: string; time_start: number } | null => {
  try {
    var [oid, id] = new URL(url).pathname.match(/-?\d+/g) || []

    if (!oid || !id) return null

    var video_url = new URL('https://vk.com/video_ext.php')
    video_url.searchParams.append('oid', oid)
    video_url.searchParams.append('id', id)
    video_url.searchParams.append('js_api', '1')

    var time_start = parseInt(Object.fromEntries(new URL(url).searchParams).t) || 0

    return { video_link: video_url.href, time_start }
  } catch {
    return null
  }
}
