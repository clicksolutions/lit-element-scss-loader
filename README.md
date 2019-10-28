<img src="./lit-element-scss-loader.png">

# lit-element-scss-loader
A webpack loader to generate JavaScript styles from imported CSS/SCSS files for webcomponents based on Polymers LitElement.

## Install:
```
npm install lit-element-scss-loader --save-dev
```

## Requirements
* [LitElement](https://lit-element.polymer-project.org/)
* Webpack 4 Loaders
  * [extract-loader](https://www.npmjs.com/package/extract-loader)
  * [css-loader](https://webpack.js.org/loaders/css-loader/)
  * [sass-loader](https://webpack.js.org/loaders/sass-loader/) (optional)

# How it works:
1. Include `lit-element-scss-loader` in your Webpack config. You will also need to use the `extract-loader` if you're using `sass-loader` and/or `css-loader`. Make sure that you put `lit-element-scss-loader` at the first position so it will be called last by the webpack loader mechanism.

```javascript
  rules: [
    {
      test: /\.css|\.s(c|a)ss$/,
      use: [
        'lit-element-scss-loader',
        'extract-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
};
```
2. Include your .css or .scss files in your JavaScript:
```javascript
import { 
  html,
  LitElement
} from 'lit-element';

import stylesFromSCSS from './styles.scss';
import stylesFromCSS from './styles.css';

class MyComponent extends LitElement {

  constructor(){
    super();
    this.text = 'component';
  }

  static get properties() {
    return {
      text: {
        type: String
      },
    };
  }

  static get styles() {
		return [stylesFromSCSS, stylesFromCSS];
  }
  
  render() {
    return html`
      <p class="paragraph">This is my <span class="bold">${this.text}</span></p>
    `;
  }
}

window.customElements.define('my-component', MyComponent);
```

# Why do I need this loader?
Writing CSS strings inside javascript files is ridiculous. In doing so you lose:

* autocompletion
* linting
* precompilation features

Also, designers may not want to work inside .js files for adding certain CSS styles. You don't want it that way. With this loader, you simply import your `css` or `scss` into your lit-component, add the variables to your `styles` function and here we go!
