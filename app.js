
let devices=[];

function pair(){
  let no=document.getElementById("no").value;
  let val=document.getElementById("mode").value;
  if(!no)return alert("isi nomor");

  let [speed,multi]=val.split("-");
  speed=parseInt(speed);
  multi=parseInt(multi);

  let dev={
    no,
    sent:0,
    deliv:0,
    profit:0,
    speed,
    multi,
    interval:null
  };

  devices.push(dev);
  render();
  run(dev);
}

function render(){
  let el=document.getElementById("list");
  el.innerHTML="";
  devices.forEach((d,i)=>{
    el.innerHTML+=`
    <div class="card">
      <div class="row">
        <b>${d.no}</b>
        <span class="green">CONNECTED</span>
      </div>
      Sent: ${d.sent}<br>
      Delivered: ${d.deliv}<br>
      Profit: ${d.profit}
    </div>
    `;
  });
}

function run(dev){
  if(dev.speed===0)return;

  dev.interval=setInterval(()=>{
    dev.sent+=dev.multi;
    dev.deliv+=dev.multi;
    dev.profit+=700*dev.multi;
    render();
  },dev.speed);
}
