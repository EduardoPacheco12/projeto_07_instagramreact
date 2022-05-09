import Sugestoes from './Sugestoes';

function Usuario(props) {
    //UI
    return(
        <div class="usuario">
            <img src= {props.src} />
            <div class="texto">
                <strong>{props.strong}</strong>
                {props.text}
            </div>
        </div>
    );
}

function Descricao(props) {
    return(
        <div class={props.class}>
        {props.texto}
        </div>
    );
}

export default function SideBar() {
    //UI
    return(
        <div class="sidebar">
            <Usuario text="Eduardo Pacheco" strong="edu_pacheco12" src="./img/FotoPerfil.jpg"/>
            <Sugestoes />
            <Descricao class="links" texto="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"/>
            <Descricao class="copyright" texto="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    );
}