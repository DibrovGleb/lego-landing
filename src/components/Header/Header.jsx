import './Header.sass';
import Icons from '../icons';


export default function Header(props) {
    const {width} = props
    return (
        <header>
            <nav>
                <img className="logo" src={Icons.Logo} alt="" />
                <div>
                    {!width && <ul>
                        <li><a href="">Автомобили в наличии</a></li>
                        <li><a href="">Спецпредложения</a></li>
                        <li><a href="">Продать авто</a></li>
                        <li><a href="">Сервис</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>}
                    <button className="request-call">Заказать звонок</button>
                    {width && <img className="logo" src={Icons.Bar} alt="" />}
                </div>
            </nav>
            <hr></hr>
            <div className="smallheader">
                <div className='geo'>
                    <span>
                        <img className="icon" src={Icons.Geo} alt="" />
                        Олимпийский просп., 5, стр. 1, Москва</span>
                    <span>
                        <img className="icon" src={Icons.Telegram} alt="" />
                        Проложить маршрут</span>
                </div>
                <div>
                    <span>
                        <img className="icon" src={Icons.Clocks} alt="" />
                        9:00 - 21:00 (ежедневно)</span>
                </div>
            </div>
        </header>

    )
}
