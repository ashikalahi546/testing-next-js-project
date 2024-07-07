import Image from 'next/image';
import Img from '/public/images/16.png';

const ImageAnimation = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen updown-animation'>
            <Image src={Img} alt=''/>
        </div>
    );
};

export default ImageAnimation;