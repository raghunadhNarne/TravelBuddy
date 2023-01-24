// let addBtn=document.querySelector('#Add');
// addBtn.addEventListener('click',addService());

function addService()
{
    let serviceName=document.querySelector('#serviceName').value;
    let serviceDescription=document.querySelector('#serviceDescription').value;
    let serviceIcon=document.querySelector('#serviceIcon').value;
    let serviceImage=document.querySelector('#serviceImage').value;
    let serviceDetailsImage=document.querySelector('#serviceDetailsImage').value;
    let serviceDetailsTitle=document.querySelector('#serviceDetailsTitle').value;
    let serviceDetailsDescription=document.querySelector('#serviceDetailsDescription').value;

    let LocalStorageData=JSON.parse(localStorage.getItem("services"))
    let newData ={
        "service-description":serviceDescription,
        "service-icon":serviceIcon,
        "service-img":serviceImage,
        "service-details-image":serviceDetailsImage,
        "service-details-title":serviceDetailsTitle,
        "service-details-description":serviceDetailsDescription
    }
    LocalStorageData[serviceName]=newData;
    localStorage.setItem('services',JSON.stringify(LocalStorageData));
    ToastDisplay(`New Service Added:(`,'bg-success');
    console.log("success");
}
