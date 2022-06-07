import { Db, MongoClient } from 'mongodb';

interface ConnectType {
    db: Db;
    client: MongoClient;
}

const url: string = process.env.MONGODB_URL ? process.env.MONGODB_URL : '';

const client = new MongoClient(url)
let cachedDb: Db;

export default async function connect(): Promise<ConnectType> {

    if (!cachedDb) await client.connect();

    const db = client.db('menu');

    cachedDb = db;

    return { db, client }

}