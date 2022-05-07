import Conteudo from './Conteudo';
import SideBar from './Sidebar';

export default function Corpo() {
    //UI
    return(
        <div class="corpo">
            <Conteudo />
            <SideBar />
        </div>
    );
}