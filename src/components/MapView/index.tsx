import dynamic from 'next/dynamic'

const MapView = dynamic(() => import('./MapComponent'), {
  ssr: false,
})

export default MapView
