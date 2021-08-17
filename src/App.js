import logo from './logo.svg';
import './App.css';
import Navbar_Main from './Components/Navigation/Navbar_Main';
import Footer_Main from './Components/Footer/Footer_Main';

/**Importing Browser Router as Router, Route, Switch from the react-router-dom package */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/**Importing the Insert_Pet Class from the Owner_Operations package */
import Insert_Pet from './Components/Owner_Operations/Insert_Pet';
/**Importing the ViewOne_Pet Class from the Owner_Operations package */
import ViewOne_Pet from './Components/Owner_Operations/ViewOne_Pet';
/**Importing the ViewAll_Pet Class from the Owner_Operations package */
import ViewAll_Pet from './Components/Owner_Operations/ViewAll_Pet';
/**Importing the Update_Pet Class from the Owner_Operations package */
import Update_Pet from './Components/Owner_Operations/Update_Pet';
/**Importing the Delete_Pet Class from the Owner_Operations package */
import Delete_Pet from './Components/Owner_Operations/Delete_Pet';
/**Importing the Home Class from the Owner_Operations package */
import Home from './Components/Owner_Operations/Home';

function App() {
  return (
    <Router>
            <main className="app">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/insert-pet" component={Insert_Pet}/>
                <Route path="/view-single-pet/:id" component={ViewOne_Pet}/>
                <Route path="/view-all-pet" component={ViewAll_Pet}/>
                <Route path="/update-pet/:id" component={Update_Pet}/>
                <Route path="/delete-pet/:id" component={Delete_Pet}/>
              </Switch>
            </main>
      </Router>
  );
}

export default App;