import"./hoisted.BBtQxxRA.js";import{A as h}from"./consts.DkG-I2j4.js";document.addEventListener("astro:page-load",y);function y(){const{form:t,radios:s,reason:a,errorInputs:n}=p();s.forEach(o=>{o.addEventListener("click",e=>{s.forEach(i=>i.closest("label").removeAttribute("data-selected")),e.target.closest("label").setAttribute("data-selected","selected"),v()})}),n?.forEach(o=>{const e=o,r=e.closest("label").querySelector(".error");e.addEventListener("input",()=>{e.validity.valid?(r.innerHTML="",r.classList.add("hidden")):(e.validity.valueMissing?r.innerHTML=e.dataset.errorRequired??"שדה חובה":e.validity.tooLong?r.innerHTML=e.dataset.errorMax??`חייב להכיל עד ${e.maxLength} תווים`:e.validity.tooShort?r.innerHTML=e.dataset.errorMin??`חייב להכיל לפחות ${e.minLength} תווים`:e.validity.typeMismatch&&(e.type==="email"?r.innerHTML="כתובת אימייל לא תקינה":r.innerHTML="שדה לא תקין"),r.classList.remove("hidden")),v()})}),a.addEventListener("change",v),t?.addEventListener("submit",L)}function v(){const{button:t,method:s,reason:a,errorInputs:n}=p(),o=[...n].every(e=>e.validity.valid)&&s.value?.length&&a.value?.length;t.disabled=!o}function p(){const t=document.querySelector("form"),s=t.querySelector("fieldset"),a=t.querySelector(".form-error"),n=t.elements,o=n.namedItem("name"),e=n.namedItem("email"),r=n.namedItem("phone"),i=n.namedItem("method"),c=n.namedItem("reason"),l=n.namedItem("description"),m=t.querySelector("button"),u=t.querySelectorAll("input[type=radio]"),f=t?.querySelectorAll("[data-error]"),d=document.getElementById("form-done");return{form:t,error:a,fieldset:s,name:o,email:e,phone:r,method:i,reason:c,description:l,button:m,radios:u,errorInputs:f,done:d}}async function L(t){const{form:s,name:a,error:n,fieldset:o,email:e,phone:r,method:i,reason:c,button:l,description:m,done:u}=p(),f=l.innerHTML;try{if(t.preventDefault(),o.disabled=!0,n.innerHTML="",l.innerHTML="שולח...",!(await fetch(`${h}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.value,email:e.value,שם:a.value,אימייל:e.value,טלפון:r.value,"דרך יצירת קשר":i.value,"סיבת הפנייה":c.value,"תיאור הפנייה":m.value})})).ok)throw new Error("שגיאה בשליחה");s.reset(),s.innerHTML=u.innerHTML}catch(d){o.disabled=!1,n.innerHTML=d.message,l.innerHTML=f,console.error(d)}return!1}
