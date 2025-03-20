import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../components/css/Carousel.css';
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid3 from '../assets/vid3.mp4';
import vid4 from '../assets/vid4.mp4';

const Carousel = () => {
    const videos = [
        { src: vid1, info: { deaths: "10,000", injured: "50,000", latest: "2025-02-28", next: "2025-03-15" } },
        { src: vid2, info: { deaths: "10,000", injured: "50,000", latest: "2025-02-28", next: "2025-03-15" } },
        { src: vid3, info: { deaths: "10,000", injured: "50,000", latest: "2025-02-28", next: "2025-03-15" } },
        { src: vid4, info: { deaths: "10,000", injured: "50,000", latest: "2025-02-28", next: "2025-03-15" } }
    ];

    return (
        <div className="w-[90%] md:w-[80%] mx-auto mt-5 lg:mt-10">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 }
                }}
                // navigation
                pagination={{ clickable: false }}
                autoplay={{ delay: 4000 }}
                loop
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className="video-container shadow-lg">
                            <video src={video.src} autoPlay loop muted className="video"></video>
                            {video.info && (
                                <div className="overlay flex flex-col p-4">
                                    <p className="text-left text-lg md:text-xl lg:text-2xl">
                                        Total Deaths: {video.info.deaths}
                                    </p>
                                    <p className="text-left text-lg md:text-xl lg:text-2xl">
                                        Total Injured: {video.info.injured}
                                    </p>
                                    <p className="text-left text-lg md:text-xl lg:text-2xl">
                                        Latest Earthquake: {video.info.latest}
                                    </p>
                                    <p className="text-left text-lg md:text-xl lg:text-2xl">
                                        Next Prediction: {video.info.next}
                                    </p>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel ;
