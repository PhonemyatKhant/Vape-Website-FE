import Banner from "@/components/banner/Banner"
import BestDeals from "@/components/BestDeals"
import { BigCarousel } from "@/components/bigCarousel/BigCarousel"
import Footer from "@/components/Footer"
import ItemsShowCase from "@/components/ItemsShowCase"
import NewReleased from "@/components/NewReleased"


const MainPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Banner />
      <BestDeals />
      <NewReleased />
      <BigCarousel />
      <ItemsShowCase title='Devices' image='/img_vape_1.png' desc='Find the best for you here' />
      <ItemsShowCase title='Pods' image='/img_vape2.png' desc='Variety of choices available' />
      <ItemsShowCase title='Disposible' image='/img_vape3.png' desc='Easy, clean, and superb flavor' />
      <Footer />
      
    </div>
  )
}

export default MainPage