import Servicios from "./Servicios/Servicios";

const ItemListContainer = ({ greeting }) => {
    return (
      <>
        <h1 className="text-center">{greeting}</h1>
        <Servicios/>
      </>
    );
  };
  
  export default ItemListContainer;
  