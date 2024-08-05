



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
                <li><img src="./images/SVG/icons8-html-5.svg"/> HTML </li>
                <li><img src="./images/SVG/icons8-css3.svg"/> CSS</li>
                <li><img src="./images/SVG/icons8-javascript.svg"/> JS</li>
                <li><img src="./images/SVG/icons8-c-sharp-logo.svg"/> C#</li>
                <li><img src="./images/SVG/icons8-java.svg"/> Java</li>
                <li><img src="./images/SVG/icons8-python.svg"/> Python</li>
                <li><img src="./images/SVG/icons8-lua-language.svg"/> Lua</li>
                <li><img src="./images/SVG/icons8-adobe-photoshop.svg"/> Photoshop</li>
                <li><img src="./images/SVG/icons8-canva-app.svg"/> Canva</li>
                <li><img src="./images/SVG/icons8-aseprite.svg"/> Aseprite</li>
                <li><img src="./images/SVG/blockbench_logo_black.svg"/> Blockbench</li>
                <li><img src="./images/SVG/icons8-blender-3d.svg"/> Blender</li>
            </ul>
        </div>
        <div id="bio-container">
            <div id="left-bio"></div>
            <div id="right-bio">
                <ul id="bio-list">
                    <li>
                        <div>
                            <h3>Welcome!</h3>
                            <p>I'm elleclipse, I've had a passion for Web / Game / Software development since i was first introduced to it in school. 
                            This page aims to provide a collection of my most recent work, wether it's art, music or mods.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Knowledge...</h3>
                            <p>I am trained in full-stack software engineering, mainly focusing on web-dev. However, I have personally spent a lot of time
                            working with codes and programs that were not included in this, such as: photoshop, aseprite, unity and lua to name a few.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Future...</h3>
                            <p>I intend to continue expanding my knowledge into new emerging languages and learning more advance techniques for any current ones. </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

`

