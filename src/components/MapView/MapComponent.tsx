import { MapContainer } from 'react-leaflet'
import { latLngBounds, bounds } from 'leaflet'
import { MarkerCluster } from './MarkerCluster'
import { AutoZoom } from './AutoZoom'
import { ImageOverlayLayer } from './ImageOverlayLayer'
import { useEffect, useState } from 'react'
import Script from 'next/script'

const MapComponent = () => {
  const [text, setText] = useState('正在定位...')
  const mapData: any = {
    rightTop: [34.305765162, 108.9717452989],
    leftBottom: [34.2805691426, 108.9551993554],
    zoom: 25,
    zoomRange: [7.0, 21.0],
  }
  mapData.imageUrl =
    'https://etravel-1256045011.cos.ap-shanghai.myqcloud.com/daminggong.jpeg'

  mapData.imageBounds = latLngBounds(
    [34.2805691426, 108.9551993554],
    [34.305765162, 108.9717452989],
  )
  const b = bounds([mapData.rightTop, mapData.leftBottom])
  mapData.center = [b.getCenter().x, b.getCenter().y]

  mapData.maxBounds = [mapData.leftBottom, mapData.rightTop]

  useEffect(() => {
    // if (navigator.geolocation) {
    //   console.log('地理位置服务可用')
    //   const successCallback = (position: any) => {
    //     setText(
    //       '经纬度：' +
    //         position.coords.latitude +
    //         ',' +
    //         position.coords.longitude,
    //     )
    //   }
    //   const handleLocationError = (error: any) => {
    //     switch (error.code) {
    //       case 0:
    //         setText('获取位置信息出错！')
    //         break
    //       case 1:
    //         setText('您设置了阻止该页面获取位置信息！')
    //         break
    //       case 2:
    //         setText('浏览器无法确定您的位置！')
    //         break
    //       case 3:
    //         setText('获取位置信息超时！')
    //         break
    //       default:
    //         setText('不明原因')
    //         break
    //     }
    //   }
    //   navigator.geolocation.getCurrentPosition(
    //     successCallback,
    //     handleLocationError,
    //     { maximumAge: 15000, timeout: 10000, enableHighAccuracy: true },
    //   )
    // } else {
    //   setText('地理位置服务不可用')
    // }
  }, [])

  return (
    <>
      <Script
        type="text/javascript"
        src="https://webapi.amap.com/maps?v=2.0&key=6fb6de7db5b3d61d8d8e56e738eda695"
      ></Script>
      <p className=" z-40 w-full p-4 text-base bg-white text-primary">{text}</p>
      <MapContainer
        className="w-full h-screen"
        center={mapData.center}
        zoom={mapData.zoom}
        minZoom={mapData.zoomRange[0] || 7}
        maxZoom={mapData.zoomRange[1] || 19}
        maxBounds={[mapData.rightTop, mapData.leftBottom]}
        zoomAnimationThreshold={1}
        zoomControl={false}
        attributionControl={false}
      >
        <MarkerCluster />
        <AutoZoom />
        <ImageOverlayLayer />
      </MapContainer>
    </>
  )
}

export default MapComponent
