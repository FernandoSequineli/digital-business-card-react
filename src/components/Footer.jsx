import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

//

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <FaTwitterSquare size={29} />
      </a>
      <a href="/">
        <FaFacebookSquare size={29} />
      </a>
      <a href="/">
        <FaInstagramSquare size={29} />
      </a>
      <a href="/">
        <FaGithubSquare size={29} />
      </a>
    </footer>
  );
};

export default Footer;
