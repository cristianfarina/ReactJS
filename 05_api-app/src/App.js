import './App.css';
import React, { useState , useEffect } from 'react';
import CardCharacter from './componets/cardCharacter';

function App() {
  const [characters, setCharacters] = useState([])
  
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch("https://apisimpsons.fly.dev/api/personajes")
      const data = await res.json()

      setCharacters(data.docs)
    }

    fetchData()
  }, [])
  
  console.log(characters);

  return (
    <>
      <h1>LOS SIMPSONS</h1>
      <section className='cards'>
      {characters.map((character,id)=>{
        return (
          <CardCharacter key={id}
          character={character}/>
        )
      })}
      </section>
    </>
  );
}

export default App;
