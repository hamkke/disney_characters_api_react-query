import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCharacterDetail } from '../api';

import Button from '../components/Button';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  border: 1px solid #000;
  padding: 10px;
`;

const GoToHome = styled(Button)`
  top: 30px;
`;

const CharacterName = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
`;
const CharacterImg = styled.img`
  width: 400px;
  height: 500px;
  object-fit: fill;
`;

const FilmListTitle = styled.h2`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const Film = styled.li`
  margin-bottom: 5px;
  padding: 5px;
  font-size: 20px;
  border-bottom: 1px solid #000;
  list-style-type: '✷ ';
`;

const Detail = () => {
  const basicImg =
    'https://static.wikia.nocookie.net/disney/images/9/9c/Profile_-_WALL-E.png';
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['characterDetail'],
    queryFn: () => fetchCharacterDetail(id),
  });

  const goToHome = () => navigate('/');

  return (
    <Background>
      {isLoading ? (
        '잠시만요'
      ) : (
        <Container>
          <GoToHome type='button' onClick={goToHome}>
            뒤로가기
          </GoToHome>
          <CharacterName>{data.name}</CharacterName>
          <CharacterImg src={data.imageUrl ?? basicImg} alt={data.name} />
          <FilmListTitle>{data.name}가 나온 영화</FilmListTitle>
          <FilmList>
            {data.films.map((item) => {
              return <Film key={data.id}>{item}</Film>;
            })}
          </FilmList>
        </Container>
      )}
    </Background>
  );
};
export default Detail;
