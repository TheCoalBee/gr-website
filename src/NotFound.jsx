import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main id="NotFound">
        not found <br />
        <Link to="/">Go home</Link>
    </main>
  );
}

export default NotFound;