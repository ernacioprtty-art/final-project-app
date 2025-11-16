import Card from "./Card"
import "./index.css"
import conferenceRoomPic from '../assets/venues/conference.jpg'
import auditoriumHallPic from '../assets/venues/auditorium.jpg'
import presentationRoomPic from '../assets/venues/presentation.jpg'
import largeMeetingRoomPic from '../assets/venues/large-meeting.jpeg'
import smallMeetingRoomPic from '../assets/venues/small-meeting.jpeg'
import Subtotal from "./Subtotal"
import { useState } from "react"

type VenueProps = {
  updateTotal: (amount: number) => void;
  updateSelectedItem: (title: string, price: number, quantityChange: number) => void;
};

function Venue({updateTotal, updateSelectedItem }: VenueProps) {
    const [total, setTotal] = useState(0);

    const updateLocalTotal = (amount = 0) => {
        setTotal(prevTotal => prevTotal + amount);
        updateTotal(amount); // Also update global total
    }
    return <>

    <h2 className="product-title">Venue Room Selection</h2>

    <div className="container">
        <Card title="Conference Room" capacity="(Capacity: 15)" price={1500} itemPic={conferenceRoomPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Auditorium Hall" capacity="(Capacity: 200)" price={5500} itemPic={auditoriumHallPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Presentation Room" capacity="(Capacity: 50)" price={3500} itemPic={presentationRoomPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Large Meeting Room" capacity="(Capacity: 10)" price={1000} itemPic={largeMeetingRoomPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
        <Card title="Small Meeting Room" capacity="(Capacity: 5)" price={800} itemPic={smallMeetingRoomPic} updateTotal={updateLocalTotal} updateSelectedItem={updateSelectedItem}/>
    </div>

    <div className="container-subtotal">
        <Subtotal subtotal={total}/>
    </div>
    
    </>
}

export default Venue