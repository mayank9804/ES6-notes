function makeAjaxCall(url, methodType){
    var xhr = new XMLHttpRequest();
    xhr.open(methodType, url, true);
    xhr.send();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            var resp = xhr.responseText;
            var respJson = JSON.parse(resp);
            console.log(respJson.name);
         } else {
           console.log("AJAX failed");
         }
      } else {
         console.log("AJAX processing going on");
      }
   }
   console.log("Request sent succesfully");
 }
 // git hub url to get btford details
 var URL = "https://api.github.com/users/mayank9804";
 makeAjaxCall(URL, "GET");