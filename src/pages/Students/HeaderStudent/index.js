import React from 'react';

import { StudentsHeader, SudentsHeaderControl, BackButton, SaveButton } from './styles';

export default function HeaderStudent({ title }) {
    return (
        <StudentsHeader>
            <strong>{title}</strong>
            <SudentsHeaderControl>
                <BackButton to="/students">VOLTAR</BackButton>
                <SaveButton to="/students">SALVAR</SaveButton>
            </SudentsHeaderControl>
        </StudentsHeader>
    );
}
