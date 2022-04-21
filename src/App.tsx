import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState{
  people: { 
  name: string
  age: number
  url: string
  note?: string
  }[]
}

function App() {

    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Lebron James",
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            age: 36,
            note: "Allergic to staying on the same team"

        },

        {
            name: "Kobe Bryant",
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png",
            age: 40,
            note: "Best ever"
        }

    ])




  return (
    <div className="App">
          <h1>People invited to my Party</h1>
          <List people={people}/>
          <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
