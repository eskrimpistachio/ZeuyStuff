import artwork1 from '../assets/artwork1.jpg';
import artwork2 from '../assets/artwork2.jpg';
import artwork3 from '../assets/artwork3.jpg';
import artwork4 from '../assets/artwork4.jpg';
import artwork5 from '../assets/artwork5.jpg';
import artwork6 from '../assets/artwork6.jpg';
import qr from '../assets/qr-artwork.png';

const Artwork = () => {
  return (
    <div className="bg-white font-poppins flex gap-8 p-4 flex-wrap rounded-3xl my-8 mx-4">
      <img className="w-[250px]" src={artwork1} alt="artwork" />
      <img className="w-[250px]" src={artwork2} alt="artwork" />
      <img className="w-[250px]" src={artwork3} alt="artwork" />
      <img className="w-[350px]" src={artwork4} alt="artwork" />
      <img className="w-[250px]" src={artwork5} alt="artwork" />
      <img className="w-[250px]" src={artwork6} alt="artwork" />
      <div className="w-[150px] flex flex-col gap-2">
        <img src={qr} alt="qr" />
        <h3 className="text-custyellow text-sm font-semibold">Some artwork i already made</h3>
      </div>
    </div>
  );
};

export default Artwork;
