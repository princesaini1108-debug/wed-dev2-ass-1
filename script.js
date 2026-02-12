const eventform=document.getElementById("eventForm");
const eventTitle=document.getElementById("eventTitle");
const eventDate=document.getElementById("eventDate");
const eventCategory=document.getElementById("eventCategory");
const eventDescription=document.getElementById("eventDescription");
const ClearAllBtn=document.getElementById("ClearAllBtn");
const addSampleBtn=document.getElementById("addSampleBtn");
const eventContainer=document.getElementById("eventContainer");
const democontent=document.getElementById("democontent");

const sampleEvents=[
    {
        title:"web dev",
        date:"4-5-2026",
        category:"workshop",
        description:"used ius sijjnsf k ddk"
    },
    {
        title:"web dev2",
        date:"4-4-2026",
        category:"conference",
        description:"ffh f euh e eege egeg fdds",
    }
]

function createEventCard(eventData){
   const card=document.createElement("div");

   card.innerHTML=`
   <button class="delete-btn">X</button>
   <h3>${eventData.title}</h3>
   <div>${eventData.date}</div>
   <span>${eventData.category}</span>
   <p>${eventData.description}</p>
   `

   return card;
}
function addEvent(eventData){
    const emptystate=document.querySelector(".empty-state");
    emptystate.remove();
    eventContainer.appendChild(createEventCard(eventData));
}
eventform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const eventData={
        title:eventTitle.value,
        date:eventDate.value,
        category:eventCategory.value,
        description:eventDescription.value
    }
    addEvent(eventData)
})