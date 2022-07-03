# React Workshop

This workshop was designed to train established web developers in React. Prerequisite for the workshop is knowledge in ES6 or alternatively TypeScript.

**:zap: For the slides go to [talks.florian-rappl.de/dwx2022](https://talks.florian-rappl.de/dwx2022).**

## Prerequisites

In order to fully enjoy this repository the following things are needed:

* *Any* evergreen browser (e.g., Chrome, Edge, Firefox, ...)
* Some (advanced) text editor (e.g., VS Code, Sublime Text, ...)
* Git
* Node.js
* Rest will be installed locally via `npm i`

The following URLs are helpful to get some software:

* [VS Code](https://code.visualstudio.com/#alt-downloads)
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)

## Installation

First obtain the repository:

```bash
git clone https://github.com/FlorianRappl/react-workshop-2022
```

Then make sure you installed the dependencies:

```bash
cd react-workshop-2022
npm install
```

Finally, you can start an example or exercise with the following code:

```bash
# runs the first exercise
npm run exercise-01

# runs the first example
npm run example-01
```

## Examples

The examples can be found in the *src/examples* subfolder. Each exercise has been placed in its own directory. Here we also find a potential solution, which just implements the bare minimum to fulfill the assigned task.

### 01 - Create Element

Demonstrates that `createElement` and JSX are equivalent.

### 02 - JSX

Uses some more complicated JSX and illustrates the little pitfalls that may be there.

### 03 - Client-Side Rendering

Changes the DOM from our React code for the first time.

### 04 - Functional Components

Introduces React components which are just simple functions.

### 05 - useState Hook

Brings some local state into play by using the `useState` hook.

### 06 - Input Components

Introduces the concept of input components (either managed or controlled).

### 07 - useEffect Hook

Side-effects can be controlled via the `useEffect` hook.

### 08 - useRef Hook

This particular hook can be helpful to obtain a reference to a connected DOM element.

### 09 - Custom Hooks

How can we write custom hooks? These are just simple functions with high reusability.

### 10 - Routing and Links

Routing and staying inside the routed world is an important factor in any SPA.

### 11 - BrowserRouter and Fallbacks

The `BrowserRouter` gives us a HTML5 history compatible router that works great for most SPAs.

### 12 - Lazy Loading

Lazy loading can be integrated in very little steps. Improve your apps performance now!

### 13 - React Context Provider

The React Context API gives us the possibility of easily creating a pull principal for obtaining information.

### 14 - useContext Hook

Using a context from a functional component can be done via `useContext`.

### 15 - Global Container

A global state container without a library is written very fast.

### 16 - Testing Events

Basic testing can be done easily using the integrated utilities in `react-dom`.

### 17 - DOM Assertions

Checking the rendered tree is also part of the shipped testing utilities.

### 18 - Server-Side Rendering

Server-side rendering is as simple as calling a single function.

### 19 - React Native

Snippet to show how React Native then can look like.

## Exercises

The exercises can be found in the *src/exercises* subfolder. Each exercise has been placed in its own directory. Here we also find a potential solution, which just implements the bare minimum to fulfill the assigned task.

**:rocket: All solutions are available in the `all-solutions` branch.**

### 01 - Render some JSX

* Write an element in JSX that is used to show
  * a given first name,
  * a given last name, and
  * an optional (predetermined) description below.
* HTML code for the component could look like

```html
<div>
  <div>
    <strong>Hello!</strong> Welcome, <span style="font-family: Consolas; text-decoration: underline"><span style="color: green">Florian</span> <span style="color: red">Rappl</span></span>.
  </div>
  <div>
    Not your name? Click <a href="#">here</a> to correct ...
  </div>
</div>
```

* Render it on an empty page

**Hint**: You can use the blank file in `src/exercises/01/index.html` linked to `src/exercises/01/app.js` as a starting point.

### 02 - Components (1)

* Extend the previous element to a (reusable) component
* Bring in a state showing how often the component was clicked
* Integrate the click counter via a `onClick` property on the outer `div`

The component should be called like:

```jsx
<Hello firstName="Florian" lastName="Rappl" showCorrect={true} />
```

### 03 - Components (2)

* Obligatory ToDo list component
* Create a `TodoList` component consisting of `TodoListItem` children
* A plus button adds a new item
* Every item can be crossed out (checkbox) settings it readonly or edited otherwise (input field)

### 04 - Routing

* Combine the first two exercises in a single page
* One layout with a home component (can be blank)
* Three links: Home, Hello, and TodoList
* The route for the hello component should expose the parameters
* Insert a not found page for invalid (i.e., unknown) URLs

Hint: You need to import the *react-router* and *react-router-dom* packages for this exercise.

### 05 - Global State

* Introduce a global state in our application
* The state should store the number of clicks (`clickCount`) obtained earlier
* Goal of the global state is to prevent losing the previously set local state (clicks) when navigating between pages
* For this one action (`incrementCount`) needs to be added

### 06 - Testing

* Test the hello component of our application
* Assert that clicking the component increases the count
* Check that the count is rendered correctly
* Verify that the name is displayed

## License

MIT License, see [LICENSE](LICENSE) file.
