### AWS Lambdas: <code>Netlify With Create React App</code>  ###

<p></p>

#### Project Init ####

<p></p>

<pre><code>npm install netlify-cli -g</code></pre>

<p></p>

<table>
  <thead>
    <tr><th>
      📖 Official Netlify Docs: <a href="https://docs.netlify.com/cli/get-started/#installation">Installation</a>
    </th></tr>
  </thead>
</table>

<p></p>

<pre><code>npx create-react-app netlify-with-create-react-app && cd $_</code></pre>

<p></p>

<details closed>
  <summary><strong>1. Log Hello World</strong>
  </summary>

  <p></p>

  <pre><code>netlify init</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-init.gif"/>

  <p></p>

  <!-- <pre><code>netlify functions:create hello-world</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-functions-error.gif"/>

  <p></p> -->

  <img style="border-radius:10px;max-width:420px" src="../assets/netlify-functions-folder.gif"/>

  <p></p>

  <pre><code>netlify functions:create hello-world</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-functions-create.gif"/>

  <p></p>

  <pre><code>netlify dev</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-dev-8888.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-dev-hello.png"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-dev-200.gif"/>

  <p></p>

  <table>
    <thead>
      <tr><th>
        ⚠️ Something is already running on port xxxx.
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        <code>killall node</code> 
      </td></tr>
    </tbody>
  </table>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://docs.netlify.com/cli/get-started/#get-started-with-netlify-dev">Get started with Netlify Dev</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://docs.netlify.com/functions/build-with-javascript/">Build serverless functions with JavaScript</a>
      </th></tr>
    </thead>
  </table>

  <p></p>
  
  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://functions.netlify.com/playground/#hello%2C-world!">Playground: Hello, World!</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://cli.netlify.com/commands/functions#functionscreate">functions:create</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>2. Deploy Hello World</strong>
  </summary>

  <p></p>

  <pre><code>netlify deploy</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-deploy-hello.png"/>

  <p></p>

  <table>
    <thead>
      <tr><th>
        ⚠️ Error: No such directory <br>› Did you forget to run a build?
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        Set your Directory to Deploy as blank or "." during init, or through the web dashboard in Site Settings: Build & Deploy.
      </td></tr>
    </tbody>
  </table>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://docs.netlify.com/functions/configure-and-deploy/">Configure and deploy Functions</a>
      </th></tr>
    </thead>
  </table>

  <p></p>


</details>


<p></p>


<details closed>
  <summary><strong>3. Pass URL Params</strong>
  </summary>

  <p></p>

  <pre><code>exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello ${name}`,
  };
};</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-params.png"/>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://functions.netlify.com/playground/#hello%2C-%7Bname%7D">Playground: Hello, {name}</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>4. Install NPM Packages</strong>
  </summary>

  <p></p>

  <pre><code>npm i @astrajs/collections</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-npm-i.gif"/>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>5. Set Env Values</strong>
  </summary>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-env-folder.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-dev-restart.jpg"/>

  <p></p>

  <pre><code>const handler = async (event) => {
  try {
    const region = process.env.ASTRA_DB_REGION
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello, ${subject}. Region: ${region}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}</code></pre>

  <p></p>

  <pre><code>netlify dev</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-env-8888.jpg"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-env-web.gif"/>
  
  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Official Netlify Docs: <a href="https://docs.netlify.com/configure-builds/environment-variables/#declare-variables">Environmental Variables</a>
      </th></tr>
    </thead>
  </table>

  <p></p>


</details>


<p></p>


<details closed>
  <summary><strong>6. Test Token</strong>
  </summary>

  <p></p>

  <pre><code>const { createClient } = require("@astrajs/collections");

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

module.exports = { handler }</code></pre>

<p></p>

<img style="border-radius:10px;max-width:520px" src="../assets/netlify-test-token.jpg"/>

<p></p>

</details>


<p></p>


<details closed>
  <summary><strong>7. Deploy Authenticated</strong>
  </summary>

  <p></p>

  <pre><code>netlify deploy</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-deploy-final.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/netlify-deploy-final.jpg"/>

  <p></p>

  <!-- <table>
    <thead>
      <tr><th>
        ⚠️ Error: @astrajs/rest: baseUrl required for initialization
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        Not yet sure what's happening here.
      </td></tr>
    </tbody>
  </table> -->

  <p></p>

  <!-- <table>
    <thead>
      <tr><th>
        ⚠️ TimeoutError: Task timed out after 10.00 seconds
      </th></tr>
    </thead>
    <tbody>
      <tr><td>
        Simplify your function or try Netlify's <a href="https://docs.netlify.com/functions/background-functions/">Background Functions</a>.
      </td></tr>
    </tbody>
  </table> -->

</details>

