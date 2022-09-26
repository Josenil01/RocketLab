import { useState } from "react";
import { LayoutForms } from "../components/layoutFoms";
import { LayoutComponents } from "../components/layoutPages";

export const DataTest = () => {
    const [nome, setNome] = useState("")
    const [items, setItems] = useState("")
    const [vinagreTeste, setVinagreTeste] = useState("")
    const [bicarbonatoTeste, setBicarbonatoTeste] = useState("")
    const [concentracaoTeste, setConcentracao] = useState("")
    const [pressaoTeste, setPressaoTeste] = useState("")
    const [demoraPressaoMax, setDemoraPressaoMax] = useState("")

    return (
        <LayoutComponents>
            <LayoutForms>
                <span className="title"> Coleta de dados do Lançamento</span>
                <div className="wrap-input">
                    <input
                        className={nome !== "" ? "has-val input" : "input"}
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                    <span className="focus-input" data-placeholder="Tec. Responsavel:"></span>
                </div>
                <div className="wrap-input">
                    <input
                        className={items !== "" ? "has-val input" : "input"}
                        type="text"
                        value={items}
                        onChange={e => setItems(e.target.value)} />
                    <span className="focus-input" data-placeholder="Itens em teste"></span>
                </div>
                <span className="title1"> Mistura e Reação </span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className={vinagreTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={vinagreTeste}
                            onChange={e => setVinagreTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Vinagre:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={bicarbonatoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={bicarbonatoTeste}
                            onChange={e => setBicarbonatoTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Bicarbonato"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={concentracaoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={concentracaoTeste}
                            onChange={e => setConcentracao(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Concentração :"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={pressaoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={pressaoTeste}
                            onChange={e => setPressaoTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Pressão:"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <input
                        className={demoraPressaoMax !== "" ? "has-val input" : "input"}
                        type="text"
                        value={demoraPressaoMax}
                        onChange={e => setDemoraPressaoMax(e.target.value)} />
                    <span className="focus-input" data-placeholder="Tempo x Pressão Max:"></span>
                </div>
                <span className="title1">Dados do simulador</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className={vinagreTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={vinagreTeste}
                            onChange={e => setVinagreTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Estabilidade:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={vinagreTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={vinagreTeste}
                            onChange={e => setVinagreTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Apogeu:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={bicarbonatoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={bicarbonatoTeste}
                            onChange={e => setBicarbonatoTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Velocidade máx"></span>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={concentracaoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={concentracaoTeste}
                            onChange={e => setConcentracao(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Aceleração máx :"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={pressaoTeste !== "" ? "has-val input" : "input"}
                            type="text"
                            value={pressaoTeste}
                            onChange={e => setPressaoTeste(e.target.value)} />
                        <span className="focus-mult-input" data-placeholder="Tempo de vôo:"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <input
                        className={pressaoTeste !== "" ? "has-val input" : "input"}
                        type="text"
                        value={pressaoTeste}
                        onChange={e => setPressaoTeste(e.target.value)} />
                    <span className="focus-input" data-placeholder="Tempo planando:"></span>
                </div>
                <span className="title1">Medições</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                    <select
                        className={items !== "" ? "has-val input" : "input"}
                        type="number"
                        value={items}
                        onChange={e => setItems(e.target.value)} >
                        <option value="none"></option>
                        <option value="raia">Dentro da raia </option>
                        <option value="foraDireita">Fora à direita </option>
                        <option value="foraEsquerda">Fora à esquerda </option>
                    </select>
                    <span className="focus-input" data-placeholder="Local do pouso"></span>
                    </div>
                </div>
                <div className="wrap-mult-input">
                <div className="wrap-input">
                    <input
                        className={pressaoTeste !== "" ? "has-val input" : "input"}
                        type="text"
                        value={pressaoTeste}
                        onChange={e => setPressaoTeste(e.target.value)} />
                    <span className="focus-input" data-placeholder="Tempo de vôo:"></span>
                </div>
                <div className="wrap-input">
                    <input
                        className={pressaoTeste !== "" ? "has-val input" : "input"}
                        type="text"
                        value={pressaoTeste}
                        onChange={e => setPressaoTeste(e.target.value)} />
                    <span className="focus-input" data-placeholder="Distância:"></span>
                </div>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Próximo</button>
                </div>
            </LayoutForms>
        </LayoutComponents>
    );
}