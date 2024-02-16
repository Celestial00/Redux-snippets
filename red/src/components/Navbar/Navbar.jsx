import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav-Logo">
        <h2>Orange.</h2>
      </div>

      <div className="Nav-Menu">
        <div className="menu-tags">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About us</Link>
            </li>

          </ul>
        </div>

        <div className="join-now-btn">

            <p>Join Now!</p>

        </div>
      </div>
    </div>
  );
}
