import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav__container">
            <span className="nav-logo">Booking</span>
            <div className="nav-items">
                <button className="nav-btn">Đăng ký</button>
                <button className="nav-btn">Đăng nhập</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar