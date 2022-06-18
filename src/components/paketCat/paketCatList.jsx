import PaketCat from "./paketCat";

function PaketCatList() {
    let list = [
        {name:'с фуа-гра', opis:'Печень утки разварная с артишоками.', podnum:'', por: '10', pod: 'мышь в подарок', id: '0' , ves: "0,5", state: false, disebaled: false },
        {name:'с рыбой', opis:'Головы щучьи с чесноком да свежайшая сёмгушка.', podnum:'2', por: '40', pod: ' мыши в подарок', id: '1' , ves: "2", state: false, disebaled: false },
        {name:'с курой', opis:'Филе из цыплят с трюфелями в бульоне.', podnum:'5', por: '100', pod: 'мышей в подарок заказчик доволен', id: '2' , ves: "5", state: false, disebaled: true }
    ]
    return (
      <div className="paketCatList">
        {list.map(props => 
            <PaketCat props={props} key={props.id}></PaketCat>
        )}
      </div>
    );
  }
  
  export default PaketCatList;