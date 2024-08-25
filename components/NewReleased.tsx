import Button from './Button'
import Image from 'next/image'

const NewReleased = () => {
  return (
    <section
      className="mb-[45px] overflow-hidden text-center max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto"
      id="best-deals"
    >
      <div className="mb-[30px]">
        <h2 className="text-4xl sm:text-5xl font-bold pb-1">
          <span className="text-red-500">New</span> Released
        </h2>
        <h3 className="text-base sm:text-lg">Try Our Latest Flavor Here</h3>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-[6px] mb-[20px] sm:grid-cols-2 lg:grid-cols-4">
        {[
          { bg: 'bg-customYellow', img: '/img_yellow_vape.png' },
          { bg: 'bg-customRed', img: '/img_pink_vape.png' },
          { bg: 'bg-customBlue', img: '/img_blue_vape.png' },
          { bg: 'bg-customGreen', img: '/img_green_vape.png' },
        ].map(({ bg, img }, index) => (
          <div
            key={index}
            className={`${bg}  overflow-hidden cursor-pointer text-white w-full h-[178px] rounded-[10px] col-span-1 relative`}
          >
            <div className={`absolute bottom-0 z-40 left-0 text-start p-3 sm:p-4 max-w-[70%] sm:max-w-[80%] ${bg}-shadow`}>
              <p className="text-xs sm:text-sm font-medium leading-tight sm:leading-normal">
                Strawberry Yogurt with Refreshing Flavor Nic 3 Percent
              </p>
              <p className="text-xs sm:text-sm mt-1">30,000 MMK</p>
            </div>
            <Image
              src={img}
              alt="Disposable"
              width={150}
              height={150}
              style={{ objectFit: 'contain', right: '-20px' }}
              className="absolute right-0 bottom-0 sm:right-[-20px]"
            />
          </div>
        ))}
      </div>

      <Button
        className="w-full sm:w-[240px] py-[6px] bg-customGrey rounded-[15px] text-lg sm:text-base"
        text="View More &rsaquo;"
      />
    </section>
  )
}

export default NewReleased
