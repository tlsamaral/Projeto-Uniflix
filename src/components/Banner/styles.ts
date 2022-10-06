import styled from "styled-components";

type IContainerProps = {
    imageUrl: string
}
export const Container = styled.div<IContainerProps>`
    display: flex;
    width: 100%;
    height: 648px;
    background: ${({imageUrl}) => `linear-gradient(269.96deg, rgba(0, 0 , 0 ,0) .04%, rgba(0, 0 , 0 , 0.8) 99.5% ), url(${imageUrl})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px;
`

export const Content = styled.div` 
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    h1{
        color: white;
        font-size: 5.6rem;
        font-weight: 500;
    }
    span{
        display: block;
        max-width: 632px;
        color:  #fff;
        font-weight: 400;
        font-size: 16px;
    }
`
export const ButtonContainer = styled.div`
    width: 200px;
`
export const Page = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin-top: 100%;
`