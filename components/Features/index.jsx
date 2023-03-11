import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Features = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="align-self-start w-full gap-1 px-4 lg:w-1/3">
              <SectionTitle
                title="GROW YOUR BUSINESS ONLINE"
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="0px"
              />

              <div className="wow fadeInUp " data-wow-delay=".15s">
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

            <div className="w-full px-4 lg:w-2/3">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
              >
                {/* first */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
                  {featuresData.map((feature) => (
                    <SingleFeature key={feature.id} feature={feature} />
                  ))}
                </div>
                {/* second */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
                  {/* third */}
                  <div className="w-full pt-16">
                    <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div
                        style={{ backgroundColor: "#65C063" }}
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
                      <div style={{ width: "max-content" }}>
                        <p
                          className="text-base !leading-relaxed  md:text-lg"
                          style={{ color: "#3B3A3A" }}
                        >
                          Market your business
                        </p>
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "#06B7B7",
                            height: "0.4rem",
                            borderRadius: "10px",
                            marginBottom: "1.2rem",
                            marginTop: "1.2rem"
                          }}
                        />
                      </div>

                      <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        Fully Customizable
                      </h3>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        Tuae nam ex similique incidunt expedita exerci tationem
                        laudantium. Repellendus quisquam numquam perferendis
                        earum sapiente non tempore? Fugit repellat ut maiores.
                      </p>
                    </div>
                  </div>

                  {/* fourth */}
                  <div className="w-full">
                    <div
                      className="wow fadeInUp flex h-[100%]"
                      data-wow-delay=".15s"
                    >
                      <h3
                        style={{ alignSelf: "flex-end" }}
                        className="align-self-end mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        <a href="#0" style={{ color: "#06B7B7" }}>
                          <div className="flex">
                            GET STARTED &nbsp; &nbsp; &nbsp;{" "}
                            <FaLongArrowAltRight
                              style={{ alignSelf: "center", width: "2rem" }}
                            />
                          </div>
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* --------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
