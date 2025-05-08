import { useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
  ));

  return (
    <>
      <main>
        <div className="dice-container">{diceElements}</div>
        <button onClick={rollDice} className="roll-dice">
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
