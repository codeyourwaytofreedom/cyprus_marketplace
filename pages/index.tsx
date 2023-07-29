import Head from 'next/head'
import Ads from '../components/Ads'
import Categories from '../components/Categories'
import Home_Page_Display from '../components/Display'
import TopBanner from '../components/TopBanner'
import Wrapper from '../components/Wrapper'


export default function Home() {
  return (
    <>
      <Wrapper pageTitle={'Marketplace - Cyprus'}>
        <div style={{display:"flex"}}>
          <Categories/>
          <Home_Page_Display/>
          <Ads/>
        </div>
      </Wrapper>
    </>
  )
}
