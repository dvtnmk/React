import React, { useEffect, useState } from "react";
import { Row, Col, Icon } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import { Link } from "react-router-dom";
import history from "routes/history";
import "./styles.scss";

function onSigin(Email, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?Email=${Email}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Email or password incorrect!!!");
      }
    } catch (err) {
      if (err.hasOwnProperty("response")) {
        alert(err.response.error.message);
      }
    }
  };
}

function renderForm(inputFields) {
  return inputFields.map((props, i) => (
    <Row key={btoa(i)}>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
}

const onChange = setter => e => {
  const { value } = e.target;
  setter(value);
};

function gotoSignUp() {
  history.push("/signup");
}

function SignIn() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
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
    }
  ];
  return (
    <div className="signInContainer">
      <h2>Sign in</h2>
      <hr />
      <form onSubmit={onSigin(Email, password)}>
        {renderForm(inputFields)}

        <Row>
          <Col span={12} className="col">
            <Button block type="primary" type="submit">
              SignIn
            </Button>
          </Col>
          <Col span={12} className="col">
            {/* <Link to="/signup"> */}
            <Button block type="primary" onClick={gotoSignUp} type="button">
              SignUp
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignIn;
