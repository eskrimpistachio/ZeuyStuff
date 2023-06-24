import { Link, useLocation } from 'react-router-dom';

const NavbarMobile = ({ open }) => {
  const location = useLocation().pathname;

  return (
    <div>
      {open && (
        <div className="text-center ease-in text-white bg-custgreen font-semibold font-poppins flex flex-col gap-8 py-8 absolute h-[50vh] w-full z-10">
          <div className='mx-6'>
            <ul
              className={`lg:hidden flex flex-col text-2xl justify-evenly gap-8 z-[-1]`}
            >
              <Link
                to="/"
                className={`flex w-full mb-10 ${
                  location === '/'
                    ? 'text-custyellow decoration-custyellow underline underline-offset-8 decoration-4'
                    : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/exhibition"
                className={`flex w-full mb-10 ${
                  location.includes('/exhibition')
                    ? 'text-custyellow decoration-custyellow underline underline-offset-8 decoration-4'
                    : ''
                }`}
              >
                Pages
              </Link>
              <Link
                to="/about"
                className={`flex w-full mb-10 ${
                  location === '/about'
                    ? 'text-custyellow decoration-custyellow underline underline-offset-8 decoration-4'
                    : ''
                }`}
              >
                About
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
