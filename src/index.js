import _ from "lodash";
import "./style.css";
import Logo from "./logo.png";
import Data from "./data.xml";

function component() {
  let element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div
  var logo = new Image();
  logo.src = Logo;
  logo.width = 150;
  logo.height = 50;

  element.appendChild(logo);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
