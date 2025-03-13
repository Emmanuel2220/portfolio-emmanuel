/*document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    let text = title.innerText;
    title.innerText = "";
    
    text.split("").forEach((letter, i) => {
        setTimeout(() => {
            title.innerText += letter;
        }, i * 100);
    });
});*/
const textAnim = document.querySelector('h1');
new Typewriter(textAnim, {
    //deleteSpeed: 20
})
.typeString('Moi c\'est POGNON Emmanuel!') 
.pauseFor(300)
.typeString('<strong> <br> Développeur web  & agent de protection <br> des systèmes informatiques. </strong>')
.start()

       
