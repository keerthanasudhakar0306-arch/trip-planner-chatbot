function reply(){

let msg=
document
.getElementById(
"message"
)
.value
.toLowerCase();

let answer="";

if(msg=="munnar plans"){

answer=`

🌿 MUNNAR TRIP

DAY 1 - 27/06
🚗 Madurai → Munnar

1. Gap Road
2. Chinnakanal Falls
🏨 Hotel Checkin
3. Adventure Park
4. Botanical Garden

DAY 2 - 28/06

1. Echo Point
2. Kundala Dam
3. Top Station
4. Doors of Heaven Sunset

DAY 3 - 29/06

🌅 3 AM Start

1. Kolukkumalai View

Checkout

🚗 Return to Madurai

🛕 Meenakshi Temple

🚆 10:45 PM Train

People: 7
Budget: ₹8K each

`;

}

else if(
msg=="hi"
){

answer=
"Hello 👋";

}
else if(
msg=="munnar budget"
){

answer=
"₹8K per person • 7 members";

}

else if(
msg=="best day"
){

answer=
"Day 3 → Kolukkumalai sunrise 🌄";

}

else if(
msg=="train details"
){

answer=
"26th 10:30 PM Chennai → Madurai | Return 29th 10:45 PM";

}

else if(
msg=="group size"
){

answer=
"We are 7 travellers 😎";

}

else if(
msg=="photo spots"
){

answer=
"Gap Road • Top Station • Kolukkumalai 📸";

}

else if(
msg=="food"
){

answer=
"Tea ☕ + local snacks + dinner together";

}

else if(
msg=="surprise me"
){

answer=
"Mission: Everyone click one funny candid 😂";

}
else if(
msg=="help"
){

answer=
`
Try:

🌿 munnar plans

📸 photo spots

🚆 train details

🌄 best day

💸 munnar budget
`;

}
else if(
msg=="ooty"
){

answer=
`
🏔 OOTY

Lake

Tea Estate

Botanical Garden

`;

}

else if(
msg=="yercaud"
){

answer=
`
🍃 YERCAUD

Lake

View Point

Coffee Estate

`;

}
else{

answer=
"I don't know yet";

}

let chat=
document
.getElementById(
"chat"
);

let time=
new Date()
.toLocaleTimeString(
[],
{
hour:'2-digit',
minute:'2-digit'
}
);

chat.innerHTML+=

"<div class='user'>"

+msg+

"<br><small>"

+time+

"</small></div>";
chat.innerHTML+=
"<div class='ai'>⏳ Planning...</div>";

setTimeout(function(){

chat.lastElementChild.innerHTML=
answer;

},1000);

}
document
.getElementById(
"message"
)
.addEventListener(
"keypress",

function(event){

if(
event.key
==="Enter"
){
if(
msg==""
){

return;

}
reply();

}

}
);
function quick(text){

document
.getElementById(
"message"
)
.value=text;

reply();

}
function clearChat(){

document
.getElementById(
"chat"
)
.innerHTML="";

}
function darkMode(){

document
.body
.classList
.toggle(
"dark"
);

}