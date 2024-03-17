import Image from './image';
import Description from './description';
import ButtonDetalles from './Buttondetalles';
import ButtonAddCart from './ButtonAddCart';
import CardItem from '../components Items/CardItem'
const CardItem = () => {
    return (  
        <div className="CardItems">
            <Image/>
            <Description/>
            <div className='buttons'>
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
        </div>
    );
}
 

export default CardItem;