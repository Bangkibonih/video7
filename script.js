let connected = false;
let sent = 0;
let deliv = 0;
let profit = 0;
let interval;

function pair(){
  const nomor = document.getElementById("nomor").value;
  if(nomor){
    connected = true;
    document.getElementById("status").innerText = "Status: Connected ke " + nomor;
  }
}

function start(){
  if(!connected){
    alert("Pair dulu!");
    return;
  }

  clearInterval(interval);

  const speed = document.getElementById("mode").value;

  interval = setInterval(()=>{
    sent++;
    deliv++;
    profit += 700;

    document.getElementById("sent").innerText = sent;
    document.getElementById("deliv").innerText = deliv;
    document.getElementById("profit").innerText = profit;
  }, speed);
}
