import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Page Router Example</title>
        <meta
          name='description'
          content='Try out the overall features of the Next.js Page Router based on Typescript.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>This is the Root Index Page.</h1>
    </div>
  )
}
