import React from "react";
import imgPrincipal from "../../assets/img/reforma-de-barbearia.jpg";
import "./ImagemHeader.css";

function ImagemHeader() {
  return (
      <img
        src={imgPrincipal}
        className="imagem-header d-block w-100"
        alt=""
      />
  );
}

export default ImagemHeader;
