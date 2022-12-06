import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/database/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const get = async () => {
    const { MenuList } = await connect();

    res.status(200).json(await MenuList.find({}));

    return res.send(MenuList);
  };

  const { method } = req;

  switch (method) {
    case "GET":
      await get();
      break;

    default:
      await get();
  }
};

export default handler;
