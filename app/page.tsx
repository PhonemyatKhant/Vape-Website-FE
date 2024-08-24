import { Banner } from "@/components/Banner"
import BestDeals from "@/components/BestDeals"


const MainPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner />
      <BestDeals />
    </div>
  )
}

export default MainPage