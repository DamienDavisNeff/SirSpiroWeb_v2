function IsPortrait() {
    if(window.innerHeight > window.innerWidth) return true;
}

function GoTo(url,target) {
    if(target === undefined) target = "_blank";
    window.open(url,target);
}