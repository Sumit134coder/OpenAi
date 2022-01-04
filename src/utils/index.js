const isUserLoggedIn = () => localStorage.getItem('token');

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export { isUserLoggedIn, classNames };
