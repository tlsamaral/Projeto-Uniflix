import { Banner } from "components/Banner";
import axios from 'axios';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Container, Content} from  './styles'
import {useCallback, useEffect, useState} from 'react';
import { ContentList } from "components/ContentList";

import { Layout } from "containers/Layout";
 

const Home = () => {
  const [banners, setBanners] = useState<any[]>([])
  const [contents, setContents] = useState<any[]>([])

  const getBanner = useCallback(async ()=>{
    const {data} = await axios.get('https://api-uniflix.vercel.app/api/banners')
    setBanners(data)
  },[])

  const getContents = useCallback(async ()=>{
    const {data} = await axios.get('https://api-uniflix.vercel.app/api/contents')
    setContents(data)
  },[])

  useEffect(() =>{
    getBanner()
    getContents()
  }, [])

  return (
    <Layout>
      <Container>
        <Swiper loop={true}>
          {banners.map(banner => <SwiperSlide key={banner.id}>
            <Banner imageUrl={banner.cover} description={banner.sinopse} title={banner.title} url={banner.normalize}></Banner>
            </SwiperSlide>)} 
        </Swiper>
        <Content>
            {contents.map(content => <ContentList data={content}></ContentList>)}
        </Content>
      </Container>
    </Layout>


  );
};

export { Home };
