import React from "react";
import lady from "../assets/admin/lady.png";
import table from "../assets/admin/table.png";
import background from "../assets/admin/background.png";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  let data = [
    {
      fullName: "Jenny Wilson",
      email: "jennywilson123@gmail.com",
      contact: "+91 123 456 7890",
      role: "Role management",
      status: "Active",
      action: {
        one: "view",
        two: "edit",
      },
    },
    {
      fullName: "Jenny Wilson",
      email: "jennywilson123@gmail.com",
      contact: "+91 123 456 7890",
      role: "Role management",
      status: "Active",
      action: {
        one: "view",
        two: "edit",
      },
    },
  ];
  const divStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <>
      <div className="admin-container">
        <div className="admin-left">
          <h1 className="wombb">Womb</h1>
          <div className="img">
            <img className="imgs" src={lady} alt="lady" />
            <p>Alexandra Robert</p>
            <p>alexandrarobert@gmail.com</p>
          </div>
          <hr />
          <br />
          <div className="admin-btn-div">
            <button className="admin-btn">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                  fill="white"
                />
              </svg>
              Admin Management
            </button>
          </div>
          <p className="routes">Role Management</p>
          <p className="routes" onClick={handleLogout}>
            Logout
          </p>
        </div>

        <div className="admin-right">
          <div style={divStyle} className="admin-management">
            <h2 className="admin-1">Admin Management</h2>
            <div className="admin-5">
              <span className="admin-2">Dashboard</span>
              <span className="admin-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none">
                  <circle cx="3" cy="3" r="3" fill="#0A3055" />
                </svg>
              </span>
              <span className="admin-3"> Admin Management</span>
            </div>
          </div>
          <div className="search">
            <div className="search-div">
              <input type="text" placeholder="Search..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
                  stroke="#0A3055"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="btn-div">
              Add
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none">
                <path
                  d="M7.3335 11H14.6668"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 14.6654V7.33203"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25016 20.1654H13.7502C18.3335 20.1654 20.1668 18.332 20.1668 13.7487V8.2487C20.1668 3.66536 18.3335 1.83203 13.7502 1.83203H8.25016C3.66683 1.83203 1.8335 3.66536 1.8335 8.2487V13.7487C1.8335 18.332 3.66683 20.1654 8.25016 20.1654Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td className="table-img">
                      <img src={table} alt="" />
                      {item.fullName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.role}</td>
                    <td>
                      <button className="table-button">{item.status}</button>
                    </td>
                    <td className="action-tab">
                      <button className="table-view">{item.action.one}</button>
                      <button className="table-edit">{item.action.two}</button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_1_583)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.85 2.5C18.3747 2.50014 18.8861 2.66536 19.3116 2.97226C19.7372 3.27916 20.0554 3.71219 20.2213 4.21L20.9 6.25H25C25.3315 6.25 25.6495 6.3817 25.8839 6.61612C26.1183 6.85054 26.25 7.16848 26.25 7.5C26.25 7.83152 26.1183 8.14946 25.8839 8.38388C25.6495 8.6183 25.3315 8.75 25 8.75L24.9963 8.83875L23.9125 24.0175C23.8449 24.9633 23.4215 25.8483 22.7275 26.4944C22.0336 27.1406 21.1207 27.4999 20.1725 27.5H9.8275C8.87932 27.4999 7.96638 27.1406 7.27246 26.4944C6.57853 25.8483 6.15514 24.9633 6.0875 24.0175L5.00375 8.8375C5.00149 8.80839 5.00024 8.7792 5 8.75C4.66848 8.75 4.35054 8.6183 4.11612 8.38388C3.8817 8.14946 3.75 7.83152 3.75 7.5C3.75 7.16848 3.8817 6.85054 4.11612 6.61612C4.35054 6.3817 4.66848 6.25 5 6.25H9.1L9.77875 4.21C9.94462 3.71199 10.263 3.27881 10.6889 2.97189C11.1147 2.66497 11.6263 2.49987 12.1512 2.5H17.85ZM11.25 12.5C10.9438 12.5 10.6483 12.6124 10.4195 12.8159C10.1907 13.0193 10.0446 13.2997 10.0087 13.6038L10 13.75V21.25C10.0004 21.5686 10.1223 21.875 10.3411 22.1067C10.5598 22.3384 10.8587 22.4778 11.1767 22.4965C11.4948 22.5151 11.808 22.4117 12.0523 22.2072C12.2966 22.0027 12.4536 21.7126 12.4913 21.3963L12.5 21.25V13.75C12.5 13.4185 12.3683 13.1005 12.1339 12.8661C11.8995 12.6317 11.5815 12.5 11.25 12.5ZM18.75 12.5C18.4185 12.5 18.1005 12.6317 17.8661 12.8661C17.6317 13.1005 17.5 13.4185 17.5 13.75V21.25C17.5 21.5815 17.6317 21.8995 17.8661 22.1339C18.1005 22.3683 18.4185 22.5 18.75 22.5C19.0815 22.5 19.3995 22.3683 19.6339 22.1339C19.8683 21.8995 20 21.5815 20 21.25V13.75C20 13.4185 19.8683 13.1005 19.6339 12.8661C19.3995 12.6317 19.0815 12.5 18.75 12.5ZM17.85 5H12.15L11.7338 6.25H18.2662L17.85 5Z"
                            fill="#DB2424"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_583">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
