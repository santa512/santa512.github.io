function getUrl(){const url=window.location.href.replace('https://doubleexposure23.eventive.org/','');return url}
function header(){const primaryHeader=document.querySelector("#app > div > div > div:nth-child(2)")
const secondaryHeader=document.createElement('div')
secondaryHeader.className='secondary-header'
primaryHeader.after(secondaryHeader)
const secondaryHeaderDiv=document.querySelector("#app > div > div > div:nth-child(3)")
secondaryHeaderDiv.innerHTML=`
        <img src="https://dxfest.com/eventive/img/one-hundred-reporters-logo.png" alt="" />
        <p>PRESENTS</p> `}
function mainNav(){const navigationParent=document.querySelector("#app > div > div > div:nth-child(2)")
const mainNavigation=document.createElement('div')
mainNavigation.className='main-nav'
navigationParent.after(mainNavigation)
mainNavigation.innerHTML=`
        <a href="/welcome">WELCOME</a>
        <a href="/passes/buy">PASSES</a>
        <a href="/login?next=%2Ftickets">MY TICKETS</a>
        <a href="/donate">DONATE</a>
        <a href="/login?next=back">ACCOUNT</a>
        `}
function threeMenuNav(){if(getUrl()==='welcome'){let parent=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div")
if(parent==null){parent=document.querySelector("#app > div > div > div:nth-child(6) > div")}
const threeMenu=document.createElement('div')
threeMenu.className='three-menu'
parent.before(threeMenu)
threeMenu.innerHTML=`
            <a href="/schedule">SCHEDULE</a>
            <a href="/passes/buy">PASSES</a>
            <a href="/films">FILM GUIDE</a>
            `}}
function socials(){if(getUrl()==='welcome'){let socialParent=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > p:nth-child(6)")
if(socialParent==null){socialParent=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > div > p:nth-child(6)")}
const social=document.createElement('div')
social.className='social-menu'
socialParent.after(social)
social.innerHTML=`
            <p class="footer-title">CONNECT WITH DOUBLE EXPOSURE '23<p>
            <div class="footer-icons">
            <a href="https://www.facebook.com/DoubleExposureFestival/" target="_blank">
            <img src="https://dxfest.com/eventive/icons/facebook.png" />
            </a>
            <a href="https://www.instagram.com/doubleexposurefestival" target="_blank">
            <img src="https://dxfest.com/eventive/icons/instagram.png" />
            </a>
            <a href="https://twitter.com/DX_IFF" target="_blank">
            <img src="https://dxfest.com/eventive/icons/twitter-x.png" />
            </a>
            <a href="https://www.youtube.com/@dxfest" target="_blank">
            <img src="https://dxfest.com/eventive/icons/youtube.png" />
            </a>
            </div>
            `}}
function footer(){const footerParent=document.querySelector("#app > div > div > div:nth-child(6)")
const footer=document.createElement('div')
footer.className='footer'
footerParent.after(footer)
footer.innerHTML=`
        <img class="footer-image" src="https://dxfest.com/eventive/img/torn_pattern_bottom.png" />
        `}
function clearFilterButton(){let filterButton=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(1)")
if(filterButton==null){filterButton=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(1)")}
filterButton.style.display="none"}
function checkMask(){if(getUrl().includes('schedule')){let maskImg=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(1) > div")
if(maskImg==null){maskImg=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div")}
maskImg.className='mask-image'}}
function schedulePage(){if(getUrl().includes('schedule')){clearFilterButton()
let filterBar=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1)")
if(filterBar==null){filterBar=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(2) > div:nth-child(1)")
document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(2) > div:nth-child(1)").className="schedule-header"}else{document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1)").className="schedule-header"}
const filterNav=document.createElement('div')
filterNav.className='schedule-nav'
filterBar.prepend(filterNav)
filterNav.innerHTML=`
            <a href="">SCHEDULE</a>
            <a class="inactive" href="/films">FILM GUIDE</a>
            `
const container=document.querySelector('.schedule-header')
const pastEvents=document.createElement('div')
pastEvents.className='past-events'
container.before(pastEvents)
pastEvents.innerHTML=`
            <p></p>
            `
const threeDots=(document.querySelector('[style="color: rgba(0, 0, 0, 0.54); font-size: 15px; font-weight: 500; line-height: 48px; padding-left: 16px;"]'))}}
function filmsPage(){if(getUrl().includes('films')){clearFilterButton()
let filmParent=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(3) > div")
if(filmParent==null){filmParent=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(3) > div")}
const filterNav=document.createElement('div')
filterNav.className='film-header'
filmParent.before(filterNav)
filterNav.innerHTML=`
            <div class="schedule-nav">
            <a class="inactive" href="/schedule">SCHEDULE</a>
            <a class="" href="">FILM GUIDE</a>
            </div>
            <div class="film-guide-title">
            <p>FILM GUIDE</p>
            </div>
            `}}
function sponsor(){if(getUrl()==='welcome'){let officialMediaSponsor=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > p:nth-child(6) > img:last-child")
if(officialMediaSponsor==null){officialMediaSponsor=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > div > p:nth-child(6) > img:last-child")}
let initialSponsor=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > p:nth-child(6)")
if(initialSponsor==null){initialSponsor=document.querySelector("#app > div > div > div:nth-child(6) > div > div:nth-child(2) > div:nth-child(2) > div > p:nth-child(6)")
initialSponsor=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > div > p:nth-child(6)")}
const newDiv=document.createElement('div');newDiv.className='official-media-sponsor-wrapper';newDiv.innerHTML=`
            <p>Official Media Sponsor</p>
            `
officialMediaSponsor.parentNode.insertBefore(newDiv,officialMediaSponsor);newDiv.appendChild(officialMediaSponsor);const majorSponsor=document.createElement('div')
majorSponsor.className='major-sponsor'
majorSponsor.innerHTML=`
            <p>Major Sponsors</p>
            `
initialSponsor.prepend(majorSponsor)}}
function splitText(){if(getUrl()==='welcome'){let headerOne=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > h1")
if(headerOne==null){headerOne=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(1) > div:nth-child(1) > h1")}
const headerOneText=(headerOne.textContent.replace('Film Fest 2023',''))
const headerTwoText=(headerOne.textContent.replace('Double Exposure Investigative',''))
headerOne.innerHTML=headerOneText;const headerTwo=document.createElement('h1');headerTwo.innerHTML=headerTwoText
headerOne.after(headerTwo)
let headerThree=document.querySelector("#app > div > div > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(1) > div.tenant-injected-html > p:nth-child(1) > span")
if(headerThree==null){headerThree=document.querySelector("#app > div > div > div:nth-child(6) > div > div > div:nth-child(1) > div.tenant-injected-html > p:nth-child(1) > span")}
const headerThreeText=(headerThree.textContent.replace('Double Exposure!',''))
const headerFourText=(headerThree.textContent.replace('Welcome to',''))
headerThree.innerHTML=headerThreeText;const headerFour=document.createElement('span');headerFour.innerHTML=headerFourText
headerThree.after(headerFour)}}
function removeElement(){if(getUrl()==='welcome'){const x=document.getElementsByClassName("Eventive--TenantButton")
const y=x[x.length-1];const threeDots=(document.querySelector('[style="margin: 30px auto; width: 14px; height: 14px; border-radius: 50%; transform: translateX(-50%); background: rgb(174, 179, 80); box-shadow: rgb(174, 179, 80) 30px 0px, rgb(174, 179, 80) -30px 0px;"]'))
threeDots.remove()}}
function checks(){if(getUrl().includes('schedule/')){checkMask()}
if(getUrl().includes('schedule?view')||getUrl()==='schedule'){if(document.querySelector(".schedule-nav")==null){removeElement()
schedulePage()}}
if(getUrl().includes('films?search')||getUrl()==='films'){if(document.querySelector(".schedule-nav")==null){removeElement()
filmsPage()}}
if(getUrl()==='welcome'){if(document.querySelector(".three-menu")==null){threeMenuNav()
removeElement()
splitText()}
if(document.querySelector(".major-sponsor")==null){sponsor()}}}
function initialise(){try{header()
mainNav()
threeMenuNav()
removeElement()
socials()
footer()
splitText()
schedulePage()
filmsPage()
sponsor()
maskImg()}catch(err){}}
setInterval(function(){if(getUrl()!==lastRoute){checks()
lastRoute=getUrl()}},1000);let lastRoute=""
initialise()