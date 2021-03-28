// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const name = req.query.name ?? "World"
  res.status(200).json({ body: `Hello ${name}` })
}
