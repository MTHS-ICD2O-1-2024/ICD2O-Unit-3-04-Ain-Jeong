// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function convert fahrenheit to celsius.
 */
function convertFahrenheitToCelsius() {
  // input
  const temperatureInFahrenheit = parseFloat(
    document.getElementById("temperature-in-fahrenheit").value
  )

  // process
  const temperatureInCelsius = (temperatureInFahrenheit - 32) * (5 / 9)

  // output
  document.getElementById("answer").innerHTML =
    temperatureInFahrenheit + "°F = " + temperatureInCelsius.toFixed(3) + "°C"
}
