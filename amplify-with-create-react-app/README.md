#### AWS Lambdas: Amplify CLI With Create React App  ####

<p></p>

<details open>
  <summary><b>Project Init</b>
  <p>

  ```console
  npx create-react-app amplify-with-create-react-app && cd $_
  ```
  <p>
  </summary>

  ```console
  npm i -g @aws-amplify/cli
  ```
  <p>

</details>

<details open>
  <summary><b>1. Deploy Hello World</b>
  </summary>
  
  <p></p>
  
  ```console
  amplify init
  ```
  
  <p>

  <img style="border-radius:10px" src="../assets/amplify-init.gif"/>

  <p>

  ```console
  amplify add function
  ```

  <p>

  <img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>

  <p>

 ```console
 amplify mock function amplifyHelloWorld
 ```

  <p>

  <img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>

 ```console
 amplify add api
 ```

  <p>
  <img style="border-radius:10px" src="../assets/amplify-add-api.gif"/>

</details>

<p>
TESTING: SVG for border-radius
<p>

<div style="border-radius:10px" width="100%>
  <svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: #171717;
            border-radius: 8px;
          }
        </style>
        <div class="container">
          <img width="96%" height="96%" src="../assets/amplify-add-api.gif" />
        </div>
      </div>
    </foreignObject>
  </svg>
</div>