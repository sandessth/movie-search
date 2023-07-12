import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <span>
        <MovieIcon />
        Entertainment Hub <MovieIcon />
      </span>
    </div>
  );
}

export default Header;
