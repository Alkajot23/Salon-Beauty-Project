import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import WhatWeDo from '../components/WhatWeDo';
import PricingInfo from '../components/PricingInfo';

const Home = () => {
  return (
    <div><Hero />
    <AboutUs />
    <WhatWeDo />
    <PricingInfo />
    </div>
  )
}

export default Home;