'use client'
import React from "react";

function Avatar({ data }) {
  return (
    <>
      {data.map((items, index) => {
        return (

        <label
          htmlFor="ai_avatar-1"
          className="avatar-single selected"
          key={items?.id}
        >
          <div className="avatar">
            <img
              src={items?.preview_image_9_16}
            //   src="./assets/avatar1.jpeg"
              width="150px"
              height="160px"
              alt={items?.video_scene}
            />
          </div>
          <div className="h-100 w-100 avatar-content d-flex flex-column justify-content-between p-3">
            <div className="pt-4 checkedicon">
              <img src="./assets/checked-avatar.svg" />{" "}
            </div>
            <div className="name">{items?.video_scene}</div>
          </div>
          <input type="radio" name="ai_avatar" id="ai_avatar-1" />
        </label>
        )
      })}
    </>
  );
}

export default Avatar;
