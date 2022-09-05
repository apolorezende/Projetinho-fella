import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { Setup } from "./page/setup";
import { GlobalStyle } from "./styles/global";


const rootElement = document.getElementById("root");

export function App() {
  render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/project" element={<Home />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/ability" element={<Home />} />
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>,
  rootElement
);
}

