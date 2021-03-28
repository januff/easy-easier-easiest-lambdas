export default function handler(req, res) {
  const { name } = req.query
  res.end(`Hello ${name} (v2)`)
}
