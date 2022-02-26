import styled from 'styled-components/native';

export const Form = styled.View`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 500px;
`;

export const Input = styled.TextInput`
  width: 300px;
  margin: 10px auto;
  color: #1a4173;
  min-height: 40px;
  border: 1px solid #d1d9e3;
  padding: 5px;
  background: white;
  border-radius: 10px;
`;
