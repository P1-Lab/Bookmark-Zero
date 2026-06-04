import {

saveBookmarkRecord

}

from "./storage.js";



chrome.bookmarks.onCreated.addListener(

async(id,node)=>{

if(!node.url)return;



await saveBookmarkRecord({

id,

title:node.title,

url:node.url,

createdAt:Date.now(),

state:"INBOX"

});



console.log(

"Captured:",

node.title

);

});



chrome.alarms.create(

"maintenance",

{

periodInMinutes:60

}

);
