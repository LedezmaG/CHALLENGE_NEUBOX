import './App.css';
import { Challenge01 } from './Challenge01';
import { Challenge02 } from './Challenge02';

function App() {
  return (
    <div className="container">
      <div className="row" >
        <div className="col-12 text-center" >
          <h1> Challenge</h1>
        </div>
        <div className="col-12 col-lg-6 text-center" >
          <h4> Encrypted </h4>
          <Challenge01 />
        </div>
        <div className="col-12 col-lg-6 text-center" >
          <h4> Game scores </h4>
          <Challenge02 />
        </div>
      </div>
    </div>
  );
}

export default App;
