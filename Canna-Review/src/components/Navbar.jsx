import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-green-700 text-white">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/help">Help</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
