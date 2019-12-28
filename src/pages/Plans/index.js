import React from 'react';

import { Container, TableList } from './styles';
import PlanHeader from './PlanHeader';

export default function Plans() {
    
    const dados = [
        'Start',
        'Gold',
        'Diamond'
      ]
    
    return (
        <Container>
          <PlanHeader title="Gerenciando Planos" operation="list"/>
          <TableList>
            <thead>
              <tr>
                <th>TITULO</th>
                <th>DURACAO</th>
                <th>VALOR MENSAL</th>
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
