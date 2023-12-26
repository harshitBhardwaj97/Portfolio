import { certifications } from "../data";

const Certifications = () => {
  return (
    <>
      <div
        id="certifications"
        className="flex flex-col items-center justify-center w-full max-w-5xl px-4 py-24 mx-auto mb-3 text-white"
      >
        <div className="pb-2 font-bold tracking-tight border-b-4 border-pink-500 heading md:text-2xl">
          Certifications
        </div>
        <div className="info text-[14px] md:text-xl">
          From past some time, apart from my work, I have been dedicating my
          energy to enhance my knowledge and skills, and although certificates
          are not necessary to showcase your competency,{" "}
          <span className="mark">
            they still might prove as a good standard for showcasing your
            commitment and efforts towards the decided goal
          </span>
          .
          <br />
          So that's why I have been trying to do relevant certifications to keep
          up with the fast-paced tech industry.
        </div>
        <br />
        <div className="flex flex-col grid-cols-2 gap-6 certificates md:grid">
          {certifications.map((certificate) => (
            <div
              className="max-w-sm bg-bgPrimaryDark text-white/90 border-[0.5px] border-pink-400 rounded-lg text-center shadow-md hover:scale-105 hover:border-pink-700 hover:shadow-pink-700 group hover:shadow-s ease-in-out duration-200 cursor-pointer"
              key={certificate.url}
            >
              <a href={certificate.url} target="_blank">
                <img
                  className="object-fill rounded-t-lg"
                  src={certificate.imgSrc}
                  alt={certificate.alt}
                />
              </a>
              <div className="p-3 border-t-2 border-pink-500">
                <a href={certificate.url} target="_blank">
                  <h3 className="mb-2 text-[16px] md:text-2xl font-bold tracking-tight text-pink-500 p-1 duration-100 ease-in-out group-hover:text-pink-700 group-hover:border-b-[1px] group-hover:border-b-white">
                    {certificate.name}
                  </h3>
                  <h5 className="mb-2 text-[14px] md:text-xl">
                    Offered by : {certificate.publisher}
                  </h5>
                </a>
                <p className="mb-2 font-normal p-3 text-[15px] md:text-xl">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-[0.5px] border-pink-500"></div>
    </>
  );
};

export default Certifications;
