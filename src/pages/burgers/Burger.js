import CardBurger from "../../components/cardBurger/CardBurger";
import b1 from "../../components/assets/b1.png";
import b2 from "../../components/assets/b2.png";
import b3 from "../../components/assets/b3.png";
import b4 from "../../components/assets/b4.png";
import b5 from "../../components/assets/b5.png";
import b6 from "../../components/assets/b6.png";
import styled from "styled-components";

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

function Burger () {

    const listeDeBurger = [
        {
            image: b1,
            prix: 5.90,
            nom: "Classic",
            description: "Sandwich: Burger, Salade, Tomate, Cornichon"
        },
        {
            image: b2,
            prix: 6.50,
            nom: "Bacon",
            description: "Sandwich: Burger, Fromage, Bacon, Salade, Tomate"
        },
        {
            image: b3,
            prix: 6.90,
            nom: "Big",
            description: "Sandwich: Double Burger, Fromage, Cornichon, Salade"
        },
        {
            image: b4,
            prix: 5.90,
            nom: "Chicken",
            description: "Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise"
        },
        {
            image: b5,
            prix: 6.50,
            nom: "Fish",
            description: "Sandwich: Poisson Pané, Salade, Mayonnaise, Cornichon"
        },
        {
            image: b6,
            prix: 7.50,
            nom: "Double Steak",
            description: "Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate"
        },
    ]

    return(
    <div>
      <CardTitrePrincipale>Nos burgers</CardTitrePrincipale>
             <CardBloc>
                {listeDeBurger.map((burger, index) =>
                    <CardBurger
                    key={`${burger.nom}-${index}`}
                        picture={burger.image}
                        price={burger.prix}
                        name={burger.nom}
                        desc={burger.description}
                    />
                )}
            </CardBloc>
    </div>
    )
}

export default Burger