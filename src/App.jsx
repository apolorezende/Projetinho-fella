import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { Contact } from "./page/contact";
import { GlobalStyle } from "./styles/global";


const rootElement = document.getElementById("root");

export function App() {
  render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/project" element={<Home />} />
      <Route path="/setup" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>,
  rootElement
);
}

