import React from "react";
import "./index.less";
// import fetch from 'isomorphic-fetch'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <h1 className='colors'>
      Hello {name}
      </h1>;
  }
}

export default App;