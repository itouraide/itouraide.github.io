import Head from 'next/head'

export const SEO = ({
  description = 'iTourAide',
  keywords = 'iTourAide',
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
