import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "./App.css";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 // State variable to manage dark mode state
 const [darkMode, setDarkMode] = useState(false);

 // Event handler for the Dark Mode button
 const toggleDarkMode = () => {
   setDarkMode(!darkMode);
 };

 // Determine the class based on the darkMode state
 const appClass = darkMode ? "App dark" : "App light";


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
