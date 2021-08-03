// export default function Pet({ name, animal, breed }) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     // React.createElement("h2", {}, breed),
//   ]);
// }
// //

const Pet = (props) => {
  return (
    <div id="blah">
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
