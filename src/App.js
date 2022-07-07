

import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import './styles.css';

// create Header CreateArea Note components [x]
// jsx header creat area and notes [x]

function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Note /> 
    </div>
  );
}

export default App;
