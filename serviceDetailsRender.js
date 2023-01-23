
let serviceContainer=document.querySelector("#service-container");
function renderCard(serviceName,serviceDetailsImg,serviceDetailsTitle,serviceDetailsDescription)
{   
    let className="";
    if(window.location.hash!=`#${serviceName}F`)
        className="d-none";
    return (`<div id="${serviceName}" class="myservicesdivactive myservicesdiv col-lg-8 ${className}">
    <img src="${serviceDetailsImg}" alt="" class="img-fluid services-img">
    <h3>${serviceDetailsTitle}</h3>
    <p>${serviceDetailsDescription}</p>
  </div>`
    );
}
function renderNav(services)
{

    let renderedString="";
    for(let [ key,value] of Object.entries(services))
    {   let className="";
        if(window.location.hash==`#${key}F`)
            className="active";
        renderedString+=`<a data-service-div=${key} id="${key}Link"  class="myservices ${className}">${key}</a>`;
    }
    return renderedString;
}
function renderCards(services)
{

let renderedString="";
 for(let [key,value] of Object.entries(services))   
 {  if(window.location.hash=='')
        window.location.replace(`#${key}F`);
    renderedString+=renderCard(key,value["service-details-image"],value['service-details-title'],value["service-details-description"]);
 }

return renderedString;

}



serviceContainer.innerHTML+= renderCards(globalThis.staticServices);
let navContainer=document.querySelector('#service-details-nav-items').innerHTML=renderNav(globalThis.staticServices);