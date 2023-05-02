import axios from "axios";
import { RootState } from "../../../redux/store";
import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Wrapper from "../../common/section/Wrapper";
import { logInOperation } from "../../../redux/token/apiOperations";
import { Input, Form, FormWrap, Button, LoaderMess } from "./LoginStyles";

const LogIn: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();

    dispatch(logInOperation({ login, password }));
  };

  return (
    <Wrapper>
      <FormWrap>
        {" "}
        <Form action="" onSubmit={formSubmit}>
          <Input
            type="text"
            name="login"
            placeholder="Login"
            value={login}
            required
            autoComplete="off"
            autoCorrect="off"
            onChange={handleLoginChange}
          />
          <Input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            required
            autoComplete="off"
            autoCorrect="off"
            onChange={handlePasswordChange}
          />
          <Button type="submit">Login</Button>
        </Form>
      </FormWrap>
      {loader ? <LoaderMess>Loading...</LoaderMess> : " "}
    </Wrapper>
  );
};

export default LogIn;
