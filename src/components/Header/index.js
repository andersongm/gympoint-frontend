import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_header.png';

import { Container, Content, ItemMenu , Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <ul>
            <ItemMenu>
              <Link to="/students">ALUNOS</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/plans">PLANOS</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/registrations">MATRICULAS</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/help-orders">PEDIDOS DE AUXILIO</Link>
            </ItemMenu>
          </ul>
        </nav>
        <Profile>
            <div>
              <strong>Anderson Martins</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
      </Content>
    </Container>
  )
}
