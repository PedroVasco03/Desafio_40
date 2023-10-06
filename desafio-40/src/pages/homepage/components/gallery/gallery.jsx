import style from './gallery.module.css';

import i1 from './images/imagem1.png'
import i2 from './images/imagem2.png'
import i3 from './images/imagem3.png'
import i4 from './images/imagem4.png'
import i5 from './images/imagem5.png'
import i6 from './images/imagem6.png'
import i7 from './images/imagem7.png'

function Gallery() {
    return(
        <div>
            <div className={style.container}>
                <div className={style.content1}>
                    <div className={style.imgCont}>
                        <img src={i1} alt="" />
                    </div>
                    <div className={style.imgCont}>
                        <img src={i2} alt="" />
                    </div>
                    <div className={style.imgCont}>
                        <img src={i3} alt="" />
                    </div>
                </div>

                <div className={style.content2}>
                    <div className={style.imgCont}>
                        <img src={i4} alt="" />
                    </div>
                    <div className={style.imgCont}>
                        <img src={i5} alt="" />
                    </div>
                    <div className={style.imgCont}>
                        <img src={i6} alt="" />
                    </div>
                    <div className={style.imgCont}>
                        <img src={i7} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Gallery