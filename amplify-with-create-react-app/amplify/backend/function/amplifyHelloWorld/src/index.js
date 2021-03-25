exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda! Params or event: ${JSON.stringify(event.queryStringParameters || event)}`),
    }
    return response 
}
