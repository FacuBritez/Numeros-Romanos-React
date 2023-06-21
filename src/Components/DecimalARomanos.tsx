import React from "react";

function RomanosADecimal() {
    return (
        <div className="conversor text-center">
            <p>Pasar número decimal a numero romano</p>
            <input id="numeroDecimal" placeholder="Numero decimal" />
            <br />
                <button onClick={() => actualiza(numeroDecimal)}>Convertir a Romano</button>
            <br />
                <input id="romanResult" placeholder="Numero romano" readOnly />
        </div>
    );
}

export default RomanosADecimal;