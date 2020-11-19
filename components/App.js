import React, { Component } from "react"
import BMI from "./bmi"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>BMI Calculator</h1>
        <BMI />
      </div>
    )
  }
}
