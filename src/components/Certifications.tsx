import { certifications } from "../data";
import CertificateCard from "./CertificateCard";

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
            <CertificateCard key={certificate.url} {...certificate} />
          ))}
        </div>
      </div>
      <div className="border-b-[0.5px] border-pink-500"></div>
    </>
  );
};

export default Certifications;
