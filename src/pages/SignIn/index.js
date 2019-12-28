import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
    
    const loading = false;

    function handleSubmit() {

    }
    
    return (
        <>
            <Container>
                <img src={logo} alt="GymPoint" />

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="">SEU E-MAIL</label>
                    <Input name="email" type="email" placeholder="exemplo@email.com" />
                    <label htmlFor="">SUA SENHA</label>
                    <Input name="password" type="password"/>
                    <button type="submit">{loading ? 'Carregando...' : 'Entrar no Sistema'}</button>
                </Form>

            </Container>
        </>
    );
}
