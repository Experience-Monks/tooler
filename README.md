# tooler

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A small utility to spawn a node.js file from your project root, specified in `package.json`, regardless of how deep you are in your project's child folders.

This is useful when you need to maintain `$PWD` -- since `npm run-script` changes the `process.cwd()` to the package.json directory.

#### Note: This is experimental and subject to change.

## Usage

First, install `tooler` globally:

```sh
npm install tooler -g
```

Now, let's say you have a Node tool:

`myApp/tools/hello.js`

```js
console.log("Hello!", process.cwd(), process.argv[2])
```

Now, add the following to your package.json:

`myApp/package.json`

```
{
  ...
  "tooler": "./tools/hello.js"
  ...
}
```

Now, anywhere inside your project folder, you can run tooler:

```sh
$ cd src/buttons/
$ tooler button1.js
Hello! /prj/myApp/src/buttons button1.js
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/tooler/blob/master/LICENSE.md) for details.
