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


  <img style="border-radius:10px" src="../assets/amplify-init.gif"/>


  <p></p>


  <pre><code>amplify add function</code></pre>


  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>


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


  <img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>


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


  <img style="border-radius:10px" src="../assets/amplify-add-api.gif"/>


  <p></p>


  <pre><code>amplify push</code></pre>


  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-push.gif"/>


  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-hello.png"/>


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


<details open>
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

<pre>
<code>exports.handler = async (event) => {
    const params = event.queryStringParameters
    console.log(params)
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda! Params are ${JSON.stringify(params)}`),
    }
    return response 
}</code>
</pre>

<p></p>

<pre><code>amplify mock function amplifyHelloWorld --event src/event.json</code></pre>

<p></p>


<img style="border-radius:10px" src="../assets/amplify-mock-undefined.gif"/>

<p></p>


<table>
  <thead>
    <tr><th>
      ⚠️ Params are undefined
    </th></tr>
  </thead>
  <tbody>
    <tr><td>
      <a href="https://github.com/aws-amplify/amplify-cli/issues/6384">Possibly a new bug.</a>
    </td></tr>
  </tbody>
</table>



<p></p>


<pre><code>amplify push</code></pre>


<p></p>


<img style="border-radius:10px" src="../assets/params.gif"/>


<p></p>

  <p></p>


<img style="border-radius:10px" src="../assets/amplify-params.jpg"/>


<p></p>

</details>


<p></p>


<details closed>
<summary><strong>4. Install NPM Packages</strong>
</summary>

<p></p>

<em>Details in progress.</em>

<p></p>

</details>

<p></p>


<details closed>
<summary><strong>5. Set Env Values</strong>
</summary>

<p></p>

<em>Details in progress.</em>

<p></p>

</details>

<p></p>


<details closed>
<summary><strong>6. Test Token</strong>
</summary>

<p></p>

<em>Details in progress.</em>

<p></p>

</details>

<p></p>


<details closed>
<summary><strong>7. Deploy Authenticated</strong>
</summary>

<p></p>

<em>Details in progress.</em>

<p></p>

</details>