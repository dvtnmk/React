import React, { useEffect, useState } from "react";
import { Row, Col, Icon } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import "./styles.scss";

function onSigin(username, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?username=${username}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Username or password incorrect!!!");
      }
    } catch (err) {
      if (err.hasOwnProperty("response")) {
        alert(err.response.error.message);
      }
    }
  };
}
const onChange = setter => e => {
  const { value } = e.target;
  setter(value);
};

function renderForm(inputFields) {
  return inputFields.map((props, i) => (
    <Row key={Math.random()}>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
}
function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputFields = [
    {
      value: firstName,
      placeholder: "First Name",
      prefix: <Icon type="user" />,
      onChange: onChange(setFirstName)
    },
    {
      value: lastName,
      placeholder: "Last Name",
      prefix: <Icon type="user" />,
      onChange: onChange(setLastName)
    },
    {
      value: Email,
      placeholder: "E-mail",
      prefix: <Icon type="mail" />,
      onChange: onChange(setEmail)
    },
    {
      value: password,
      type: "password",
      placeholder: "Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setPassword)
    },
    {
      value: confirmPassword,
      type: "password",
      placeholder: "Confirm Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setConfirmPassword)
    }
  ];
  return (
    <div className="signInContainer">
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={onSigin(Email, password)}>
        {renderForm(inputFields)}

        <Row>
          <Col className="col">
            <Button block type="primary" type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignIn;
