import './App.css';
import ButtonContainer from './components/ButtonContainer';
import Description from './components/Description';
import FileImage from './components/FileImage';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading />
      <FileImage />
      <Description />

      <ButtonContainer />

    </div>
  );
}

export default App;
