#### AWS Lambdas: Vercel With Next.js  ####

<p></p>

#### Project Init ####

<p></p>

<pre><code>npx create-next-app vercel-with-next-js && cd $_</code></pre>

<p></p>

<pre><code>npm i -g vercel</code></pre>


<p></p>


<details closed>
  <summary><strong>1. Log Hello World</strong>
  </summary>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Vercel Docs: <a href="https://vercel.com/docs/serverless-functions/introduction#path-segments">Local Development</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <pre><code>npm run dev</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-run-dev.gif"/>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Next.js Docs: <a href="https://nextjs.org/docs/api-routes/introduction">API Routes</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-dev-3000.jpg"/>

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
        📖 Vercel Docs: <a href="https://nextjs.org/docs/deployment">Deployment</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-deploy-hello.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-deploy-hello.jpg"/>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>3. Pass URL Params</strong>
  </summary>

  <p></p>

  <strong><em>vercel-with-next-js > pages > api > hello.js</em></strong>
  <p></p>

  <pre><code>export default (req, res) => {
    const name = req.query.name ?? "World"
    res.status(200).json({ body: `Hello ${name}` })
  }</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-params-3000.jpg"/>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Vercel Docs: <a href="https://vercel.com/docs/serverless-functions/introduction#path-segments">Path Segments</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <strong><em>vercel-with-next-js > pages > api > hello > [name].js</em></strong>
  <p></p>

  <pre><code>export default function handler(req, res) {
    const { name } = req.query
    res.end(`Hello ${name} (v2)`)
  }</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-dev-hello-v2.jpg"/>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>4. Install NPM Packages</strong>
  </summary>

  <p></p>

  <pre><code>npm i @astrajs/collections</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-npm-i.gif"/>

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
        📖 Next.js Docs: <a href="https://nextjs.org/docs/basic-features/environment-variables">Environmental Variables</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <table>
    <thead>
      <tr><th>
        📖 Vercel Docs: <a href="https://vercel.com/docs/environment-variables">Environmental Variables</a>
      </th></tr>
    </thead>
  </table>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-env-local.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-env-local.jpg"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-env-restart.jpg"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-env-3000.jpg"/>

  <p></p>

</details>


<p></p>


<details closed>
  <summary><strong>6. Test Authentication</strong>
  </summary>

  <p></p>

  <pre><code>const { createClient } = require("@astrajs/collections");

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
}</code></pre>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-test-token.jpg"/>

</details>


<p></p>


<details open>
  <summary><strong>7. Deploy Authenticated</strong>
  </summary>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-env-web.gif"/>

  <p></p>

  <img style="border-radius:10px;max-width:520px" src="../assets/vercel-deploy-astra.jpg"/>

  <p></p>



</details>