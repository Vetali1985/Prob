import styled from 'styled-components';


export const Container = styled.div`
  padding-top: 120px;
  width: 1440px;
  margin: 0 auto;
`;

export const List = styled.ul`
  padding: 30px 0 60px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0;
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid black;
`;
export const FormBtn = styled.button`
  display: inline-block;
  height: 48px;
  border: 0;
  background-color:orange;
  color:white;
  cursor: pointer; 
  padding:16px;
`;
export const FormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

