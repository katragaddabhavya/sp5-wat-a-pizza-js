//Write code to get menu data from the json-server using axios API

//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
const url="http://localhost:3000/menu";


const getPromise = axios.get(url);
let menudata=[];
function menuArray(){
    getPromise.then((response)=>{
        response.data.forEach(menu=>{
            const menuobj={
                "id":`${menu.id}`,
                "category": `${menu.category}`,
          "itemName": `${menu.itemName}`,
          "price": `${menu.price}`,
          "cuisine": `${menu.cuisine}`
            }
            menudata.push(menuobj);

        })
       
    })
}

window.onload = () => getPromise.then((response) => {
    response.data.forEach(menu => {
        let placeholder=document.getElementById('tableData')
       placeholder.innerHTML +=`
       <tr>
        <td>${menu.itemName}</td>
        <td> ${menu.price}</td>
       </tr>
       `
       
        
       
})
});


let placeholder=document.getElementById('tableData');
placeholder.style.backgroundColor="lightgreen";
//Write code to filter the menu item from list
const category = document.getElementById('category');
category.style.backgroundColor="blue";
category.style.color="aqua";
category.addEventListener('change', function (e) {
    console.log(category.value)
    findItems(category.value);
});
menuArray();
function findItems(categoryName) {
    console.log(menudata)
    const categoryArray=menudata.filter(item=>item.category===categoryName);
    console.log(categoryArray)
    placeholder.innerHTML="";
    for(let i=0;i<categoryArray.length;i++){
        placeholder.innerHTML +=`
       <tr>
        <td>${categoryArray[i].itemName}</td>
        <td> ${categoryArray[i].price}</td>
       </tr>
       `
    }
}


