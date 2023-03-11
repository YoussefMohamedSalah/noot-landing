const SingleFeature = ({ feature }) => {
  const { id, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div
          style={{ backgroundColor: "aqua" }}
          className=" m-2 mb-2 flex flex flex h-16 w-16
        w-16 items-center justify-center rounded-full rounded-full text-primary
        "
        >
          <p
            style={{ color: "white", fontWeight: "bolder", fontSize: "2.5rem" }}
          >
            {id}
          </p>
        </div>
        <div style={{ width: "max-content" }}>
          <p
            className="text-base !leading-relaxed  md:text-lg"
            style={{ color: "#3B3A3A" }}
          >
            Ecommerce made ae
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
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
