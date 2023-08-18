import React from "react";
import "./playercard.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PlayerCard = ({ player, index }) => {
  const defaultUsername = "User";
  const defaultImage =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80";
  if (player?.profile === "profile.jpg") {
    player.profile =
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80";
  }
  const navigate = useNavigate();
  return (
    <div className="playercard" key={index}>
      <div className="playercard-header">
        <img src={player?.profile || defaultImage} alt="Circle" />
      </div>
      <div className="playercard-content">
        <h5 className="playercard-title">
          {player?.username || defaultUsername}
        </h5>
      </div>
      <div className="d-flex justify-content-center py-2">
        <Button
          className="py-1"
          onClick={() => navigate(`/nav-rank/player/${player._id}`)}
        >
          View Player
        </Button>
      </div>
    </div>
  );
};

export default PlayerCard;
