import Header from './cmp/Header/Header';
import Footer from  './cmp/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from "./cmp/Homepage/Homepage";
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const design = (
    <>
      <Router>
        <Header />
          <div>
                <Routes>
                    <Route exact path="/" element={<Homepage />}></Route>
                    <Route exact path="/blog" element={"blog"}></Route>
                    <Route exact path="/robotics" element={"robotics"}></Route>
                    <Route exact path="/softwate-engineering" element={"softwae engineering"}></Route>
                    <Route exact path="/app-development" element={"app-development"}></Route>
                </Routes>
          </div>
      </Router>
    </>
    
  );
  return design;
}

export default App;