const parser = new DOMParser();

document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState({}, "", event.target.href);
        handleLocation();
    })
})

const handleLocation = async () => {
    const html = parser.parseFromString(await fetch(window.location.pathname).then((data) => data.text()), "text/html");
    const head = html.querySelector("head").innerHTML;
    const body = html.querySelectorAll("body > *:not(header)");
    document.querySelectorAll("body > *:not(header)").forEach((element)=>{
        element.remove();
    })
    document.querySelector("head").innerHTML = head;
    body.forEach((newBodyElement) => {
        document.querySelector("body").appendChild(newBodyElement);
    })
    //document.querySelector("body > *:not(header)").classList.add("hide");
    //document.querySelector("body > *:not(header)").classList.remove("hide");
};

window.onpopstate = handleLocation;
