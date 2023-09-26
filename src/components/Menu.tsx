import React, { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="menu">
      <button onClick={toggleMenu}>메뉴</button>
      {isOpen ? (
        <ul>
          <li>메뉴 항목 1</li>
          <li>메뉴 항목 2</li>
          <li>메뉴 항목 3</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;
