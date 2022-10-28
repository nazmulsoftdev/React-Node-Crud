import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import axios from "../../axios/index";

import styled from "./UpdateForm.module.css";

function UpdateForm() {
  const [updateId, setId] = useState("");
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userGender, setGender] = useState("");
  const [userProfession, setProfession] = useState("");

  const location = useLocation();

  useEffect(() => {
    setId(location.state._id);
    setName(location.state.UserName);
    setAge(location.state.UserAge);
    setGender(location.state.UserGender);
    setProfession(location.state.UserProfession);
  }, []);

  // form handle
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .put(`/api/user/${updateId}`, {
        UserName: userName,
        UserAge: userAge,
        UserGender: userGender,
        UserProfession: userProfession,
      })
      .then((response) => console.log("Successfully Updated"))
      .catch((err) => console.log(err));
  };

  // const update Data

  return (
    <div className={styled.FormWrapper}>
      <form onSubmit={handleForm}>
        <Input
          type="text"
          placeholder="Name"
          value={userName}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Age"
          value={userAge}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Gender"
          value={userGender}
          required
          onChange={(e) => setGender(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Profession"
          value={userProfession}
          required
          onChange={(e) => setProfession(e.target.value)}
        />
        <Button className={styled.SubmitButton}>Update</Button>
      </form>
    </div>
  );
}

export default UpdateForm;
