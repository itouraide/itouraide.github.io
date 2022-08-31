import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import 'aos/dist/aos.css'
import 'styles/style.css'

import AOS from 'aos'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html')!.style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html')!.style.scrollBehavior = ''
  }, [router.pathname]) // triggered on route change

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
