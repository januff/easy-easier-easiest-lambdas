#### AWS Lambdas: Amplify CLI With Create React App  ####

<p></p>

#### Project Init ####

<p></p>

<pre><code>npx create-react-app amplify-with-create-react-app && cd $_</code></pre>

<p></p>

<pre><code>npm i -g @aws-amplify/cli</code></pre>

<p></p>

<details open>
  <summary><strong>1. Deploy Hello World</strong>
  </summary>

  <p></p>


  <pre><code>amplify init</code></pre>


  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-init.gif"/>


  <p></p>


  <pre><code>amplify add function</code></pre>


  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>


  <p></p>

  
  <pre><code>amplify mock function amplifyHelloWorld</code></pre>

  
  <p></p>


  <img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>


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


</details>
