import { Banner } from "@/components/Banner"
import BestDeals from "@/components/BestDeals"
import Footer from "@/components/Footer"
import NewReleased from "@/components/NewReleased"
import Test from "@/components/Test"


const MainPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner />
      <BestDeals />
      <NewReleased />
      <Footer />
    </div>
  )
}

export default MainPage