import spotify from '../assets/spotify.png';
import pinterest from '../assets/pinterest.png';
import wattpad from '../assets/wattpad.png';

const Home = () => {
  return (
    <section className="bg-greenbg bg-cover h-full md:h-[90vh] font-poppins flex flex-col gap-8 md:gap-4 md:px-16">
      <div className="flex flex-col md:flex-row mt-16 lg:mr-16 mx-auto md:justify-end gap-12 md:gap-6 ">
        <a className='hover:scale-110' href="https://open.spotify.com/user/sia5qg6admkyzbkkw9cu7nizr">
          <div className="bg-white w-[200px] h-[250px] rounded-3xl pt-1">
            <div className="bg-[#1DB954] m-2 w-[185px] h-[160px] rounded-3xl">
              <img className="py-8 px-6" src={spotify} alt="spotify" />
            </div>
            <h1 className="font-bold text-2xl my-6 mx-4 text-custgreen">
              Spotify
            </h1>
          </div>
        </a>
        <a className='hover:scale-110' href="https://id.pinterest.com/zhaayaya/">
          <div className="bg-white w-[200px] h-[250px] rounded-3xl pt-1">
            <div className="bg-[#E60023] m-2 w-[185px] h-[160px] rounded-3xl">
              <img
                className="py-8 px-8 w-3/4 mx-auto"
                src={pinterest}
                alt="pinterest"
              />
            </div>
            <h1 className="font-bold text-2xl my-6 mx-4 text-custgreen">
              Pinterest
            </h1>
          </div>
        </a>
        <a className='hover:scale-110' href="https://www.wattpad.com/user/abhatiarunika">
          <div className="bg-white w-[200px] h-[250px] rounded-3xl pt-1">
            <div className="bg-[#FF500A] m-2 w-[185px] h-[160px] rounded-3xl">
              <img className="py-8 px-6" src={wattpad} alt="wattpad" />
            </div>
            <h1 className="font-bold text-2xl my-6 mx-4 text-custgreen">
              Wattpad
            </h1>
          </div>
        </a>
      </div>
      <div className="px-16 py-8 lg:w-1/2 text-white flex flex-col gap-4">
        <h1 className="italic font-medium text-lg">Recently used</h1>
        <p className="font-medium text-sm">
          Enjoy more playlist on spotify to add your mood while stu
          <span className="text-custyellow">dying</span>. Explore more ideas on
          p<span className="text-custyellow">interesting</span>. Read more
          fictional or non fictional book as yourself reward on wattpad
        </p>
      </div>
    </section>
  );
};

export default Home;
