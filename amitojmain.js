setInterval(setClock, 1000); /*repeat in every second*/
const hour=document.querySelector('[data-hour]') /*select that particular query*/
const minute=document.querySelector('[data-minute]')
const second=document.querySelector('[data-second]')
function setClock(){
    /*console.log(x);
    x++; */
    const nowDate= new Date;
   /* console.log(nowDate);*/
    const sR=nowDate.getSeconds()/60;
    const mR=(sR+nowDate.getMinutes())/60;
    const hR=(mR+nowDate.getHours())/12;
    setRotation(hour, hR);
    setRotation(minute, mR);
    setRotation(second, sR);

}

function setRotation(element, rR) /*rotation ratio*/
{
element.style.setProperty('--r', rR*360); /*any element passed should change its property from --r by rR */
/*wherever --r variable that ratio becomes rR*360*/

}

setClock();