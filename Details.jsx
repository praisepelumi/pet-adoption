import { useParams } from "react-router-dom";
// browser routers stores the parameters and we utilize useParams to access it

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
