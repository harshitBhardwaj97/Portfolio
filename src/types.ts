export type technology = {
  aHref: string;
  imgSrc: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

export type certificate = {
  name: string;
  imgSrc?: string;
  alt?: string;
  url: string;
  description: string;
  publisher: string;
  certificateDetails?: string;
};
