const aktie = () => {

    let form = document.querySelector("form");

    const runEvent = (e) => {
        e.preventDefault(); // hindrar formuläret från att skickas iväg
        console.log('event type: ' + e.type);

        //let text = document.createTextNode("här kommer ditt svar");
        //document.querySelector('.output').appendChild(text);

        
        let stockPrice = parseInt(document.querySelector('input[name="stockBuy"]').value);
        let budget = parseInt(document.querySelector('input[name="budget"]').value);
        let stockSell = parseInt(document.querySelector('input[name="stockSell"]').value);

       

        if(stockPrice > 0 && budget > 0 && stockSell > 0){
            console.log(stockPrice);
            console.log(budget);

            let calcOne = parseInt(budget/stockPrice);// 428st
            let calcTwo = parseInt(stockSell/calcOne);// 116 vad aktien måste stå i
            let increse = parseInt((calcTwo-stockPrice)/stockPrice*100);

            document.querySelector('.output p').innerHTML = " ";
            let text = document.createTextNode(`Din akte måste stå i ${calcTwo}kr, aktien har då ökat med ${increse}% `);
            document.querySelector('.output P').appendChild(text);

        }else{
            let text = document.createTextNode("Någonting sket sig egghövve, gör om gör rätt!");
            document.querySelector('.output').appendChild(text);
        }

    }

    form.addEventListener('submit',runEvent);
}

window.onload = function() {
    aktie();
} 