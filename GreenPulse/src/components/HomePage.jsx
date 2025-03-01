import '../components/css/HomePage.css';
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid3 from '../assets/vid3.mp4';
import vid4 from '../assets/vid4.mp4';

const HomePage = () => {
    return (
        <>
            <div className="w-[80%] h-[80vh] justify-center place-self-center gap-1 mt-16 flex-row overflow-hidden flex">
                <video src={vid1} autoPlay loop muted className='w-1/4 h-full video-rounded'></video>
                <video src={vid2} autoPlay loop muted className='w-1/4 h-full video-rounded'></video>
                <video src={vid3} autoPlay loop muted className='w-1/4 h-full video-rounded'></video>
                <video src={vid4} autoPlay loop muted className='w-1/4 h-full video-rounded'></video>
            </div>
        </>
    );
}

export default HomePage;