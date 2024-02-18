import { dates } from "../index.js";

export default async function handler(req, res) {
  const { slug } = request.query;

  if (!slug) {
    return;
  }

  if (request.method === "GET") {
    const place = await dates.findById(slug);
    return response.status(200).json(dates);
  }

  if (!dates) {
    return res.status(404).json({ message: "Date not found" });
  }

  res.status(200).json({ date: dates });
}
