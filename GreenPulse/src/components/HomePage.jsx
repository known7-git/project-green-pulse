import '../components/css/HomePage.css';
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid3 from '../assets/vid3.mp4';
import vid4 from '../assets/vid4.mp4';

const HomePage = () => {
    return (
        <>
            <div className="w-[80%] h-full place-self-center gap-3 mt-16 flex-row flex scale-80">
                <div className="video-container">
                    <video src={vid1} autoPlay loop muted className='video'></video>
                    <div className="overlay flex flex-col">
                        <p className='text-left p-4 text-2xl motion-preset-slide-right motion-'>Total Deaths: 10,000</p>
                        <p className='text-left p-4 text-2xl '>Total Injured: 50,000</p>
                        <p className='text-left p-4 text-2xl '>Latest Earthquake: 2025-02-28</p>
                        <p className='text-left p-4 text-2xl '>Next Prediction: 2025-03-15</p>
                    </div>
                </div>
                <div className="video-container">
                    <video src={vid2} autoPlay loop muted className='video'></video>
                    <div className="overlay"></div>
                </div>
                <div className="video-container">
                    <video src={vid3} autoPlay loop muted className='video'></video>
                    <div className="overlay"></div>
                </div>
                <div className="video-container">
                    <video src={vid4} autoPlay loop muted className='video'></video>
                    <div className="overlay"></div>
                </div>
            </div>
        </>
    );
}

export default HomePage;