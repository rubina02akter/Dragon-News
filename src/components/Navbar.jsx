import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div></div>

      <div className="space-x-5">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/career'>Career</Link>
      </div>

      <div className="login">
        <div className="flex gap-2 items-center">
          <div><img src={userIcon} alt="" /></div>
          <button className="btn btn-neutral">Login</button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;