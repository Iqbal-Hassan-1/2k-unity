import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatIcon, UploadRecord } from "../component/Index";
import { MdEdit } from "react-icons/md";
import style from "./rank.module.css";
import basketBall from "../assets/kit.png";
import player from "../assets/player.png";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL, IMG_URL } from "../constant";
import axios from "axios";

const Ranking = () => {
  const { id } = useParams();
  console.log("params", id);
  const [localUser, setLocalUser] = useState("");
  const [user, setUser] = useState("");
  console.log(localUser);
  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const user = JSON.parse(getUser);
    setLocalUser(user);
  }, []);
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          // setIsLoading(true);
          const response = await axios.get(`${BASE_URL}users/${id}`);
          // setLeaders(response.data.leadership);
          setUser(response.data.user);
          console.log(response.data.user);
          // setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [id]);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      axios
        .post(`${BASE_URL}users/coverimage`, formData, {
          headers: {
            Authorization: authToken,
          },
        })
        .then((response) => {
          setLocalUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          console.log("File uploaded successfully!", response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      console.warn("No file selected.");
    }
  };
  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(`${BASE_URL}users/profileImage`, formData, {
          headers: {
            Authorization: authToken,
          },
        })
        .then((response) => {
          setLocalUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          console.log("profile uploaded successfully!", response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      console.warn("No file selected.");
    }
  };

  return (
    <Container fluid className={style.mainDiv}>
      <Row>
        <Col className={style.forImage} md={12}>
          {id ? (
            user?.cover === "profile.jpg" ? (
              <img src={basketBall} alt="cover " />
            ) : (
              <img src={`${IMG_URL}${localUser?.cover}`} alt="cover" />
            )
          ) : (
            <img
              src={
                localUser?.cover === "profile.jpg"
                  ? basketBall
                  : `${IMG_URL}${localUser?.cover}`
              }
              alt="cover player"
            />
          )}
          {/* {localUser?.cover === "profile.jpg" ? (
            <img src={basketBall} alt="basktet" />
          ) : (
            <img src={`${IMG_URL}${localUser?.cover}`} alt="basktet" />
          )} */}
          {!id && (
            <div className={style.childDiv}>
              <label className="upload-label" htmlFor="file-upload">
                <MdEdit size={30} style={{ color: "var(--main-color)" }} />
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          )}
        </Col>
        <Col
          xs={{ offset: 0, span: 2 }}
          sm={{ offset: 0, span: 2 }}
          md={{ offset: 1, span: 2 }}
          className={style.forPlayer}
        >
          {id ? (
            user?.profile === "profile.jpg" ? (
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt="profile player"
              />
            ) : (
              <img
                src={`${IMG_URL}${localUser?.profile}`}
                alt="profile player"
              />
            )
          ) : (
            <img
              src={
                localUser?.profile === "profile.jpg"
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjKo7c7BxLFeAj9oOg40sA1-lWsg1Rr1j9w&usqp=CAU"
                  : `${IMG_URL}${localUser?.profile}`
              }
              alt="profile player"
            />
          )}
          {/* {localUser?.profile === "profile.jpg" ? (
            <img src={player} alt="profile player" />
          ) : (
            <img src={`${IMG_URL}${localUser?.profile}`} alt="profile player" />
          )} */}
          {/* <img src={player} alt="profile" /> */}
          {!id && (
            <div className={style.childplayer}>
              <label className="upload-label" htmlFor="profile-upload">
                <MdEdit size={25} style={{ color: "var(--main-color)" }} />
              </label>
              <input
                id="profile-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleProfileChange}
              />
            </div>
          )}
        </Col>
        <Col
          xs={{ offset: 4, span: 8 }}
          sm={{ offset: 6, span: 8 }}
          md={{ offset: 3, span: 6 }}
          className="py-2"
        >
          <div className="d-flex align-items-center gap-5">
            <h4 className="fw-bold">
              {id ? user?.username : localUser?.username}
            </h4>
            <button
              className="px-4 py-2 bg-primary text-white border-0 fw-bold user"
              disabled={!id}
            >
              Message User
            </button>
          </div>

          <div className="d-flex align-items-center gap-3 py-2">
            <button className="px-4 py-1 border-0">1234567</button>
            <button
              className="border-0 px-4 py-1 bg-white"
              style={{ color: "red" }}
            >
              Copy Referal code
            </button>
          </div>
          <Row className="pt-sm-4 pt-md-1">
            <Col xs={10} sm={8} md={4}>
              <p className="mb-0 d-flex justify-content-between text-secondary">
                <span>ArcheType</span>
                {id ? (
                  <span className="fw-bold">{user?.archtype}</span>
                ) : (
                  <span className="fw-bold">{localUser?.archtype}</span>
                )}
              </p>
              <p className="mb-0 d-flex justify-content-between text-secondary">
                <span>Height</span>
                {id ? (
                  <span className="fw-bold">{user?.height}</span>
                ) : (
                  <span className="fw-bold">{localUser?.height}</span>
                )}
              </p>
              <p className="mb-0 d-flex justify-content-between text-secondary">
                <span>Position</span>
                {id ? (
                  <span className="fw-bold">{user?.position}</span>
                ) : (
                  <span className="fw-bold">{localUser?.position}</span>
                )}
              </p>
            </Col>
          </Row>

          {/* win rec buttons 3 hide  */}
          {/* <Row className="d-flex gap-2 px-1 pt-1">
            <Col md={3}>
              <div className={`text-center ${style.forRec}`}>
                <p className="p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }} className="text-secondary">
                  Rec win percentage
                </span>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div className={`text-center ${style.forPark}`}>
                <p className="p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }} className="text-secondary">
                  Park win percentage
                </span>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div className={`text-center ${style.forTotal}`}>
                <p className="p-2 mb-0">88%</p>
                <span style={{ fontSize: "0.9rem" }} className="text-secondary">
                  Total Matched Played
                </span>
              </div>
            </Col>{" "}
          </Row> */}
          <Row className="p-1">
            <Col>
              <p className="mb-0 text-secondary fw-bold">Previous Uploads :</p>
              <div className="d-flex flex-column gap-1">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/X_vwN1DrMO9sJWZdRnuFc6Hlr24=/0x547:3160x2654/1400x1400/filters:focal(0x547:3160x2654):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47515291/usa-today-8390044.0.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "1px solid black",
                  }}
                />
                <p className="text-secondary pt-1 d-flex flex-column">
                  <span className="fs-6">Last Upload</span>
                  <span className="px-2">16/12/2022</span>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          className="d-flex flex-column gap-3 py-2"
          md={{ offset: 1, span: 2 }}
        >
          {!id && (
            <>
              <button className={`p-2 ${style.matchButton}`}>
                Setup a Match
              </button>
              <button
                className={`p-2 bg-primary  ${style.prevButton}`}
                onClick={() => navigate("/nav-rank/match-status")}
              >
                Previous Match
              </button>
              <button
                className={`p-2 ${style.uploadButton}`}
                type="button"
                onClick={() => setShow(true)}
              >
                Upload Record
              </button>

              <button
                type="button"
                className={`p-2 bg-primary  ${style.prevButton}`}
                onClick={() => navigate("/nav-rank/player-rank")}
              >
                Player Ranking
              </button>
            </>
          )}
        </Col>
      </Row>
      {show && <UploadRecord show={show} setShow={setShow} />}

      {!id && <ChatIcon />}

      {/* <ChatIcon /> */}
    </Container>
  );
};

export default Ranking;
