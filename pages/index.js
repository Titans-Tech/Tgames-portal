import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'universal-cookie';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const cookies = new Cookies();

// import 'owl.carousel';

export default function Home() {
  const [games, setGames] = useState([]);

  const refSeeAll = useRef(null);
  const refListGame = useRef([]);
  const refListGroupGame = useRef();
  const refListWrapper = useRef(null);
  const refPreviewSlider = useRef(null);
  const refBackButton = useRef(null);
  // alert(window.screen.availHeight+" "+window.innerHeight)
  useEffect(() => {
    var startPoint;
    var endPoint;
    let scrollPos = 0;
    window.addEventListener('notch-detected', function(e) {
     alert(e+ "Notch detected, move shit around");
    });
    fetch('/js/gamesData.json')
      .then(response => response.json())
      .then(data => {
        setGames(data)
        setTimeout(function(){
          $(refListGame.current).on('click', function(e){
            var order = $('.list-item').index(this);
            $('.list-item').removeClass('active')
            $(this).addClass('active');
            $('.detail-section').fadeOut(300, function(){
              $('.preview-detail-slider').trigger('to.owl.carousel', [order, 0, true]);
              $('.detail-section').fadeIn(500);
              $('.list-wrapper').removeClass('list-wrapper-open');
              $('.header-title').fadeOut(100);
              $('.list-header').fadeIn(100);
            })
          });
        }, 100);

        $(refListWrapper.current).on('touchstart', function(event){
          startPoint = event.changedTouches[0].clientY;
        });
      
        $(refListWrapper.current).on('touchend', function(event){
          
          endPoint = event.changedTouches[0].clientY;
          const distance = startPoint - endPoint;
          if(scrollPos<=0 && distance<0){
            $('.list-wrapper').removeClass('list-wrapper-open');
            $('.header-title').fadeOut(100);
            $('.list-header').fadeIn(100);
          }
          if (distance > 70) {
            $('.header-title').fadeIn(100);
            $('.list-header').fadeOut(100);
            $('.list-wrapper').addClass('list-wrapper-open');
          }
        });

        $(refListGroupGame.current).on('scroll',function(event){
          scrollPos = refListGroupGame.current.scrollTop
          // alert(scrollPos)
          // console.log(refListGroupGame.current.scrollTop);
        });

        setTimeout(function(){
          $('.preview-detail-slider').on('changed.owl.carousel', function(e) {
            var slideIndex = e.page.index;
            var container = $('.list-group-inner');
            var scrollTo = $('.list-item').eq(slideIndex);
        
            // Calculating new position of scrollbar
            var position = scrollTo.offset().top 
                    - container.offset().top 
                    + container.scrollTop();
        
            // Setting the value of scrollbar
            container.animate({
              scrollTop: position
            }, 300)
        
            $('.list-item').removeClass('active');
            $('.list-item').eq(slideIndex).addClass('active');
          });
          
          $('.list-item').eq(0).addClass('active');
        }, 200);
          
        $(refBackButton.current).on('click', function(){
          $('.list-wrapper').removeClass('list-wrapper-open');
          $('.header-title').fadeOut(100);
          $('.list-header').fadeIn(100);
        });
        
        $(refSeeAll.current).on('click', function(){
          $('.list-wrapper').addClass('list-wrapper-open');
          $('.header-title').fadeIn(100);
          $('.list-header').fadeOut(100);
        });

        $('.list-wrapper .list-desc p > a[role="button"]').on('click', function(){
          $(this).prev('span').toggleClass('opened');
          $(this).text($(this).text() === 'Show Less' ? 'More' : 'Show Less');
        });
      });

  }, []);

  const CarouselDetail = () => (
    <>
      <div className="container-icons">
        <div className="wrapper">
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
          </article>
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
          </article>
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
          </article>
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
          </article>
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
              </ul>
            </div>
          </article>
          <article className="slider">
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li><img src="/images/slider-icons/icon_set-19.png" /></li>
                <li><img src="/images/slider-icons/icon_set-18.png" /></li>
                <li><img src="/images/slider-icons/icon_set-17.png" /></li>
                <li><img src="/images/slider-icons/icon_set-16.png" /></li>
                <li><img src="/images/slider-icons/icon_set-15.png" /></li>
                <li><img src="/images/slider-icons/icon_set-14.png" /></li>
                <li><img src="/images/slider-icons/icon_set-13.png" /></li>
                <li><img src="/images/slider-icons/icon_set-12.png" /></li>
                <li><img src="/images/slider-icons/icon_set-11.png" /></li>
                <li><img src="/images/slider-icons/icon_set-10.png" /></li>
                <li><img src="/images/slider-icons/icon_set-09.png" /></li>
                <li><img src="/images/slider-icons/icon_set-08.png" /></li>
                <li><img src="/images/slider-icons/icon_set-07.png" /></li>
                <li><img src="/images/slider-icons/icon_set-06.png" /></li>
                <li><img src="/images/slider-icons/icon_set-05.png" /></li>
                <li><img src="/images/slider-icons/icon_set-04.png" /></li>
                <li><img src="/images/slider-icons/icon_set-03.png" /></li>
                <li><img src="/images/slider-icons/icon_set-02.png" /></li>
                <li><img src="/images/slider-icons/icon_set-01.png" /></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <OwlCarousel items={1} margin={0} autoplay={false} className="preview-detail-slider owl-theme" ref={refPreviewSlider} dots={true}>
        {games.map((item, index) => (
          <div className="detail-section" key={index}>
            {/* {item.image ?
              (
              <>
                <Image className="w-100 h-auto" width={620} height={1400} src={item.bg} alt=""/>
                <div className="image-phone">
                  <Image className="w-auto h-100" width={620} height={1400} src={item.image} alt=""/>
                </div>
              </>
              )
              :
              <Image className=" w-100 h-auto" width={620} height={1400} src={item.bg} alt=""/>
            } */}
            <Image className="w-auto h-100" width={620} height={1400} src={item.image} alt=""/>
            <div className="detail">
              <div className="d-flex">
                <div className="detail-icon">
                  <Image className="w-100 h-auto" width={620} height={620} src={item.icon} alt=""/>
                </div>
                <div className="detail-info d-flex justify-content-center flex-column">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
              <Link href={`/detail/${index}`} >
                <a className="btn rounded-pill" onClick={()=>{ $('.container').removeClass('status')}}>DETAIL</a>
              </Link>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  )

  return (
    <>
      <div className="list-page">
        <div role="button" className="log-out d-none">
          <i className="bi bi-box-arrow-right" style={{"fontSize": "13px"}}></i> Log out
        </div>
        <div className="row detail-wrapper position-relative">
          <h1>Titans Tech<br/>Game Library</h1>
          {games?
            <CarouselDetail/>
            :
            <div className="loader">Loading...</div>
          }
        </div>
        <div className="list-wrapper" ref={refListWrapper}>
          <div className="header header-title text-center py-3 px-0 hide">
            <h3>
              <a className="back" ref={refBackButton}>
                <i className="bi bi-chevron-left"></i>
              </a>
              Titans Tech Games
            </h3>
          </div>
          <div className="list-header">
            <h2 className="title">Titans Tech Games</h2>
            <a className="see-all" role="button" ref={refSeeAll}>See All</a>
          </div>

          <div className="list-group list-group-games" ref={refListGroupGame}>
            <ul className="list-group-inner">
              {games?
                games.map((item, index) => (
                  <li className="list-item list-group-item" key={index} ref={(ref) => refListGame.current[index] = ref}>
                    <div className="list-item-inner d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center align-items-center">
                        <div className="list-icon">
                          <Image className="w-100 h-auto" width={620} height={620} src={item.icon} alt="" />
                        </div>
                        <div className="list-desc">
                          <span>{index+1}</span>
                          <div className="d-flex flex-column">
                            <h3>{item.name}</h3>
                            <p>
                              <span>{item.description}</span>
                              <a role="button" href="#">More</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {item.link === '#' ? (
                        <Link href={item.link}>
                          <a className="btn btn-disabled btn-pill px-3">COMING <br /> SOON</a>
                        </Link>
                      ) : (
                        <Link href={item.link}>
                          <a className="btn btn-gray btn-pill">PLAY</a>
                        </Link>
                      )}
                   
                    </div>
                  </li>
                ))
                :
                <div className="loader">Loading...</div>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
