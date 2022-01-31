import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../../utils';
import logo from '../../assets/images/logo.svg';
import logoMini from '../../assets/images/logo-mini.svg';
import { handleMenuOpen } from '../../redux/layout';
import navigation from '../../navigation';

export default function Sidebar() {
  const { menuHovering, menuOpen, sidebarOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const location = useLocation();

  const showFullWidth = menuHovering || menuOpen;
  const currentActiveLink = location.pathname;

  return (
    <>
      {(menuHovering || menuOpen) && !sidebarOpen ? (
        <div className="w-5 text-gray-600 absolute right-0 mt-1 mr-2">
          {menuOpen
            ? <HiChevronDoubleLeft className="cursor-pointer" onClick={() => dispatch(handleMenuOpen(false))} />
            : <HiChevronDoubleRight className="cursor-pointer" onClick={() => dispatch(handleMenuOpen(true))} />}
        </div>
      ) : null}
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-auto"
          src={showFullWidth ? logo : logoMini}
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.navLink}
              className={classNames(
                item.navLink === currentActiveLink ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 font-medium rounded-md',
                `${showFullWidth ? '' : 'justify-center'}`,
              )}
            >
              <item.icon
                className={classNames(
                  item.navLink === currentActiveLink ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 h-6 w-6',
                  `${showFullWidth ? 'mr-3' : ''}`,
                )}
                aria-hidden="true"
              />
              {showFullWidth ? item.title : null}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
