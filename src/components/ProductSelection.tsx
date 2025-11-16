import "./ProductSelection.css"
import Venue from "./Venue"
import AddOns from "./AddOns"
import Meals from "./Meals"
import { useState } from "react"
import ShowDetails from "./ShowDetails"

type SelectedItem = {
  title: string;
  price: number;
  quantity: number;
  subtotal: number;
};

function ProductSelection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

    // Function to update the total cost
    const updateTotal = (amount: number) => {
        setTotalCost(prevTotal => prevTotal + amount);
    };

    const updateSelectedItem = (title: string, price: number, quantityChange: number) => {
        setSelectedItems(prevItems => {
            const existingItem = prevItems.find(item => item.title === title);

        if (existingItem) {
            const updatedQuantity = existingItem.quantity + quantityChange;

        if (updatedQuantity <= 0) {
            return prevItems.filter(item => item.title !== title);
        }

        return prevItems.map(item =>
          item.title === title
            ? {
                ...item,
                quantity: updatedQuantity,
                subtotal: updatedQuantity * price,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          title,
          price,
          quantity: quantityChange,
          subtotal: quantityChange * price,
        },
      ];
    });
  };

    const handleClose = () => {
        setModalOpen(false);
    }
    return (
        <>
        <div className="navbar">
            <ul>
                <h3>Conference Expense Planner</h3>
                <li>Venue</li>
                <li>Add Ons</li>
                <li>Meals</li>
                <button onClick={() => {setModalOpen(true)}}>
                    Show Details
                </button>
            </ul> 
        </div>

        {modalOpen && (<ShowDetails
        selectedItems={selectedItems}
        totalCost={totalCost}
        onClose={handleClose}/>)}
        
        <Venue updateTotal={updateTotal} updateSelectedItem={updateSelectedItem} />
        <AddOns updateTotal={updateTotal} updateSelectedItem={updateSelectedItem} />
        <Meals updateTotal={updateTotal} updateSelectedItem={updateSelectedItem} />
        </>
    );
}

export default ProductSelection