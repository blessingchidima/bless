import React from "react";
import { styled } from "styled-components";
import img1 from "../../assets/img1.png";
import { BsBookmarkPlus } from "react-icons/bs";
import ava from "../../assets/avatar.png";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const CardProps = () => {
  return (
    <div>
      <MaxCard>
        <CardHolder>    
          <Hold>
            <Avatar src={ava} />
            <Name>Franklin Okoro</Name>.<Time>Updated july 09</Time>
            <Icons />
            <Text1>Members only</Text1>
          </Hold>
          <BigText>Lorem ipsum dolor sit.</BigText>
          <SmallText>
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, fuga! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, exercitationem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Suscipit, esse!
          </SmallText>
          <br />
          <Holder>
            <Div>
              <Category>Money</Category>
              <Min>9 min read</Min>
              <Option>Selected for you</Option>
            </Div>
            <Holds>
              <Save />
              <Minus />
              <ThreeDots />
            </Holds>
          </Holder>
        </CardHolder>
        <Image src={img1} />
      </MaxCard>
    </div>
  );
};

export default CardProps;

const Holds = styled.div``;

const Minus = styled(AiOutlineMinusCircle)`
  font-size: 20px;
  margin: 0 5px;
`;

const ThreeDots = styled(FiMoreHorizontal)`
  font-size: 20px;
  margin: 0 5px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const Save = styled(BsBookmarkPlus)`
  font-size: 20px;
  margin: 0 5px;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const MaxCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
  margin: 20px 0;
`;

const Holder = styled.div`
  width: 90%;
  display: flex;
  font-size: 13px;
  color: grey;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  min-width: 60px;
  border-radius: 20px;
  background-color: silver;
  color: black;
`;

const Min = styled.div``;

const Option = styled.div``;

const BigText = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const SmallText = styled.div`
  font-size: 13px;
  color: grey;
`;

const Text1 = styled.div`
  color: grey;
`;

const CardHolder = styled.div`
  width: 450px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  width: 90%;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 30px;
  border-radius: 50%;
  background-color: blue;
  height: 30px;
  object-fit: cover;
`;
const Name = styled.div`
  margin: 0 5px;
`;
const Time = styled.div`
  color: #929090;
  margin: 0 5px;
`;

const Icons = styled.div``;
