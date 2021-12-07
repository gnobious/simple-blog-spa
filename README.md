# Simple Twitter-like blog SPA on React

A WEB application based on twitter functionality using React and jsx syntax.

## Contents

- [Simple Twitter-like blog SPA on React](#simple-twitter-like-blog-spa-on-react)
  - [Contents](#contents)
  - [Experience 🎓](#experience)
  - [Demo 🎥](#demo)
  - [How to Use 🔧](#how-to-use)
    - [Prerequisites 📋](#prerequisites)
    - [Running 🚀](#running)
  - [Features and structure 📓](#features-and-structure)
    - [Features](#features)
      - [Using ECMAScript 6+ features](#using-ecmascript-6-features)
      - [React (JSX)](#react-jsx)
      - [Unidirectional data flow](#unidirectional-data-flow)
      - [Virtual DOM](#virtual-dom)
      - [Create React App](#create-react-app)
      - [Babel](#babel)
      - [Styled components](#styled-components)
    - [Structure](#structure)

 <h2 id="experience">Experience 🎓</h2>

In this project, I study and practice the following things:

- **React, React DOM, React Component**;
- **JSX** preprocessor syntax;
- **Virtual DOM**;
- **ECMA Script 6+**;
- Module structure;
- **Classes**;
- Setting the context for a function (**bind**);
- **Immutability** (Getters and Setters) in JS and in particular React;
- Using **create-react-app (babel, webpack)**;
- **Bootstrap** + **Fontawesome**;
- **OOP basics** (using classes);
- **Props and states**;
- Styles in React (Reactstrap / **Styled components**);
- Working with forms in React.

<h2 id="demo">Demo 🎥</h2>

The completed project can be viewed [here](https://rimerian.github.io/simple-blog-spa/ "demo url")

<h2 id="how-to-use">How to Use 🔧</h2>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<h3 id="prerequisites">Prerequisites 📋</h3>

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.
Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

<h3 id="running">Running 🚀</h3>

From your command line, first clone "simple-blog-spa":

```bash
# Clone this repository
$ git clone https://github.com/rimerian/simple-blog-spa.git

# Go into the repository
$ cd simple-blog-spa

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server:

![Web App started](/src/references/example.png)

<h2 id="features-and-structure">Features and structure 📓</h2>

### Features

#### Using ECMAScript 6+ features

- Arrows;
- Classes;
- Template Strings (interpolation);
- Destructuring;
- Default / Rest / Spread;
- Let / Const;
- Modules;
- Math / Number / String / Array / Object **APIs**;
- Object rest / spread properties;
- Bind Operator.
  
#### React (JSX)

The project development tool was the [React](https://reactjs.org/) – JS library using the JavaScript XML syntax (JSX), which extends the JavaScript syntax and allows you to use HTML-like syntax to describe the interface structure

React allows you to render each individual component of the application without refreshing the page, which makes it an ideal tool for creating user interfaces.

And JSX, in turn, instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

#### Unidirectional data flow

A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store.

The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher.

In simpler terms, props are passed from parent to child components. Components receive props as a set of immutable values, so a component cannot directly modify props, but can invoke changes through callback functions.This pattern is sometimes expressed as "properties flow down, actions flow up".

#### Virtual DOM

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This process is called reconciliation. This allows to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.

#### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It sets up development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes app for production.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses **Babel** and **Webpack**.

#### Babel

[Babel](https://babeljs.io/) is a JavaScript compiler as well as a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

In this project, it is used by Create React App and when Webpack builds an application, the final code is compiled with support for older browsers.

#### Styled components

The project uses [Styled components](https://styled-components.com/), which allows you to style each individual module and element directly from the corresponding JS.

```js
//Exmple of usage styled components
...
const Header = styled.div`  
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: #117a8b;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }    
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Roman Artemyev</h1>
            <h2>{allPosts} записей, из них понравилось {liked} </h2>
        </Header>
    )
}

export default AppHeader;
```

### Structure

The project has a modular structure of the **React** application.
The main part of the application is located in the `src` directory.
The application is divided into `components`:

- `app`
- `app-header`
- `post-add-form`
- `post-list`
- `post-list-item`
- `post-status-filter`
- `search-panel`

Each component has, in addition to the main file, a style file in css format and an `index.js` for convenience when exporting.

All components are assembled in the `app`, and then imported into the main `index.js` and there they are rendered to the web page (`index.html` inside `public` folder).
