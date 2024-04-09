import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderMobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 30,
            paddingLeft: 50,
          }}
        >
          6DegreesMovieWeb 🎥
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          right: 50,
        }}
      ></div>
    </div>
  );
}

const DivRoute = styled.p`
  margin: 10px;
  margin-top: 15px;
  color: black;

  padding: 5px;
  border-bottom: solid 1px black;
`;
export default HeaderMobile;
