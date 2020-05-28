import React from "react";

const ImagenSlider = ({ plan, handleOffer }) => {
  return (
    <>
      <div onClick={() => handleOffer(plan.id)} className="card">
        <p>
          <h1> Card no: {plan.id} </h1>
          <span>price: {plan.price}</span>
        </p>
      </div>
    </>
  );
};

export default ImagenSlider;