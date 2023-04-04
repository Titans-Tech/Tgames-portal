import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Cookies from 'universal-cookie';
import {Howl, Howler} from 'howler';

const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => <p>Loading...</p>,
})

// const DynamicFooter = dynamic(() => import('../components/footer'), {
//   loading: () => <p>Loading...</p>,
// })

const LoginForm = dynamic(() => import('../components/loginForm'), {
  loading: () => <p>Loading...</p>,
})

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import '../public/styles/bootstrap.min.css';
import '../public/styles/bootstrap-icons.min.css';
import '../public/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const cookies = new Cookies();
  
  var bgm = new Howl({
    src: '/sfx/bgm.mp3',
    loop: true,
    volume: 0.5
  });

  var clicked = new Howl({
    src: '/sfx/select.mp3',
    loop: false
  });

  var swipe = new Howl({
    src: '/sfx/swipe.mp3',
    loop: false
  });

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/1eWrw8DgvNw5Rv6XXaBpncM0Okr4JuAjl6r2SHS28Px0/gviz/tq?&sheet=Sheet1")
    .then(response => response.text())
    .then(data => {
  
      //Remove additional text and extract only JSON:
      const jsonData = JSON.parse(data.substring(47).slice(0, -2));
      var dataUsername = jsonData.table.rows[1].c[0].v;
      var dataPassword = jsonData.table.rows[1].c[1].v;
  
      if(cookies.get('username') === dataUsername && cookies.get('password') === dataPassword){
        setLoggedIn(true)
        $('.log-out').removeClass('d-none');
      }else{
        $('.container-home').fadeIn();
      }

      bgm.play();

      $('.btn, a[href], *[data-bs-toggle], *[data-bs-dismiss]').on('click', function(){
        clicked.play();
      });

      var firstSwipe = false;
      $('.owl-carousel').on('refresh.owl.carousel', function(e) {
        firstSwipe = false;
        $('.owl-carousel').trigger('to.owl.carousel', 0)
      });

      $('.owl-carousel').on('changed.owl.carousel', function(e) {
        if(e.item.index !== 0){
          firstSwipe = true;
        }

        if(firstSwipe){
          swipe.play();
        }
      });

      $('.log-out').on('click', function(){
        cookies.remove('username');
        cookies.remove('password');
        setLoggedIn(false);
      });
      
      $('.form-login').on('submit', function(e){
        var username = $('.username').val();
        var password = $('.password').val();

        e.preventDefault();

        fetch("https://docs.google.com/spreadsheets/d/1eWrw8DgvNw5Rv6XXaBpncM0Okr4JuAjl6r2SHS28Px0/gviz/tq?&sheet=Sheet1")
          .then(response => response.text())
          .then(data => {

            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(data.substring(47).slice(0, -2));
            var dataUsername = jsonData.table.rows[1].c[0].v;
            var dataPassword = jsonData.table.rows[1].c[1].v;

            if(username === dataUsername && password === dataPassword){
              var expiredCookies = new Date().getTime()+1000000;
              $('.error-form').addClass('d-none');
              setLoggedIn(true)
              cookies.set('username', dataUsername, expiredCookies);
              cookies.set('password', dataPassword, expiredCookies);
            }else{
              $('.error-form').removeClass('d-none');
              console.log($('.error-form'));
            }
          })
        })
      })
  })

  return(
    <>
      <DynamicHeader seoTitle="Titans Games Hub" seoDescription="Titans Games"/>
        {loggedIn ?
          (
            <div className="container">
              <Component {...pageProps} />
            </div>
          )
          :
          (
            <div className="container container-home">
              <LoginForm/>
            </div>
          )
        }
      {/* <DynamicFooter/> */}
    </>
  )
}

export default MyApp
