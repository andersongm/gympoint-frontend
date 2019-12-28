import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, DataRegistration } from './../styles';
import RegistrationHeader from './../RegistrationHeader';

export default function RegistrationForm({operation}) {
    return (
        <Container>
            <RegistrationHeader operation={operation} />
            <Form>
                <label htmlFor="">ALUNO</label>
                <Input name="name" type="text" />
                <DataRegistration>
                    <div>
                        <label htmlFor="">PLANO</label>
                        <Input name="plano" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">DATA DE INICIO</label>
                        <Input name="preco" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">DATA DE TERMINO</label>
                        <Input name="preco" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">VALOR FINAL</label>
                        <Input name="total" type="text" />
                    </div>
                </DataRegistration>
            </Form>
        </Container>
    );
}
