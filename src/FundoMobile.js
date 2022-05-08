export default function FundoMobile() {
    //lógica
    const icones = ["home-outline", "search-outline","add-circle-outline", "heart-outline", "person-outline"];

    //UI
    return(
        <div class="fundo-mobile">
            {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
        </div>
    );
}