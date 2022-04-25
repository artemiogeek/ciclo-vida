import './App.css';

import Montaje from './components/Montaje';
import Actualizacion from './components/Actualizacion';
import Desmontaje from './components/Desmontaje';

function App() {
  return (
    <div className="App">
     <Montaje/>
     <Actualizacion/>
     <Desmontaje/>
    </div>
  );
}

export default App;
