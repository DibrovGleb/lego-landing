import Icon from '../icons';
export default function Blocks(props) {
    const {id, title, description, btntext, img, width} = props;

    return(
        <div>

            <h3>{title}</h3>
            <p>{description}</p>
            <button>{id==4 && width ? "Оставить заявку": btntext}</button>
            {id == 2 && !width && <img className='icon' src={Icon.Play} alt=''/>}
            {id == 4 && !width && <img className='icon' src={Icon.Loupe} alt=''/>}
            <img src={id == 2 ? !width ? img[0] : img[1] : img} alt={img}/>
        </div>
    )
  }