import React, { Component } from "react";

const Context = React.createContext("english");

export class LanguageStore extends Component {
  state = { language: "english", color: "blue" };

  onLanguageChange = (language) => {
    if (language === "english") {
      this.setState({ language: language, color: "blue" });
    } else {
      this.setState({ language: language, color: "red" });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
