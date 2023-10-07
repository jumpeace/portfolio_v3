import Title from '@/components/title.jsx';
import Works from '@/components/works.jsx';
import Footer from '@/components/footer.jsx';
import NavBar from '@/components/navBar';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jumpei Kawahara</title>
      </Head>
      <Title/>
      <Works/>
      <Footer/>
      <NavBar />
    </main>
  )
}
