/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutSectionTwo = () => {
  return (
    <section className="">
      <div className="w-[99%]">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto  aspect-[25/24] max-w-[900px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/hero/NoPath_2.png"
                alt="about image"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w-full p-2 px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9 w-[100%]">
                <div
                  style={{
                    width: "4rem",
                    backgroundColor: "#06B7B7",
                    height: "0.4rem",
                    borderRadius: "10px",
                    marginBottom: "1.2rem",
                    marginTop: "1.2rem",
                  }}
                />

                <SectionTitle
                  title="Create A Website"
                  paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                  mb="0px"
                />
                <p className="text-body-primary text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div
                  className="text-1xl sm:text-1xl mx-[-12px] mb-4
                flex flex-wrap p-2  md:text-[20px]
                "
                >
                  <a
                    href="#0"
                    style={{ color: "#06B7B7" }}
                    className="flex  text-sm text-body-color transition hover:bg-opacity-100 hover:text-white"
                  >
                    Learn about our success! &nbsp; &nbsp; &nbsp;{" "}
                    <FaLongArrowAltRight
                      style={{ alignSelf: "center", width: "2rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
