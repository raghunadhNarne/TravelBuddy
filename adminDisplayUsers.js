let usersContainer=document.querySelector("#users-table");
function renderCard(name,email,password)
{   
    return (`<tr>
    <td class="text-center">${name}</td>
    <td class="text-center">${email}<td>
    <td >${password}</td>
    </tr>`
    );
}
function renderCards(u)
{

let renderedString="";
 for(let [key,value] of Object.entries(u))   
 {
    renderedString+=renderCard(value["name"],value['email'],value["password"]);
 }

return renderedString;

}


let u = JSON.parse(localStorage.getItem("users"));
usersContainer.innerHTML+= renderCards(u);