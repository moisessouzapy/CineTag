 import styles from './NaoEncontrada.module.css'; 

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você porcura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;