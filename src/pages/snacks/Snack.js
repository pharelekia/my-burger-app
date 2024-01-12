import CardSnack from "../../components/cardSnack/CardSnack";
import styled from "styled-components";
import s1 from "../../components/assets/s1.png";
import s2 from "../../components/assets/s2.png";
import s3 from "../../components/assets/s3.png";
import s4 from "../../components/assets/s4.png";
import s5 from "../../components/assets/s5.png";


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

function Snack () {

    const listeDeSnacks = [
        {
            image: s1,
            prix: 3.90,
            nom: "Frites",
            description: "Pommes de terre frites"
        },
        {
            image: s2,
            prix: 3.40,
            nom: "Onion Rings",
            description: "Rondelles d'oignon frits"
        },
        {
            image: s3,
            prix: 5.90,
            nom: "Nuggets",
            description: "Nuggets de poulet frits"
        },
        {
            image: s4,
            prix: 3.50,
            nom: "Nuggets Fromage",
            description: "Nuggets de fromage frits"
        },
        {
            image: s5,
            prix: 5.90,
            nom: "Ailes de Poulet",
            description: "Ailes de poulet Barbecue"
        },
    ]

    return(
    <div>
          <CardTitrePrincipale>Nos Snacks</CardTitrePrincipale>
             <CardBloc>
                {listeDeSnacks.map((snack, index) =>
                    <CardSnack
                    key={`${snack.nom}-${index}`}
                        picture={snack.image}
                        price={snack.prix}
                        name={snack.nom}
                        desc={snack.description}
                    />
                )}
            </CardBloc>
    </div>
    )
}

export default Snack