"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
const SigninPage = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <>
      <section
        className={`relative z-10 overflow-hidden  pt-36 lg:pt-[140px] ${styles.bgImg}`}
      >
        <div className="container">
          <div className="relative z-50 -mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md py-10 px-6  sm:p-[60px]">
                <form>
                  <div className="mb-8 flex h-[56px] items-center rounded-[30px]  px-4  shadow-one   dark:bg-[#555555] dark:shadow-signUp">
                    <label htmlFor="email">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>

                    <input
                      ref={inputRef}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Username"
                      className="h-full  w-full border-transparent  bg-transparent px-3  text-sm text-white outline-none placeholder:text-[#eee] focus:border-primary focus-visible:shadow-none "
                    />
                  </div>
                  <div className="mb-8 flex h-[56px] items-center  rounded-[30px]  px-4  shadow-one   dark:bg-[#555555] dark:shadow-signUp">
                    <label htmlFor="password">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="h-full w-full  border-transparent  bg-transparent px-3  text-sm text-white outline-none placeholder:text-[#eee] focus:border-primary focus-visible:shadow-none "
                    />
                  </div>
                  <div className="mb-6">
                    <button className="flex w-full  items-center justify-center rounded-[30px] bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Sign in
                    </button>
                  </div>
                  <div className="mb-6">
                    <button className="mb-6 flex w-full items-center justify-center rounded-[30px] bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#555555] dark:text-[#eee] dark:shadow-signUp dark:hover:text-white">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_95:967)">
                            <path
                              d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                              fill="#4285F4"
                            />
                            <path
                              d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                              fill="#34A853"
                            />
                            <path
                              d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                              fill="#EB4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_95:967">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Sign in with Google
                    </button>
                  </div>
                  <div className="mb-8 flex flex-col items-center justify-between sm:flex-row ">
                    <div className="mb-4 flex sm:mb-0">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 after:border-gray-300 dark:border-gray-600  bg-logged-btn peer h-5 w-10 rounded-full after:absolute after:top-0.5 after:left-[4px] after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                        <span className=" ml-3 text-sm font-semibold capitalize text-body-color ">
                          Keep Logged In
                        </span>
                      </label>
                    </div>
                    <div>
                      <a
                        href="#0"
                        className="text-sm font-medium text-body-color hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?
                  <Link
                    href="/signup"
                    className="mx-2 text-primary hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
