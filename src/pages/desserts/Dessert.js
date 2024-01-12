import d1 from "../../components/assets/d1.png";
import d2 from "../../components/assets/d2.png";
import d3 from "../../components/assets/d3.png";
import d4 from "../../components/assets/d4.png";
import d5 from "../../components/assets/d5.png";
import styled from "styled-components";
import CardDessert from "../../components/cardDessert/CardDessert";


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

function Dessert () {

    const listeDeDessert = [
        {
            image: d1,
            prix: 4.90,
            nom: "Fondant au chocolat",
            description: "Au choix: Chocolat Blanc ou au lait",
        },
        {
            image: d2,
            prix: 2.90,
            nom: "Muffin",
            description: "Au choix: Au fruits ou au chocolat",
        },
        {
            image: d3,
            prix: 2.90,
            nom: "Beignet",
            description: "Au choix: Au chocolat ou à la vanille",
        },
        {
            image: d4,
            prix: 3.90,
            nom: "Milkshake",
            description: "Au choix: Fraise, Vanille ou Chocolat",
        },
        {
            image: d5,
            prix: 4.90,
            nom: "Sundae",
            description: "Au choix: Fraise, Caramel ou Chocolat",
        },
    ]

    return(
    <div>
          <CardTitrePrincipale>Nos Desserts</CardTitrePrincipale>
             <CardBloc>
                {listeDeDessert.map((desrt, index) =>
                    <CardDessert
                    key={`${desrt.nom}-${index}`}
                        picture={desrt.image}
                        price={desrt.prix}
                        name={desrt.nom}
                        desc={desrt.description}
                    />
                )}
            </CardBloc>
    </div>
    )
}

export default Dessert