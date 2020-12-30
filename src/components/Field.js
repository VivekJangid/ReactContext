import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  renderField(value) {
    return value === "english" ? "Name" : "Naam";
  }

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(value) => this.renderField(value)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
