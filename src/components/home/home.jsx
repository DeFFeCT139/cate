import PaketCatList from "../paketCat/paketCatList";

function Home() {
    return (
      <div className="home">
        <div className="home-text">Ты сегодня покормил кота?</div>
        <PaketCatList></PaketCatList>
      </div>
    );
  }
  
  export default Home;
  