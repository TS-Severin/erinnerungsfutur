// import dates from "../index.js";

// export default async function handler(req, res) {
//   const { slug } = req.query;
//   try {
//     if (req.method === "GET") {
//       const date = await dates.findById(slug);
//       if (!date) {
//         return res.status(404).json({ status: "Not Found" });
//       }
//       return res.status(200).json(date);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

import { dates } from "../index.js";

export default function handler(req, res) {
  const { slug } = req.query;
  const date = dates.find((date) => date.slug === slug);
  console.log("req method: ", req.method);
  if (!date) {
    response.status(404).json({ status: "not found" });
    return;
  }
  res.status(200).json(date);
}