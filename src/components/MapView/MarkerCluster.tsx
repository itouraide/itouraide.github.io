import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import { getMarkList } from './utils'
import { Marker, Popup, useMap } from 'react-leaflet'
import { divIcon, point } from 'leaflet'

export const MarkerCluster = () => {
  const map = useMap()

  const onClusterClick = (cluster: any) => {
    console.log('cluster: ', cluster)
    const { layer = {} } = cluster
    map.setView(layer.getBounds().getCenter(), map.getZoom() + 1)
  }

  const onClusterGroupIcon = (cluster: any) => {
    const markers = cluster.getAllChildMarkers()
    const clusterTitle = markers[0].options.title + '等'

    return divIcon({
      html: ` <span class="rounded-full border-2 border-primary text-gray-800 bg-white p-1 bg-opacity-80">${clusterTitle}</span>
              <span class="mt-1 rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white text-lg">${cluster.getChildCount()}</span>
            `,
      className: 'flex flex-col items-center',
      iconSize: point(120, 120, true),
    })
  }

  return (
    <MarkerClusterGroup
      showCoverageOnHover={false}
      zoomToBoundsOnClick={false}
      spiderfyOnMaxZoom={false}
      removeOutsideVisibleBounds={false}
      disableClusteringAtZoom={map.getMaxZoom() - 1}
      onClick={onClusterClick}
      iconCreateFunction={onClusterGroupIcon}
    >
      {getMarkList().map(
        ({ viweID, viweName, introduction, position, icon }: any) => {
          return (
            <Marker
              key={viweID}
              position={position}
              title={viweName}
              icon={icon}
            >
              <Popup>
                <h1>{viweName}</h1>
                <p>经纬度：{position}</p>
                <p>{introduction}</p>
              </Popup>
            </Marker>
          )
        },
      )}
    </MarkerClusterGroup>
  )
}
