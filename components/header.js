import '../public/styles/Home.module.css'
// import Link from 'next/link'
import Head from 'next/head'

const Header = ({seoTitle, seoDescription}) => {

  return(
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0,viewport-fit=cover"/>
        <meta name='apple-mobile-web-app-capable' content='yes'></meta>
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent'></meta>
        {/* <!-- Google / Search Engine Tags --> */}
        <meta name="name" content="PixieLab Games"/>
        <meta name="description" content={seoDescription}/>
        <meta name="image" content="/images/pixielab.png"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://games.pixielab.id"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="PixieLab Games"/>
        <meta property="og:description" content={seoDescription}/>
        <meta property="og:image" content="/images/pixielab.png"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="PixieLab Games"/>
        <meta name="twitter:description" content={seoDescription}/>
        <meta name="twitter:image" content="/images/pixielab.png"/>

        {/* <!-- PWA Stuff --> */}
        <link rel="manifest" href="/manifest.json" />

        {/* <!-- iOS support --> */}
        <link rel="shortcut icon" href="/images/pixielab.png" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/images/pixielab.png"/>
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* <script>navigator.serviceWorker.register('js/service-worker.js')</script>  */}
        {/* <script src="/js/amplitude.js"></script> */}

        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/images/pixielab.png" />
        <script id="ms_clarity" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "guj41zuzk4");`}}
        />
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