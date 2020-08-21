import styled from 'styled-components';

export const ListaWrapper = styled.ul`
  background-color: var(--grey);
  border-top: 3px solid ${({ tipo, cores }) => `var(--${cores[tipo]})`};
  box-shadow: 0 0 4px var(--grey);
  list-style: none;
  margin: 1rem;
  margin-left: 0;
  min-width: 250px;
  overflow-y: auto;
  padding: 1.25rem;
`;

export const Titulo = styled.h2`
  color: var(--darkerBlue);
  font-weight: normal;
  margin: 1rem;
  text-align: center;
`;
