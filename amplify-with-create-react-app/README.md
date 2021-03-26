#### AWS Lambdas: Amplify CLI With Create React App  ####

<p></p>

#### Project Init ####

<p></p>

<pre><code>npx create-react-app amplify-with-create-react-app && cd $_</code></pre>

<p></p>

<pre><code>npm i -g @aws-amplify/cli</code></pre>


<p></p>


<details closed>
  <summary><strong>1. Log Hello World</strong>
  </summary>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Amplify Docs: <a href="https://docs.amplify.aws/cli/start/workflows">Initialize new project</a>
      </th></tr>
    </thead>
  </table>

  <p></p>


  <pre><code>amplify init</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-init.gif"/>


  <p></p>


  <pre><code>amplify add function</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-add-function.gif"/>


  <p></p>



  <table>
    <thead>
      <tr><th>
        ⚠️ Template format error: Resource name is non alphanumeric.
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        All names must be lowercase or camelCase. 
      </td></tr>
    </tbody>
  </table>


  <p></p>


  <pre><code>amplify mock function amplifyHelloWorld</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-mock-function.gif"/>


  <p></p>


</details>


<p></p>


<details closed>
  <summary><strong>2. Deploy Hello World</strong>
  </summary>


  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Amplify Docs: <a href="https://docs.amplify.aws/cli/restapi#create-a-rest-api">Create a REST API</a>
      </th></tr>
    </thead>
  </table>

  <p></p>


  <pre><code>amplify add api</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-add-api.gif"/>


  <p></p>


  <pre><code>amplify push</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-push.gif"/>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-hello.png"/>


  <p></p>


  <table>
    <thead>
      <tr><th>
        ⚠️ { "message:" : "Missing Authentication Token"}
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        Don't forget to add your route segment to url!
      </td></tr>
    </tbody>
  </table>


  <p></p>


</details>


<p></p>


<details closed>
  <summary><strong>3. Pass URL Params</strong>
  </summary>
  

  <p></p>


  <table>
    <thead>
      <tr><th>
        📖 Amplify Docs: <a href="https://docs.amplify.aws/lib/restapi/fetch/q/platform/js#accessing-query-parameters--body-in-lambda-proxy-function">Accessing query parameters & body in Lambda proxy function</a>
      </th></tr>
    </thead>
  </table>


  <p></p>


  <pre><code>exports.handler = async (event) => {
      const response = {
          statusCode: 200,
          body: JSON.stringify(`Hello from Lambda! Params or event: ${JSON.stringify(event.queryStringParameters || event)}`),
      }
      return response 
  }</code></pre>


  <p></p>


  <pre><code>amplify mock function amplifyHelloWorld --event src/event.json</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-mock-event.gif"/>


  <p></p>


  <table>
    <thead>
      <tr><th>
        ⚠️ Params are undefined
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        Use the event object from your local event.json to mock event.queryStringParameters. Alternately, set manually <a href="https://docs.amplify.aws/cli/restapi/testing#test-the-api-with-amplify-mock">like so</a>.
    </tbody>
  </table>


  <p></p>


  <pre><code>amplify push</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/params.gif"/>


  <p></p>


  <img style="border-radius:10px;max-width:520px" src="../assets/amplify-test-params.png"/>


  <p></p>


  <img style="border-radius:10px;max-width:520px" src="../assets/amplify-test-event.png"/>


  <p></p>


</details>


<p></p>


<details closed>

  <summary><strong>4. Install NPM Packages</strong>
  </summary>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-npm.gif"/>


  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>5. Set Env Values</strong>
  </summary>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Amplify Docs: <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-config">Configuring environment variables</a>
      </th></tr>
    </thead>
  </table>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-env-dash.png"/>


  <p></p>


  <pre><code>exports.handler = async (event) => {
      const response = {
          statusCode: 200,
          body: JSON.stringify(`Hello from Lambda! process.env.ASTRA_DB_REGION: ${process.env.ASTRA_DB_REGION}. Params or event: ${JSON.stringify(event.queryStringParameters || event)}`),
      }
      return response 
  }</code></pre>


  <p></p>


  <table>
    <thead>
      <tr><th>
        📖 Amplify Docs: <a href="https://docs.amplify.aws/cli/usage/mock#function-mock-environment-variables">Function mock environment variables</a>
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
      You can also override any mock environment variables in a .env file within the function directory (ie. &lt;project root&gt;/amplify/backend/function/&lt;function name&gt;/.env).</td>
      </tr>
    </tbody>
  </table>


  <p></p>


  <pre><code>ASTRA_DB_ID=18d8558b-e01c-4b5e-bb1b-f6ef05a81218
  ASTRA_DB_REGION=us-east-1
  ASTRA_DB_APPLICATION_TOKEN=AstraCS:NsivximNmFmseTaPjXaaxkWo:c13bcf62ab3a158b73ab1e1ad5ce69d8bde6d437e6f361abd5beea3974cfd9b6</code></pre>


  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-env-mock.gif"/>


  <p></p>


  <pre><code>amplify push</code></pre>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-env-test.png"/>


  <p></p>


</details>


<p></p>


<details open>
  <summary><strong>6. Test Token</strong>
  </summary>

  <p></p>

  <pre><code>const { createClient } = require("@astrajs/collections");

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
  }</code></pre>

  <p></p>


  <pre><code>amplify mock function amplifyHelloWorld --event src/event.json</code></pre>

  <p></p>


  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-mock-astra.gif"/>


  <p></p>
  

</details>


<p></p>


<details open>
  <summary><strong>7. Deploy Authenticated</strong>
  </summary>

  <p></p>

  <pre><code>amplify push</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:720px" src="../assets/amplify-deploy-astra.png"/>


  <p></p>


</details>