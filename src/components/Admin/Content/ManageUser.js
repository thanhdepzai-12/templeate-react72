import React, { useEffect, useState } from "react";
import Modals from "./Modals";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

import { GetAllListUser, PaginateListUser } from "../../../Service/apiService";
import ModalsUpdate from "./ModalsUpdate";
import ModalsViewUser from "./ModalsViewUser";
import ModalsDelete from "./ModalsDelete";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = () => {
  const LIMIT_USER = 5;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalsCu, setShowModalsCu] = useState();
  const [showModalsUd, setShowModalsUd] = useState();
  const [showModalsVie, setShowModalsVie] = useState();
  const [showModalsDelete, setShowModalsDelete] = useState();
  const [listUser, getListUser] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataVie, setDataVie] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const handleShowModalscu = (e) => {
    setShowModalsCu(true);
  };
  useEffect(() => {
    fetchListAllUserPaginate(1);
  }, []);
  const fetchListAllUser = async () => {
    let res = await GetAllListUser();
    if (res.EC === 0) {
      getListUser(res.DT);
    }
  };
  const fetchListAllUserPaginate = async (page) => {
    let res = await PaginateListUser(page, LIMIT_USER);
    if (res.EC === 0) {
      getListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  const handleClickUpdate = (user) => {
    setShowModalsUd(true);
    setDataUpdate(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const handleViewUser = (viewUser) => {
    setShowModalsVie(true);
    setDataVie(viewUser);
  };
  const handleDeleteUser = (deleteUser) => {
    setShowModalsDelete(true);
    setDataDelete(deleteUser);
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="mananger-content">
        <div className="create-user">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              handleShowModalscu(e);
            }}
          >
            <FcPlus />
            add new user
          </button>
        </div>
        <div className="table-user">
          <TableUserPaginate
            pageCount={pageCount}
            handleDeleteUser={handleDeleteUser}
            fetchListAllUserPaginate={fetchListAllUserPaginate}
            handleViewUser={handleViewUser}
            handleClickUpdate={handleClickUpdate}
            listUser={listUser}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Modals
          fetchListAllUserPaginate={fetchListAllUserPaginate}
          show={showModalsCu}
          setShow={setShowModalsCu}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalsUpdate
          resetUpdateData={resetUpdateData}
          fetchListAllUserPaginate={fetchListAllUserPaginate}
          dataUpdate={dataUpdate}
          showUd={showModalsUd}
          setShowUd={setShowModalsUd}
           currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalsViewUser
          showVie={showModalsVie}
          setShowVie={setShowModalsVie}
                  dataVie={dataVie}
                   currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalsDelete
          showDelete={showModalsDelete}
          setShowDelete={setShowModalsDelete}
          fetchListAllUserPaginate={fetchListAllUserPaginate}
                  dataDelete={dataDelete}
                   currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
