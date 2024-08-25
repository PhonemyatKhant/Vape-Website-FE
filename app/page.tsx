import Banner from "@/components/banner/Banner"
import BestDeals from "@/components/BestDeals"
import { BigCarousel } from "@/components/bigCarousel/BigCarousel"
import Footer from "@/components/Footer"
import ItemsShowCase from "@/components/ItemsShowCase"
import NewReleased from "@/components/NewReleased"
import Test from "@/components/Test"


const MainPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Banner />
      <BestDeals />
      <NewReleased />
      <BigCarousel />
      <ItemsShowCase title='Devices' image='/img_vape_1.png' desc='Find the best for you here' />
      <Footer />
      
    </div>
  )
}

export default MainPage