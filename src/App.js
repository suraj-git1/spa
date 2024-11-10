import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const design = (
    <div className="page">
      <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to homepage</h1>}></Route>
        <Route path="/images" element={<h1>Welcome to images</h1>}> </Route>
        <Route path="/videos" element={<h1>Welcome to Videos</h1>}> </Route>
        <Route path="/about-us" element={<h1>Welcome to About-us</h1>}> </Route>
        <Route path="/contact-us" element={<h1>Welcome to Contact-us</h1>}> </Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
  return design;
}

export default App;