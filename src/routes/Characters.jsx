import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCharacters } from '../api';

import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 30px;
  max-width: 640px;
  min-width: 480px;
`;

const Title = styled.h1`
  padding: 30px;
  font-size: 40px;
  font-weight: 700;
`;

const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const List = styled.li`
  display: flex;
  padding: 10px;
  border: 2px solid #000;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #2db0ff;
  }
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CharacterImag = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  object-fit: fill;
`;
const CharacterName = styled.h2`
  padding: 20px 0 10px;
  font-size: 20px;
  font-weight: 700;
`;

const BtnUp = styled(Button)`
  top: 30px;
`;

const BtnDown = styled(Button)`
  top: 200px;
`;

const GoToMyFavorite = styled(Button)`
  top: 400px;
`;

const Characters = () => {
  const basicImg =
    'https://static.wikia.nocookie.net/disney/images/9/9c/Profile_-_WALL-E.png';
  const ref = useRef(null);
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  const moveToTopOrBottom = (e) => {
    if (e.currentTarget.name === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: `${ref.current.scrollHeight}`, behavior: 'smooth' });
  };
  return (
    <Container ref={ref}>
      <Title>DISNEY</Title>
      {isLoading ? (
        '잠시만요'
      ) : (
        <ListContainer>
          {data?.slice(3198, 3298).map((item) => {
            return (
              <List key={item.id}>
                <Link to={`/character/${item.id}`}>
                  <CharacterImag
                    // William Piper에서 엑박 떠서 처리
                    src={item.imageUrl ?? basicImg}
                    alt={item.name}
                  />
                  <CharacterName>{item.name}</CharacterName>
                </Link>
              </List>
            );
          })}
        </ListContainer>
      )}
      <BtnUp type='button' onClick={moveToTopOrBottom} name='top'>
        위로
      </BtnUp>
      <BtnDown type='button' onClick={moveToTopOrBottom} name='bottom'>
        아래로
      </BtnDown>
      <GoToMyFavorite>
        <Link to='/myfav'>FAVORITE</Link>
      </GoToMyFavorite>
    </Container>
  );
};
export default Characters;
