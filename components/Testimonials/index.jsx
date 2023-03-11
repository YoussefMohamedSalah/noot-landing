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
    <section className="relative z-10 ">
      <div className="container">
        <div>
          <div className="flex flex-col items-center">
            <div className="-mx-4 flex flex-wrap items-center ">
              <div className="w-full px-4 lg:w-1/2">
                {/* section */}
                <>
                  <div
                    className={`wow fadeInUp mx-auto w-full text-start `}
                    data-wow-delay=".1s"
                    style={{ marginBottom: "10px", paddingRight: "5rem" }}
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
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet
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

              <div className="w-full px-4 lg:w-1/2">
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
                      height: "50vh"
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
                      justifyContent: "space-between",
                      alignItems: "start",
                      width: "100%",
                      height: "50vh",
                      paddingTop: "1rem"
                    }}
                  >
                    <div>
                      <p style={{ color: "#3B3A3A" }}>Market Research</p>
                      <p style={{ color: "#8F8F8F" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                    {/* --- */}
                    <div>
                      <p style={{ color: "#3B3A3A" }}>Market Research</p>
                      <p style={{ color: "#8F8F8F" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                    {/* ---- */}
                    <div>
                      <p style={{ color: "#3B3A3A" }}>Market Research</p>
                      <p style={{ color: "#8F8F8F" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                    {/* ---- */}
                  </div>
                  {/* -------------- */}
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-[315px] "
              style={{ alignSelf: "center" }}
            >
              <h3
                className="pt-[7rem] text-bold bold"
                style={{
                  color: "#3B3A3A",
                  fontSize: "38px",
                  
                  lineHeight: "49px"
                }}
              >
                Don&apos;t Just Take our Word for it!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
