import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Pages/ContactList/ContactList";
import AddEditContactList from "./Pages/AddEditContactList/AddEditContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path={["/addcontact", "/editcontact/:id"]}
          component={AddEditContactList}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
