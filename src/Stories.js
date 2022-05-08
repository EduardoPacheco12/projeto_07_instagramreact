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
            src: "./img/Milan.png",
            nome: "acmilan"
        },
        {
            src: "./img/Caze.jpg",
            nome: "casimiro"
        },
        {
            src: "./img/Messi.jpg",
            nome: "leomessi"
        },
        {
            src: "./img/Flamengo.jpg",
            nome: "flamengo"
        },
        {
            src: "./img/CR7.jpg",
            nome: "cristiano"
        },
        {
            src: "./img/ViniJr.jpg",
            nome: "vinijr"
        },
        {
            src: "./img/Mbappe.jpg",
            nome: "k.mbappe"
        },
        {
            src: "./img/Paqueta.jpg",
            nome: "lucaspaqueta"
        }
    ]

    //UI
    return(
        <div class="stories">
            {items.map(items => <Story src={items.src} usuario={items.nome}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}