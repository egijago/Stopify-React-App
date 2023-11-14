import {useRef,FormEvent} from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    const cardNumber = useRef<HTMLInputElement>(null);
    const validUntill = useRef<HTMLInputElement>(null);
    const security = useRef<HTMLInputElement>(null);
    const cardHolderName = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
        <div className="pt-32 p-12 md:pt-40 md:pb-20 bg-sky-700">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Subscribe to Stopify Creator</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confrim Password</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your confirm password" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Card Number</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your card number" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Valid Untill</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your CC Valid card" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Security</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your Security Card" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Card Holder Name</label>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your Card Holder Name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-slate-300 hover:bg-slate-500 w-full">Sign Up</button>
                </div>
              </div>
            </form>

            <div className="text-gray-600 text-center mt-6">
              Have an account? <a href="/login">Sign in</a>
            </div>
          </div>

        </div>
      </div>
    );

}

export default Register;