import Image from 'next/image';
import Cloud from '/public/images/13.webp';

const ImageAnimationOpacity = () => {
    return (
        <div>
            <Image src={Cloud} alt='loading......?'/>
        </div>
    );
};

export default ImageAnimationOpacity;