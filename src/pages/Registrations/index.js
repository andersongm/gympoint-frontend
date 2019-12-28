import React from 'react';

import { Container, TableList } from './styles';
import RegistrationHeader from './RegistrationHeader';

export default function Registrations() {
  const dados = [
    'Juca',
    'Romario',
    'Bebeto'
  ]

  return (
    <Container>
      <RegistrationHeader operation="list"/>
      <TableList>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INICIO</th>
            <th>TERMINO</th>
            <th>ATIVA</th>
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
