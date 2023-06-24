import qr from '../assets/qr-z.png';
import profile from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="font-poppins flex flex-col gap-4">
      <div className="flex gap-16 mx-6 justify-between">
        <h1 className="text-2xl lg:text-4xl text-custgreen font-semibold mt-24 decoration-custyellow underline underline-offset-8">
          About this Person
        </h1>
        <div className="border-[8px] border-custgreen w-[150px] p-2">
          <img src={qr} alt="qr" />
        </div>
      </div>
      <div className="bg-custyellow flex flex-col md:flex-row py-10 gap-8">
        <div className='flex flex-row mx-6 gap-8'>
          <div className=''>
            <img className='w-[250px]' src={profile} alt="profile" />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='text-custgreen font-bold text-xl flex flex-col md:flex-row md:flex-wrap gap-8 text-right '>
              <h1 className='md:w-1/2 text-2xl'>Zhayaa 20 y.o South Tangerang</h1>
            </div>
            <div className='text-white md:text-lg'>
              <h1 className='italic font-semibold'>A girl who loves :</h1>
              <p>fictional books</p>
              <p>england football players</p>
              <p>hotwheels and JDM cars</p>
              <p>EDM music</p>
            </div>
          </div>
        </div>
        <div className='mx-6 text-white md:text-lg flex flex-col justify-end'>
          <h1 className='italic font-semibold'>Recently Software Used :</h1>
          <p>Pro create, Adobe Illustrator,</p>
          <p>Photoshop, Figma, Sketch up</p>
        </div>
      </div>
    </div>
  );
};

export default About;
