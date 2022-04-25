import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ContainerCarousel } from './styles'
import { Carousel } from 'react-responsive-carousel'

export const CarouselComp = () => {
    return (
        <>
            <ContainerCarousel>
                <Carousel>
                    <div>
                        <img src="https://via.placeholder.com/1000x350.png/BC8F8F/FFFFFF/?text=banner1" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/1000x350.png/BC8F8F/FFFFFF/?text=banner2" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/1000x350.png/BC8F8F/FFFFFF/?text=banner3" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/1000x350.png/BC8F8F/FFFFFF/?text=banner4" />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </ContainerCarousel>
        </>
    )
}