import {Container, Content, Icon} from './styles'

import logoImage from "./imagens/logo.svg";
import homeImage from "./imagens/home.svg"
import moviesImage from "./imagens/movies.svg"
import tvImage from "./imagens/tv.svg"
import favImage from "./imagens/fav.svg"
const Navbar = () => {
    return <Container>
        <img src={logoImage} alt="" />

        <Content>
            <Icon src={homeImage} alt="" />
            <Icon src={moviesImage} alt="" />
            <Icon src={tvImage} alt="" />
            <Icon src={favImage} alt="" />
        </Content>
    </Container>
}
export {Navbar}