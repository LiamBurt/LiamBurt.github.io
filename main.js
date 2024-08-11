



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
                <li><img src="./images/SVG/icons8-unity.svg"/> Unity</li>
            </ul>
        </div>
        <div id="bio-container">
            <div id="left-bio"></div>
            <div id="right-bio">
                <ul id="bio-list">
                    <li class="splashList Hidden-Hoz-R">
                        <div >
                            <h3>Welcome!</h3>
                            <p>I'm Elleclipse, I've had a passion for Web / Game / Software development since i was first introduced to it in school. 
                            This page aims to provide a collection of my most recent work, wether it's art, music or mods.</p>
                        </div>
                    </li>
                    <li class="splashList Hidden-Hoz-R">
                        <div >
                            <h3>Knowledge...</h3>
                            <p>I am trained in full-stack software engineering, mainly focusing on web-dev. However, I have personally spent a lot of time
                            working with codes and programs that were not included in this, such as: photoshop, aseprite, unity and lua to name a few.</p>
                        </div>
                    </li>
                    <li class="splashList Hidden-Hoz-R">
                        <div >
                            <h3>Future...</h3>
                            <p>I intend to continue expanding my knowledge into new emerging languages and learning more advance techniques for any current ones. </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
    <div id="Blockbench" class="Blockbench">
        <div id="Blockbench-header" class="Hidden-Hoz-L">
            <p>Blockbench</p>
        </div>
        <div class="waterfall-container">
            <div class="waterfall">
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BlessedBlade.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BlessedophanimShard.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/blessedScissors.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BlessedShield.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BowOfIcarus.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodBlock.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodBow.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodHalberd.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodPrick.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodRazor.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/bloodshed_dagger.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodShield.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodSiphonV2.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/BloodTome.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/FallenCrossSword.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/FlameBlade.png"/>
                </div>
                <div class="box Hidden-Ver">
                    <img src="./images/BlockBench/CharMain.png"/>
                </div>
                
            </div>
        </div>
    </div>
    <div id="Mods" class="Mods">
        <div id="Mod-header" class="Hidden-Hoz-R">
            <p>Mods</p>
        </div>
        <div class="combat-continuity">
            <img src="./images/Mods/Minecraft/Vanilla-expanded/Combat-Continuity/combat_continuity.png" class="Hidden-grow"/>
        </div>
    </div>

`



const observer = new IntersectionObserver((entries) =>
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('Show');
        }else{
            entry.target.classList.remove('Show');
        }
    })
);

const hiddenElems = document.querySelectorAll('.Hidden-Ver,.Hidden-Hoz-L,.Hidden-Hoz-R,.Hidden-grow');
hiddenElems.forEach((element) => observer.observe(element));