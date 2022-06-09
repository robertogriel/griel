
import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/database/mongodb";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

   const { List } = await connect()

   res.status(200).json(await List.find({}))

}

export default handler;