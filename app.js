function chanceWebSiteToA(){
    document.getElementById('iframeTest').src = "./exA/index.html"
}
function chanceWebSiteToB(){
    document.getElementById('iframeTest').src = "./exB/index.html"
}
function chanceWebSiteToC(){
    document.getElementById('iframeTest').src = "./exC/index.html"
}
function chanceWebSiteToG(){
    document.getElementById('iframeTest').src = "./exG/index.html"
}
function chanceWebSiteToK(){
    document.getElementById('iframeTest').src = "./exK/index.html"
}
function chanceWebSiteToO(){
    document.getElementById('iframeTest').src = "./exO/index.html"
}

document.getElementById('letterA').addEventListener('click', chanceWebSiteToA)
document.getElementById('letterB').addEventListener('click', chanceWebSiteToB)
document.getElementById('letterC').addEventListener('click', chanceWebSiteToC)
document.getElementById('letterG').addEventListener('click', chanceWebSiteToG)
document.getElementById('letterK').addEventListener('click', chanceWebSiteToK)
document.getElementById('letterO').addEventListener('click', chanceWebSiteToO)