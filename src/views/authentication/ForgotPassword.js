import { MailIcon } from '@heroicons/react/solid';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function ForgotPassword() {
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
            <div className="text-3xl font-bold">Forgot Password?</div>
            <div className="mt-1">Enter email to get confirmation mail</div>
          </div>
          <div className="my-10">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                className="form-input pl-10 py-4"
                placeholder="Email Address"
              />
            </div>
            <button className="btn btn-primary w-full justify-center py-3 mt-4">Send reset password code</button>
          </div>
          <Link to="/login">
            <div className="text-center text-sm justify-center items-center flex">
              <ArrowNarrowLeftIcon className="h-5 w-5 mr-2" />
              <span>Back to Sign In</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
