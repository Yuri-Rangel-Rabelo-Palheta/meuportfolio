import { ReactNode } from 'react';
import { icons } from 'react-icons/lib';
import {ConhecimentoContainer} from './styles';

interface ConhecimentoProps {
    title: string;
    icon: ReactNode;
}

export default function ConhecimentoItem ({title, icon}: ConhecimentoProps){

    return (
        <ConhecimentoContainer>

            <p>{title}</p>
            {icon}
        </ConhecimentoContainer>

    );
}