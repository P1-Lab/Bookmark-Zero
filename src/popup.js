import {

getBookmarks

}

from "./storage.js";



import {

moveBookmark

}

from "./triageEngine.js";



async function render(){



const container=

document.getElementById(

"bookmarks"

);



container.innerHTML="";



const bookmarks=

await getBookmarks();



const inbox=

bookmarks.filter(

b=>b.state==="INBOX"

);



if(inbox.length===0){

container.innerHTML=

"No bookmarks waiting";

return;

}



for(const bookmark of inbox){



const div=

document.createElement(

"div"

);



div.innerHTML=`

<p>

<b>

${bookmark.title}

</b>

</p>

<p>

${bookmark.url}

</p>

<button data="ACTIVE">

Active

</button>

<button data="RESEARCH">

Research

</button>

<button data="FLASH">

Flash

</button>

`;



div

.querySelectorAll(

"button"

)

.forEach(

button=>{

button

.addEventListener(

"click",

async()=>{

await moveBookmark(

bookmark.id,

button.getAttribute(

"data"

)

);

render();

});

});



container.appendChild(

div

);

}



}



render();
