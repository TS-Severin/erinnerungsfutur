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
  } else if (request.method === "DELETE") {
    console.log("testslug: ", slug);
    const entries = await Entry.findOneAndDelete({ slug });
    console.log("entrieslog: ", entries);
    response.status(260).json("Eintrag gelöscht");
    return response.status(200).json(entries);
  } else if

    (request.method === "PUT") {
    const entry = await Entry.findOne({ slug }); // Find the entry by slug
    if (!entry) {
      return response.status(404).json({ error: "Entry not found" });
    }

    entry.set(request.body);


    await entry.save();

    return response.status(200).json({ status: "Eintrag wurde bearbeitet." });
  }
}


