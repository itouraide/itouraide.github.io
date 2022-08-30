import { ImageOverlay } from 'react-leaflet'
import { latLngBounds } from 'leaflet'

export const ImageOverlayLayer = () => {
  const imageUrl =
    'https://etravel-1256045011.cos.ap-shanghai.myqcloud.com/daminggong.jpeg'
  const imageBounds = latLngBounds(
    [34.2805691426, 108.9551993554],
    [34.305765162, 108.9717452989],
  )

  return <ImageOverlay bounds={imageBounds} url={imageUrl} />
}
