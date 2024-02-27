import dbConnect from "../../../../db/connect";
import Entry from "../../../../db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();
  const { slug } = request.query;

  if (request.method === "GET") {
    const entry = await Entry.findOne({ slug });

    if (!entry) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(entry);
  }
}