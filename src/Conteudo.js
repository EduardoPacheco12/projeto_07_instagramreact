import Stories from './Stories';
import Posts from './Posts';

export default function Conteudo() {
    //UI
    return(
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}