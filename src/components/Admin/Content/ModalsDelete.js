import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteListUser } from '../../../Service/apiService';
import { toast } from 'react-toastify';

function ModalsDelete(props) {
    const { showDelete, setShowDelete, dataDelete } = props;

    const handleClose = () => {
        setShowDelete(false);
    };

    const handleSubmitDelete = async() => {
          let data = await DeleteListUser( dataDelete.id);
    console.log("data:", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      props.setCurrentPage(1);
      await props.fetchListAllUserPaginate(1);
    } else if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>

      <Modal show={showDelete} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User ?</Modal.Title>
        </Modal.Header>
              <Modal.Body>Are you sure delete this user <b>{ dataDelete.email}</b> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-danger' onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" className='btn btn-success' onClick={handleSubmitDelete}>
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalsDelete;