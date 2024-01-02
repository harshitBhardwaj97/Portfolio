import { certificate } from "../types";

const CertificateCard = ({
  name,
  url,
  imgSrc,
  alt,
  description,
  publisher,
  certificateDetails,
}: certificate) => {
  return (
    <div
      className="max-w-sm bg-bgPrimaryDark text-white/90 border-[0.5px] border-pink-400 rounded-lg text-center shadow-md hover:scale-105 hover:border-pink-700 hover:shadow-pink-700 group hover:shadow-s ease-in-out duration-200 cursor-pointer"
      key={url}
    >
      <a href={url} target="_blank">
        <img className="object-fill rounded-t-lg" src={imgSrc} alt={alt} />
      </a>
      <div className="p-3 border-t-2 border-pink-500">
        <a href={url} target="_blank">
          <h3 className="mb-2 text-[16px] md:text-2xl font-bold tracking-tight text-pink-500 p-1">
            <span className="duration-200 ease-in-out group-hover:text-pink-700 group-hover:border-b-[1px] group-hover:border-b-white">
              {name}
            </span>
          </h3>
          <a href={certificateDetails} target="_blank">
            <h5 className="mb-2 text-[14px] md:text-xl">
              Offered by :{" "}
              <span className="duration-75 ease-in-out hover:text-pink-500 hover:border-b-[1px] hover:border-b-white">
                {publisher}
              </span>
            </h5>
          </a>
        </a>
        <p className="mb-2 font-normal p-3 text-[15px] md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
