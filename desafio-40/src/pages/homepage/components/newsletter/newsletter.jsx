import style from './newsletter.module.css'

function Newsletter() {
    return(
        <div>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.Textdesc}>
                        <h3>newsletter exclusiva</h3>
                        <h2>Workspace inspiration</h2>
                        <p>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>
                    </div>
                    
                    <div className={style.form}>
                        <form>
                            <input type="email" placeholder="Digite seu e-mail" />
                            <button className={style.button} type="submit">quero receber</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Newsletter