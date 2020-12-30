import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";
import ColorContext from "../contexts/ColorContext";

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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
