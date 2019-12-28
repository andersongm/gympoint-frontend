import React from 'react';

import { Header, HeaderControl, BackButton, SaveButton } from './styles';

import AddButton from '../../../components/AddButton'

function getTitle(op) {

    let title = '';

    switch (op) {
        case 'add':
            title = 'Cadastrar Planos';
            break;
        case 'edit':
            title = 'Edição de Planos';
            break;

        default:
            title = 'Gerenciando Planos';
            break;
    }

    return title;

}

function ButtonControl({ op }) {
    switch (op) {
        case 'list':
            return (
                <AddButton to="/plans/register" />
            );
        case 'add':
            return (
                <>
                    <BackButton to="/plans">VOLTAR</BackButton>
                    <SaveButton to="/plans">SALVAR</SaveButton>
                </>
            );
        case 'edit':
            return (
                <>
                    <BackButton to="/plans">VOLTAR</BackButton>
                    <SaveButton to="/plans">SALVAR</SaveButton>
                </>
            );
        default:
    }

}

export default function PlanHeader({ operation }) {

    return (
        <Header>
            <strong>{getTitle(operation)}</strong>
            {/* <HeaderControl op={operation}/> */}
            <HeaderControl>
                <ButtonControl op={operation}/>
            </HeaderControl>
        </Header>
    );
}
