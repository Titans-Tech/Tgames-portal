import '../public/styles/Home.module.css'
// import Link from 'next/link'
import Head from 'next/head'

const Header = ({seoTitle, seoDescription}) => {

  return(
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"/>

        {/* <!-- HTML Meta Tags --> */}
        <title>Titans Games</title>
        <meta name="description" content="Explore Titans Tech game hub where you can play and explore without any hassle. Whether you're into action, adventure, or strategy games, you'll definitely find something you like!"/>

        {/* <!-- Google / Search Engine Tags --> */}
        <meta name="name" content="Titans Games"/>
        <meta name="description" content="Explore Titans Tech game hub where you can play and explore without any hassle. Whether you're into action, adventure, or strategy games, you'll definitely find something you like!"/>
        <meta name="image" content="/images/titanstech.png"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://games.titans.id"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Titans Games"/>
        <meta property="og:description" content="Explore Titans Tech game hub where you can play and explore without any hassle. Whether you're into action, adventure, or strategy games, you'll definitely find something you like!"/>
        <meta property="og:image" content="https://dev.titans.id/cdn/titanstech.png"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Titans Games"/>
        <meta name="twitter:description" content="Explore Titans Tech game hub where you can play and explore without any hassle. Whether you're into action, adventure, or strategy games, you'll definitely find something you like!"/>
        <meta name="twitter:image" content="https://dev.titans.id/cdn/titanstech.png"/>

        {/* <!-- PWA Stuff --> */}
        <link rel="manifest" href="/manifest.json" />

        {/* <!-- iOS support --> */}
        <link rel="shortcut icon" href="/images/titanstech.png" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/images/titanstech.png"/>
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* <script>navigator.serviceWorker.register('js/service-worker.js')</script>  */}
        {/* <script src="/js/amplitude.js"></script> */}

        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/images/titanstech.png" />
        <script type="text/javascript">
            {(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "guj41zuzk4")};
        </script>
      </Head>
      {/* <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav> */}
    </>
  );
}

export default Header;