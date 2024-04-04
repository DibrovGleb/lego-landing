import Blocks from './Blocks'
import data from "./Content.json";

export default function Main() {
    return (
        <main>
            <h1>Теперь услуги дилерского центра Вы можете можете получить онлайн!</h1>
            {data.map(x=> <Blocks key={x.id} title={x.title} description={x.description} btntext={x.btntext} img={x.img}/>)}
        </main>
    )
}
