<h1 align="center"> ENVDOTJSON </h1>

<p align="center"> Load environment variables for different environment stages </p>

<hr/>

<p>ENVDOTJSON is a module loads environment variable from a single <code>json</code> file into <code>process.env</code>.</p>

<p>Note: this module cannot be used in the browser.<p>

<h3> Installation </h3>

```shell
$ npm i envdotjson
```

<h3> Usage </h3>

<p> Require <code>envdotjson</code> as early as possible in your app, and load the environment variables </p>

```js
require('envdotjson').load();
```

<p> Create a <code>env.json</code> file in your root directory, with the following format</p>

```json
{
  "default": {
    "PORT": "3000",
    "DB_NAME": "user"
  }
}
```

<p> NOTE:  variables in <code>default</code> will gets loaded in any environment stages  </p>

<p> BUT, you can overwrite it in any environment stage </p>

```json
{
  "default": {
    "PORT": "3000",
    "DB_NAME": "user"
  },
  "tst": {
    "DB_NAME": "user-test"
  }
}
```

<p> In order to get <code>process.env.DB_NAME === "user-test"</code>, you need to set the <code>NODE_ENV=tst</code> first, for example:

```shell
$ NODE_ENV=tst node index.js
```

<strong> set the <code>NODE_ENV</code> in your <code>env.json</code> file will not work.</strong>

<h3> License </h3>

This project is licensed under the MIT License
