import { entries } from "../../../../assets/data.js";

export default function handler(request, response) {
  const { slug } = request.query;

  if (!slug) {
    return;
  }

  const date = entries.find((date) => date.slug === slug);

  if (!date) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json( date );
}