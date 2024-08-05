



$(document).ready(function() {
    const scrollers = document.querySelectorAll('.scroller');

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        addAnimation();
    }

    function addAnimation(){
        scrollers.forEach(scroller => {
            scroller.setAttribute('data-animated', true);
            const scroller_inner = scroller.querySelector('.scroller_inner');
            const scrollerContent = Array.from(scroller_inner.children);

            scrollerContent.forEach(item => {
                const dupedItem = item.cloneNode(true);
                dupedItem.setAttribute('aria-hidden', true);
                scroller_inner.appendChild(dupedItem);
            });
        });

    }
});

document.querySelector('#app').innerHTML = `

    <div class="nav">
        <img id="logo" src="images/github-logo.png"/>
        <ul id="nav-bar">
            <li id="nav-link"><a href="#About">About</a></li>
            <li id="nav-spacer"> / </li>
            <li id="nav-link"><a href="#Blockbench">Blockbench</a></li>
            <li id="nav-spacer"> / </li>
            <li id="nav-link"><a href="#Mods">Mods</a></li>
        </ul>
    </div>
    <div id="About" class="About">
        <div id="TechStacks" class="scroller">
            <ul class="stack-list scroller_inner">
                <li><img src="./icons/svg/icons8-html-5.svg"/> HTML </li>
                <li><img src="./icons/svg/icons8-css3.svg"/> CSS</li>
                <li><img src="./icons/svg/icons8-javascript.svg"/> JS</li>
                <li><img src="./icons/svg/icons8-c-sharp-logo.svg"/> C#</li>
                <li><img src="./icons/svg/icons8-java.svg"/> Java</li>
                <li><img src="./icons/svg/icons8-python.svg"/> Python</li>
                <li><img src="./icons/svg/icons8-adobe-photoshop.svg"/> Photoshop</li>
                <li><img src="./icons/svg/icons8-canva-app.svg"/> Canva</li>
                <li><img src="./icons/svg/icons8-aseprite.svg"/> Aseprite</li>
                <li><img src="./icons/svg/blockbench_logo_black.svg"/> Blockbench</li>
                <li><img src="./icons/svg/icons8-blender-3d.svg"/> Blender</li>
            </ul>
        </div>
        <div id="Info"></div>
    </div>

`

