import "./Battlepage.css"

interface BatllepageProps {
  image: string;
  name: string;
}

function Battlepage({image, name}: BatllepageProps) {
  return (
    <figure>
      <img src={image} alt={name}/>

      <button>Fight</button>
      
    </figure>
  )
}
export default Battlepage;