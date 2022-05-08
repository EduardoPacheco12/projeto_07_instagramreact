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
            nome: "bad.vibes.memes",
            src: "./img/bad.vibes.memes.svg", 
            razao: "Segue você"
        },
        {
            nome: "chibirdart",
            src: "./img/chibirdart.svg", 
            razao: "Segue você"
        },
        {
            nome: "razoesparaacreditar",
            src: "./img/razoesparaacreditar.svg", 
            razao: "Novo no Instagram"
        },
        {
            nome: "adorable_animals",
            src: "./img/adorable_animals.svg", 
            razao: "Segue você"
        },
        {
            nome: "smallcutecats",
            src: "./img/smallcutecats.svg", 
            razao: "Segue você"
        }
    ]
    const menus = items.map(items => <Sugestao nome={items.nome} src={items.src} razao={items.razao}/>);
   
    //UI
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {menus}
        </div>
    );
}