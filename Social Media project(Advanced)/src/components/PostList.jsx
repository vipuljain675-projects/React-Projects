import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostListComponent() {
  const { postList, fetching } = useContext(PostList);

  return (
    <div className="post-list">
      {fetching ? (
        <LoadingSpinner />
      ) : postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}

export default PostListComponent;
