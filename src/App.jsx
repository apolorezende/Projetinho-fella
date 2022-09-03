import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { Abount } from "./page/abount";
import { Contact } from "./page/contact";


const rootElement = document.getElementById("root");

export function App() {
  render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abount" element={<Abount />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
}

