import {
  HiUser, HiLockClosed, HiEye, HiEyeOff,
} from 'react-icons/hi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // temporary login function, just to see the UI
    localStorage.setItem('token', '______');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className="text-3xl font-bold">Welcome Back!</div>
            <div className="mt-1">Sign In to Get Started</div>
          </div>
          <div className="my-10">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="form-input pl-10 py-4"
                placeholder="Username"
              />
            </div>
            <div className="my-4 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiLockClosed className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input pl-10 py-4 pr-10"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword
                  ? <HiEyeOff className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword(false)} />
                  : <HiEye className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword(true)} />}
              </div>
            </div>
            <button onClick={handleLogin} className="btn btn-primary w-full justify-center py-3">Sign In</button>
          </div>
          <div className="text-center text-sm font-bold text-red-500">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
