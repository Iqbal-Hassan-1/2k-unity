import React, { useState } from "react";
import style from "./signin.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { InputField, Loader } from "../component/Index";
import { BiRightArrowAlt } from "react-icons/bi";
// import ball from "../assets/basket-ball.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../constant";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { user, login } = useAuth();
  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = { email, password };
      const response = await axios.post(`${BASE_URL}auth/login`, formData);
      let user = response.data.user;
      if (response.data.status === 1) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        login(user);
        toast.success(response.data.msg);
        navigate("/nav-rank/ranking");
        setEmail("");
        setPassword("");
      } else if (response.data.status === 0) {
        toast.error(response.data.msg);
      }
      setIsLoading(false);
      console.log("Response:", response.data);
    } catch (error) {
      toast.error(error.msg);
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <Container fluid className={style.divcontainer}>
        <Row>
          <Col
            xs={{ offset: 0, span: 12 }}
            sm={{ offset: 3, span: 6 }}
            md={{ offset: 3, span: 6 }}
            lg={{ offset: 8, span: 3 }}
            className={`text-white bg-white mt-5 p-5 ${style.forShadow}`}
          >
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center fw-bold">Welcome Back!</h2>
              <h6 className="text-center">You have been missed</h6>
              <InputField
                type={"email"}
                placeholder={"Email"}
                value={email}
                setValue={setEmail}
              />
              <InputField
                placeholder={"password"}
                type={"password"}
                value={password}
                setValue={setPassword}
              />{" "}
              <div className="d-grid gap-2 pt-3 opacity-100">
                {" "}
                <Button
                  variant="primary"
                  size="lg"
                  className="opacity-100"
                  type="submit"
                >
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    <span>
                      Login to Continue <BiRightArrowAlt size={25} />
                    </span>
                  )}
                </Button>
                <Link
                  to="/forgot-password"
                  className="text-white text-center py-3 effect"
                >
                  <span> Forgot Password ?</span>
                </Link>
              </div>{" "}
              <h6 className="text-center pt-4">
                Don't have an account ?{" "}
                <Link to="/sign-up" className="text-white effect">
                  <span>SIGNUP</span>
                </Link>
              </h6>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
