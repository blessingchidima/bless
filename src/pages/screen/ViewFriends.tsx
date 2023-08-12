import { styled } from 'styled-components'
import { useTanAuthorOne } from '../../hooks/useAuthor'
import { makeRequest } from '../../api/friendAPI'
import { useSelector } from 'react-redux'

interface iProps {
    props?: any
}


const ViewMyFriends: React.FC<iProps> = ({ props }) => {
    const { author } = useTanAuthorOne(props)

    return <CardHolder>
        <Avatar src={author?.avatar} />
        <Content>
            <Name>{author?.name}</Name>
            <Email>{author?.email}</Email>
            <Total>Number of Articles: {author?.articles.length}</Total>
        </Content>
    </CardHolder>
}


const ViewFriends = () => {

    const userID = useSelector((state: any) => state.appUser)
    const { author, isLoading } = useTanAuthorOne(userID)
    return (
        <div>
            {
                isLoading ? <div>loading....</div> : <Container>
                    <Main>
                        {
                            author.friends?.map((props: any) => (
                                <div key={props._id} >
                                    {
                                        userID === props._id ? null : <Card key={props._id} >
                                            <div>
                                                <ViewMyFriends props={props} />

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

export default ViewFriends

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
