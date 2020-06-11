import React from "react";
import requireAuth from './requireAuth'

class App extends React.Component {
  render() {
    return <h2>This is Feature</h2>
  }
}

export default requireAuth(App);
