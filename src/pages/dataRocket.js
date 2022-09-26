import { useState } from "react";
import { LayoutForms } from "../components/layoutFoms";
import { LayoutComponents } from "../components/layoutPages";
import rocketA from '../assets/aleta_1.png';
import rocketB from '../assets/aleta_2.png';
import rocketC from '../assets/aleta_3.png';
import rocketD from '../assets/aleta_4.png';
import rocketE from '../assets/aleta_5.png';

export const DataRocket = () => {
    const [nomeRocket, setNomeRocket] = useState("")
    const [versao, setVersao] = useState("")
    const [tipoGarrafa, setTipoGarrafa] = useState("")

    return (
        <LayoutComponents>
            <LayoutForms>
                <span className="title"> Dados estruturais do foguete </span>
                <span className="title1"> Dados Foguete </span>
                <div className="wrap-mult-input">
                
                    <div className="wrap-input">
                        <input
                            className={nomeRocket !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nomeRocket}
                            onChange={e => setNomeRocket(e.target.value)} />
                        <span className="focus-input" data-placeholder="Nome:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={versao !== "" ? "has-val input" : "input"}
                            type="text"
                            value={versao}
                            onChange={e => setVersao(e.target.value)} />
                        <span className="focus-input" data-placeholder="Versão:"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <select
                        className={tipoGarrafa !== "" ? "has-val input" : "input"}
                        type="number"
                        value={tipoGarrafa}
                        onChange={e => setTipoGarrafa(e.target.value)} >
                        <option value=""></option>
                        <option value="retornavel15">Retornável 1,5L (200 PSI) </option>
                        <option value="retornavel2">Retornável 2L (200 PSI) </option>
                        <option value="normal">Normal 1,5L (120 PSI)</option>
                    </select>
                    <span className="focus-input" data-placeholder="Tipo de Garrafa:"></span>
                </div>
                <span className="title1" >Dimensões da Garrafa</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Diamentro(cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Altura(cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Massa(g)"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <select
                        className={tipoGarrafa !== "" ? "has-val input" : "input"}
                        type="number"
                        value={tipoGarrafa}
                        onChange={e => setTipoGarrafa(e.target.value)} >
                        <option value=""></option>
                        <option value="conica">Cônica </option>
                        <option value="ogival">Ogival</option>
                    </select>
                    <span className="focus-input" data-placeholder="Tipo de Coifa"></span>
                </div>
                <span className="title1" >Dimensões da Coifa</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Diamentro (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Altura (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Massa (g)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Materiais"></span>
                    </div>
                </div>
                <span className="title1" >Formato da aleta </span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input type="radio"
                            name="tipoAleta"
                            value="op1"
                        />
                        <img src={rocketA} alt="" className="imagem focus-mult-input" />
                    </div>
                    <div className="wrap-input">
                        <input type="radio"
                            name="tipoAleta"
                            value="op2"
                        />
                        <img src={rocketB} alt="" className="imagem focus-mult-input" />
                    </div>
                    <div className="wrap-input">
                        <input type="radio"
                            name="tipoAleta"
                            value="op2"
                        />
                        <img src={rocketC} alt="" className="imagem focus-mult-input" />
                    </div>
                    <div className="wrap-input">
                        <input type="radio"
                            name="tipoAleta"
                            value="op2"
                        />
                        <img src={rocketD} alt="" className="imagem focus-mult-input" />
                    </div>
                    <div className="wrap-input">
                        <input type="radio"
                            name="tipoAleta"
                            value="op2"
                        />
                        <img src={rocketE} alt="" className="imagem focus-mult-input" />
                    </div>
                </div>
                <span className="title1" >Dimensões da Aleta</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Comprimento (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Largura (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Beirada (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Diagonal (cm)"></span>
                    </div>
                </div>
                <span className="title1" >Quantidade e Materiais</span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Quant. de aletas"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Material"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Massa aleta~(g)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Massa total (g)"></span>
                    </div>
                </div>
                <span className="title1" >Dimensões Finais </span>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Comprimento (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Diâmetro (cm)"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className="mult-input"
                            type="text"
                        />
                        <span className="focus-mult-input" data-placeholder="Massa (g)"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <input
                        className={nomeRocket !== "" ? "has-val input" : "input"}
                        type="text"
                        value={nomeRocket}
                        onChange={e => setNomeRocket(e.target.value)} />
                    <span className="focus-input" data-placeholder="Centro de pressão"></span>
                </div>
                <div className="wrap-mult-input">
                    <div className="wrap-input">
                        <input
                            className={nomeRocket !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nomeRocket}
                            onChange={e => setNomeRocket(e.target.value)} />
                        <span className="focus-input" data-placeholder="Centro de Massa:"></span>
                    </div>
                    <div className="wrap-input">
                        <input
                            className={nomeRocket !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nomeRocket}
                            onChange={e => setNomeRocket(e.target.value)} />
                        <span className="focus-input" data-placeholder="Massa adicional:"></span>
                    </div>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Próximo</button>
                </div>
            </LayoutForms>
        </LayoutComponents>
    );
}