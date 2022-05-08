function Sugestao(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.src}/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sugestoes() {
    //lógica
    const items = [
        {
            nome: "desimpedidos",
            src: "./img/Desimpedidos.jpg", 
            razao: "Segue você"
        },
        {
            nome: "fanaticosporfutebol",
            src: "./img/Fanaticos.jpg", 
            razao: "Segue você"
        },
        {
            nome: "futebolnewsreal",
            src: "./img/FutebolNews.jpg", 
            razao: "Novo no Instagram"
        },
        {
            nome: "futtmais",
            src: "./img/Futmais.jpg", 
            razao: "Segue você"
        },
        {
            nome: "mfutebolisticos",
            src: "./img/MemesFut.jpg", 
            razao: "Segue você"
        }
    ]
   
    //UI
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {items.map(items => <Sugestao nome={items.nome} src={items.src} razao={items.razao}/>)}
        </div>
    );
}