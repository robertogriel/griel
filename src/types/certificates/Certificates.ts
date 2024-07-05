export type CertificateTypes = {
  id: number
  name: string
  image: string
}

export type CertificateModalToOpenType = {
  certificateName?: string
  certificateImage?: string
  onClick?: () => void
}
