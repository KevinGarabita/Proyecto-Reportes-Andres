import { useState } from "react";

function OrderCard() {
  const [folio, setFolio] = useState(0);

  return (
    <>
      <div>
        <h1>el folio es {folio}</h1>
      </div>
    </>
  );
}

export default OrderCard;
