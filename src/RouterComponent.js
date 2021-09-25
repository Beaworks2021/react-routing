import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServicesDetails";

function RouterComponent() {
  return (
    <div>
      <Router>
      <div className='nav-body'>
        <Link className='nav-link' to="/">Home</Link>
        <br/>
        <Link className='nav-link' to="/About">About</Link>
        <br/>
        <Link className='nav-link' to="/Contact">Contact</Link>
        <br/>
        <Link className='nav-link' to="/Services">Services</Link>
      </div>

        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/serviceDetails/:id" component={ServicesDetails} />
      </Router>
    </div>
  );
}

export default RouterComponent;
