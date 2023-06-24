import { Link, useLocation } from 'react-router-dom';
import thunder from '../assets/thunder.png';
import { useState } from 'react';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const location = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-6 flex flex-row justify-between font-poppins my-2">
        <a href="/">
          <div className="text-custgreen text-5xl flex flex-row">
            <div className="flex flex-col">
              <h1 className="font-bold">Zeuy</h1>
              <h3 className="text-3xl">Stuff</h3>
            </div>
            <img className="h-[55px] mt-4" src={thunder} alt="thunder" />
          </div>
        </a>
        <div className="flex-row gap-16 text-lg text-custgreen font-semibold hidden md:flex">
          <Link
            to="/"
            className={` flex w-full mb-10 ${
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
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl cursor-pointer md:hidden text-custgreen"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
      </div>
      <NavbarMobile open={open} />
    </>
  );
};

export default Navbar;
