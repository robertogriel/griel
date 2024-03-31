import { NextApiRequest, NextApiResponse } from "next";

const hander = async (req: NextApiRequest, res: NextApiResponse) => {
  const { DOMAIN_CHECK_API } = process.env;

  await fetch(`${DOMAIN_CHECK_API}?d=${req.query.q}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.res) {
        throw new Error(
          "Não foi possível fazer a consulta de disponibilidade. Tente novamente mais tarde."
        );
      }

      return res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
};

export default hander;
