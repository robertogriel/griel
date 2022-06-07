import { NextApiRequest, NextApiResponse } from "next"
import connect from '../../utils/database'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const post = async () => {
        const { db } = await connect();

        const response = await db.collection('list').insertOne({
            id: 2,
            name: 'Teste'
        });

        const lastId = response.insertedId;

        console.log(await db.collection('list').findOne({ _id: lastId }))

        res.status(200).json(response.insertedId)
    }

    switch (req.method) {
        case 'POST':
            post();
            break;
    }

}

export default handler;