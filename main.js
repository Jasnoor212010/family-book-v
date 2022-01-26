var images=["me.jpg","mama.jpg","papa and dadu.jpg","sis.jpeg"];
var i=0;
function update(){
document.getElementById("family").src=images[i];
i=i+1;
if(i==4){
    i=0;
}
}