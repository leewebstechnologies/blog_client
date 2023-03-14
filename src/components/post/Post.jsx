import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1655671051848-28022f1dc3f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Lecture</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        aperiam doloribus nulla facilis reiciendis fuga nisi quaerat ipsam ad
        dolorem, eum, accusantium velit earum cum doloremque error ab impedit
        mollitia! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Tempore aperiam doloribus nulla facilis reiciendis fuga nisi quaerat
        ipsam ad dolorem, eum, accusantium velit earum cum doloremque error ab
        impedit mollitia! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempore aperiam doloribus nulla facilis reiciendis fuga nisi
        quaerat ipsam ad dolorem, eum, accusantium velit earum cum doloremque
        error ab impedit mollitia!
      </p>
    </div>
  );
};

export default Post;
