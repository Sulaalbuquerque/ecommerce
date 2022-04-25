import { ReactNode } from 'react';
import { ContainerCardAlternativeAccess } from './styles'

export const CardAlternativeAccess = ({ 
                                    icon, 
                                    title,
                                    subtitle,
                                }) => {
    return (
        <>
            <ContainerCardAlternativeAccess>
                <a href='#'>
                    {icon}
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </a>
            </ContainerCardAlternativeAccess>
        </>
    )
}