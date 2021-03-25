exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda! process.env.ASTRA_DB_REGION: ${process.env.ASTRA_DB_REGION}. Params or event: ${JSON.stringify(event.queryStringParameters || event)}`),
    }
    return response 
}
