/* eslint-disable no-unused-vars */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Fitness/Sidebar';
import Header from './components/Fitness/Header';
import { handleMenuHover, handleSidebarOpen } from '../redux/layout';

function FitnessLayout({ children }) {
  const { sidebarOpen, menuHovering, menuOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={() => dispatch(handleSidebarOpen(false))}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => dispatch(handleSidebarOpen(false))}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <HiX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <Sidebar />
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className=" flex flex-col flex-1 transition-padding transition-slowest ease z-20">
        <Header />
        <main className="flex-1">
          <div className="py-6">
            {/* can use below showing history */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div> */}
            <div className="max-w-auto mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FitnessLayout;
