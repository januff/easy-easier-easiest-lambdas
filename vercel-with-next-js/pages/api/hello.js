// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { createClient } = require("@astrajs/collections");

export default async (req, res) => {
  const region = process.env.ASTRA_DB_REGION
  const name = req.query.name ?? "World"
  
  // create an Astra client  
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });
  
  res.status(200).json({ 
    body: `Hello ${name}. 
           Region: ${region}.
           Token: ${astraClient.restClient.applicationToken}.` 
          })
}