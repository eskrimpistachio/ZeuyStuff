import qr from '../assets/qr-artsteps.png';

const Exhibition = () => {
  return (
    <div className="flex flex-col pt-6 mb-16 md:mb-32 md:flex-row md:mx-8 font-poppins gap-8 md:mt-16">
      <div className="flex flex-col  bg-white w-[300px] md:w-[285px] rounded-3xl px-4 mt-4 mx-auto">
        <div className="bg-custgreen rounded-3xl py-2 px-4 mt-4">
          <img className="my-2 w-[180px]" src={qr} alt="qr" />
        </div>
        <div className="my-2">
          <h1 className="text-2xl font-bold text-custgreen">Artsteps</h1>
          <h3 className="text-custgreen font-medium">Scan Here</h3>
        </div>
      </div>
      <div>
        <h3 className="text-center mx-8 md:mt-36 text-white font-medium md:font-semibold text-lg lg:text-2xl lg:w-3/4">
          Enjoy virtual Sirius Exhibition with the extraordinary work of art{' '}
          <a
            className="text-custgreen hover:underline"
            href="https://www.artsteps.com/view/63ca9d9462b14cea87d18ba2 "
          >
            here
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Exhibition;
