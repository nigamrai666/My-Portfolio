import myPhoto from '../assets/my_photo.png';
import '../App.css';

function Box2() {
    return (
        <>
            <div>
                {/* <h1 className='photo_heading'>My Photo</h1> */}
                <img src={myPhoto} className='my_photo' alt="Description of the image" />
            </div>
        </>
    );
}

export default Box2;
