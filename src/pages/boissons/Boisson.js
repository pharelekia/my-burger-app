import styled from "styled-components";
import CardBoisson from "../../components/cardBoisson/CardBoisson";
import bo1 from "../../components/assets/bo1.png";
import bo2 from "../../components/assets/bo2.png";
import bo3 from "../../components/assets/bo3.png";
import bo4 from "../../components/assets/bo4.png";
import bo5 from "../../components/assets/bo5.png";
import bo6 from "../../components/assets/bo6.png";


const CardTitrePrincipale = styled.h1`
    color: #dfc24d;
    text-align: center;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 1.5em;
`

const CardBloc = styled.div`
    display: grid;
    gap: 20px;
    grid-template-rows: 450px 450px 450px;
    grid-template-columns: 450px 450px 450px;
    width: 90%;
    height: 140vh;
    margin: auto;
    margin-top: 50px;
`

function Boisson () {

    const listeDeBoissons = [
        {
            image: bo1,
            prix: 1.90,
            nom: "Coca-Cola",
            description: "Au choix: Petit, Moyen ou Grand",
        },
        {
            image: bo2,
            prix: 1.90,
            nom: "Coca-Cola Light",
            description: "Au choix: Petit, Moyen ou Grand",
        },
        {
            image: bo3,
            prix: 1.90,
            nom: "Coca-Cola Zéro",
            description: "Au choix: Petit, Moyen ou Grand",
        },
        {
            image: bo4,
            prix: 1.90,
            nom: "Fanta",
            description: "Au choix: Petit, Moyen ou Grand",
        },
        {
            image: bo5,
            prix: 1.90,
            nom: "Sprite",
            description: "Au choix: Petit, Moyen ou Grand",
        },
        {
            image: bo6,
            prix: 1.90,
            nom: "Nestea",
            description: "Au choix: Petit, Moyen ou Grand",
        },
    ]

    return(
    <div>
          <CardTitrePrincipale>Nos Boissons</CardTitrePrincipale>
             <CardBloc>
                {listeDeBoissons.map((boisson, index) =>
                    <CardBoisson
                    key={`${boisson.nom}-${index}`}
                        picture={boisson.image}
                        price={boisson.prix}
                        name={boisson.nom}
                        desc={boisson.description}
                    />
                )}
            </CardBloc>
    </div>
    )
}

export default Boisson