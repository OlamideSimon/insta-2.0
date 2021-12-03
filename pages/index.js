import Head from 'next/head'

import Header from '../components/header';
import Feed  from '../components/feed.js';
import Modal from '../components/modal.js'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal />

    </div>
  )
}
