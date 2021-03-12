### AWS Lambdas: Easy, Easier, Easiest  :fried_egg: ###

“**Where AWS becomes overkill are typical JAMstack apps. A static site with lots of frontend logic. Hosting those on AWS is a pain whereas Netlify and Vercel make them a core feature.**” -Swizec Teller, *AWS, Vercel, Netlify, or Firebase?* ([Serverless Handbook, Feb 2021](https://serverlesshandbook.dev/serverless-flavors/))

Back in the day, AWS Lambda setup could be treacherous (ie. for me, last year.) But these days, Amazon's Amplify CLI has vastly simplified Lambda configuration, while Netlify and Vercel offer cruelty-free Lambda setup. This repo collects deployment instructions and tips for all three platforms. (A [companion essay on _Medium_]() gets into my preferences.)

---

### Some Helpful Explanations 💬 ###

<code>**for SERVERLESS**</code>

**“You can use Serverless Functions to solve (almost) any backend needs you have without deploying and maintaining a server yourself.”**
-James Q. Quick, *Serverless Functions, Netlify vs Vercel, and the Jamstack* ([YouTube, Dec 10 2020](https://morioh.com/p/dc014b3356d2))
<details closed>
  <summary> [+] </summary>
<p>

  **“When serverless started, it was about making the lives of backend developers easier. As it’s progressing, we’re seeing more frontend focused teams using serverless to build APIs and access data that wasn’t easily accessible. Serverless is going mainstream.”**
  -Matt Biilmann, *Interview with Matt Biilmann, CEO and co-founder, Netlify* ([Jaxenter, Feb 16 2021)](https://jaxenter.com/biilmann-jamstack-interview-173821.html)



<code>**for JAMSTACK**</code>

**“For static content, everything is prebuilt and cached. For dynamic content, companies build microservices that are loaded on demand and that can scale easily.”**
-Romain Dillet, *Cloudflare is testing a Netlify competitor to host Jamstack sites* ([TechCrunch, Dec 7 2020](https://techcrunch.com/2020/12/07/cloudflare-is-testing-a-netlify-competitor-to-host-jamstack-sites/))

**“You effectively remove the performance tradeoff of serverless because static elements of the website are pre-rendered, and then a serverless backend is delivered either via APIs or right from the network edge in response to request/response logic.”**
-Matt Biilmann, *Interview with Matt Biilmann, CEO and co-founder, Netlify* ([Jaxenter, Feb 16 2021)](https://jaxenter.com/biilmann-jamstack-interview-173821.html)


<code>**for VERCEL**</code>

**“Unlike Netlify, Vercel simplifies its serverless function signature by only accepting requests and responses as parameters, which is achieved by wrapping the original AWS Lambda environment and simplifying it only for serving content purposes. Brilliant idea!”**
-Emrah Samdan, *Why do companies invent their own serverless functions?* ([Thundra Blog, Jul 2020](https://blog.thundra.io/why-do-companies-invent-their-own-serverless-functions))

</details>

- - -

### Apache Cassandra™ ...*SERVERLESS!* ###

<details closed>

<summary><code>DataStax Astra Cassandra-as-a-Service</code>
</summary>

  <p>

  [Set-up instructions for Astra](astra)
  </p>
</details>



- - -

### Deployment Quickstarts ###

<details closed>
  <summary><code>Amplify</code>
  <p>

  ```console
  npx create-react-app amplify-with-create-react-app && cd $_
  ```
  [+]
  </summary>

  [Set-up instructions for Amplify](amplify-with-create-react-app)
  </p>
</details>

<p>

<details>
  <summary><code>Netlify</code>  
  <p>

  ```console
  npx create-react-app netlify-with-create-react-app && cd $_
  ```
  [+]
  </summary>
  
  [Set-up instructions for Netlify](netlify-with-create-react-app)
  </p>
</details>

<p>

<details>
  <summary><code>Vercel</code>
  <p>

  ```console
  npx create-react-app vercel-with-next-js && cd $_
  ```
  [+]
  </summary>

  [Set-up instructions for Vercel](vercel-with-next-js)
  </p>
</details>
