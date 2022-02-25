import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Wish from '../component/wish/wish';
import Gift from '../component/gift/gift';
import Api from './api/guest-book';
import GuestBook from '../component/guestbook/guest-book';

const Home = () => {
  const [comment, setComment] = useState(null);
  
  useEffect(() => {
    Api.get('/guest-book').then(response => {
        console.log('response', response);
        setComment(response.data);
    })
}, [])

  return (
    <>
      <Head>
        <title>{`Gian & Mela Wedding`}</title>
        <meta name="description" content="Gian and Mela Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* update */}
      {/* <Gift></Gift> */}
      <Wish></Wish>
      {comment && <GuestBook comment={comment}></GuestBook>}
    </>
  )
}

export default Home
