import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
