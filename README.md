# React Workshop

This workshop was designed to train established web developers in React. Prerequisite for the workshop is knowledge in ES6 or TypeScript.

## Prerequisites

In order to fully enjoy this repository the following things are needed:

* *Any* evergreen browser (e.g., Chrome, Opera, Firefox, ...)
* Some (advanced) text editor (e.g., VS Code, Sublime Text, Atom, ...)
* Git v2+
* Node.js v6+
* Webpack v2+ [via npm]
* http-server [via npm]
* optional: TypeScript v2+ [via npm]

We use TypeScript in this repository to indicate the type of objects floating around. No knowledge in TypeScript is required.

The following URLs are helpful to get some software:

* [VS Code](https://code.visualstudio.com/#alt-downloads)
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)
* [Opera](https://www.opera.com/computer)

Furthermore, once Node.js is set up the rest can be installed as follows:

```bash
npm i webpack typescript http-server -g
```

Administrative rights (e.g., via `sudo`) may be required.

## Installation

First obtain the repository:

```bash
git clone https://github.com/FlorianRappl/react-workshop
```

Then make sure you installed the dependencies:

```bash
cd react-workshop
npm install
```

Finally, you can start an example or exercise with the following code:

```bash
cd examples/01
webpack
```

## Examples

The example codes can be found in the *examples* subfolder. Each example has been placed in its own directory. Below is a short description of each example.

### 01 - createElement

Compares basic element creation with the React API to extended tooling using JSX.

### 02 - JSX

Outlines more advanced JSX concepts.

### 03 - Components

Shows how components (custom elements) are being created.

### 04 - Lifecycle

Discusses the essential lifecycle of components.

### 05 - One-Way Binding

Brings state into play. We use the state to store internal properties of our component instance.

### 06 - Two-Way Binding

Shows how to create two-way binding, e.g., with an input element.

### 07 - Update Hooks

Illustrates how we can intercept certain parts of the React update / render pipeline.

### 08 - References

Goes into details on the ref prop and other special props.

### 09 - DOM Renderer

Reveals how elements are finally placed in the DOM.

### 10 - Other Renderers

Discusses the other potential renderers, which may be useful under special conditions.

### 11 - History Library

Outlines details of the popular history package.

### 12 - Basic Router

Goes beyond the pure history library by introducing the React Router component.

### 13 - Router Abstraction

Concludes the React Router v4 API presentation.

### 14 - Redux Reducer

Starts an introduction of Redux.

### 15 - Combined Reducers

Goes into more advanced techniques of Redux.

### 16 - Container Component

Illustrates how a container component may look like.

### 17 - React Test Utils

Introduces tests for React components by starting with the essential API and tooling.

### 18 - Testing React

Concludes the testing part with more useful techniques.

### 19 - React Native

Finally, this example outlines how a React Native component / code would look like.

## Exercises

The exercises can be found in the *exercises* subfolder. Each exercise has been placed in its own directory. Here we also find a potential solution, which just implements the bare minimum to fulfill the assigned task.

### 01 - JSX

* Write an element in JSX that can be used to show
  - a given first name,
  - a given last name, and
  - an optional (predetermined) description below.
* HTML code for the component could look like

```html
&lt;div&gt;
  &lt;div&gt;
    &lt;strong&gt;Hello!&lt;/strong&gt; Welcome, &lt;span style=&quot;font-family: Consolas; text-decoration: underline&quot;&gt;&lt;span style=&quot;color: green&quot;&gt;Florian&lt;/span&gt; &lt;span style=&quot;color: red&quot;&gt;Rappl&lt;/span&gt;&lt;/span&gt;.
  &lt;/div&gt;
  &lt;div&gt;
    Not your name? Click &lt;a href=&quot;#&quot;&gt;here&lt;/a&gt; to correct ...
  &lt;/div&gt;
&lt;/div&gt;
```

### 02 - Components (1)

* Extend the previous element to a component
* Bring in a state showing how often the component was clicked
* Integrate the click counter via a `onClick` property on the outer `div`

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
* Insert a not found page for invalid URLs

### 05 - Redux (1)

* Change the previous ToDo list to use Redux
* Support three actions:
  1. `addItem(text: string)`
  2. `toggle(id: number)`
  3. `editItem(id: number, text: string)`
* Make the reducer scalable by extracting the handlers
* How can we decouple handlers from the reducer?

### 06 - Redux (2)

* Integrate the ToDo list into the routing app
* Introduce a different sub-state for each top component
* Mediate the changes via a container component
* During each state change output the full app state in the console

### 07 - Testing

* Test the hello component of our application
* Assert that clicking the component increases the count
* Check that the count is rendered correctly
* Verify that the name is displayed

## License

MIT License, see [LICENSE](LICENSE) file.