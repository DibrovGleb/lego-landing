export default function Blocks(props) {
    const {title, description, btntext, img} = props;
  
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
            <img src={img} alt=""/>
            
        </div>
    )
  }