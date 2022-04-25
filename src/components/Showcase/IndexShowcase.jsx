import { IndexCard } from "../CardShowCase/IndexCard";
import { 
    ContainerCarousel, 
    ContainerCarouselCards, 
    ContainerCarouselControls, 
    ContainerShowcase } from "./styles"
import { 
    IoIosArrowForward, 
    IoIosArrowBack } from 'react-icons/io'
import { 
    useEffect, 
    useRef, 
    useState } from 'react'

export const IndexShowcase = ({ 
                                title, 
                                description, 
                                banner, 
                                descriptionBanner,
                                link 
                            }) => {
    /*  
    // Consumindo api de produtos 

    const carousel = useRef(null)

    const [data, setData] = useState([])
    
    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    useEffect(() => {
        fetch('http://localhost:3000/products.json')
        .then(response => response.json())
        .then(setData)
    }, [])

    if(!data || !data.length) return null
    */

    //Sem consumir api de produtos

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <>
            <ContainerShowcase>
                <div className="titles">
                    <h1>{title}</h1>
                    <span>{description}</span>
                </div>

                <div className="banner">
                    <img src={banner} alt={descriptionBanner}/>
                </div>

                <ContainerCarousel>
                    <ContainerCarouselCards ref={carousel}>

                        {/*
                        {data.map((card) => {

                            const {
                                id,
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
                            } = card

                            return (
                                <IndexCard
                                    key={id}
                                    discount={discount} 
                                    img={img} 
                                    descriptionImg={descriptionImg} 
                                    detail={detail} 
                                    name={name} 
                                    previousValue= {previousValue} 
                                    currentValue={currentValue} 
                                    installment={installment} 
                                    freight={freight} 
                                    announcement={announcement} 
                                />
                            )
                        })}
                        */}

                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />

                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                            <IndexCard
                                key={"id"}
                                discount={"-5%"} 
                                img={"https://via.placeholder.com/200x200.png/BC8F8F/FFFFFF/?text=Anúncio1"} 
                                descriptionImg={"imagem máscara de cílios"} 
                                detail={"Lançamento"} 
                                name={"Máscara para cílios - 10g"} 
                                previousValue= {"R$ 70,00"} 
                                currentValue={"R$ 60,00"} 
                                installment={"3x R$ 20,00"} 
                                freight={"Frete Grátis"} 
                                announcement={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                            />
                    </ContainerCarouselCards>

                    <ContainerCarouselControls>
                        <button onClick={handleLeftClick}><IoIosArrowBack/></button>
                        <button onClick={handleRightClick}><IoIosArrowForward/></button>
                    </ContainerCarouselControls>

                </ContainerCarousel>

                <a className="linkPag" href="#">
                    {link}
                    <span><IoIosArrowForward/></span>
                </a>
            </ContainerShowcase>
        </>
    )
}
