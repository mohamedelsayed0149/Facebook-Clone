import React, { useState } from "react";

const SideBar = () => {
  const [state] = useState([
    { id: 1, img: "/images/fawad1.jpg", name: "Flutter Development" },
    { id: 2, img: "/images/fawad2.jpg", name: "PHP Development" },
    { id: 3, img: "/images/fawad3.jpg", name: "React Native Development" },
    { id: 4, img: "/images/fawad4.jpg", name: "Node JS Development" },
    { id: 5, img: "/images/imran1.jpg", name: "Vue JS Development" },
    { id: 6, img: "/images/imran2.jpg", name: "React Development" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.img} alt="group img" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))} 
    </div>
  );
};

export default SideBar;