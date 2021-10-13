setInterval(function(){
    let bildschirmbreite = screen.width;
    let sectionbreite = document.getElementById("section");
    console.log(sectionbreite.offsetWidth);
    console.log(bildschirmbreite);
    formel = (1-((((bildschirmbreite - sectionbreite.offsetWidth)/2)+sectionbreite.offsetWidth)/bildschirmbreite))*bildschirmbreite;
    document.getElementById("btn-bottom-position").style ="transform: translateX(-" + formel +"px);"

}, 1000);
