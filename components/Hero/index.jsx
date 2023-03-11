/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <img
        src="/images/hero/Path_30.png"
        alt="clip image"
        className="z-[-10] w-[100%] lg:w-[60%]"
        style={{ position: "absolute", top: "6rem" }}
      />

      <img
        src="/images/hero/Subtraction_1.png"
        alt="clip image"
        className="absolute left-[2rem] top-[6rem] z-[-1] w-[19%] lg:left-[2rem] lg:top-[6rem] lg:w-[16%]"
      />
      <img
        src="/images/hero/Subtraction_2.png"
        alt="clip image"
        // className="z-[-1] w-[13%] lg:w-[10%]"
        // style={{ position: "absolute", bottom: "-3rem", left: "-2rem" }}
        className="absolute left-[0rem] bottom-[28rem] z-[-1] w-[13%] lg:left-[-2rem] lg:bottom-[-2rem] lg:w-[10%]"
      />
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] xl:pt-[180px] 2xl:pt-[210px] "
      >
        <div className="absolute top-0 left-0 z-[-1] opacity-30 lg:opacity-100"></div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="-mx-4 flex w-[100%] flex-wrap items-center">
              {/* TEXT SECTION */}
              <div
                className="wow fadeInUp -mx-4 mx-auto w-full w-[90%] max-w-[700px] text-start lg:w-1/2 "
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  EVERYTHING TO
                  <br /> SELL ANYTHING
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color  dark:opacity-90 sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <Link
                  href="https://nextjstemplates.com/templates/startup"
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  GET STARTED
                </Link>
              </div>
              {/* IMAGE SECTION */}
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp w-900 relative relative mx-auto aspect-[27/24] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/images/hero/NoPath.png"
                    alt="laptop-image"
                    className=" absolute  w-[100%] lg:w-[100%]"
                  />
                  <img
                    src="/images/hero/NoPath.png"
                    alt="laptop-image"
                    className=" absolute left-[2rem] top-[0rem] z-[1] w-[100%] md:left-[2rem] md:top-[0rem] lg:left-[3rem]  lg:top-[0rem] lg:w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
