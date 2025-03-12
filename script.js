const text = "Moi c'est POGNON Emmanuel, Développeur web et agent de protection des systèmes informatiques";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("title").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
window.onload = typeWriter;

       