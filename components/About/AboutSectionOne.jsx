import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center ">
            <div className="h-[100%] w-full px-4 lg:w-1/3">
              {/* section */}
              <div style={{ paddingTop: "2rem", alignSelf: "top" }}>
                <div
                  style={{
                    width: "4rem",
                    backgroundColor: "#FF6057",
                    height: "0.4rem",
                    borderRadius: "10px",
                    marginBottom: "1.2rem",
                    marginTop: "1.2rem"
                  }}
                />
                <div
                  className={`wow fadeInUp mx-auto w-full text-start `}
                  data-wow-delay=".1s"
                  style={{ marginBottom: "10px" }}
                >
                  <h2
                    className="mb-4 text-3xl font-bold !leading-tight  sm:text-4xl md:text-[40px]"
                    style={{ color: "#3B3A3A" }}
                  >
                    Best platform for the Technologies Era
                  </h2>
                  <p
                    className="text-body-primary text-base !leading-relaxed md:text-lg"
                    style={{ color: "#3B3A3A" }}
                  >
                    The main ‘thrust’ is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables.
                  </p>
                </div>
                <div
                  className="text-1xl sm:text-1xl mx-[-12px] mb-4
                flex flex-wrap p-2  md:text-[20px]
                "
                >
                  <a
                    href="#0"
                    style={{ color: "#FF6057" }}
                    className="flex  text-sm text-body-color transition hover:bg-opacity-100 hover:text-white"
                  >
                    Learn about our success! &nbsp; &nbsp; &nbsp;{" "}
                    <FaLongArrowAltRight
                      style={{ alignSelf: "center", width: "2rem" }}
                    />
                  </a>
                </div>
              </div>
              {/* section */}
            </div>

            <div className="w-[100%] w-full px-4 lg:w-2/3">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24]  max-w-[856px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/hero/NoPath_3.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-h-[571px] max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
