import React from 'react';
// might use hooks (React Functions)

const Header = () => {
    console.log("running Header function");
    console.log(5+6);
    let myTitle = "React Tik Tak Toe";
  return (
    <div>{myTitle}</div>
  )
};

export default Header;