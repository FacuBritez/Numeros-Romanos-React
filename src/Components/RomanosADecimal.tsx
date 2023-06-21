import React from "react"

function RomanosADecimal() {
    return (
        <div className="conversor text-center">
            <p>Pasar número romano a numero decimal</p>
            <input id="numeroRomano" placeholder="Numero romano" />
            <br />
                <button onClick={() => actualiza(numeroRomano)}>Convertir a decimal</button>
            <br />
                <input id="decimalResult" placeholder="Numero decimal" />
        </div>
    );
}

export default RomanosADecimal;