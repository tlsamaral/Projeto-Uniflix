import styled from "styled-components";
import {ButtonContainer, Container, Content, Page} from "./styles";
import { Button } from "components/Button";

type IBannerProps = {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
}


const Banner = ({url, imageUrl, title, description}: IBannerProps) => {
    return (
    <Container imageUrl={imageUrl} >
        <Content>
            <h1>{title}</h1>
            <span>{description}</span>
            <ButtonContainer>
                <Button>
                    Assistir Agora
                </Button>
            </ButtonContainer>
        </Content>
            <Page></Page>
    </Container>
    );
}


export { Banner };