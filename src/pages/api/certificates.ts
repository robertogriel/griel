import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/database/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const get = async () => {
    const { CertificateList } = await connect()

    const json = await CertificateList.find({})

    res.send(json)
    res.status(200)
    res.end()

    return res.status(200)
  }

  const { method } = req

  switch (method) {
    case 'GET':
      await get()
      break

    default:
      await get()
  }
}

export default handler
