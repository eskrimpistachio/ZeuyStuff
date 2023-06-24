import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Content = () => {

  return (
    <div className="font-poppins flex bg-yellowbg mr-16 md:mr-32 lg:mr-[320px] rounded-tr-3xl bg-cover ">
      <div className="">
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
};

export default Content;
