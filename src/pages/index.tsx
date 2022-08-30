import type { NextPage } from 'next'
import MapView from 'components/MapView'
import { SEO } from 'components/SEO'

const Intro: NextPage = () => {
  return (
    <>
      <SEO title="大明宫遗址公园"></SEO>
      <MapView />
    </>
  )
}

export default Intro
