import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroHome from 'components/HeroHome'
import FeaturesHome from 'components/FeaturesHome'
import FeaturesBlocks from 'components/FeaturesBlocks'
import Testimonials from 'components/Testimonials'
import Newsletter from 'components/Newsletter'

const Home: NextPage = () => {
  return (
    <>
      <SEO title="iTourAide"></SEO>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </>
  )
}

export default Home
