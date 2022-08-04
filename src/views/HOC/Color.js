import React from "react";
function getRandomColor() {
  var letters = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    // console.log("Print letter", letters[Math.floor(Math.random() * 16)]);
  }
  return color;
}
export const Color = (WrappedComponent) => {
  const randomColor = getRandomColor();
  return (props) => (
    <div style={{ color: randomColor }}>
      <WrappedComponent {...props} />
    </div>
  );
};
// export default Color;
