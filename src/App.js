import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import AddService from "./Pages/Shared/AddService/AddService";
import Header from "./Pages/Home/Header/Header";
import Footer from "./Pages/Home/Footer/Footer";
import Explores from "./Pages/Shared/Explores/Explores";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
// import Manages from "./Pages/Manages/Manages/Manages";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route path='/addedservice'>
            <AddService></AddService>
          </Route>

          <PrivateRoute path="/explores">
            <Explores />
          </PrivateRoute>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
