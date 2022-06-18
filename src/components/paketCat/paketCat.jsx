function PaketCat(props) {
    let state = props.props.state
    let disebled = props.props.disebaled
    let id = props.props.id
    function pakClik() { 
        if (disebled == false) {
            if (state == false) {
                let pak = document.getElementById("paketCat" + id)
                pak.className = 'paketCat-inner-back rad'
                let krug = document.getElementById('infoButton' + id)
                krug.className = 'info-button rad'
                state = true
                let text1 = document.getElementById('text1' + id)
                let text2 = document.getElementById('text2' + id)
                text1.style.cssText=`display: none !important;`;
                text2.style.cssText=`display: block !important;`;
            } else {
                let pak = document.getElementById("paketCat" + id)
                pak.className = 'paketCat-inner-back blue-clor'
                let krug = document.getElementById('infoButton' + id)
                krug.className = 'info-button blue-clor'
                state = false
                let text1 = document.getElementById('text1' + id)
                let text2 = document.getElementById('text2' + id)
                text1.style.cssText=`display: block !important;`;
                text2.style.cssText=`display: none !important;`;
            }
        } else {
        }
    }
    function pakClikText() {
        if (disebled == false) {
            if (state == false) {
                let pak = document.getElementById("paketCat" + id)
                pak.className = 'paketCat-inner-back rad'
                let krug = document.getElementById('infoButton' + id)
                krug.className = 'info-button rad'
                state = true
                let text1 = document.getElementById('text1' + id)
                let text2 = document.getElementById('text2' + id)
                text1.style.cssText=`display: none !important;`;
                text2.style.cssText=`display: block !important;`;
            }
        } else {
        }
    }
    setTimeout(()=>{
        if (disebled == false) {
        } else {
            let text1 = document.getElementById('text1' + id)
            let dis = document.getElementById('dis' + id)
            text1.style.cssText=`display: none !important;`;
            dis.style.cssText=`display: block !important;`;
            let pak = document.getElementById("paketCat" + id)
            pak.className = 'paketCat-inner-back blue-clor op'
        }
    },100)
    return (
      <div className="paketCat">
        <div className="paketCat-pod">
            <div id={"paketCat" + id} onClick={pakClik} className="paketCat-inner-back blue-clor">
                <div className="paketCat-inner">
                    <div className="info-paketCat-inner">
                        <div className="info-top">
                            <div className="geo-product">Сказочное заморское яство</div>
                            <div className="name-product">Нямушка</div>
                            <div className="type-product">{props.props.name}</div>
                            <div className="bonus">
                                <div className="bonus-text"><span className="donus-text-strong">{props.props.por}</span> порций</div>
                                <div className="bonus-text"><span className="donus-text-strong">{props.props.podnum}</span> {props.props.pod}</div>
                            </div>
                        </div>
                        <div id={"infoButton" + id} className="info-button blue-clor">
                            <div className="namber-ves">{props.props.ves}</div>
                            <div className="text-ves">кг</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id={"text1" + id} className="text-paketCat text1">Чего сидишь? Порадуй котэ, <a onClick={pakClikText}>купи.</a></div>
        <div id={"text2" + id} className="text-paketCat text2">{props.props.opis}</div>
        <div id={'dis' + id} className="text-paketCat disebled">Печалька, <span>{props.props.name}</span> закончился.</div>
      </div>
    );
  }
  
  export default PaketCat;