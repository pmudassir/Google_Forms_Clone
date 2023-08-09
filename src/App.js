import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;