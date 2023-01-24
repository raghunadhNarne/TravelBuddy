
let users=document.querySelector("#ut");
$.ajax({
    method:"GET",
    "url":"https://reqres.in/api/users",
    success:function(e){
      
        let data = e.data;
        
        let string="";
        for(let x of data){
            string += `<tr>
            <td class="text-center"> ${x.id}</td>
            <td class="text-center"> ${x.first_name}</td>
            <td class="text-center"> ${x.last_name}</td>
            <td class="text-center"><img src="${x.avatar}"></td>
            </tr>`
        }
        users.innerHTML+=string;
    }
})

