const Pet = ({ animal, name, breed }) => {
  return (
    <div>
      <h1>{animal}</h1>
      <h2>{name}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;
