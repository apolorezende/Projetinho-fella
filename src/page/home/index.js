import { Link } from "react-router-dom";

export function Home() {
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
