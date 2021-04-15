import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state] = React.useState([
    {
      id: 1,
      userImg: "/images/mo6.jpeg",
      name: "Mohamed M Elsayed",
      time: "2h",
      text:
        "changed his cover photo",
      postImg: "/images/cover.jpeg"
    },
    {
      id: 2,
      userImg: "/images/sh1.jpeg",
      name: "Ahmed Shawki",
      time: "4h",
      text:
        "changed his cover photo",
      postImg: "/images/sh2.jpeg"
    },
    {
      id: 3,
      userImg: "/images/ro1.jpeg",
      name: "Mohamed EL Romy",
      time: "2h",
      text:
      "changed his cover photo",
    postImg: "/images/ro2.jpeg"
    },
    {
      id: 4,
      userImg: "/images/fr1.jpeg",
      name: "Freedy Nabil",
      time: "2h",
      text:
      "changed his cover photo",
    postImg: "/images/fr2.jpeg"
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;