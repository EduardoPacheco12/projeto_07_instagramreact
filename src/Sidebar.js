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

export default function SideBar() {
    //UI
    return(
        <div class="sidebar">
            <Usuario text="Eduardo Pacheco" strong="edu_pacheco12" src="./img/FotoPerfil.jpg"/>
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}