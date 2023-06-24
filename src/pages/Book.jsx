import qr from '../assets/sirius.png';
import apos from '../assets/aposth.png';

const Book = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-8 font-poppins gap-8 md:mt-16 py-24">
      <div className="flex flex-col bg-white w-[300px] md:w-[350px] rounded-3xl px-4 mt-2 mx-auto">
        <div className="bg-custgreen rounded-3xl p-4 mt-4">
          <img className="my-2" src={qr} alt="qr" />
        </div>
        <div className="my-2">
          <h1 className="text-2xl font-bold text-custgreen">Sirius Book</h1>
          <h3 className="text-custgreen font-medium">Scan Here</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-16 mt-8">
        <img className='w-[20px]' src={apos} alt="apos" />
        <h3 className="text-white font-semibold text-lg lg:text-2xl  italic">
          When darkness and solitude is the most comfortable room you've ever
          been in
        </h3>
        <h3 className="text-white text-lg">
          Read my biography novels, and let you overwhelm into it.
        </h3>
        <h3 className="flex justify-end text-white text-lg">-Zhu</h3>
      </div>
    </div>
  );
};

export default Book;
