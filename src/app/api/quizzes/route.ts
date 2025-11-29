import { getDatabase } from "@/lib/mongo/utils";

export async function GET() {
  const db = await getDatabase("sample_mflix");
  const collection = db.collection("movies");

  const docs = await collection.find({}).limit(5).toArray();

  return Response.json({ ok: true, docs });
}
