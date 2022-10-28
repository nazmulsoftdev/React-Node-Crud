import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from "./Form.module.css";
import axios from "../../axios/index";

function Form() {
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userGender, setGender] = useState("");
  const [userProfession, setProfession] = useState("");

  // form handle
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("/api/user", {
        UserName: userName,
        UserAge: userAge,
        UserGender: userGender,
        UserProfession: userProfession,
      })
      .then((response) => console.log("Successfully Added"))
      .catch((err) => console.log(err));
    setName("");
    setAge("");
    setGender("");
    setProfession("");
  };

  // form input handle

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
        <Button className={styled.SubmitButton}>Submit</Button>
      </form>
    </div>
  );
}

export default Form;
