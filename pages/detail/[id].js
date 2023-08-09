import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

import Link from 'next/link';
import Image from 'next/image';

export default function Detail() {
  const [gameId, setGameId] = useState({});
  // const shareBtn = useRef(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

    fetch('/js/gamesData.json')
      .then(response => response.json())
      .then(data => {
        const gameDetail = data.find(item => item.id === Number(id));
        setGameId(gameDetail);
      });

      $(document).on('click', '.bi-box-arrow-up', function(){
        if(navigator.share){
          try {
            navigator.share({
              url: window.location.href
            });
          } catch (error) {
            console.log(error);
          }
        }
      });
  }, [id]);

  return (
    <>
      {Object.keys(gameId).length > 0 ?
        (
          <div className="detail-page">
            <div className="header position-absolute top-0 left-0 mt-3">
              <Link href={'/'} onClick={()=>{$('.container').addClass('status')}}>
                <a className="back">
                  <i className="bi bi-chevron-left"></i>
                </a>
              </Link>
            </div>
            <div className="detail-content-image detail-wrapper position-relative">
            {gameId.image ?
              (
              <>
                <Image className="w-100 h-auto" width={620} height={1400} src={gameId.bg} alt=""/>
                <div className="image-phone">
                  <Image className="w-auto h-100" width={620} height={1400} src={gameId.image} alt=""/>
                </div>
              </>
              )
              :
              <Image className=" w-100 h-auto" width={620} height={1400} src={gameId.bg} alt=""/>
            }
              <div className="detail-content">
                <span className="share-btn bi bi-box-arrow-up"></span>
                <div className="detail-content-icon">
                  <Image className="w-100 h-auto" width={1200} height={1200} src={gameId.icon} alt=""/>
                </div>
                <div className="detail-content-desc">
                  <h2>{gameId.title}</h2>
                  <p>{gameId.description}</p>
                  <Link href={gameId.link}>
                    <a className="btn btn-primary rounded-pill btn-small btn-white w-100">PLAY</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
        :
        <div className="loader">Loading...</div>
      }
    </>
  )
}
