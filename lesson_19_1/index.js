const stylesString = `
  background-color: #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;

function convertToObject(stylesString) {
  const cssObject = {};
  const stringProperties = stylesString.split(';');

  for (let i = 0; i < stringProperties.length; i++) {
    if (stringProperties[i].length > 1) {
      const stringParts = stringProperties[i].split(':');

      const key = stringParts[0].trim();
      const value = stringParts[1].trim();

      cssObject[key] = value;
    }
  }

  return cssObject;
}

const cssObject = convertToObject(stylesString);

console.log(cssObject);
