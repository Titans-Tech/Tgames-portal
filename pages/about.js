import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            ABOUT
          </h1>
          <p>This is about page! <Image src="/images/vercel.svg" width={100} height={25} alt=""/></p>
        </main>
      </div>
      <Footer/>
    </>
  )
}
