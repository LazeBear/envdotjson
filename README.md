# ENVDOTJSON

ENVDOTJSON is a module loads environment variable from a single `json` file into `process.env`.</p>
Note: this module cannot be used in the browser.

### Installation

```shell
$ npm i envdotjson
```

### Usage

Require `envdotjson` as early as possible in your app, and load the environment variables

```js
require('envdotjson').load();
```

Create a `env.json` file in your root directory, with the following format

```json
{
  "default": {
    "PORT": "3000",
    "DB_NAME": "user"
  }
}
```

NOTE:  variables in `default` will gets loaded in any environment stages

BUT, you can overwrite it in any environment stage

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

In order to get `process.env.DB_NAME === "user-test"`, you need to set the `NODE_ENV=tst` first, for example:

```shell
$ NODE_ENV=tst node index.js
```

**set the `NODE_ENV` in your `env.json` file will not work.**

### License

MIT