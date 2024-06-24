import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { PostCreateUser } from "../../../Service/apiService";

const Modals = (props) => {
  const { show, setShow} = props;
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewPhotos("");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewPhotos, setPreviewPhotos] = useState("");

  const handlePreviewImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewPhotos(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };


  const handleSubmitInfo = async () => {

    let data = await PostCreateUser(email, password, username, role, image);
    console.log("data:", data)
    if (data && data.EC === 0) {
      toast.success(data.EM)
      handleClose()
      props.setCurrentPage(1);
      await props.fetchListAllUserPaginate(1);
    } else if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button> */}

      <Modal
        className="modal-add-user"
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
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
                value={role}
              >
                <option value="USER">USER</option>
                <option   value="ADMIN">ADMIN</option>
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
          <Button variant="primary" onClick={() => handleSubmitInfo()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
