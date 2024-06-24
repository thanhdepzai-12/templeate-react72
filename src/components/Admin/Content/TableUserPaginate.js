import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';




const TableUserPaginate = (props) => {
  const { listUser, handleClickUpdate, handleViewUser, handleDeleteUser, fetchListAllUserPaginate,pageCount } = props;

    

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    fetchListAllUserPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };



  return (
    <div>
      <table className="table table-hover table-all-user">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Avatar</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return(
                <tr key={`key-table:${index}`}>
                  <td>{item.id}</td>
                  {item && item.image ?  <td><img className="avatarUser" src={`data:image/jpeg;base64,${item.image}`} alt="" /></td> : <td></td>}
                 
                  <td >{ item.username}</td>
                  <td>{ item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-secondary" onClick={()=>handleViewUser(item)}>view</button>
                    <button className="btn btn-warning mx-3" onClick={()=> handleClickUpdate(item)}>update</button>
                    <button className="btn btn-danger" onClick={()=> handleDeleteUser(item)}>delete</button>
                  </td>
                </tr>
              )
            })}
          {listUser && listUser.length === 0 && 
            <td colSpan={"4"}>No users are available</td>
          }
          </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
        </div>
    </div>
  );
};

export default TableUserPaginate;
