import Icon from '../icons';
export default function Blocks(props) {
    const {id, title, description, btntext, img, width} = props;

    return(
        <div>

            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
            {id == 2 && !width && <img className='icon' src={Icon.Play} alt=''/>}
            {id == 4 && !width && <img className='icon' src={Icon.Loupe} alt=''/>}
            <img src={img} alt={img}/>
        </div>
    )
  }