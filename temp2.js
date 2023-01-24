$.ajax({
    url: "", 
    type: "POST",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({ name: 'value1', email: 'value2' }),
    success: function (result) {
        alert("successful",result)
     },
     error: function (err) {
        alert("some error occured",err)
     }
  });