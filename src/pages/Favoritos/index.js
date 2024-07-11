import Banner from "components/Banner";
import styles from "./index.module.css";
import Titulo from "components/Titulo";
import { useFAvoritoContext } from "context/Favoritos";
import Card from "components/Card";

function Favoritos() {
  const { favorito } = useFAvoritoContext();

  return (
    <>
      <Banner img="favorite" color="#AF7EAA" />
      <Titulo>
        <h1>Mis Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
