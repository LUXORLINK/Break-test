import './Card.scss'


 export const Card = ({ src, title, price}) => {
        return (
            <div className="card">
                <div className="card__img">
                    <img src={src} alt=''/>
                </div>
                <h4 className="card__title">{title}</h4>
                <h4 className="card__price">$129</h4>
            </div>
        )
    }
    
export default Card