function Post(props) {
    //UI
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img1} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.img2} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.img3} />
                    <div class="texto">
                        Curtido por <strong>{props.texto}</strong> e <strong>outras {props.numeros} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    //lógica
    const items = [
        {
            img1: "./img/meowed.svg",
            img2: "./img/gato-telefone.svg",
            img3: "./img/respondeai.svg",
            usuario: "meowed",
            texto: "respondeai",
            numeros: "101.523"
        },
        {
            img1: "./img/barked.svg",
            img2: "./img/gato-telefone.svg",
            img3: "./img/respondeai.svg",
            usuario: "barked",
            texto: "adorable_animals",
            numeros: "99.159"
        }
    ]
    const menus = items.map(items => <Post img1={items.img1} usuario={items.usuario } img2="./img/gato-telefone.svg" img3 = {items.img3} texto={items.texto} numeros={items.numeros} />);

    //UI
    return(
        <div class="posts">
            {menu}
        </div>
    );
}