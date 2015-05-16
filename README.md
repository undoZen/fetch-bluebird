# fetch-bluebird

This module will patch fetch (both native and polyfill) to use bluebird so you can use helper methods from bluebird like

```js
var propsPickedFromResult = fetch(someapi).call('json').then(_).call('pick', ['propA', 'propB']).call('value');
```

It will patch fetch-polyfill for you automatically.

It will also bring you `fetch-polyfill@*` and `bluebird@^2` as peerDependencies, currently if we set peerDependencies in package.json we can't suppress the warning like 'npm WARN peerDependencies The peer dependency bluebird@^2 included from fetch-bluebird will no' but it's totally ok in this module and you can safely ignore it. If you don't like see the warning I'm planing publish a 2.0 live the dependencies problems to yourself.

## installation

```bash
npm i --save fetch-bluebird
```

## usage

`require('fetch-bluebird');` and then browserify it.

## license
MIT
