import Card from "../../components/card/Card"
import m1 from "../../components/assets/m1.png"
import m2 from "../../components/assets/m2.png"
import m3 from "../../components/assets/m3.png"
import m4 from "../../components/assets/m4.png"
import m5 from "../../components/assets/m5.png"
import m6 from "../../components/assets/m6.png"
import styled from "styled-components"

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
    margin: auto;
    margin-top: 50px;
    height: 140vh;
`

function Menu () {

    const listeDeMenus = [
        {
            image: m1,
            prix: 8.90,
            nom: "Menu Classic",
            description: "Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson"
        },
        {
            image: m2,
            prix: 9.50,
            nom: "Menu Bacon",
            description: "Sandwich: Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson"
        },
        {
            image: m3,
            prix: 10.90,
            nom: "Menu Big",
            description: "Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson"
        },
        {
            image: m4,
            prix: 9.90,
            nom: "Menu Chicken",
            description: "Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson"
        },
        {
            image: m5,
            prix: 10.90,
            nom: "Menu Fish",
            description: "Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson"
        },
        {
            image: m6,
            prix: 11.90,
            nom: "Menu Double Steak",
            description: "Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson"
        },
    ]

    return(
        <div>
            <CardTitrePrincipale>Menu Burger</CardTitrePrincipale>
             <CardBloc>
                {listeDeMenus.map((menu, index) =>
                    <Card
                    key={`${menu.nom}-${index}`}
                        picture={menu.image}
                        price={menu.prix}
                        name={menu.nom}
                        desc={menu.description}
                    />
                )}
            </CardBloc>
        </div>
    )
}

export default Menu