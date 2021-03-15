### AWS Lambdas: Easy, Easier, Easiest 🍳 ###

<strong>“Where AWS becomes overkill are typical JAMstack apps. A static site with lots of frontend logic. Hosting those on AWS is a pain whereas Netlify and Vercel make them a core feature.”</strong> -Swizec Teller, *AWS, Vercel, Netlify, or Firebase?* ([Serverless Handbook, Feb 2021](https://serverlesshandbook.dev/serverless-flavors/))

Back in the day, AWS Lambdas (ie. serverless functions) could be treacherous (eg. for me, last year.) But nowadays Amazon's Amplify CLI has vastly simplified Lambda configuration, while Netlify and Vercel offer near-effortless Lambda setup. This repo collects deployment instructions and tips for all three platforms. ([In this companion essay on _Medium_](), I explain my preferences.)

---

### Some Helpful Explanations 💬 ###

<code>for SERVERLESS</code>

<strong>“You can use Serverless Functions to solve (almost) any backend needs you have without deploying and maintaining a server yourself.”</strong>
-James Q. Quick, <em>Serverless Functions, Netlify vs Vercel, and the Jamstack</em> (<a href="https://morioh.com/p/dc014b3356d2">YouTube, Dec 10 2020</a>)

<details closed>
<summary> [+] </summary>
<p></p>

<strong>“When serverless started, it was about making the lives of backend developers easier. As it’s progressing, we’re seeing more frontend focused teams using serverless to build APIs and access data that wasn’t easily accessible. Serverless is going mainstream.”</strong>
-Matt Biilmann, <em>Interview with Matt Biilmann, CEO and co-founder, Netlify</em> (<a href="https://jaxenter.com/biilmann-jamstack-interview-173821.html">Jaxenter, Feb 16 2021</a>)

<p></p>

<code>for JAMSTACK</code>


<p></p>


<strong>“For static content, everything is prebuilt and cached. For dynamic content, companies build microservices that are loaded on demand and that can scale easily.”</strong>
-Romain Dillet, <em>Cloudflare is testing a Netlify competitor to host Jamstack sites</em> (<a href="https://techcrunch.com/2020/12/07/cloudflare-is-testing-a-netlify-competitor-to-host-jamstack-sites/)">TechCrunch, Dec 7 2020</a>)


<p></p>


<strong>“You effectively remove the performance tradeoff of serverless because static elements of the website are pre-rendered, and then a serverless backend is delivered either via APIs or right from the network edge in response to request/response logic.”</strong>
-Matt Biilmann, <em>Interview with Matt Biilmann, CEO and co-founder, Netlify</em> (<a href="https://jaxenter.com/biilmann-jamstack-interview-173821.html">Jaxenter, Feb 16 2021</a>)


<p></p>


<code>for VERCEL</code>


<p></p>


<strong>“Unlike Netlify, Vercel simplifies its serverless function signature by only accepting requests and responses as parameters, which is achieved by wrapping the original AWS Lambda environment and simplifying it only for serving content purposes. Brilliant idea!”</strong>
-Emrah Samdan, <em>Why do companies invent their own serverless functions?</em> (<a href="https://blog.thundra.io/why-do-companies-invent-their-own-serverless-functions">Thundra Blog, Jul 2020</a>)


<p></p>


</details>


<p></p>


---

### Apache Cassandra™ ...*SERVERLESS!* ###



<details closed>



<summary><code>DataStax Astra Cassandra-as-a-Service</code></summary>


<p></p>



<a href="../astra">Set-up instructions for Astra</a>



<p></p>



</details>


<p></p>


---


### Deployment Quickstarts ###

<details closed>
<summary><code>Amplify</code>
<p></p>


```console
npx create-react-app amplify-with-create-react-app && cd $_
```
[+]

<p></p>

</summary>

<p></p>


<a href="amplify-with-create-react-app">Set-up instructions for Amplify</a>


<p></p>

</details>


<p></p>


<details>
<summary><code>Netlify</code>  
<p></p>

```console
npx create-react-app netlify-with-create-react-app && cd $_
```
[+]

<p></p>

</summary>

<p></p>

[Set-up instructions for Netlify](netlify-with-create-react-app)


<p></p>


</details>

<p>

<details>
<summary><code>Vercel</code>
<p></p>


```console
npx create-next-app
```
[+]

<p></p>

</summary>

[Set-up instructions for Vercel](vercel-with-next-js)

<p></p>

</details>
