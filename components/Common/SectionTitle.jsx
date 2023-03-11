const SectionTitle = ({
  title,
  paragraph,
  width = "680px",
  center,
  mb = "100px"
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className="mb-4 text-3xl font-bold !leading-tight  sm:text-4xl md:text-[40px]"
          style={{ color: "#6DC45E" }}
        >
          {title}
        </h2>
        <p className="text-body-primary text-base !leading-relaxed md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
