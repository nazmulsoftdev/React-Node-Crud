import React, { useState, useEffect } from "react";
import styled from "./Table.module.css";
import axios from "../../axios/index";
import { AiOutlineEdit as EditIcon } from "react-icons/ai";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { Link } from "react-router-dom";
function Table() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => response.data)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [userData]);

  // delete Item

  const DeleteItem = (id) => {
    axios
      .delete(`/api/user/${id}`)
      .then((response) => console.log("SucessFully Delete"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <table className={styled.Table} border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Profession</th>
            <th>Action</th>
          </tr>
        </thead>
        {userData.map((item) => {
          const { _id, UserName, UserAge, UserGender, UserProfession } = item;
          return (
            <tbody key={_id}>
              <tr>
                <td>{UserName}</td>
                <td>{UserAge}</td>
                <td>{UserGender}</td>
                <td>{UserProfession}</td>
                <td className={styled.TableAction}>
                  <Link
                    to={UserName}
                    state={{
                      _id,
                      UserName,
                      UserAge,
                      UserGender,
                      UserProfession,
                    }}
                  >
                    <EditIcon size={20} color="green" />
                  </Link>
                  <DeleteIcon
                    size={20}
                    color="red"
                    onClick={() => DeleteItem(_id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Table;
