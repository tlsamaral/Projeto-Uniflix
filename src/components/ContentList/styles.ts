
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 5.6rem;
  
  .swiper-slide {
    width: 29.2rem;
    height: 44rem;
    overflow: hidden;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 5.2rem;
  margin-bottom: 2.4rem;
  span {
    display: block;
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
  }
  svg {
    color: #fff;
  }
`;

export const ListContainer = styled.div`
  margin-bottom: 4.2rem;

`;

export const Cover = styled.img`
  width: 100%;
  height: 44rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
