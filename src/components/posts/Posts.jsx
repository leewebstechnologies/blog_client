import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Post post={p} key={i} />
      ))}
    </div>
  );
};

export default Posts;
