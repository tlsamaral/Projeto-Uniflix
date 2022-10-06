import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Container, Text } from "./styles";


type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...rest}:IButtonProps) => {
    return <Container {...rest}>
        <Text>{children}</Text>
        </Container>
}
export {Button}; 
