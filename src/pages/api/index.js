import dbConnect from "../../../db/connect";
import Entry from "../../../db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const entries = await Entry.find();
    return response.status(200).json(entries);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
