import { MongoClient, Db, Collection, Document } from "mongodb";
import clientPromise from "./mongo-client";

export async function getDatabase(dbName: string): Promise<Db> {
  const client: MongoClient = await clientPromise;
  return client.db(dbName);
}

export async function getCollection<T extends Document>(
  dbName: string,
  collectionName: string
): Promise<Collection<T>> {
  const client: MongoClient = await clientPromise;
  return client.db(dbName).collection<T>(collectionName);
}
