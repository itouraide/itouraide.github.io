import Head from 'next/head'

export const SEO = ({
  description = 'iTourAide',
  keywords = 'iTourAide,电子解说,电子导游,导游,导游解说,tour,travel',
  title = 'iTourAide',
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  )
}
