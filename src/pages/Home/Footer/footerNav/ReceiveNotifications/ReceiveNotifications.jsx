import { ContainerReceiveNotifications } from "./styles"

export const ReiceiveNotifications = () => {
    return (
        <>
            <ContainerReceiveNotifications>
                <h5>Fique por dentro das nossas ofertas e novidades!</h5>
                <form className="form" action="">
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="digite seu e-mail aqui"/>
                    </div>

                    <div className="nome">
                        <label htmlFor="nome"></label>
                        <input type="text" placeholder="nome"/>
                    </div>

                    <button className="button">VER PROMOÇÕES</button>

                    <p className="parag">Ao se cadastrar você concordará com a nossa <a href="#" target={'_blank'} className='privacyPolicy'>política de privacidade</a></p>
                </form>
            </ContainerReceiveNotifications>
        </>
    )
}