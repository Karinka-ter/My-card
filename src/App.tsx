import styled, {css} from "styled-components";


function App() {


    return (
        <WrapDiv>
            <Card>
                <MyImg src={'/Rectangle 1.png'}></MyImg>
                <TitleCard>
                    <Title>Headline</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <ButtonBox>
                        <MyButton primary>See more</MyButton>
                        <MyButton outlined>Save</MyButton>
                    </ButtonBox>
                </TitleCard>
            </Card>
        </WrapDiv>
    )
}

export default App

const WrapDiv = styled.div`
    display: flex;
    justify-content: center; /* Центрирует по горизонтали */
    align-items: center; /* Центрирует по вертикали */
    height: 100vh;

`

const Card = styled.div`
    padding: 10px;
    width: 300px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 15px;
`

const MyImg = styled.img`
    width: 280px;
    height: 170px;
`

const TitleCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
`

const Title = styled.h1`
    font: 700 16px "Inter", sans-serif;
    color: #000;
`

const Text = styled.p`
    font: 500 12px / 1.66667 "Inter", sans-serif;
    color: #abb3ba;
`

type StyleBtnProps = {
    primary?: boolean,
    outlined?: boolean,
}

const ButtonBox = styled.div`
    display: flex;
    gap: 12px
`

const MyButton = styled.button<StyleBtnProps>`
    border: none;
    background-color: #fff;
    border-radius: 5px;
    width: 86px;
    height: 30px;

    ${props => props.primary && css<StyleBtnProps>`
        background: #4e71fe;
        font: 700 10px / 2 "Inter", sans-serif;
        color: #fff;
    `}

    ${props => props.outlined && css<StyleBtnProps>`
        border: 2px solid #4e71fe;
        font: 700 10px / 2 "Inter", sans-serif;
        color: #4e71fe;
    `}
`
