#### AWS Lambdas: Amplify CLI With Create React App  ####

<p></p>

#### Project Init ####

<p></p>

<pre><code>npx create-react-app amplify-with-create-react-app && cd $_</code></pre>

<p></p>

<pre><code>npm i -g @aws-amplify/cli</code></pre>


<p></p>


<details open>
<summary><strong>1. Log Hello World</strong>
</summary>

<p></p>


<pre><code>amplify init</code></pre>


<p></p>


<img style="border-radius:10px" src="../assets/amplify-init.gif"/>


<p></p>


<pre><code>amplify add function</code></pre>


<p></p>


<img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>


<p><p>

<ul>
  <li style="list-style-type: '⚠️  ';background-color:lightCoral;border-radius:6px;padding-left:10px;max-width:360px"><em>“Template format error: Resource name is non alphanumeric.”</em></li>
</ul>


<p></p>


<pre><code>amplify mock function amplifyHelloWorld</code></pre>


<p></p>


<img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>


<p></p>


</details>


<p></p>


<details open>
<summary><strong>2. Deploy Hello World</strong>
</summary>


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


<p><p>

<ul>
  <li style="list-style-type: '⚠️  ';background-color:lightCoral;border-radius:6px;padding-left:10px;max-width:360px"><em>{"message:" : "Missing Authentication Token"}</em></li>
</ul>


</details>

<p></p>


<details closed>
<summary><strong>3. Pass URL Params</strong>
</summary>

<p></p>

<em>Details in progress.</em>

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