import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  // Handle both cases:
  // Case 1 → post.reactions is a number
  // Case 2 → post.reactions is an object {likes, dislikes}
  let reactionsText = "";

  if (typeof post.reactions === "number") {
    reactionsText = `This post has been reacted by ${post.reactions} people.`;
  } else if (typeof post.reactions === "object") {
    const likes = post.reactions.likes || 0;
    const dislikes = post.reactions.dislikes || 0;
    reactionsText = `Likes: ${likes} • Dislikes: ${dislikes}`;
  }

  return (
    <div
      className="card post-card"
      style={{ width: "30rem", position: "relative" }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags?.map((tag, index) => (
          <span key={index} className="badge bg-primary mx-1">
            {tag}
          </span>
        ))}

        <div className="alert alert-success mt-3">{reactionsText}</div>
      </div>

      <button
        onClick={() => deletePost(post.id)}
        className="btn btn-danger"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <AiFillDelete size={22} />
      </button>
    </div>
  );
}

export default Post;
