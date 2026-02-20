// Désactive loader au cas où
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.display = "none";
        console.log("Loader désactivé");
    }
});