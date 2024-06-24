import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalsViewUser = (props) => {
  const { showVie, setShowVie, dataVie} = props;
  const handleClose = () => {
    setShowVie(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("");
    setImage("");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewPhotos, setPreviewPhotos] = useState("");

  useEffect(() => {
      if (!_.isEmpty(dataVie)) {
        setEmail(dataVie.email)
      setUsername(dataVie.username);
      setRole(dataVie.role);
      setImage("") 
      if (dataVie && dataVie.image) {
        setPreviewPhotos(`data:image/jpeg;base64,${dataVie.image}`)
      } else {
        setPreviewPhotos("")
      }
    }
  }, [dataVie]);

  const handlePreviewImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewPhotos(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button> */}

      <Modal
        className="modal-add-user"
        show={showVie}
        onHide={handleClose}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>View New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, studio, or floor"
                value={username}
                
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="USER">USER</option>
                <option>ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-up-load" htmlFor="labelUpload">
                <FcPlus />
                Upload Image
              </label>
              <input
                id="labelUpload"
                type="file"
                hidden
                onChange={(e) => handlePreviewImg(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewPhotos ? (
                <img src={previewPhotos} alt="error" />
              ) : (
                <span>preview image</span>
              )}
            </div>
            <div className="col-12"></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalsViewUser;
