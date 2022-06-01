import Head from 'next/head'
import { htmlTypes } from '../../types/html/Head'

export const HtmlHead = ({title, metaDescription}:htmlTypes) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.png" />
      </Head>
  )
}
