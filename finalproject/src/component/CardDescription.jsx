import './CardDescription.css'
function CardDescription() {
    return (
        <div className='intro' style={{
            textAlign: 'center',
        }}>
            <div className='big'>Delicious Food, Delivered To You</div>
            <div className='small'>
                <div>
                    Choose your favoritet meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
                </div>
                <div>
                    All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chiefs!
                </div>
            </div>
        </div>
    );
}

export default CardDescription