import Navbar from "./component/navBar/NavBar";
import NavigationRoute from "./routes/NavigationRoute";
import { BrowserRouter as Router } from 'react-router-dom';



function App(){
  return(
    <Router>
      <Navbar/>
      <NavigationRoute />
    </Router>
  )
}
export default App