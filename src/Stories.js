function Story(props) {
    //UI
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.src} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}

export default function Stories() {
    //lógica
    const items = [
        {
            src: "./img/9gag.svg",
            nome: "9gag"
        },
        {
            src: "./img/meowed.svg",
            nome: "meowed"
        },
        {
            src: "./img/barked.svg",
            nome: "barked"
        },
        {
            src: "./img/nathanwpylestrangeplanet.svg",
            nome: "nathanwpylestrangeplanet"
        },
        {
            src: "./img/wawawicomics.svg",
            nome: "wawawicomics"
        },
        {
            src: "./img/respondeai.svg",
            nome: "respondeai"
        },
        {
            src: "./img/filomoderna.svg",
            nome: "filomoderna"
        },
        {
            src: "./img/memeriagourmet.svg",
            nome: "memeriagourmet"
        }
    ]
    const menus = items.map(items => <Story src={items.src} usuario={items.nome}/>);

    //UI
    return(
        <div class="stories">
            {menu}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}