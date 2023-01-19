import React from "react";

export default function ProgressBar({ bgcolor, progress, height }) {
  const Parentdiv = {
    height: "3vh",
    width: "100%",
    backgroundColor: "#dadada",
    borderRadius: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#1e1f30",
    borderRadius: 40,
    padding: "0.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const progresstext = {
    fontSize: "0.8rem",
    color: "#ffffff",
    fontWeight: 600,
  };
  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
