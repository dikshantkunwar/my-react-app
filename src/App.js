import { useState } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import Description from './components/Description';
import FileImage from './components/FileImage';
import Heading from './components/Heading';

function App() {
  const [favoriteType, setFavoriteType] = useState('')
  return (
    <div className="App">
      <Heading />
      <FileImage />
      <Description />

      <ButtonContainer favType = {favoriteType} setFavType={setFavoriteType}/>
      { favoriteType && <div>
        <h1> Favorite Part of plant</h1>
        <h2>{favoriteType}</h2>
      </div> }
    </div>
  );
}

export default App;
