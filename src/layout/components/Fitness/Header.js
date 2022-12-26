/* eslint-disable no-unused-vars */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  HiOutlineBell,
  HiOutlineMenuAlt2,
  HiSearch,
} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '../../../utils';
import Logo from '../../../assets/images/Logo_Bike.svg';
import { handleSidebarOpen } from '../../../redux/layout';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    // temporary function just to see the UI functionality
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex items-center justify-between px-4 h-16 bg-white ">
      {/* ---icon---- */}
      <div className="flex items-center gap-2 ">
        <img src={Logo} alt="logo" className="h-12" />
        <span className="logo text-xl">GymBro</span>
      </div>
    </div>
  );
}
