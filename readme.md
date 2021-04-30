# AWS Lambdas: Easy, Easier, Easiest 🍳 #
## Step-by-step serverless functions using Amplify, Netlify, and/or Vercel. ##

<strong>“Where AWS becomes overkill are typical JAMstack apps. A static site with lots of frontend logic. Hosting those on AWS is a pain whereas Netlify and Vercel make them a core feature.”</strong> -Swizec Teller, *AWS, Vercel, Netlify, or Firebase?* ([Serverless Handbook, Feb 2021](https://serverlesshandbook.dev/serverless-flavors/))

Back in the day, using AWS Lambdas in your Jamstack app could be a pain indeed (eg. [for me, last year](https://joeyanuff-33180.medium.com/6-tricks-for-simpler-cloud-cv-1036b99ac791).) But these days Amazon's <code><strong>Amplify CLI</strong></code> has greatly simplified Lambda configuration, while <code><strong>Netlify</strong></code> and <code><strong>Vercel</strong></code> offer workflows that make Lambda setup even simpler. 

This repo collects step-by-step deployment instructions for all three platforms. Where the steps occur on a web dashboard or a CLI, I've included screencast GIFs to illustrate the interaction. (In a [companion essay on _Medium_](), I appraise the platforms for a comic book translation app I'm developing.) 

### AWS Lambda Quickstarts ⏲️ ###


<code><strong>Amplify CLI With Create React App</strong></code>

<p></p>

📔 <a href="amplify-with-create-react-app">Amplify Step-by-Step</a> ➡️

<a href="datastax-serverless-db"></a>

<p></p>

<table>
  <thead>
    <tr><th>
      📖 Official Amplify Docs: <a href="https://docs.amplify.aws/cli/function">Functions Overview</a>
    </th></tr>
  </thead>
</table>

<p></p>


<code><strong>Netlify With Create React App</strong></code>  

<p></p>

📔 <a href="netlify-with-create-react-app">Netlify Step-by-Step</a> ➡️

<p></p>

<table>
  <thead>
    <tr><th>
      📖 Official Netlify Docs: <a href="https://www.netlify.com/products/functions/">Netlify Functions</a>
    </th></tr>
  </thead>
</table>

<p></p>

<code><strong>Vercel With Next.js</strong></code>

<p></p>

📔 <a href="vercel-with-next-js">Vercel Step-by-Step</a> ➡️

<p></p>

<table>
  <thead>
    <tr><th>
      📖 Official Vercel Docs: <a href="https://vercel.com/docs/serverless-functions/introduction">Serverless Functions</a>
    </th></tr>
  </thead>
</table>


### Apache Cassandra-as-a-Service 👩‍🚀 ###

The database package in the installation and authentication steps is DataStax's <a href="https://www.npmjs.com/package/@astrajs/collections">@astra/collections JavaScript library</a>, which I'm using to connect to a Cassandra NoSQL database, newly accessible as a pay-as-you-go serverless resource. (<a href="https://astra.datastax.com/register">Free DataStax account</a> required.)

<p></p>

📔 <a href="datastax-serverless-db">Astra Step-by-Step</a> ➡️

<p></p>

### Some Helpful Explanations 💬 ###

<code><strong>for SERVERLESS</strong></code>

<strong>“You can use Serverless Functions to solve (almost) any backend needs you have without deploying and maintaining a server yourself.”</strong>
-James Q. Quick, <em>Serverless Functions, Netlify vs Vercel, and the Jamstack</em> (<a href="https://morioh.com/p/dc014b3356d2">YouTube, Dec 10 2020</a>)


<p></p>

<details closed>
<summary> [+] </summary>

<p></p>

<strong>“When serverless started, it was about making the lives of backend developers easier. As it’s progressing, we’re seeing more frontend focused teams using serverless to build APIs and access data that wasn’t easily accessible. Serverless is going mainstream.”</strong>
-Matt Biilmann, <em>Interview with Matt Biilmann, CEO and co-founder, Netlify</em> (<a href="https://jaxenter.com/biilmann-jamstack-interview-173821.html">Jaxenter, Feb 16 2021</a>)

<p></p>

<code><strong>for JAMSTACK</strong></code>


<p></p>


<strong>“For static content, everything is prebuilt and cached. For dynamic content, companies build microservices that are loaded on demand and that can scale easily.”</strong>
-Romain Dillet, <em>Cloudflare is testing a Netlify competitor to host Jamstack sites</em> (<a href="https://techcrunch.com/2020/12/07/cloudflare-is-testing-a-netlify-competitor-to-host-jamstack-sites/)">TechCrunch, Dec 7 2020</a>)


<p></p>


<strong>“You effectively remove the performance tradeoff of serverless because static elements of the website are pre-rendered, and then a serverless backend is delivered either via APIs or right from the network edge in response to request/response logic.”</strong>
-Matt Biilmann, <em>Interview with Matt Biilmann, CEO and co-founder, Netlify</em> (<a href="https://jaxenter.com/biilmann-jamstack-interview-173821.html">Jaxenter, Feb 16 2021</a>)


<p></p>


<code><strong>for VERCEL</strong></code>


<p></p>


<strong>“Unlike Netlify, Vercel simplifies its serverless function signature by only accepting requests and responses as parameters, which is achieved by wrapping the original AWS Lambda environment and simplifying it only for serving content purposes. Brilliant idea!”</strong>
-Emrah Samdan, <em>Why do companies invent their own serverless functions?</em> (<a href="https://blog.thundra.io/why-do-companies-invent-their-own-serverless-functions">Thundra Blog, Jul 2020</a>)


<p></p>

</details>


<p></p>
