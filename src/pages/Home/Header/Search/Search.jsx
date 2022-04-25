import { IoMdSearch } from 'react-icons/io'
import { ContainerSearch } from './styles'

export const Search = () => {
    return (
        <>
            <ContainerSearch>
                <input type="text" placeholder="O que você procura hoje?"/>
                <button><IoMdSearch className='icon'/></button>
            </ContainerSearch>
        </>
    )
}