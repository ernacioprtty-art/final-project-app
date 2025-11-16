import Card from "./Card"
import "./index.css"
import projectorsPic from "../assets/add-ons/projector.jpg"
import speakerPic from "../assets/add-ons/speaker.jpg"
import microphonesPic from "../assets/add-ons/microphones.jpg"
import whiteboardsPic from "../assets/add-ons/whiteboards.jpg"
import signagePic from "../assets/add-ons/signage.jpg"
import Subtotal from "./Subtotal"
import { useState } from "react"

type AddOnsProps = {
  updateTotal: (amount: number) => void;
  updateSelectedItem: (title: string, price: number, quantityChange: number) => void;
};

function AddOns({updateTotal, updateSelectedItem }: AddOnsProps) {
    const [total, setTotal] = useState(0);
    
    const updateLocalTotal = (amount = 0) => {
        setTotal(prevTotal => prevTotal + amount);
        updateTotal(amount);
    }
    return <>

    <h2 className="product-title">Add-ons Selection</h2>

    <div className="container">
        <Card title="Projectors" price={200} itemPic={projectorsPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Speaker" price={35} itemPic={speakerPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Microphones" price={45} itemPic={microphonesPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Whiteboards" price={80} itemPic={whiteboardsPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Signage" price={80} itemPic={signagePic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
    </div>

    <div className="container-subtotal">
        <Subtotal subtotal={total}/>
    </div>
    </>
}

export default AddOns