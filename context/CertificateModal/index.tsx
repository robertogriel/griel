import { createContext, ReactNode, useContext, useState } from "react";

type CertificateContextType = {
  open: boolean;
  certName: string;
  certImage: string;
  setOpen: (open: boolean) => void;
  setCertName: (name: string) => void;
  setCertImage: (image: string) => void;
};

const CertificateModelContext = createContext<CertificateContextType>({
  open: false,
  certName: "",
  certImage: "",
  setOpen: () => {},
  setCertImage: () => {},
  setCertName: () => {},
});

export default function CertificateModelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState<any>(false);
  const [certName, setCertName] = useState("");
  const [certImage, setCertImage] = useState("");

  return (
    <CertificateModelContext.Provider
      value={{ open, certName, certImage, setOpen, setCertImage, setCertName }}
    >
      {children}
    </CertificateModelContext.Provider>
  );
}

export function useCertificateModal() {
  const context = useContext(CertificateModelContext);

  if (!context) {
    throw new Error("Esse método só pode ser invocado pelo contexto do model");
  }

  return context;
}
