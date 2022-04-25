import { ReactNode } from 'react';
import { ContainerCardExtraServices } from './styles'

export const CardExtraServices = ({ 
                                    icon, 
                                    title,
                                    subtitle,
                                    button
                                }) => {
    return (
        <>
            <ContainerCardExtraServices>
                <a href='#'>
                    {icon}
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                    <button>{button}</button>
                </a>
            </ContainerCardExtraServices>
        </>
    )
}