
/*
* Dados climaticos 
*/

import { useState } from "react";
import { LayoutForms } from "../components/layoutFoms";
import { LayoutComponents } from '../components/layoutPages';



export const DataClima = () => {
    const date = new Date();
    const data = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    const [temp, setTemp] = useState("")
    const [ventoForca, setVentoForca] = useState("")
    const [ventoDirecao, setVentoDirecao] = useState("")
    return (
        <LayoutComponents>
            <LayoutForms>
                <span className="title"> Dados Climaticos </span>
                <span className="subtitle">Informações sobre o clima para esse teste.</span>
                <span className="input">Data:{data}</span>
                <div className="wrap-input">
                    <input
                        className={temp !== "" ? "has-val input" : "input"}
                        type="number"
                        value={temp}
                        onChange={e => setTemp(e.target.value)} />
                    <span className="focus-input" data-placeholder="Temperatura:"></span>
                </div>
                <div className="wrap-input">
                    <select
                        className={ventoForca !== "" ? "has-val input" : "input"}
                        type="number"
                        value={ventoForca}
                        onChange={e => setVentoForca(e.target.value)} >
                        <option value="none"></option>
                        <option value="semvento">Sem vento </option>
                        <option value="ventoFraco">Vento Fraco </option>
                        <option value="ventoMedio">Vento Médio </option>
                        <option value="VentoForte">Vento Forte </option>
                    </select>
                    <span className="focus-input" data-placeholder="Vento:"></span>

                </div>
                <div className="wrap-input">
                    <select
                        className={ventoDirecao !== "" ? "has-val input" : "input"}
                        type="number"
                        value={ventoDirecao}
                        onChange={e => setVentoDirecao(e.target.value)} >
                        <option value="none"></option>
                        <option value="aFavor">A favor </option>
                        <option value="contrario">Contrario </option>
                        <option value="lateralDireito">Lateral direito </option>
                        <option value="lateralEsquerdo">Lateral esquerdo </option>
                    </select>
                    <span className="focus-input" data-placeholder="Direção:"></span>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Próximo</button>
                </div>
            </LayoutForms>
        </LayoutComponents>
    );
}



