exports.handler = async (event) => {
    const params = event.queryStringParameters
    console.log(params)
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda! Params are ${params}`),
    }
    return response 
}
