function getUserLoggedIn()
{   let user=localStorage.getItem('currentUser');
    if(user!=null)
        return JSON.parse(user);
    else
        return null;
}

function renderNavBar()
{
    let user=getUserLoggedIn();
    let signInButton=document.body.querySelector("#signIn");
    let signOutButton=document.body.querySelector("#signOut");

    if(user!=null)
        {
            signInButton.classList.add('d-none');
            console.log(user.name);
            signOutButton.querySelector('span').innerText=user.name;
            signOutButton.querySelector('span').style.fontWeight="bolder";
            signOutButton.querySelector('span').style.color="white";
            signOutButton.classList.remove('d-none');
        }



}
function logout()
{   
    ToastDisplay(`Bye ${JSON.parse(localStorage.getItem('currentUser')).name} :(`,'bg-success');

    localStorage.removeItem('currentUser');
    
    setTimeout(()=>window.location.reload(),1500);
}
let dropDownUser=document.body.querySelector('#signOut').querySelectorAll('a');
let signOut=dropDownUser[dropDownUser.length-1];
signOut.onclick=logout
renderNavBar();