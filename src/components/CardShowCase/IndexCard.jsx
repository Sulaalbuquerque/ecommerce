import { ContainerCard } from "./styles"
import { 
    AiOutlineStar, 
    AiFillStar } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

export const IndexCard = ({ 
                            discount, 
                            img, 
                            descriptionImg, 
                            detail, 
                            name, 
                            previousValue, 
                            currentValue, 
                            installment,
                            freight,
                            announcement
                        }) => {
    return (
        <>
            <ContainerCard>
                <span className="discount">{discount}</span>

                <img className="imgProduct" src={img} alt={descriptionImg} />

                <span className="detail">{detail}</span>

                <div className="name">{name}</div>

                <div className="assessments">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                </div>

                <div className="main">
                    <div className="values">
                        <p className="previousValue">{previousValue}</p>
                        <p className="currentValue">{currentValue}</p>
                        <p className="installment">{installment}</p>
                    </div>

                    <span className="freight">{freight}</span>
                </div>

                <p className="announcement">{announcement}</p>

                <div className="extras">
                    <button>
                        COMPRE AGORA
                        <span><IoIosArrowForward/></span>
                    </button>

                    <a href="#">
                        Ver mais
                        <span><IoIosArrowForward/></span>
                    </a>
                </div>
            </ContainerCard>
        </>
    )
}