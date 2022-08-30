import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export const AutoZoom = () => {
  const map = useMap()

  useEffect(() => {
    const { options = {} } = map
    const { maxBounds, minZoom, maxZoom } = options
    if (maxBounds) {
      const z = Math.ceil(map.getBoundsZoom(maxBounds, true))
      if (minZoom && minZoom < z) {
        map.options.minZoom = z
      }
      if (maxZoom && maxZoom < z) {
        map.options.maxZoom = z
      }
      map.setZoom(z)
      console.log(z)
    }
  }, [])

  return null
}
