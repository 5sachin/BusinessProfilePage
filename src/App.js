import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" Component={ProfilePage} />
        <Route path="*" component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
