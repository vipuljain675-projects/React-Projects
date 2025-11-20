import { Link } from "react-router-dom";

function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="sidebar">
      <Link
        to="/"
        className={selectedTab === "Home" ? "active tab" : "tab"}
        onClick={() => setSelectedTab("Home")}
      >
        Home
      </Link>

      <Link
        to="/create-post"
        className={selectedTab === "CreatePost" ? "active tab" : "tab"}
        onClick={() => setSelectedTab("CreatePost")}
      >
        Create Post
      </Link>
    </div>
  );
}

export default Sidebar;
