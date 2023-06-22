import React from "react";
import { useState } from "react";

function DecimalARomanos() {

    const [decimal, setDecimal] = useState(0);
    const [romanResult, setRomanResult] = useState('');

    const convertToRoman = (num: number) => {
        let numeroRomano = "";
        let numerosRomanos: [string, number][] = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ];

        //Limitando el rango del imput
        if (Number.isNaN(num)) {
            console.log("No es un numero")
            setRomanResult('')
            return
        }
        if (num < 1) {
            console.log("El numero no puede ser menor a 1")
            setRomanResult('')
            return
        }
        if (num > 3999) {
            console.log("El numero no puede ser mayor a 3999")
            setRomanResult('')
            return
        }

        //Itera sobre los array de numeros romanos y sus valores en decimal [string,number]
        for (let i = 0; i < numerosRomanos.length; i++) {
            for (let j = 3; j > 0; j--) {
                if (num >= numerosRomanos[i][1]) {
                    numeroRomano += numerosRomanos[i][0];
                    num -= numerosRomanos[i][1];
                }
            }
        }

        console.log(numeroRomano)
        setRomanResult(numeroRomano)
        setDecimal(0)
    }

    const keyDownIsEnter = (event: any) => {
        if (event.key === 'Enter') {
            convertToRoman(decimal)
        }
    }

    return (
        <div className="conversor text-center">
            <p>Pasar número decimal a numero romano</p>
            <input
                id="numeroDecimal"
                placeholder="Numero decimal"
                defaultValue={''}
                onChange={(e) => setDecimal(Number(e.target.value))}
                onKeyDown={keyDownIsEnter}
            />
            <br />
            <button onClick={() => convertToRoman(decimal)}>Convertir a Romano</button>
            <br />
            <input id="romanResult" placeholder="Numero romano" defaultValue={romanResult} readOnly />
        </div>
    );
}

export default DecimalARomanos;