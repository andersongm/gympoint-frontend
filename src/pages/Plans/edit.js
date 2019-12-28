import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, DataPlan} from './styles';
import PlanHeader from '../Plans/PlanHeader';

export default function PlanRegister() {
    return (
        <Container>
            <PlanHeader operation="edit" />
            <Form>
                <label htmlFor="">TITULO DO PLANO</label>
                <Input name="titulo" type="text" />
                <DataPlan>
                    <div>
                        <label htmlFor="">DURACAO (em meses)</label>
                        <Input name="duracao" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">PRECO MENSAL</label>
                        <Input name="preco" type="text" />
                    </div>

                    <div>
                        <label htmlFor="">PRECO TOTAL</label>
                        <Input name="total" type="text" />
                    </div>
                </DataPlan>
            </Form>
        </Container>
    );
}