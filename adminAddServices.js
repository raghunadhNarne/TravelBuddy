// let addBtn=document.querySelector('#Add');
// addBtn.addEventListener('click',addService());

let serviceName=document.querySelector('#serviceName');
let serviceDescription=document.querySelector('#serviceDescription');
let serviceIcon=document.querySelector('#serviceIcon');
let serviceImage=document.querySelector('#serviceImage');
let serviceDetailsImage=document.querySelector('#serviceDetailsImage');
let serviceDetailsTitle=document.querySelector('#serviceDetailsTitle');
let serviceDetailsDescription=document.querySelector('#serviceDetailsDescription');
let LocalStorageData=JSON.parse(localStorage.getItem("services"))
function addService()
{
    let newData ={
        "service-description":serviceDescription.value,
        "service-icon":serviceIcon.value,
        "service-img":serviceImage.value,
        "service-details-image":serviceDetailsImage.value,
        "service-details-title":serviceDetailsTitle.value,
        "service-details-description":serviceDetailsDescription.value
    }
    LocalStorageData[serviceName.value]=newData;
    localStorage.setItem('services',JSON.stringify(LocalStorageData));
    ToastDisplay(`New Service Added:(`,'bg-success');
    console.log("success");
}

function autoFill(){
    for(let [key,value]of Object.entries(LocalStorageData)){
        if(key == serviceName.value){
            serviceDescription.value = value["service-description"];
            serviceIcon.value=value["service-icon"];
            serviceImage.value=value["service-img"];
            serviceDetailsImage.value=value["service-details-image"];
            serviceDetailsTitle.value=value["service-details-title"];
            serviceDetailsDescription.value=value["service-details-description"];
        }
    }
}
document.querySelector("#serviceName").addEventListener('keyup',autoFill);
