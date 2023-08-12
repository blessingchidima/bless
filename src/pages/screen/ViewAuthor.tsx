import { styled } from 'styled-components'
import { useTanAuthor } from '../../hooks/useAuthor'
import { makeRequest } from '../../api/friendAPI'
import { useSelector } from 'react-redux'


const ViewAuthor = () => {
    const { authors, isLoading } = useTanAuthor()
    const userID = useSelector((state: any) => state.appUser)
    return (
        <div>
            {
                isLoading ? <div>loading....</div> : <Container>
                    <Main>
                        {
                            authors?.map((props: any) => (
                                <div key={props._id} >
                                    {
                                        userID === props._id ? null : <Card key={props._id} >
                                            <div>
                                                <CardHolder>
                                                    <Avatar src={props.avatar} />
                                                    <Content>
                                                        <Name>{props.name}</Name>
                                                        <Email>{props.email}</Email>
                                                        <Total>Number of Articles: {props.articles.length}</Total>
                                                    </Content>
                                                </CardHolder>

                                                <Holder>
                                                    <Button
                                                        onClick={() => {
                                                            makeRequest(userID, props._id)
                                                        }}
                                                    >Add as Friend</Button>
                                                </Holder>

                                            </div>
                                        </Card>
                                    }
                                </div>
                            ))
                        }
                    </Main>
                </Container>
            }
        </div>
    )
}

export default ViewAuthor

const Holder = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
`

const Button = styled.div`
text-align: center;
width: 90%;
height: 40px;
margin-top: 10px;
background-color: var(--appMainColor);
color: var(--appBG);
display:flex;
align-items: center;
justify-content: center;
margin-bottom:10px;
border-radius: var();
cursor: pointer;
`

const Total = styled.div`
font-size: 12px;
font-weight: 600;
`

const Email = styled.div`
font-size: 12px;
`

const Name = styled.div`
font-size: 20px;
font-weight: 700;
width: 100%;
`

const Content = styled.div`
width: 100%;
`

const Avatar = styled.img`
width: 100%;
height: 200px;
border-radius: var(--appRadiusSmall);
object-fit: cover;
`

const CardHolder = styled.div`
margin: 5px;
display:flex;
align-items: center;
flex-direction: column;

`

const Card = styled.div`
border-radius: var(--appRadiusSmall);
border: 1px solid var(--appBorderL);
width: 250px;
min-height: 200px;
margin: 5px;
`;

const Main = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
height: 100%;
`

const Container = styled.div`
width: 100%;
min-height:40vh;

`