import React from "react";
import { styled } from "styled-components";
import ava from "../../assets/avatar.png";
import { BiSolidPolygon } from "react-icons/bi";

const MiniProps = () => {
  return (
    <div>
      <MiniCard>
        <Holder>
          <Avatar src={ava} />
          <Name>Robert Franklin</Name>
          <Icons />
        </Holder>
        <Bold>Lorem ipsum dolor sit amet consectetur.</Bold>
      </MiniCard>
    </div>
  );
};

export default MiniProps;


const Icons = styled(BiSolidPolygon)`
  color: dodgerblue;
`;

const Bold = styled.div`
  font-size: 15px;
  font-weight: 700;
  width: 50%;
  margin-top: 5px;
`;

const MiniCard = styled.div`
  min-height: 100px;
  width: 100%;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  font-size: 13px;
`;

const Avatar = styled.img`
  width: 30px;
  border-radius: 50%;
  height: 30px;
  object-fit: cover;
`;

const Name = styled.div`
  margin: 0 10px;
`;