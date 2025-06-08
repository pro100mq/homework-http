const u=document.querySelector("#input"),e=document.querySelector("#countryDiv");let t=[];fetch("https://restcountries.com/v3.1/independent?status=true").then(u=>u.json()).then(u=>t=u);const n=(u,e)=>{let t,n,o;for(let r=0;r<u.length;r++)if(u[r].name.common.toLowerCase()===e.toLowerCase()){t=u[r].name.common;let e=Object.values((n=u[r]).languages);o=`
            <h2 class='countryName'>\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43A}\u{440}\u{430}\u{457}\u{43D}\u{438}: ${t}</h2>
            <p>\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}: ${n.capital}</p>
            <p>\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}: ${n.population} </p>
            <p>\u{41C}\u{43E}\u{432}\u{430}: ${e}</p>
            <img src='${n.flags.png}' alt="\u{41F}\u{440}\u{430}\u{43F}\u{43E}\u{440} ${t}">
            `}return o};u.addEventListener("input",u=>{setTimeout(()=>{let o=u.target.value.trim();o.length>0&&(void 0===n(t,o)?e.innerHTML="Такої країни не знайдено. Спробуйте ще раз":e.innerHTML=n(t,o))},500)});
//# sourceMappingURL=homework-http.7e153ad6.js.map
