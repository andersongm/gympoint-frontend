import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, DataStudent } from './styles';
import HeaderStudent from '../HeaderStudent';

export default function FormStudent({title}) {
    return (
        <Container>
            <HeaderStudent title={title}/>
            <Form>
                <label htmlFor="">NOME COMPLETO</label>
                <Input name="name" type="text" />
                <label htmlFor="">ENDERECO DE EMAIL</label>
                <Input name="email" type="email" placeholder="exemplo@email.com" />
                <DataStudent>
                    <div>
                        <label htmlFor="">IDADE</label>
                        <Input name="idade" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">PESO (em Kg)</label>
                        <Input name="peso" type="text" />
                    </div>

                    <div>
                        <label htmlFor="">ALTURA</label>
                        <Input name="altura" type="text" />
                    </div>
                </DataStudent>
            </Form>
        </Container>
    );
}
