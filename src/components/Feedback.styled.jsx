import styled from 'styled-components';

const Container = styled.div`
  background-color: #f2f2f2;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #010101;
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const Button = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;
export { StatisticsContainer, Container, ButtonsContainer, Button };
