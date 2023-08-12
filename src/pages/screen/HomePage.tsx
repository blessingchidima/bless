import React from "react";
import { styled } from "styled-components";
import { useTanArticle } from "../../hooks/useAuthor";
import { useSelector } from "react-redux";
import { GrAdd } from "react-icons/gr";
import CardProps from "../../components/common/CardProps";
import MiniProps from "../../components/common/MiniProps";
import miss from "../../assets/bukky.jpg";

const HomePage = () => {
  const userID = useSelector((state: any) => state.appUser);

  const { article }: any = useTanArticle(userID);

  console.log(userID);

  return (
    <Container>
      <Main>
        <DivHold>
          <Head>
            <Icon />
            <Text>For you</Text>
            <Text>Following</Text>
          </Head>
          <br />
          <CardProps />
          <CardProps />
          <CardProps />
          <CardProps />
        </DivHold>
        <StickySide>
          <br />
          <br />
          <Title>Staff Picks</Title>
          <br />
          <MiniProps />
          <MiniProps />
          <MiniProps />
          <Span>See Full List</Span>
          <br />
          <Line />
          <br />
          <Title>Recommended Topics</Title>
          <CategoryPanel>
            <Category>Programming</Category>
            <Category>Data Science</Category>
            <Category>Self Improvement</Category>
            <Category>Technology</Category>
            <Category>Writing</Category>
            <Category>Relationships</Category>
            <Category>Machine Learning</Category>
          </CategoryPanel>
          <br />
          <Span>See more topics</Span>
          <br />
          <br />
          <Title>Who to follow</Title>
          <br />
          <FollowHolder>
            <Avatar src={miss} />
            <Hold>
              <BoldTxt>Austine Uchenna</BoldTxt>
              <SmallTxt>
                Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur
                adipisicing elit..
              </SmallTxt>
            </Hold>
            <Btn>Follow</Btn>
          </FollowHolder>
        </StickySide>
      </Main>
    </Container>
  );
};

export default HomePage;

const Btn = styled.div`
  padding: 10px;
  border: 2px solid silver;
  color: black;
  height: 20px;
  justify-content: center;
  display: flex;
  width: 100px;
  border-radius: 30px;
  cursor: pointer;
`;

const FollowHolder = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: space-between;
  min-height: 100px;
`;

const Avatar = styled.img`
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
  height: 40px;
  object-fit: cover;
`;

const Hold = styled.div`
  width: 60%;
`;

const BoldTxt = styled.div`
  font-weight: 700;
`;

const SmallTxt = styled.div`
  font-size: 13px;
  color: grey;
  /* width: 70%; */
`;

const Category = styled.div`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
  font-size: 13px;
  min-width: 100px;
  font-weight: 500;

  display: flex;
  justify-content: center;
`;

const CategoryPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
`;

const Line = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;

const Span = styled.div`
  font-size: 13px;
  color: lightgreen;
  cursor: pointer;

  :hover {
    color: #000;
  }
`;

const Title = styled.div``;

const DivHold = styled.div``;

const StickySide = styled.div`
  padding: 30px;
  width: 40%;
  border-left: 1px solid silver;
`;

const Text = styled.div`
  margin: 10px 20px;
`;

const Main = styled.div`
  padding: 20px 20px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Head = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Icon = styled(GrAdd)``;
