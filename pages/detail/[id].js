import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Detail() {
  const [gameId, setGameId] = useState({});
  const shareBtn = useRef(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

    fetch('/js/gamesData.json')
      .then(response => response.json())
      .then(data => {
        const gameDetail = data.find(item => item.id === Number(id));
        setGameId(gameDetail);

        $(shareBtn.current).on('click', async function(){
          if(navigator.share){
            try {
              await navigator.share({
                url: window.location.href
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      });
  }, [id]);

  return (
    <>
      {Object.keys(gameId).length > 0 ?
        (
          <div className="detail-page">
            <div className="header position-absolute top-0 left-0 mt-3">
              <Link href={'/'}>
                <a className="back">
                  <i className="bi bi-chevron-left"></i>
                </a>
              </Link>
            </div>
            <div className="detail-content-image detail-wrapper position-relative">
              <Image className="w-100 h-auto" width={1200} height={1200} src={gameId.image} alt=""/>
              <div className="detail-content">
                <span className="bi bi-box-arrow-up" ref={shareBtn}></span>
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
        <div className="loading-element">Loading...</div>
      }
    </>
  )
}
