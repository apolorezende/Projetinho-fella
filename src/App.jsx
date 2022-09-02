import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Portifolio</h1>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/expenses">Abount</Link>
      </nav>
    </div>
  );
}
