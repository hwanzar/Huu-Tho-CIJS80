import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Banner from './component/Banner';
import CardDescription from './component/CardDescription';
import { UserContext } from './component/UserContext';
import { useState } from 'react';
import Bill from './component/Bill';

function App() {
  const [cartCount, setCartCount] = useState(0); // add state for cartCount
  const [billShown, setBillShown] = useState(false);
  let app;
  if(billShown){
    app = "blur"
  }
  else{
    app = "App"
  }
  return (
    <UserContext.Provider value={{ cartCount, setCartCount ,billShown, setBillShown }}> {/* pass value to UserContext.Provider */}
      <div className="App">
        <Header />
        <Banner />
        <CardDescription />
        <Menu />
        <Bill />
      </div>
    </UserContext.Provider>
  );
}

export default App;
