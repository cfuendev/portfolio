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
    document.querySelector("head").innerHTML = head;
    document.querySelectorAll("body > *:not(header)").forEach((element)=>{
        element.remove();
    })
    body.forEach((newBodyElement) => {
        document.querySelector("body").appendChild(newBodyElement);
    })
};

window.onpopstate = handleLocation;
