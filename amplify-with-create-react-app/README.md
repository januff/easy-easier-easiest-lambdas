#### AWS Lambdas: Amplify CLI With Create React App  ####


<p></p>


<details open>
<summary><b>Project Init</b>


<p></p>


```
npx create-react-app amplify-with-create-react-app && cd $_
  ```


<p></p>
</summary>


```
npm i -g @aws-amplify/cli
```


<p></p>


</details>

<details open>
<summary><b>1. Deploy Hello World</b>
</summary>

<p></p>

```
amplify init
```

<p>

<img style="border-radius:10px" src="../assets/amplify-init.gif"/>


<p></p>


```
amplify add function
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>


<p></p>

```
amplify mock function amplifyHelloWorld
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>


```
amplify add api
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-add-api.gif"/>

</details>
