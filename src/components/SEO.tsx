import Head from 'next/head'

export const SEO = ({
  description = '电子导游',
  keywords = '电子导游',
  title = '电子导游',
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  )
}
