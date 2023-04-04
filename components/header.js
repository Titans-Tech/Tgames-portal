import '../public/styles/Home.module.css'
// import Link from 'next/link'
import Head from 'next/head'

const Header = ({seoTitle, seoDescription}) => {

  return(
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/images/favicon.ico" />
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