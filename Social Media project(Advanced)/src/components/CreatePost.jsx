import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      tags: tagsRef.current.value.split(",").map((t) => t.trim()),
      reactions: 0,
    };

    addPost(post);
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input ref={titleRef} type="text" placeholder="Title" required />
      <textarea ref={bodyRef} placeholder="Body" required />
      <input ref={tagsRef} type="text" placeholder="Tags (comma separated)" />

      <button className="btn btn-primary mt-3">Create Post</button>
    </form>
  );
}

export default CreatePost;
