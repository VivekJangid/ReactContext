import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends Component {
  state = { language: "english" };

  onLanguageCheck = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select A Language :
          <i
            className="flag us"
            onClick={() => this.onLanguageCheck("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageCheck("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
