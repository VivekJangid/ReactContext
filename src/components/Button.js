import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(data) {
    return (
      <button className={`ui button ${data.color}`}>
        {this.renderSubmit(data.language)}
      </button>
    );
  }

  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(data) => this.renderButton(data)}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Button;
