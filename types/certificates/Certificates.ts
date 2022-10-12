export type CertificateTypes = {
  _id?: string;
  name: string;
  image: string;
};

export type CertificateModalToOpenType = {
  certificateName?: string;
  certificateImage?: string;
  onClick?: () => void;
};
