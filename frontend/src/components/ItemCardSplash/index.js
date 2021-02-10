import './ItemCardSplash.css'

const ItemCardSplash = ({item}) => {

    return (
        <div className='item-card-splash-container'>
            <div className="item-card-splash" style={{backgroundImage: `url(${item.photos[0]})`}}>
            </div>
        </div>
    )
}

export default ItemCardSplash;
