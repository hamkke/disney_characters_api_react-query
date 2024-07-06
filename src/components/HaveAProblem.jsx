import { useNavigate } from 'react-router-dom';
import Button from './Button';

const HaveAProblem = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  return (
    <>
      <h1>HaveAProblem</h1>
      <Button onClick={goToHome}>뒤로가기</Button>
    </>
  );
};
export default HaveAProblem;
