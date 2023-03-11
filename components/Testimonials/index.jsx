import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5
  }
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/5 ">
      <div className="container">
        <div className="container">
          <div className="">
            <div className="-mx-4 flex flex-wrap items-center ">
              <div className="w-full px-4 lg:w-1/3">
                {/* section */}
                <>
                  <div
                    className={`wow fadeInUp mx-auto w-full text-start `}
                    data-wow-delay=".1s"
                    style={{ marginBottom: "10px" }}
                  >
                    <h2
                      className="mb-4 text-3xl font-bold !leading-tight  sm:text-4xl md:text-[40px]"
                      style={{ color: "#3B3A3A" }}
                    >
                      Acceleration Process to Grow Your Business
                    </h2>
                    <p
                      className="text-body-primary text-base !leading-relaxed md:text-lg"
                      style={{ color: "#3B3A3A" }}
                    >
                      The main ‘thrust’ is to focus on educating attendees on
                      how to best protect highly vulnerable business
                      applications with interactive panel discussions and
                      roundtables.
                    </p>
                  </div>
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
                      <button
                        type="button"
                        class=" mr-2 mb-2 rounded-lg  bg-white px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 "
                        style={{
                          background:
                            "linear-gradient(-90deg, rgba(124,28,128,0.66 ) 0.00%,  #ff6057 100.00%)",
                          width: "178px",
                          height: "45px",
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "400"
                        }}
                      >
                        About us
                      </button>
                    </a>
                  </div>
                </>
                {/* section */}
              </div>

              <div className="w-[100%] w-full px-4 lg:w-2/3">
                <div
                  className="wow fadeInUp relative mx-auto flex aspect-[25/24]  max-w-[856px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  {/* div for time line  */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "10rem",
                      height: "100%"
                    }}
                  >
                    <div
                      style={{ backgroundColor: "#FF6057" }}
                      className=" m-2 mb-2 flex flex flex h-16 w-16
                  w-16 items-center justify-center rounded-full rounded-full text-primary
                  "
                    >
                      <p
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                          fontSize: "2.5rem"
                        }}
                      >
                        1
                      </p>
                    </div>
                    <div
                      style={{
                        height: "6rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        width: "0.4rem",
                        backgroundColor: "white",
                        borderRadius: "5px"
                      }}
                    />
                    <div
                      style={{ backgroundColor: "#FF6057" }}
                      className=" m-2 mb-2 flex flex flex h-16 w-16
                  w-16 items-center justify-center rounded-full rounded-full text-primary
                  "
                    >
                      <p
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                          fontSize: "2.5rem"
                        }}
                      >
                        2
                      </p>
                    </div>
                    <div
                      style={{
                        height: "6rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        width: "0.4rem",
                        backgroundColor: "white",
                        borderRadius: "5px"
                      }}
                    />
                    <div
                      style={{ backgroundColor: "#FF6057" }}
                      className=" m-2 mb-2 flex flex flex h-16 w-16
                  w-16 items-center justify-center rounded-full rounded-full text-primary
                  "
                    >
                      <p
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                          fontSize: "2.5rem"
                        }}
                      >
                        3
                      </p>
                    </div>
                  </div>
                  {/* div for content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <p>Market Research</p>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                  {/* -------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
