import { HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import { useState } from 'react';

function ResetPassword() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

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
            <div className="text-3xl font-bold">Set new password!</div>
            <div className="mt-1">Enter new password</div>
          </div>
          <div className="my-10">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiLockClosed className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type={showPassword1 ? 'text' : 'password'}
                className="form-input pl-10 py-4 pr-10"
                placeholder="Enter password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword1
                  ? <HiEyeOff className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword1(false)} />
                  : <HiEye className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword1(true)} />}
              </div>
            </div>
            <div className="my-4 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiLockClosed className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type={showPassword2 ? 'text' : 'password'}
                className="form-input pl-10 py-4 pr-10"
                placeholder="Confirm password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword2
                  ? <HiEyeOff className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword2(false)} />
                  : <HiEye className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setShowPassword2(true)} />}
              </div>
            </div>
            <button className="btn btn-primary w-full justify-center py-3">Save & Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
