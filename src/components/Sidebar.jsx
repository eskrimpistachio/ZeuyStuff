import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <ul className="rotate-[270deg] flex gap-2 left-[60vw] md:left-[70vw] absolute lg:left-[55vw] xl:left-[65vw] top-[50vh] md:text-xl">
      <Link
        to="/exhibition/artwork"
        className={`text-white bg-custgreen px-6 py-4 flex w-full mb-10 ${
          location === '/exhibition/artwork' ? 'rotate-90' : ''
        }`}
      >
        Artwork
      </Link>
      <Link
        to="/exhibition/book"
        className={`text-white bg-custgreen px-6 py-4 flex w-full mb-10 ${
          location === '/exhibition/book' ? 'rotate-90' : ''
        }`}
      >
        Book
      </Link>
      <Link
        to="/exhibition"
        className={`text-white bg-custgreen px-6 py-4 flex w-full mb-10 ${
          location === '/exhibition' ? 'rotate-90' : ''
        }`}
      >
        Exhibition
      </Link>
    </ul>
  );
};

export default Sidebar;
