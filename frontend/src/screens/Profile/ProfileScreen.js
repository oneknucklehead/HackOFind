import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import "./ProfileScreen.css";
const ProfileScreen = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const name = userInfo.name;
  const email = userInfo.email;
  const [bio, setBio] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [blogs, setBlogs] = useState("");
  const [twitter, setTwitter] = useState("");

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const inputRef = useRef();
  const triggerFileSelectPopUp = () => inputRef.current.click();
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  return (
    <>
      <form className="profileForm">
        <div className="container-cropper">
          {image ? (
            <>
              <Cropper
                style={{ "z-index": 1 }}
                className="cropper-component"
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
              <Slider />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="container-buttons">
          <input
            type="file"
            accept="images/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={onSelectFile}
          ></input>
          <Button
            variant="contained"
            color="primary"
            onClick={triggerFileSelectPopUp}
          >
            Choose
          </Button>
          <Button variant="contained" color="secondary">
            Update
          </Button>
        </div>
        <h2>Details:</h2>
        <div className="profileContainer">
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            disabled
            placeholder={userInfo.name}
          ></input>
          <label>Name:</label>
        </div>
        <div className="profileContainer">
          <input
            type="email"
            name="email"
            value={email}
            disabled
            placeholder={userInfo.email}
          ></input>
          <label>E-mail:</label>
        </div>
        <div className="profileContainer">
          <input
            type="text"
            name="bio"
            autoComplete="off"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
            placeholder="Something about you"
          ></input>
          <label>Bio:</label>
        </div>
        <h2>Links:</h2>
        <div className="profileContainer">
          <input
            type="text"
            name="linkedIn"
            autoComplete="off"
            value={linkedIn}
            onChange={(e) => {
              setLinkedIn(e.target.value);
            }}
            placeholder="Enter profile link"
          ></input>
          <label>LinkedIn:</label>
        </div>
        <div className="profileContainer">
          <input
            type="text"
            name="github"
            autoComplete="off"
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            placeholder="Enter profile link"
          ></input>
          <label>Github:</label>
        </div>
        <div className="profileContainer">
          <input
            type="text"
            name="Blogs"
            autoComplete="off"
            value={blogs}
            onChange={(e) => {
              setBlogs(e.target.value);
            }}
            placeholder="Enter profile link"
          ></input>
          <label>Blogs:</label>
        </div>
        <div className="profileContainer">
          <input
            type="text"
            name="twitter"
            autoComplete="off"
            value={twitter}
            onChange={(e) => {
              setTwitter(e.target.value);
            }}
            placeholder="Enter profile link"
          ></input>
          <label>Twitter:</label>
        </div>
      </form>
    </>
  );
};

export default ProfileScreen;
