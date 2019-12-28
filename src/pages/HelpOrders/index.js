import React from 'react';

import { Container, TableList } from './styles';
import HelpOrderHeader from './HelpOrderHeader'

export default function HelpOrders() {
    const dados = [
        'Juca',
        'Romario',
        'Bebeto'
      ]
    
      return (
        <Container>
          <HelpOrderHeader operation="list"/>
          <TableList>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dados.map(dado => (
                <tr key={dado}>
                  <td>{dado}</td>
                  <td>responder</td>
                </tr>
              ))}
            </tbody>
          </TableList>
        </Container>
      );
}
