const { createClient } = require("@astrajs/collections");

const handler = async (event) => {
  try {
    const region = process.env.ASTRA_DB_REGION
    // create an Astra client
    
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: `Hello, ${subject}. 
                  Region: ${region}.
                  Astra Token: ${astraClient.restClient.applicationToken}.` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
