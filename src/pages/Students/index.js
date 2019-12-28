import React from 'react';
import { MdAddCircle } from 'react-icons/md';

import { Container, StudentsHeader, TableList, SudentsHeaderControl, AddButton } from './styles';

export default function Students() {

  const dados = [
    'Juca',
    'Romario',
    'Bebeto'
  ]

  return (
    <Container>
      <StudentsHeader>
        <strong>Gerenciando Alunos</strong>
        <SudentsHeaderControl>
          <AddButton to="/students/register">
            <MdAddCircle size={12} color="#FFF" />
            CADASTRAR
          </AddButton>
          <input placeholder="Buscar Aluno" />
        </SudentsHeaderControl>
      </StudentsHeader>
      <TableList>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dados.map(dado => (
            <tr key={dado}>
              <td>{dado}</td>
              <td>{dado}</td>
              <td>{dado}</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Container>
  );
}
