import imgs from '../../assets/images/Фото главное.jpg'
import './Catalog.scss'

export const Catalog = () => {

    return (
         <>
            <section>
                <div className="container">
                    <img className='imgs' src={imgs} alt="" />
                    <h2>Новые поступления
                    в этом сезоне</h2>
                    <h4 className='rip'>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</h4>
                </div>
            </section>
        </>
     )
 }
export default Catalog