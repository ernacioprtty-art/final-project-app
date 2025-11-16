import "./Card.css"
import { useState } from "react";

type CardProps = {
  title?: string;
  capacity?: string;
  price?: number;
  itemPic?: string;
  updateTotal: (amount: number) => void;
  updateSelectedItem: (title: string, price: number, quantityChange: number) => void;
};

function Card({title = "", capacity, price = 0, itemPic, updateTotal, updateSelectedItem}: CardProps) {
    const [count, setCount] = useState(0);

    const increment = () => {
        updateTotal(price); // Add the price to the total
        updateSelectedItem(title, price, 1);
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            updateTotal(-price);
            updateSelectedItem(title, price, -1);
            setCount(prevCount => prevCount - 1)
        }
    };

    return(
        <>
        <div className="card">
            <img src={itemPic} alt="Profile picture" height={172} width={172} className='card-image'/>
            <h3 className='card-title'>{title}</h3>
            <h3 className="card-capacity">{capacity}</h3>
            <p className='card-text'>${price}</p>
            <div className="increment-decrement">
                <button className="decrement" onClick={decrement} disabled={count <= 0}> - </button>
                <p className="per-unit"> {count} </p>
                <button className="increment" onClick={increment}> + </button>
            </div>
        </div>
        </>
    );
}

export default Card