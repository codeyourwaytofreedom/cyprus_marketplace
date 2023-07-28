import Head from 'next/head'
import TopBanner from '../components/TopBanner'
import Wrapper from '../components/Wrapper'


export default function Home() {
  return (
    <>
      <Wrapper pageTitle={'Marketplace - Cyprus'}>
          <TopBanner/>
      </Wrapper>
    </>
  )
}
