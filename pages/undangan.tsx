import React, {useEffect, useState} from 'react';
import CountingDate from '../component/counting/counting-date';
import Wish from '../component/wish/wish';
import Location from '../component/location/location';
import Galery from '../component/galery/galery';
// import GuestBook from '../component/guestbook/guest-book';
import Api from './api/guest-book';

export default function Undangan() {

  return (
      <>
        {/* <CountingDate></CountingDate> */}
        {/* <Location></Location> */}
        {/* <Galery></Galery> */}
        <Wish></Wish>
        {/* <GuestBook></GuestBook> */}

      </>
  )
}

