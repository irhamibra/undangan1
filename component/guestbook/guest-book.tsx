import React, { useEffect, useState } from 'react';
// import { AppProps } from 'next/app';
import Api from '../../pages/api/guest-book';
// import  wishJSON from '../../database/guest-book.json'

const GuestBook = ({comment}: any) => {
  console.log('isi comment guest book', comment);
  // console.log('wish json', wishJSON);
  return (
    <>
    <div className="container-sm">
        <section className="p-4 m-1">
          <div className="row">
            <div className="tittle mb-4">
              <p className="title-section text-center fs-1 fw-bold">{'Buku Tamu'}</p>
              <p className="description-section text-center">Ucapan, doa dan harapan dari tamu undangan untuk pengantin pernikahan</p>
            </div>
          </div>
          <div className="row">
            <div className="card-wrapper">
              {comment.map((comment: any) => (
                <div className="card-guest-book mb-4" key={comment.id}>
                  <label className="fw-bold fs-6 mb-1">{`${comment.name} - ${comment.relationship}`}</label>
                  <p className="">{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row mt-4">
            <p className="text-center">Terimakasih</p>
            <p className="text-center">{'Gian & Mela'}</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default GuestBook

