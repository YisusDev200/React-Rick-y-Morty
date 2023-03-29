import '../app.css';

function Personajes({pers}) {
  return (
    <div className={'bg-gradient'}>
       <h3 className="pb-3">{pers.name}</h3>
      <img src={pers.image} alt="img" className="img-fluid rounded-pill"/>
      <div className='d-flex justify-content-between align-items-center pt-3'>
      <p> {pers.species} </p>
      <p> {pers.origin.name} </p>
      </div>
      
    </div>
  );
}

export default Personajes;


