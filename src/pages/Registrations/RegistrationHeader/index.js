import React from 'react';

import { Header, HeaderControl, BackButton, SaveButton } from './styles';

import AddButton from '../../../components/AddButton'

function getTitle(op) {

    let title = '';

    switch (op) {
        case 'add':
            title = 'Cadastro de Matrículas';
            break;
        case 'edit':
            title = 'Edição de Matrículas';
            break;
        default:
            title = 'Gerenciando Matrículas';
            break;
    }

    return title;

}

function ButtonControl({ op }) {
    switch (op) {
        case 'list':
            return (
                <AddButton to="/registrations/register" />
            );
        case 'add':
            return (
                <>
                    <BackButton to="/registrations">VOLTAR</BackButton>
                    <SaveButton to="/registrations">SALVAR</SaveButton>
                </>
            );
        case 'edit':
            return (
                <>
                    <BackButton to="/registrations">VOLTAR</BackButton>
                    <SaveButton to="/registrations">SALVAR</SaveButton>
                </>
            );
        default:
    }

}

export default function RegistrationHeader({ operation }) {

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
