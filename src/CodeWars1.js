import React from "react";

export function codeWars1(props) {
    return props
      // split the string by spaces and return array 
      .split(" ")
      // map each string and create a var words, that get the first letter then append the rest of the word by getting the word expect the first letter
      .map((words) => words[0].toUpperCase() + words.substr(1))
      // join all the array together by space
      .join(" ");
  }
