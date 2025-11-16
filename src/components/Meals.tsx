import { useState, type ChangeEvent } from 'react'; // Import useState and ChangeEvent type
import "./index.css";
import Subtotal from "./Subtotal";

// Type for meal selections
interface MealSelections {
  breakfast: boolean;
  highTea: boolean;
  lunch: boolean;
  dinner: boolean;
}

type MealsProps = {
  updateTotal: (amount: number) => void;
  updateSelectedItem: (title: string, price: number, quantityChange: number) => void;
};

function Meals({ updateTotal, updateSelectedItem }: MealsProps) {
  // State for number of people (default: 1)
  const [people, setPeople] = useState<number>(1);
  
  // State for selected meals
  const [selectedMeals, setSelectedMeals] = useState<MealSelections>({
    breakfast: false,
    highTea: false,
    lunch: false,
    dinner: false,
  });

  // Meal prices
  const mealPrices: Record<keyof MealSelections, number> = {
    breakfast: 50,
    highTea: 25,
    lunch: 65,
    dinner: 70,
  };

  // Mapping keys to proper names
  const properMealNames: Record<keyof MealSelections, string> = {
    breakfast: "Breakfast",
    highTea: "High Tea",
    lunch: "Lunch",
    dinner: "Dinner",
  };

  // Update number of people (min: 1)
  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    const diffPeople = value - people;
    setPeople(value);

    if (diffPeople === 0) return;

    // Single loop: Update total and items incrementally for each selected meal
    for (const meal in selectedMeals) {
      const isSelected = selectedMeals[meal as keyof MealSelections];
      if (isSelected) {
        const price = mealPrices[meal as keyof MealSelections];
        const amountDiff = price * diffPeople;
        updateTotal(amountDiff);
        updateSelectedItem(
          properMealNames[meal as keyof MealSelections],
          price,
          diffPeople
        );
      }
    }
  };

  // Update selected meals
  const handleMealChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const mealKey = name.replace('meals-', '') as keyof MealSelections;
    const price = mealPrices[mealKey];
    const quantityChange = checked ? people : -people;

    setSelectedMeals(prev => ({ ...prev, [mealKey]: checked }));

    // Add or remove from total and selected items
    const amount = price * Math.abs(quantityChange);
    updateTotal(checked ? amount : -amount);
    updateSelectedItem(properMealNames[mealKey], price, quantityChange);
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    for (const meal in selectedMeals) {
      if (selectedMeals[meal as keyof MealSelections]) {
        total += mealPrices[meal as keyof MealSelections] * people;
      }
    }
    return total;
  };

  return (
    <>
      <h2 className="product-title">Meals Selection</h2>
      <div className="container">
        <div className="meals-container">
          {/* Number of people input */}
          <div className="customer">
            <label htmlFor="meals-customer">Number of People: </label>
            <input
              type="number"
              name="meals-customer"
              id="meals-customer"
              min="1"
              value={people}
              onChange={handlePeopleChange}
            />
            <br />
          </div>

          {/* Breakfast and High Tea options */}
          <div className="meals-one">
            <input
              type="checkbox"
              name="meals-breakfast"
              id="meals-breakfast"
              checked={selectedMeals.breakfast}
              onChange={handleMealChange}
            />
            <label htmlFor="meals-breakfast">
              Breakfast
              <br />
              $50
            </label>
            <input
              type="checkbox"
              name="meals-highTea"
              id="meals-highTea"
              checked={selectedMeals.highTea}
              onChange={handleMealChange}
            />
            <label htmlFor="meals-highTea">
              High Tea
              <br />
              $25
            </label>
          </div>

          {/* Lunch and Dinner options */}
          <div className="meals-two">
            <input
              type="checkbox"
              name="meals-lunch"
              id="meals-lunch"
              checked={selectedMeals.lunch}
              onChange={handleMealChange}
            />
            <label htmlFor="meals-lunch">
              Lunch <br />
              $65
            </label>
            <input
              type="checkbox"
              name="meals-dinner"
              id="meals-dinner"
              checked={selectedMeals.dinner}
              onChange={handleMealChange}
            />
            <label htmlFor="meals-dinner">
              Dinner
              <br />
              $70
            </label>
          </div>
        </div>
      </div>

      {/* Display total */}
      <div className="container-subtotal">
        <Subtotal subtotal={calculateTotal()} />
      </div>
    </>
  );
}

export default Meals;