import clientPromise from "@/app/lib/mongo-client";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const collection = db.collection("movies");
  const docs = await collection.find({}).limit(5).toArray();

  return Response.json({ ok: true, docs });
}
