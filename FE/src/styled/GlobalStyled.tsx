import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}


body {
  margin: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #ccc #f0f2f5; 

}


body::-webkit-scrollbar {
  width: 8px; 
  border-radius: 10px; 
}


body::-webkit-scrollbar-thumb {
  background-color: #ccc; 
  border-radius: 10px; 
}


body::-webkit-scrollbar-thumb:hover {
  background-color: #999; 
}


body::-webkit-scrollbar-track {
  background-color: #f0f2f5;
}



main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}

pre {
  font-family: monospace, monospace; 
  font-size: 1em; 
}

a {
  background-color: transparent; /* 1 */
}


abbr[title] {
  border-bottom: none;
  text-decoration: underline; 
}


b,
strong {
  font-weight: bolder;
}



dfn {
  font-style: italic; /* 1 */
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}



audio,
video {
  display: inline-block;
}


audio:not([controls]) {
  display: none;
  height: 0;
}


img {
  border-style: none; 
  border-color: inherit; 
  border-width: 0; 
  vertical-align: middle; 
}


svg:not([fill]) {
  border: none; 
  fill: currentColor; 
}



template {
  display: none;
}



button,
input,
optgroup,
select,
textarea {
  font: inherit; 
  margin: 0; 
}



button,
select {
  text-transform: none;
}


button,
html [type="button"], 
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; 
}



button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}



button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}



fieldset {
  padding: 0.35em 0.75em 0.625em;
}



input {
  overflow: visible; 
}


legend {
  padding: 0;
}

progress {
  display: inline-block; 
  vertical-align: baseline; 
}


textarea {
  overflow: auto;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}



[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; 
  width: auto; 
}


[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
details {
  display: block;
}
summary {
  display: list-item;
}
canvas {
  display: inline-block;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
`;
