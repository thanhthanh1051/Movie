import IconRating from "../assets/rating.png";
import IconRatingHaft from "../assets/rating-half.png";
import Temp from "../assets/temp-1.jpeg";
import PlayButton from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-cover
    bg-center bg-no-repeat relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30">
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className="flex flex-col space-y-4 items-baseline w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-white text-md py-2 px-3">TV show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3xl text-[40px] font-bold">Tom and Jery</h2>
                        <div className="flex items-center space-x-4">
                            <img src={IconRating} alt="rating" className="w-8 h-8"/>
                            <img src={IconRating} alt="rating" className="w-8 h-8"/>
                            <img src={IconRating} alt="rating" className="w-8 h-8"/>
                            <img src={IconRating} alt="rating" className="w-8 h-8"/>
                            <img src={IconRatingHaft} alt="rating haft" className="w-8 h-8"/>
                        </div>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting,</p>
                        <div className="flex items-center justify-start space-x-4">
                            <button className="text-white bg-black py-2 px-3 font-bold text-sm">Chi tiết</button>
                            <button className="text-white bg-red-600 py-2 px-3 font-bold text-sm">Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[300px] h-[400px] relative group cursor-pointer">
                        <img src={Temp} alt="Image"
                        className="w-full h-full object-cover"/>
                        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={PlayButton} alt="play"
                            className="w-16 h-16 relative z-20"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner