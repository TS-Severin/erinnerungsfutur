import { entries } from "../../assets/data.js"
export default function handler(req, res) {
  res.status(200).json(entries);
}
