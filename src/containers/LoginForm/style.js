import styled from 'styled-components';

export const FormWrapper = styled.form`
  align-items: center;
  background-color: var(--white);
  border: 2px solid var(--primary);
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Titulo = styled.h1`
  color: var(--primary);
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  outline: none;
  padding: 0.75rem;
  transition: 0.2s opacity;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;
