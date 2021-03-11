### AWS Lambdas: Easy, Easier, Easiest ###

“**When not to choose AWS** Where AWS becomes overkill are typical JAMstack apps. A static site with lots of frontend logic. Hosting those on AWS is a pain whereas Netlify and Vercel make them a core feature.” -**Swizec Teller**, ***AWS, Vercel, Netlify, or Firebase?*** ([Serverless Handbook, Feb 2021](https://serverlesshandbook.dev/serverless-flavors/))


---

### Helpful Explanations ###

<details closed>
  <summary>
  <p>
  
<code>**for SERVERLESS**</code>

**“You can use Serverless Functions to solve (almost) any backend needs you have without deploying and maintaining a server yourself.”**
-James Q. Quick, *Serverless Functions, Netlify vs Vercel, and the Jamstack* ([YouTube, Dec 10 2020](https://morioh.com/p/dc014b3356d2))

[+]
  </summary>

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

<details>
<summary><kbd>&nbsp;Database-as-a-Service 💭</kbd></summary>

  <p>

  [Set-up instructions for Vercel](vercel)
  </p>
</details>



- - -

### Checklists ###

<details open>
  <summary><code>Amplify</code></summary>
  <p>

  [Set-up instructions for Amplify](amplify-with-create-react-app)
  </p>
  </details>

<details>
  <summary><code>Netlify</code></summary>
  <p>

  [Set-up instructions for Netlify](netlify-with-create-react-app)
  </p>
</details>


<details>
  <summary><code>Vercel</code></summary>
  <p>

  [Set-up instructions for Vercel](vercel-with-next-js)
  </p>
</details>

- - -


*AWS Lambdas, with or without AWS*

* Because I've known AWS Lambdas to be tricky
* Because I easily forget simple instructions
* Because I need a place to keep my tricks
* Because I need a place to save my tabs
* Because I wanted to compare workflows side-by-side

- - -

*ANIMATION TEST*

**GIF (432KB)**

![gif of selectiont](assets/selection.gif)

**WEBP (1.4MB)**

![webp of selection](assets/selected.webp)


**FFMPEG GIF (24KB)**

![gif of selectiont](assets/ls.gif)

---

### Specific Language Code ###


```javascript
const { createClient } = require("@astrajs/collections")

export default async (req, res) => {
  const { query: { name } } = req

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  })

  const collection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(name)

  res.send(collection)
}
```

---
<p align="center">
<img src="./assets/cold-start-duration.png" width="340" />

_-[Jignash Solanki, AWS Lambda Performance Tuning & Best Practices (2021)](https://www.simform.com/aws-lambda-performance/)_
<p>