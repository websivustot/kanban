import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let myStyle = {
      color: this.props.color
    }
    return (
      <div>
      <h1 style={myStyle}>{this.props.text}</h1>
      <Link
        href="index.html">Text of link</Link>
    </div>
  );
  }
}

class Link extends Component {
  render() {
    return <a href={this.props.href}>{this.props.children}</a>
  }
}

const app = document.getElementById('app');

ReactDOM.render(
    <div>
      <App color="red" text="My code(text)" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae commodi consequatur ducimus earum eos esse impedit, iusto labore libero maiores molestias nam odio optio, porro praesentium quaerat quis tempora?</p>
    </div>,
app);
