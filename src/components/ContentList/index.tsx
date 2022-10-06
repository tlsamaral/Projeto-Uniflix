import {MdChevronRight} from 'react-icons/md'
import { Container, TitleContainer, Cover, ListContainer } from './styles'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'

type IContentListProps = {
    data:{
        id: string;
        name: string;
        path: string;
        list: ContentList[]
    }
}
type ContentList = {
    id: number;
    title: string;
    cover: string;
    normalize: string;

}

const ContentList = ({data}: IContentListProps) => {
    return <Container>
        <TitleContainer>
        <span>{data.name}</span>
        <MdChevronRight size={24}/>
    </TitleContainer>

    <ListContainer>
        <Swiper loop spaceBetween={16}
            slidesPerView={"auto"}>
        {data.list.map(item => <SwiperSlide key={item.id}>
            <Cover src={item.cover} alt="" />
        </SwiperSlide>)}
        </Swiper>

      
    </ListContainer>
    </Container>
}

export {ContentList}