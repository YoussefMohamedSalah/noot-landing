/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";
import { display } from "@mui/system";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 pt-10">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="flex w-full "
            style={{ justifyContent: "space-evenly" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#FF6057",
                  fontSize: "46px",
                  fontWeight: "700",
                  lineHeight: "72px",
                }}
              >
                570
              </h3>
              <p
                style={{
                  color: "#3B3A3A",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                downloads
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#FF6057",
                  fontSize: "46px",
                  fontWeight: "700",
                  lineHeight: "72px",
                }}
              >
                570
              </h3>
              <p
                style={{
                  color: "#3B3A3A",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Active User
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#FF6057",
                  fontSize: "46px",
                  fontWeight: "700",
                  lineHeight: "72px",
                }}
              >
                570
              </h3>
              <p
                style={{
                  color: "#3B3A3A",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Positive Feedback
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#FF6057",
                  fontSize: "46px",
                  fontWeight: "700",
                  lineHeight: "72px",
                }}
              >
                570
              </h3>
              <p
                style={{
                  color: "#3B3A3A",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                + rating
              </p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row ">
            <div className="w-[100%] w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp w-900 relative mx-auto flex aspect-[27/24] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div
                  style={{
                    width: "95%",
                    height: "65%",
                    backgroundColor: "white",
                    alignSelf: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3rem",
                    }}
                  >
                    <img
                      src="/images/hero/shutterstock_45.png"
                      alt="shape"
                      style={{
                        width: "157px",
                        height: "203px",
                        marginRight: "1.5rem",
                      }}
                    />
                    <div>
                      <h5
                        style={{
                          paddingBottom: "1rem",
                          color: "#3B3A3A",
                          fontSize: "24px",
                        }}
                      >
                        Florrie Jacobs
                      </h5>
                      <h6
                        style={{
                          paddingBottom: "1rem",
                          color: "#8F8F8F",
                          fontSize: "16px",
                        }}
                      >
                        CEO of Company
                      </h6>
                      <h6 style={{ color: "#8F8F8F", fontSize: "16px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur aperiam illo doloribus ab molestias
                        perspiciatis?
                      </h6>
                      <div style={{ display: "flex", paddingTop: "1rem" }}>
                        <img
                          src="/images/hero/Imetro-star.png"
                          alt="shape"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        <img
                          src="/images/hero/Imetro-star.png"
                          alt="shape"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        <img
                          src="/images/hero/Imetro-star.png"
                          alt="shape"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        <img
                          src="/images/hero/Imetro-star.png"
                          alt="shape"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        <img
                          src="/images/hero/Imetro-star.png"
                          alt="shape"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    Grow Your Business and Join Our Happy Users
                  </h2>
                  <p
                    className="text-body-primary text-base !leading-relaxed md:text-lg"
                    style={{ color: "#3B3A3A" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet
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
                        fontWeight: "400",
                      }}
                    >
                      About us
                    </button>
                  </a>
                </div>
              </>
              {/* section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
