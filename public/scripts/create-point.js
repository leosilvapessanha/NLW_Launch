function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res=> res.json())
    .then(states =>{
      for(const state of states){
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

populateUFs()

function getCities(event){
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")
  
  const ufValue = event.target.value

  
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
  
  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelected.disabled = true

  
  fetch(url)
    .then ((res) =>{return res.json()})
    .then(cities =>{
      for(const city of cities){
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
      citySelect.disabled = false
      
    })
}
document.
  querySelector("select[name=uf]")
  .addEventListener("change", getCities)

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
  item.addEventListener("click", handleSecectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems=[]

function handleSecectedItem(event){
  // const itemId = event.target.dataset.id
  const itemLi = event.target
  itemLi.classList.toggle("selected")
  const itemId = itemLi.dataset.id
  const alreadySelected = selectedItems.findIndex(item => {
  const itemFound = item == itemId
  return itemFound
  })

  if(alreadySelected >= 0){
  const filtereditems = selectedItems.filter(item =>{
    const itemIsDifferent = item!=itemId
    return itemIsDifferent
  })
  selectedItems = filtereditems
}
  else{
  selectedItems.push(itemId)
  }
  collectedItems.value=selectedItems
}

//   function getCities (event) {
//     const citySelect = document.querySelector('select[name=city]');
//     const stateInput = document.querySelector('input[name=state]');
//     const ufValue = event.target.value;

//     const indexOfSelectedState = event.target.selectedIndex;
//     stateInput.value = event.target.options[indexOfSelectedState].text;

//     const url = https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios;

//     fetch(url).then( resp => resp.json() ).then(
//         cities => {
//             for( city of cities ) {
//                 citySelect.innerHTML += <option value="${city.id}"> ${city.nome} </option>;
//             }
//             citySelect.disabled = false
//         }
//     );
// }


// document
//   .querySelector("select[name=uf]")
//   .addEventListener("change", () => {
//     console.log("changed")
//   })
    

//fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function (res) {return res.json()}).then(function (data){console.log(data)})