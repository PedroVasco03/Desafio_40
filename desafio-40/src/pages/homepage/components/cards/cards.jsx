import style from './cards.module.css'
import i1 from './images/icon.svg'
import i2 from './images/icon1.svg'
import i3 from './images/icon2.svg'
import i4 from './images/icon3.svg'

function Card() {
    return(
        <div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.imgCont}>
                        <img src={i4} alt="" />
                    </div>
                    <div className={style.textCont}>
                        <h1>As últimas inovações</h1>
                        <p>Mantenha-se atualizado com as mais recentes tecnologias e acessórios que vão revolucionar a forma como você trabalha.</p>
                    </div>
                </div>

                <div className={style.card}>
                <div className={style.imgCont}>
                        <img src={i3} alt="" />
                    </div>
                    <div className={style.textCont}>
                        <h1>Reviews detalhadas</h1>
                        <p>Analisamos os produtos mais populares do mercado para que você possa fazer as escolhas certas.</p>
                    </div>
                </div>

                <div className={style.card}>
                <div className={style.imgCont}>
                        <img src={i2} alt="" />
                    </div>
                    <div className={style.textCont}>
                        <h1>Dicas de organização</h1>
                        <p>Aumente sua eficiência e proteja sua saúde com conselhos especializados sobre ergonomia e organização.</p>
                    </div>
                </div>

                <div className={style.card}>
                <div className={style.imgCont}>
                        <img src={i1} alt="" />
                    </div>
                    <div className={style.textCont}>
                        <h1>Ofertas exclusivas</h1>
                        <p>Como membro da nossa comunidade, você terá acesso a descontos e promoções especiais em produtos selecionados.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;