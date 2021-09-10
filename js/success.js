const btn_success = document.querySelector("#btn_success");

btn_success.addEventListener("click", (e) =>{
    e.preventDefault(); console.log("next page");
    window.location.replace ("index.html"); 
})