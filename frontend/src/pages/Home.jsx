import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import WhatWeDo from '../components/WhatWeDo';
import PricingInfo from '../components/PricingInfo';
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div><Hero />
    <AboutUs />
    <WhatWeDo />
    <PricingInfo />
    <Banner />
    </div>
  )
}

export default Home;