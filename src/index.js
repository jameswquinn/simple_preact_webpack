import { h, render } from 'preact';

const App = () => {
  return <h1>Hello, Preact!</h1>;
};

render(<App />, document.getElementById('app'));
