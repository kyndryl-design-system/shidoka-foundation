# Shidoka Foundation

[![shidoka-foundation](https://github.com/kyndryl-design-system/shidoka-foundation/actions/workflows/actions.yml/badge.svg)](https://github.com/kyndryl-design-system/shidoka-foundation/actions/workflows/actions.yml)

# Contributing to this project

Read the [Contributing Guide](CONTRIBUTING.md) here.

# Using this library in another project

## Install the package

<!-- Note: This will not work until you have configured the enterprise package registry following the instructions above. -->

```bash
npm install @kyndryl-design-system/shidoka-foundation -S
```

## Import the root stylesheet to your app's global styles

The method used (SCSS @use, CSS @import, JS import, or &lt;style&gt; tag) will vary based on your framework/bundler. Some examples:

### SCSS

```css
@use '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
```

### CSS

```css
@import '@kyndryl-design-system/shidoka-foundation/css/root.css';
```

### JS

```js
import '@kyndryl-design-system/shidoka-foundation/css/root.css';
```

### Set a color scheme

More info on color schemes in the [Foundation Storybook](https://shidoka-foundation.netlify.app/?path=/docs/foundation-colors--docs#setting-a-theme).

### Use CSS tokens/variables

You can make use of tokens/variables included in Foundation to style your non-Shidoka elements.
