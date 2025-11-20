function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-white">Social Media</h3>
      <div>
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="btn btn-outline-light mx-2">Login</button>
        <button className="btn btn-warning">Sign-up</button>
      </div>
    </nav>
  );
}

export default Header;
