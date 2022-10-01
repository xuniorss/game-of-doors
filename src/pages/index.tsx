import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "../../node_modules/next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)

    return (
        <div className={styles.formulario} >
            <div>
                <Cartao bgcolor="#C0392C">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Qtde portas1?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
                </Cartao>
                <Cartao bgcolor="#28A085">
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}
