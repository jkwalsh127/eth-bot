import React, { useEffect, useState } from "react";

const Header = ({poster}) => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <header className={`header ${ small ? "small" : ""}`}>

      <div className="title-wrapper">
        <h1 className="bot-title-show font-subheader" to="/eth-bot/">
          eth<span className="highlight-title font-header">LONG BOT</span>
        </h1>
      </div>

    </header>
  );
};

export default Header;
