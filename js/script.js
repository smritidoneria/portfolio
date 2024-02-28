
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

 
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY)




};







const  darkModeIcon=document.getElementById('darkMode-icon');

darkModeIcon.addEventListener('click',()=>{
    console.log("s");
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
})




document.addEventListener('DOMContentLoaded', function() {
    
    ScrollReveal({
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });


    ScrollReveal().reveal('.home-content, .heading', {
        origin: 'top'
    });
    ScrollReveal().reveal('.home-img img ,.services-container , .portfolio-box, .contact form',{
        origin:'bottom'
    })
    ScrollReveal().reveal('.home-content h1 ,.about-img img','.q',{
        origin:'left'
    })

    ScrollReveal().reveal('.home-content h3 ,.home-content p, .about-content',{
        origin:'right'
    })
});





const chatInput=document.querySelector(".chat-input textarea");
const sendChatBtn=document.querySelector(".chat-input span");
const chatBox=document.querySelector(".chatbox")
const chatbotToogler=document.querySelector(".chatbot-toogler")

let userMessage;


const createChatLi=(message,className)=>{
    const chatLi=document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent=className==="outgoing"?`<p>${message}</p>`:`<p>${message}</p>`
    chatLi.innerHTML=chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "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"; // Make sure to replace this with your actual API key
    const messageElement=incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": userMessage
                }
            ]
        })
    };

    fetch(API_URL, requestOptions)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            messageElement.textContent=data.choices[0].message.content;
            console.log(data);
        })
        .catch(error => {
            messageElement.textContent="Oops! Something went wrong.Please try again";
        }).finally(()=>chatBox.scrollTo(0,chatBox.scrollHeight));
};


    

const handleChat=()=>{
    userMessage=chatInput.value.trim();
    if(!userMessage)return;

    chatBox.appendChild(createChatLi(userMessage,"outgoing"));
    chatBox.scrollTo(0,chatBox.scrollHeight);

    setTimeout(()=>{
        const incomingChatLi=createChatLi("Thinking...","incoming")
        chatBox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    },600);
}

sendChatBtn.addEventListener("click",handleChat);
chatbotToogler.addEventListener("click",()=>document.body.classList.toggle("show-chatbot"));



