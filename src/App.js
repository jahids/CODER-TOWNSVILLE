import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Mainsec from './component/mainsection/Mainsec';
import Home from './Home/Home';
import Thome from './component/TransferHome/Thome';
import Notfound from './Notfound/Notfound';
import Me from './component/About/Me';
import Tcontact from './component/TwoContact/Tcontact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <Switch>

              <Route exact path="/">

              <Thome></Thome>

              </Route>

              <Route exact path="/mainsec">

                <Mainsec></Mainsec>

              </Route>


              <Route exact path="/home">

                <Thome></Thome>

                </Route>


                <Route exact path="/about">

                    <Me></Me>
                  </Route>

                  <Route exact path="/contact">

                   <Tcontact></Tcontact>

                    </Route>


              <Route exact path="/notfound">

                <Notfound></Notfound>

              </Route>

              <Route exact path="*">

              <Notfound></Notfound>
              

              </Route>


       </Switch>

       <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
