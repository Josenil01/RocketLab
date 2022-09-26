import { useState } from "react";
import { LayoutForms } from "../components/layoutFoms";
import { LayoutComponents } from "../components/layoutPages";


export const DataFuel = () => {

    const [vinagre, setVinagre] = useState("")
    const [bicarbonato, setBicarbonato] = useState("")
    const [concentracao, setConcentracao] = useState("")
    const [pressaoEsperada, setpressaoEsperada] = useState("")
    return (
        <LayoutComponents>
            <LayoutForms>
                <span className="title"> Dados Combustivel </span>
                <span className="title1"> Dados Reagentes e Combustivel </span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className={vinagre !== "" ? "has-val input" : "input"}
                            type="text"
                            value={vinagre}
                            onChange={e => setVinagre(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Vinagre:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={bicarbonato !== "" ? "has-val input" : "input"}
                            type="text"
                            value={bicarbonato}
                            onChange={e => setBicarbonato(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Bicarbonato"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={concentracao !== "" ? "has-val input" : "input"}
                            type="text"
                            value={concentracao}
                            onChange={e => setConcentracao(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Concentração :"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <input
                        className={pressaoEsperada !== "" ? "has-val input" : "input"}
                        type="text"
                        value={pressaoEsperada}
                        onChange={e => setpressaoEsperada(e.target.value)} />
                    <span className="focus-input" data-placeholder="Pressão Esperada:"></span>
                </div>
                
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Próximo</button>
                </div>
            </LayoutForms>
        </LayoutComponents>
    );
}