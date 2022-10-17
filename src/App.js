// import logo from './logo.svg';
// import './App.css';
import "assets/scss/style.scss";
// import { renderIntoDocument } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPages from "pages/LandingPages";
import Example from 'pages/Example'
import Checkout from 'pages/Checkout'
// import Examplee from 'pages/Examplee'
// import Examplebread from "pages/Examplebread";
import DetailPage from "pages/DetailPage";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
      <switch>
        <Route exact path="/" component={LandingPages}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        </switch>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
        
//         <Route path="/example" component={Example}></Route>
//       </Router>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Router>
        
//         <Route path="/examplee" component={Examplee}></Route>
//       </Router>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Router>
        
//         <Route path="/examplebread" component={Examplebread}></Route>
//       </Router>
//     </div>
//   );
// }

export default App;
