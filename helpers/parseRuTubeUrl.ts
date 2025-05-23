export default (url: string): { video_link: string; time_start: number } | null => {
  try {
    var video_link = url.replace('video/private', 'play/embed')

    if (!video_link) {
      return null
    }

    var time_start = parseInt(Object.fromEntries(new URL(video_link).searchParams).t) || 0

    return { video_link, time_start }
  } catch {
    return null
  }
}
