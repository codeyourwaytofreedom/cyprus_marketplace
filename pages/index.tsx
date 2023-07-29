import Head from 'next/head'
import Ads from '../components/Ads'
import Categories from '../components/Categories'
import TopBanner from '../components/TopBanner'
import Wrapper from '../components/Wrapper'


export default function Home() {
  return (
    <>
      <Wrapper pageTitle={'Marketplace - Cyprus'}>
          <Categories/>
      </Wrapper>
    </>
  )
}
