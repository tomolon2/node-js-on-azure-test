async function createBreedList(){
    const res=await fetch('https://dog.ceo/api/breeds/list/all');
    const breeds=await res.json();
    document.getElementById("breed").innerHTML=`<select onchange="loadByBreed(this.value)"><option>Choose a dog breed...</option>${Object.keys(breeds.message).map(b=>`<option>${b}</option>`).join('')}</select>`;
}

let intervalId;

async function loadByBreed(breed){
    if(breed==='Choose a dog breed...') return;
    clearInterval(intervalId);
    const res=await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const imgs=(await res.json()).message;
    let i=0;
    const photoDiv=document.getElementById("photos");
    photoDiv.innerHTML=`<img src="${imgs[i]}" id="dogImage">`;
    intervalId=setInterval(()=>{
        i++; if(i>=imgs.length) i=0;
        document.getElementById("dogImage").src=imgs[i];
    },2000);
}

createBreedList();

