// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const region = process.env.ASTRA_DB_REGION
  const name = req.query.name ?? "World"
  res.status(200).json({ 
    body: `Hello ${name}. Region is ${region}` })
}