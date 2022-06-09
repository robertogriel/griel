
import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/database/mongodb";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

   const get = async ()=>{
      const { List } = await connect()
   
      res.status(200).json(await List.find({}))
   }

   const { method } = req;

   switch(method) {
      case 'GET':
         await get();
      break;

      default:
         await get();
   }


}

export default handler;