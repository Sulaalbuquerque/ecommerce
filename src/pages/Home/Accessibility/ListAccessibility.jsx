import { ContainerListAccessibility } from "./styles"

export const ListAccessibility = () => {

    const highContrast = () => {
        console.log('yy')
    }

    return (
        <>
            <ContainerListAccessibility className="list">
                <h3>Acessibilidade</h3>
                <ul>
                    <li onClick={highContrast}>Alto contraste</li>
                    <li>Aumentar fontes</li>
                    <li>Textos em negrito</li>
                </ul>
            </ContainerListAccessibility>
        </>
    )
}
