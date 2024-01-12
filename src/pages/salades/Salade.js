import styled from "styled-components";
import CardSalade from "../../components/cardSalade/CardSalade";
import sa1 from "../../components/assets/sa1.png";
import sa2 from "../../components/assets/sa2.png";
import sa3 from "../../components/assets/sa3.png";
import sa4 from "../../components/assets/sa5.png";
import sa5 from "../../components/assets/sa5.png";


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

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`

function Salade () {

    const listeDeSaldes = [
        {
            image: sa1,
            prix: 8.90,
            nom: "César Poulet Pané",
            description: "Poulet Pané, Salade, Tomate et la fameuse sauce César",
        },
        {
            image: sa2,
            prix: 8.90,
            nom: "César Poulet Grillé",
            description: "Poulet Grillé, Salade, Tomate et la fameuse sauce César",
        },
        {
            image: sa3,
            prix: 5.90,
            nom: "Salade Light",
            description: "Salade, Tomate, Concombre, Maïs et Vinaigre balsamique",
        },
        {
            image: sa4,
            prix: 7.90,
            nom: "Poulet Pané",
            description: "Poulet Pané, Salade, Tomate et la sauce de votre choix",
        },
        {
            image: sa5,
            prix: 7.90,
            nom: "Poulet Grillé",
            description: "Poulet Grillé, Salade, Tomate et la sauce de votre choix",
        },
    ]

    return(
    <div>
          <CardTitrePrincipale>Nos Salades</CardTitrePrincipale>
             <CardBloc>
                {listeDeSaldes.map((Salade, index) =>
                    <CardSalade
                    key={`${Salade.nom}-${index}`}
                        picture={Salade.image}
                        price={Salade.prix}
                        name={Salade.nom}
                        desc={Salade.description}
                    />
                )}
            </CardBloc>
    </div>
    )
}

export default Salade