const { createClient } = require("@astrajs/collections");

exports.handler = async (event) => {

    // create an Astra client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda! process.env.ASTRA_DB_REGION: ${process.env.ASTRA_DB_REGION}. Params or event: ${JSON.stringify(event.queryStringParameters || event)}, astraClient: ${JSON.stringify(astraClient)}`),
    }
    return response 
}
