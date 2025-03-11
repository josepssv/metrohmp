/////////////////////////////////////////
// josepssv for (((((tracer project)))))
/////////////////////////////////////////

let trili = [];
let trilini = [];
  let traki = [
        [],
        [],
        [],
        [],
        []
    ];
    let gtraki = [
        [],
        [],
        [],
        [],
        []
    ]
    let nitraki = 0
    let compi = [4, 4];
    let tempi = 220
    let escribi;
    let grabi = true
  
    let nbari = 4;
    let instri = [
        ['p', 44, 6],
        ['p', 44, 9]
    ]
    const durations = [1, 2, 4, 8, 16, 32, 64];
      durations[15]=[2,4]
      durations[25]=[4,8]
      durations[35]=[8,16]


function restini(tri) {
  return tri.map((fila) =>
    fila.map((elemento) => {
      if (elemento >= 10) {
        let decenas = Math.floor(elemento / 10); 
        let unidades = elemento % 10; 
        return (decenas - 1) * 10 + unidades; 
      } else {
        return elemento - 1; 
      }
    })
  );
}


function inimetri(compi = [4, 4]) {
  if (compi[0] == 2) {
    trili = [];
    trilini = [];
    trili[0] = [];
    trilini[0] = [];
    trili[1] = [[2]];
    trili[2] = [
      [35, 4],
      [3, 3],
      [4, 35],
    ];
    trili[3] = [
      [3, 4, 4],
      [4, 3, 4],
      [4, 4, 3],
    ];
    trili[4] = [[4, 4, 4, 4]];
    for (let a = 1; a < trili.length; a++) {
      trilini[a] = restini(trili[a]);
    }
  }
  if (compi[0] == 3) {
    trili = [];
    trilini = [];
    trili[0] = [];
    trilini[0] = [];

    trili[1] = [[25]];
    trili[2] = [
      [2, 3],
      [35, 35],
      [3, 2],
    ];
    trili[3] = [
      [2, 4, 4],
      [35, 3, 4],
      [35, 4, 3],
      [3, 35, 4],
      [3, 3, 3],
      [3, 4, 35],
      [4, 2, 4],
      [4, 35, 3],
      [4, 3, 35],
      [4, 4, 2],
    ];
    trili[4] = [
      [35, 4, 4, 4],
      [3, 3, 4, 4],
      [3, 4, 3, 4],
      [3, 4, 4, 3],
      [4, 35, 4, 4],
      [4, 3, 3, 4],
      [4, 3, 4, 3],
      [4, 4, 35, 4],
      [4, 4, 3, 3],
      [4, 4, 4, 35],
    ];
    trili[5] = [
      [3, 4, 4, 4, 4],
      [4, 3, 4, 4, 4],
      [4, 4, 3, 4, 4],
      [4, 4, 4, 3, 4],
      [4, 4, 4, 4, 3],
    ];
    trili[6] = [[4, 4, 4, 4, 4, 4]];

    for (let a = 1; a < trili.length; a++) {
      trilini[a] = restini(trili[a]);
    }
  }

  if (compi[0] == 4) {
    //fili[3]=[[2,1,1],[1,2,1],[1,1,2]]
    trili = [];
    trilini = [];
    trili[0] = [];
    trilini[0] = [];
    trili[1] = [[1]];
    trili[2] = [
      [25, 3],
      [2, 2],
      [3, 25],
    ];
    trili[3] = [
      [25, 4, 4],
      [2, 35, 4],
      [2, 3, 3],
      [2, 4, 35],
      [35, 2, 4],
      [35, 35, 3],
      [35, 3, 35],
      [35, 4, 2],
      [3, 2, 3],
      [3, 35, 35],
      [3, 3, 2],
      [4, 25, 4],
      [4, 2, 35],
      [4, 35, 2],
      [4, 4, 25],
    ];
    trili[4] = [
      [2, 3, 4, 4],
      [2, 4, 3, 4],
      [2, 4, 4, 3],
      [35, 35, 4, 4],
      [35, 3, 3, 4],
      [35, 3, 4, 3],
      [35, 4, 35, 4],
      [35, 4, 3, 3],
      [35, 4, 4, 35],
      [3, 2, 4, 4],
      [3, 35, 3, 4],
      [3, 35, 4, 3],
      [3, 3, 35, 4],
      [3, 3, 3, 3],
      [3, 3, 4, 35],
      [3, 4, 2, 4],
      [3, 4, 35, 3],
      [3, 4, 3, 35],
      [3, 4, 4, 2],
      [4, 2, 3, 4],
      [4, 2, 4, 3],
      [4, 35, 35, 4],
      [4, 35, 3, 3],
      [4, 35, 4, 35],
      [4, 3, 2, 4],
      [4, 3, 35, 3],
      [4, 3, 3, 35],
      [4, 3, 4, 2],
      [4, 4, 2, 3],
      [4, 4, 35, 35],
      [4, 4, 3, 2],
    ];
    trili[5] = [
      [2, 4, 4, 4, 4],
      [3, 3, 3, 4, 4],
      [3, 3, 4, 3, 4],
      [3, 3, 4, 4, 3],
      [3, 4, 3, 3, 4],
      [3, 4, 3, 4, 3],
      [3, 4, 4, 3, 3],
      [4, 2, 4, 4, 4],
      [4, 3, 3, 3, 4],
      [4, 3, 3, 4, 3],
      [4, 3, 4, 3, 3],
      [4, 4, 2, 4, 4],
      [4, 4, 3, 3, 3],
      [4, 4, 4, 2, 4],
      [4, 4, 4, 4, 2],
    ];
    trili[6] = [
      [3, 3, 4, 4, 4, 4],
      [3, 4, 3, 4, 4, 4],
      [3, 4, 4, 3, 4, 4],
      [3, 4, 4, 4, 3, 4],
      [3, 4, 4, 4, 4, 3],
      [4, 3, 3, 4, 4, 4],
      [4, 3, 4, 3, 4, 4],
      [4, 3, 4, 4, 3, 4],
      [4, 3, 4, 4, 4, 3],
      [4, 4, 3, 3, 4, 4],
      [4, 4, 3, 4, 3, 4],
      [4, 4, 3, 4, 4, 3],
      [4, 4, 4, 3, 3, 4],
      [4, 4, 4, 3, 4, 3],
      [4, 4, 4, 4, 3, 3],
    ];
    trili[7] = [
      [3, 4, 4, 4, 4, 4, 4],
      [4, 3, 4, 4, 4, 4, 4],
      [4, 4, 3, 4, 4, 4, 4],
      [4, 4, 4, 3, 4, 4, 4],
      [4, 4, 4, 4, 3, 4, 4],
      [4, 4, 4, 4, 4, 3, 4],
      [4, 4, 4, 4, 4, 4, 3],
    ];
    trili[8] = [[4, 4, 4, 4, 4, 4, 4, 4]];
    //trili[16] = [[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]];

    for (let a = 1; a < trili.length; a++) {
      //trilini[a] = filini[a]
      trilini[a] = restini(trili[a]);
    }
  }
}




 function addi(dati, ntraki = 0) {
        traki[ntraki].addEvent(
            new MidiWriter.ProgramChangeEvent({ instrument: dati[0] })
        );
        traki[ntraki].addEvent(
            new MidiWriter.NoteEvent({
                pitch: dati[1],
                duration: dati[2],
                sequential: dati[3],
                velocity: dati[4],
                wait: dati[5],
               channel: dati[6],
                //repeat: dati[7]
            })
        );
  
    }

function previ(ni=0){
      
    if(ni==0){
        gtraki[nitraki] = []
        traki[nitraki] = []
        traki[nitraki] = new MidiWriter.Track();
        traki[nitraki].setTimeSignature(compi[0], 4);
        traki[nitraki].setTempo(tempi);
    }
    if(ni==1){

      if(traki[nitraki].events.length===0){
            gtraki[nitraki] = []
            traki[nitraki] = new MidiWriter.Track();
          }
            traki[nitraki].setTimeSignature(compi[0], 4);
            traki[nitraki].setTempo(tempi);

    }
  }
      
      
    function initraki( instrai = [
        ['p', 44, 9],
        ["p", 48, 6]
    ], inserti = [0]) {
  
        document.getElementById("totalibari").innerHTML = nbari;
        document.getElementById("slidi").max = nbari;

        let insi = [0]
        let dati = []
        let ntraki = nitraki 
        viritmi = int(input2.value());
        //viritmi=select('#iritmi').value()
        //let nnotipi=floor(random(0, trilini.length))
        //let peri=floor(random(0, trilini[nnotipi].length))
        
        let nnotipi=int(input1.value())
        //console.log('TRILINI', trilini[nnotipi][viritmi],nnotipi,viritmi,)
        console.log('INSTRAI',JSON.stringify(instrai))
        for (let a = 1; a <= nbari; a++) {
         
          let ritmi = [...trilini[nnotipi][viritmi]]
          for (let i = 1; i <= ritmi.length; i++) {
            if (i == 1) { insi = inserti } else { insi = [0] }
            let perci = instrai[i-1][0];
            let pichi = instrai[i-1][1];
            let voli= instrai[i-1][2]*10;
            /*if (i === 1){
                perci = instrai[0][0];
                pichi = instrai[0][1];
                voli=100
            }*/
            
            let niti
            let chani=nitraki
            if (typeof perci === 'number') {
                 niti = perci;
            } else {
                 niti = 1;
                 chani = 10;
            }
            dati=[]
            dati[0] = niti,
            dati[1] = pichi
            dati[2] = [durations[ritmi[i-1]]]
            dati[3] = false;
            dati[4] = voli;
            dati[5] = insi;
            dati[6] = chani;
          if (grabi) {
            gtraki[ntraki].push(dati);
            }
           addi(dati, ntraki);
          }
           
        }
     
      //console.log('GTRAKI',JSON.stringify(gtraki[nitraki]))
    }
      
      
      
     function endi() {
       
        escribi = new MidiWriter.Writer(traki);
    //console.log('ESCRIBI',escribi.dataUri())
        var playi = document.getElementById("player15");
       playi.addEventListener("note", eventNote, false);
        playi.src = escribi.dataUri();
        //let tri = instri.map(subi => `${subi[0]}-${subi[1]}`).join('_');
  
        let titi = 'Metr_' + tempi + '_' + compi[0] + '_4_' + nbari + ''
        let anchor = document.getElementById("expi")
       anchor.setAttribute('href', escribi.dataUri());
        anchor.setAttribute('download', titi + '.mid')
        anchor.innerHTML = titi + '.mid';

        let anchowi = document.getElementById("wav");
        let plawi = document.getElementById("plawi");

        setTimeout(function() {
            dataUriToArrayBuffer(escribi.dataUri()).then((wavUrl) => {

                let wavi = synth.midiToWav(wavUrl).toBlob();
                let src = URL.createObjectURL(wavi);
                plawi.src = src;
                plawi.load();
                anchowi.setAttribute("href", src);
                anchowi.setAttribute("download", titi + ".wav");
                anchowi.innerHTML = titi + ".wav"
            });
        }, 1000)
      
    }

  let input1;
  let input2;
  let input2MaxSpan; 
  let viritmi=13
  
   function setup(){
     createMetaTag();
        noCanvas()
 
inimetri([4,4]);    

 
  input1 = select('#innoti');
  input2 = select('#iritmi');
  input2MaxSpan = select('#input2-max');

  input1.changed(() => {
    updateSelect(int(input1.value()));
  });
 
  input2.changed(() => {
   
   viritmi = int(input2.value());
 select('#input2-max').html(viritmi)
  });
  //updateInput2Limit();
    updateSelect(4);
    fvoidi(5)
    previ()
    instri = getinstri()
    initraki(instri)
    endi()   
 
  }


///////////////////////////////////////
function getinstri(){
      getInputValues()
     let dati=select("#instri").value()
     
      let formi= formidati(dati)
      instri=formi
     return formi
}


function getInputValues() {
    const inputs = selectAll('.text-field'); 
    let cadi=''
    inputs.forEach((input, index) => {
        const value = input.value(); 
        cadi+=value+' '
      
    });
   cadi.slice(0,-1)
   select('#instri').value(cadi) 
console.log(cadi) 
}

function createTextFields(array) {
  console.log(JSON.stringify(array))
    const container = select('#text-fields-container');
    container.html('')
      const length = array.length;
    const numFields = constrain(length, 2, 8);
    for (let i = 0; i < numFields; i++) {
        const input = createInput('');
        input.addClass('text-field');
        input.attribute('id', `noti-${i}`); 
        
        input.value(array[i].join(':'))
        input.input( getinstri);
        input.parent(container);
    }
}

function constri(n){
  let cadi=''
  //let matri=[]
  instri=[]
  if(n<=1){n=2}
  for(let a=0;a<n;a++){
    let tadi='p:44:5'
    cadi+=tadi+' '
    let teti=tadi.split(':')
    instri.push([teti[0],int(teti[1]),int(teti[2])])
  }
  cadi.slice(0, -1);
  select('#instri').value(cadi)
  createTextFields(instri)
   getInputValues()
}
function updateInput2Limit() {
    const inpi1 = parseInt(input1.value());
    let toti=trilini[inpi1].length-1;
   updateSelect(0,toti)
  }

function updateSelect(index) {
 
  if (index <= 0 ) {
    
    index=1
       
     }
   if (index >= trilini.length) {
    
    index=trilini.length-1
       
     }
  if (index >= 0 && index < trilini.length) {
    input1.value(index)
    constri(index)
    select('#input1-max').html(trilini.length-1)
    input2.html(''); 
    for(let a=0;a<trilini[index].length;a++){
      const option = createElement('option');
      let sonibi=Array(trilini[index][a].length).fill(1)
      let infi = convernai(trilini[index][a],sonibi);
      option.attribute('class', 'm3');
      option.attribute('value', a); 
      option.html(`${a}: ${infi}`,1); // Texto visible 
      option.parent(input2); 
    }
   // Añadimos la opción al <select>
  }
}

    function handleChange(event, isTempo) {
        const value = parseInt(event.target.value);
        if (isTempo) {
            tempi = value;
        } else {
            nbari = value;
        }
    
        // initraki(tempi, compi[0],instri);
    }


   
    let slidi = document.querySelector("#slidi"); 
    let iposi = document.querySelector("#iposi");
    iposi.value = slidi.value;
    slidi.addEventListener("input", (event) => {
        iposi.value = event.target.value;
    });

    document.getElementById("into").addEventListener("click", function(event) {
        instri = getinstri()
        let posibari = parseInt(iposi.value)
        let gmemo=[]
        if(gtraki[nitraki].length>0){
          console.log('QUEGTRAKI',JSON.stringify(gtraki[nitraki]))
         gmemo=gtraki[nitraki]
        //grabi=false
        fvoidi()
        grabi=true
       instri = getinstri()
        previ()
        initraki(instri);
        let gmemoi=gtraki[nitraki]
        fvoidi()
        previ()
        gmemo.splice(posibari*compi[0], 0, ...gmemoi);
        for(let a=0;a<gmemo.length;a++){
          addi(gmemo[a], nitraki)
          gtraki[nitraki].push(gmemo[a])
        }
        endi()
        
      }
        
        /*-->let insertini = [0]
        if (ntimi > 0) { insertini = Array(ntimi).fill(1) }
        */
        //initraki(tempi, compi[0], instri, insertini);
        //endi()
        //grabi = false
        //a.splice(2, 0, ...b);
    });

       document.getElementById("fendi").addEventListener("click", function(event) {
        instri = getinstri()
        grabi = true
        initraki(instri);
        endi()
        
    });
    document.getElementById("inputTempo").addEventListener("change", function(event) {
        handleChange(event, true);
    });

    document.getElementById("inputNbari").addEventListener("change", function(event) {
        handleChange(event, false);
    });


    function handleClick(event, compiValue) {
        var messages = document.querySelectorAll(".m");
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "#888";
            messages[i].style.backgroundColor = "#8883";
        }
        event.target.style.color = "#000";
        event.target.style.backgroundColor = "#fff";
        compi[0] = compiValue;
        
    }

    document.getElementById("2_4").addEventListener("click", function(event) {
        handleClick(event, 2);
        inimetri([2,4]);
      input1.value(trilini.length-1)
     let maxipi=int(input1.value())
       let toti=trilini[maxipi].length
    updateSelect(maxipi);
      viritmi = int(input2.value());
        select('#input1-max').html(trilini.length-1)
 select('#input2-max').html(toti)
    });

    document.getElementById("3_4").addEventListener("click", function(event) {
        handleClick(event, 3);
       inimetri([3,4]);
      input1.value(trilini.length-1)
      let maxipi=int(input1.value())
       let toti=trilini[maxipi].length
    updateSelect(maxipi);
      viritmi = int(input2.value());
        select('#input1-max').html(trilini.length-1)
 select('#input2-max').html(toti)
    });

    document.getElementById("4_4").addEventListener("click", function(event) {
        handleClick(event, 4);
        inimetri([4,4]);
      input1.value(trilini.length-1)
      let maxipi=int(input1.value())
       let toti=trilini[maxipi].length
    updateSelect(maxipi);
      viritmi = int(input2.value());
       select('#input1-max').html(trilini.length-1)
 select('#input2-max').html(toti)
    });
 

      
   function fvoidi(n=0){
      if(n==0){
         traki[nitraki]=new MidiWriter.Track(); 
         gtraki[nitraki]=[]
      }
     if(n==1){ 
       gtraki[nitraki]=[]
       traki[nitraki]=new MidiWriter.Track();
       endi()
     }
     
     if(n==5){
       traki[0]=new MidiWriter.Track();
       traki[1]=new MidiWriter.Track();
       traki[2]=new MidiWriter.Track();
       traki[3]=new MidiWriter.Track();
       traki[4]=new MidiWriter.Track();
        }
      
    }
      
    function fstarti(){
      if(gtraki[nitraki].length>0){
        let gmemo=gtraki[nitraki]
        //grabi=false
        fvoidi()
        grabi=true
       instri = getinstri()
        previ(0)
        initraki(instri);
        gtraki[nitraki].push(...gmemo);
   let gmemi=gtraki[nitraki]
        console.log('GMEMOSTART',JSON.stringify(gmemi))
        previ()
        for(let a=0;a<gmemi.length;a++){
          addi(gmemi[a], nitraki)
          gtraki[nitraki].push(gmemi[a])
        }
                endi()
      }
    }  
      
    function fvoci(event, vali) {
        var messages = document.querySelectorAll(".m1");
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "#888";
            messages[i].style.backgroundColor = "#8883";
        }
        event.target.style.color = "#000";
        event.target.style.backgroundColor = "#fff";
        nitraki = vali
    
    }

    document.getElementById("v0").addEventListener("click", function(event) { fvoci(event, 0); });
    document.getElementById("v1").addEventListener("click", function(event) { fvoci(event, 1); });
    document.getElementById("v2").addEventListener("click", function(event) { fvoci(event, 2); });
    document.getElementById("v3").addEventListener("click", function(event) { fvoci(event, 3); });
    document.getElementById("v4").addEventListener("click", function(event) { fvoci(event, 4); });




    async function dataUriToArrayBuffer(dataUri) {
        let base64String = dataUri.split(",")[1]; 
        let byteCharacters = atob(base64String);
        let byteArray = new Uint8Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteArray[i] = byteCharacters.charCodeAt(i);
        }
        return byteArray.buffer; 
    }




    function formidati(input) {
        const parts = input.split(' ');
        const result = parts.map(part => {
            const [key, value, dini] = part.split(':');
            const parsedValue = parseInt(value, 10);
            const parsedKey = isNaN(key) ? key : parseInt(key, 10);
          const parsedDini = int(dini);
            return [parsedKey, parsedValue, parsedDini];
        });
        return result;
    }


    function fnewi() {      
        instri = getinstri()
      
 let inserti = parseInt(iposi.value)
 tempi=parseInt(document.getElementById("inputTempo").value)
      fvoidi()
        previ()
        initraki(instri,inserti);
        endi()

    }

function getipi(duribi) {
  return duribi.map((elemento) => {
    if (elemento >= 10) {
      let decenas = Math.floor(elemento / 10); // Obtiene la cifra de las decenas
      let unidades = elemento % 10; // Obtiene la cifra de las unidades
      return (decenas - 1) * 10 + unidades; // Resta 1 a las decenas y las combina con las unidades
    } else {
      return elemento - 1; // Elementos de una sola cifra
    }
  });
}



function convernai(cadena, sonis,duribi, numero = 3) {
  const mapa = {
    0: "&#xE1D2;&nbsp;&nbsp;&nbsp;",
    1: "&#xE1D3;&nbsp;&nbsp;&nbsp;",
    15: "&#xE1D3;&nbsp;&nbsp;&nbsp;&nbsp;",
    2: "&#xE1D5;&nbsp;&nbsp;&nbsp;",
    25: "&#xE1D5;&nbsp;&nbsp;&nbsp;&nbsp;",
    3: " &nbsp;&nbsp;&nbsp;",
    35: " &nbsp;&nbsp;&nbsp;&nbsp;",
    4: "𝅘𝅥𝅯&nbsp;&nbsp;&nbsp;",
    45: "𝅘𝅥𝅯&nbsp;&nbsp;&nbsp;&nbsp;",
  };

  const altTres = {
    a: "&#xE1D7;&nbsp;&nbsp;&nbsp;", //sola corchea
    b: "", //negra code_inicio
    c: "", //corchealine_noInicio
    d: "&nbsp;&nbsp;&nbsp;", //corchea 8th line_final
    e: "", //semicorchealine_noInicio
    f: "&nbsp;&nbsp;&nbsp;", //semicorchea 16th line_final
    sa: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", //rest 0
    sb: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", //rest 1
    sc: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", // rest 2
    sd: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", // rest3
  };

  let opiA = '<span class="m3 colai">';
  let opiB = '<span class="m3 colai colei">';
 
  let ialti = sonis.map((num) => (num === 0 ? opiB : opiA));
  let silai = sonis.map((num) => (num === 0 ? 0 : 1));

  const elementos = cadena; //cadena.split("_").map(Number);
  //console.log('S '+JSON.stringify(sonis))
  //console.log('D '+JSON.stringify(elementos))
  return elementos
    .map((num, idx, arr) => {
      if (num === numero) {
        // Determinamos si el número está solo
        const anterior = arr[idx - 1];
        const siguiente = arr[idx + 1];

        if (
          (anterior === undefined || anterior !== numero) && // No hay el número antes
          (siguiente === undefined || siguiente !== numero) // No hay el número después
        ) {
          if (silai[idx] == 0) {
            return ialti[idx] + altTres["a"] + "</span>";
          } else {
            return ialti[idx] + altTres["a"] + "</span>";
          }
        } else if (
          anterior !== numero && // No hay el número antes
          siguiente === numero // Hay el número después
        ) {
          //
          if (silai[idx] == 0) {
            return ialti[idx] + altTres["b"] + "</span>";
          } else {
            return ialti[idx] + altTres["b"] + "</span>";
          }
        } else if (
          anterior === numero && // Hay el número antes
          (siguiente === undefined || siguiente !== numero) // No hay el número después
        ) {
          if (silai[idx] == 0) {
            return ialti[idx] + altTres["d"] + "</span>";
          } else {
            return ialti[idx] + altTres["d"] + "</span>";
          }
        } else {
          if (silai[idx] == 0) {
            return ialti[idx] + altTres["c"] + "</span>";
          } else {
            return ialti[idx] + altTres["c"] + "</span>";
          }
        }
      } else if (mapa[num.toString()] !== undefined) {
        return ialti[idx] + mapa[num.toString()] + "</span>";
      } else {
        return ialti[idx] + num + "</span>"; // Si no coincide, se deja el número tal cual
      }
    })
    .join("");
}



function calcicompi(startTime) {
  let tempo = tempi;
  const secondsPerBeat = 60 / tempo; 
  const beatsPerMeasure = compi[0];
  const secondsPerMeasure = secondsPerBeat * beatsPerMeasure;
  const ticksPerBeat = (128 * compi[0]) / 4;
  const ticksPerMeasure = ticksPerBeat * beatsPerMeasure;
  const seconds = startTime; 
  const measures = seconds / secondsPerMeasure;
  const currentCompas = Math.floor(measures) + 1; 

  return currentCompas;
}

function eventNote() {

  //if (contEvent == 0) { }
    let dati = calcicompi(player15.currentTime);
  select('#cucopi').html(dati)
 
  if (player15.currenTime == player15.duration || player15.playing == false) {
  }
}

/////////////
function createMetaTag() {
  //https://openprocess4.org/sketch/790331
  //Mobile Devices by Oren Shoham
  let meta = createElement("meta");
  meta.attribute("name", "viewport");
  meta.attribute(
    "content",

    "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
  );

  let head = select("head");

  meta.parent(head);
}
