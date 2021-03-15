#### AWS Lambdas: Amplify CLI With Create React App  ####


<p></p>


<details open>
<summary><b>Project Init</b>


<p></p>


```console
npx create-react-app amplify-with-create-react-app && cd $_
  ```


<p></p>
</summary>


```zsh
npm i -g @aws-amplify/cli
```


<p></p>


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


<p></p>


```zsh
amplify add function
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-add-function.gif"/>


<p></p>

```console
amplify mock function amplifyHelloWorld
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-mock-function.gif"/>


```console
amplify add api
```

<p></p>


<img style="border-radius:10px" src="../assets/amplify-add-api.gif"/>

</details>
