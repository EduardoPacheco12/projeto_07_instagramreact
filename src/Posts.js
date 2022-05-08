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
            img1: "./img/LuvaDePedreiro.jpg",
            img2: "./img/LuvaPost.jpg",
            img3: "./img/Caze.jpg",
            usuario: "luvadepedreiro",
            texto: "casimiro",
            numeros: "3.144.2663"
        },
        {
            img1: "./img/Neymar.jpg",
            img2: "./img/NeymarPost.jpg",
            img3: "./img/Caze.jpg",
            usuario: "neymarjr",
            texto: "casimiro",
            numeros: "4.164.469"
        },
        {
            img1: "./img/Gabigol.jpg",
            img2: "./img/GabigolPost.jpg",
            img3: "./img/Flamengo.jpg",
            usuario: "gabigol",
            texto: "flamengo",
            numeros: "395.163"
        }
    ]

    //UI
    return(
        <div class="posts">
            {items.map(items => <Post img1={items.img1} usuario={items.usuario } img2={items.img2} img3 = {items.img3} texto={items.texto} numeros={items.numeros} />)}
        </div>
    );
}