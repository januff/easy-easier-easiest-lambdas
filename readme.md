## *AWS Lambdas: Easy, Easier, Easiest* ##

`You can use Serverless Functions to solve (almost) any backend needs you have without deploying and maintaining a server yourself.`

- - -

<details>
  <summary>Amplify</summary>
  <p>

  [Set-up instructions for Amplify](amplify/)
  </p>
  </details>

<details>
  <summary>Netlify</summary>
  <p>

  [Set-up instructions for Netlify](netlify)
  </p>
</details>

<details>
  <summary>Vercel</summary>
  <p>

  [Set-up instructions for Vercel](vercel)
  </p>
</details>

- - -


<kbd>Return</kbd>

AWS Lambdas: 3 Ways to Deploy

**Serverless APIs Deployment Checklist**

- [ ] An uncompleted task

---

*AWS Lambdas, with or without AWS*

* Because I've known AWS Lambdas to be tricky
* Because I easily forget simple instructions
* Because I need a place to keep my tricks
* Because I need a place to save my tabs
* Because I wanted to compare workflows side-by-side



[Set-up instructions for Vercel](vercel/README.md)



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