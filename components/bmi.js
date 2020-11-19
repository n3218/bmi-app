import React, { Component } from "react"

class BMI extends Component {
  constructor() {
    super()
    this.state = {
      height: 162,
      weight: 80,
      bmi: 0
    }
    this.heightChangeHandler = this.heightChangeHandler.bind(this)
    this.weightChangeHandler = this.weightChangeHandler.bind(this)
  }
  heightChangeHandler(e) {
    this.setState({ height: e.target.value })
  }
  weightChangeHandler(e) {
    this.setState({ weight: e.target.value })
  }
  displayWeight() {
    let pounds = Math.floor(this.state.weight / 0.45)
    return `${pounds} pounds (${this.state.weight} kg)`
  }
  displayHeight() {
    let feet = Math.floor(this.state.height / 30.48)
    let inches = parseInt((this.state.height % 30.48) / 2.54)
    let cm = Math.floor(this.state.height)
    return `${feet} ` + this.pluralize(feet, "feet", "feets") + ` ${inches} ` + this.pluralize(inches, "inch", "inches") + ` ( ${cm} cm)`
  }
  displayBMI() {
    let bmi = Math.floor(this.state.weight / (this.state.height * this.state.height * 0.0001))
    return bmi
  }
  displayClassification() {
    let bmi = parseInt(this.displayBMI())
    if (bmi < 18.5) {
      return "Underweight"
    } else if (bmi < 24.9) {
      return "Normal"
    } else if (bmi < 29.9) {
      return "Owerweight"
    } else {
      return <span className="warning">Obese</span>
    }
  }

  pluralize(count, singular, plural) {
    if (count == 1) {
      return singular
    } else {
      return plural
    }
  }
  render() {
    return (
      <>
        <div>Height</div>
        <input onChange={this.heightChangeHandler} min="1" max={220} type="range" value={this.state.height} />
        <div>Weight</div>
        <input onChange={this.weightChangeHandler} min="1" max={200} type="range" value={this.state.weight} />

        <div>
          <div>Calculating weight: {this.displayWeight()}</div>
          <div>Calculating height: {this.displayHeight()}</div>
          <div>BMI: {this.displayBMI()}</div>
          <div>Classification: {this.displayClassification()}</div>
        </div>
      </>
    )
  }
}

export default BMI
