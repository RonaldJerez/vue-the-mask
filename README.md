# The Mask

> The original seems to be abandoned, I am trying to fix a few outstanding issues and update this repo a bit. WORK IN PROGRESS.

A lightweight and dependency free mask input created specific for Vue.js

## [Docs and Demo](https://vuejs-tips.github.io/vue-the-mask)

### [JsFiddle](https://jsfiddle.net/neves/r8cL3msn/1/)

![The Mask Heart](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-heart.gif)

## Install

```
yarn add vue-the-mask
or
npm i -S vue-the-mask
```

## Usage (two flavors)

### Global

```javascript
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
```

### Local (inside the component)

```javascript
import { TheMask } from 'vue-the-mask'
export default {
  components: { TheMask }
}
```

### Local (as directive)

```javascript
import { mask } from 'vue-the-mask'
export default {
  directives: { mask }
}
```

## Tokens

```javascript
'#': {pattern: /\d/},
'X': {pattern: /[0-9a-zA-Z]/},
'S': {pattern: /[a-zA-Z]/},
'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
'!': {escape: true}
```

![The Mask Money](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-hammer.gif)

## Properties

| Property    | Required | Type          | Default           | Description                                |
| ----------- | -------- | ------------- | ----------------- | ------------------------------------------ |
| value       | false    | String        |                   | Input value or v-model                     |
| mask        | **true** | String, Array |                   | Mask pattern                               |
| masked      | false    | Boolean       | false             | emit value with mask chars, default is raw |
| placeholder | false    | String        |                   | Same as html input                         |
| type        | false    | String        | 'text'            | Input type (email, tel, number, ...)       |
| tokens      | false    | Object        | [tokens](#tokens) | Custom tokens for mask                     |

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/vuejs-tips/v-tag-input.svg/issues) and/or [pull requests](https://github.com/vuejs-tips/v-tag-input.svg/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests. Your name will be added to the hall of fame ;)

![The Mask Wolf](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-wolf.gif)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
