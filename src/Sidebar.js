import Sugestoes from './Sugestoes';

function Usuario(props) {
    //UI
    return(
        <div class="usuario">
            <img src="./img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    );
}

export default function SideBar() {
    //UI
    return(
        <div class="sidebar">
            <Usuario />
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