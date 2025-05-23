import type { ResponseImageType, ResponseMediaType } from '@/types/ResponseType'

export default (media: ResponseMediaType): ResponseImageType => {
  return {
    code: media.type,
    name: media.name,
    path: media.file,
    previews: {
      extra_small: media.file,
      large: media.file,
      medium: media.file,
      small: media.file,
    },
  }
}
