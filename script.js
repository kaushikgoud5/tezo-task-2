function showDropDownEmployees(){
   document.getElementById("list-items-drop-down").classList.toggle("show");
   document.getElementById("arrow-right").classList.toggle("drop-arrow");
}
function hideNavBar(){
   document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
   document.getElementById("close-btn").classList.toggle("rotate-arrow");  

}


const dataEmployess=[
   {
     "USER": "Kenny.Considine16",
     "LOCATION": "Lennatown",
     "DEPARTMENT": "Automotive",
     "ROLE": "Repellat",
     "EMPNO": "p06fnyjvui",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-11-05T16:56:19.9414622+00:00"
   },
   {
     "USER": "Christian.Hansen76",
     "LOCATION": "Laurelside",
     "DEPARTMENT": "Health",
     "ROLE": "Beatae saepe.",
     "EMPNO": "q9t1pqm1dk",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-09-17T06:37:09.3432636+00:00"
   },
   {
     "USER": "Benny.Smith66",
     "LOCATION": "Tyraburgh",
     "DEPARTMENT": "Home, Outdoors & Books",
     "ROLE": "Fugiat dignissimo",
     "EMPNO": "877dzrbrpa",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-09-18T01:50:25.5521234+00:00"
   },
   {
     "USER": "Diana34",
     "LOCATION": "South Berniceland",
     "DEPARTMENT": "Kids & Computers",
     "ROLE": "Quas non ex",
     "EMPNO": "kviz18v5kf",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-11-07T12:33:35.5271173+00:00"
   },
   {
     "USER": "Stacey_Kirlin",
     "LOCATION": "South Rockyton",
     "DEPARTMENT": "Automotive, Tools & Garden",
     "ROLE": "Officia repellat.",
     "EMPNO": "azffuhkp0z",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-06-17T07:37:07.5205022+00:00"
   },
   {
     "USER": "Ernest.Waters",
     "LOCATION": "Port Erwinmouth",
     "DEPARTMENT": "Books, Games & Industrial",
     "ROLE": "Reiciendis ",
     "EMPNO": "osmfj470zj",
     "STATUS": "ACTIVE.",
     "JOINDT": "2023-09-07T10:48:23.0852865+00:00"
   },
   {
     "USER": "Georgia_McDermott51",
     "LOCATION": "East Rosietown",
     "DEPARTMENT": "Garden, Baby & Automotive",
     "ROLE": "Aut dolorum",
     "EMPNO": "cqt0rzuwgy",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-04-28T01:59:36.4093544+00:00"
   },
   {
     "USER": "Homer.Sipes94",
     "LOCATION": "Heaneymouth",
     "DEPARTMENT": "Garden, Jewelery & Beauty",
     "ROLE": "Neque recusa",
     "EMPNO": "fj9urf2dzb",
     "STATUS": "ACTIVE",
     "JOINDT": "2024-01-13T03:06:26.604998+00:00"
   },
   {
     "USER": "Kim19",
     "LOCATION": "Danaside",
     "DEPARTMENT": "Health",
     "ROLE": "Ipsa est es",
     "EMPNO": "3hpqypzlxo",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-02-04T20:38:51.5054905+00:00"
   },
   {
     "USER": "Steve.Rempel",
     "LOCATION": "Alexaland",
     "DEPARTMENT": "Clothing",
     "ROLE": "Repudiandae c",
     "EMPNO": "ywn53lp998",
     "STATUS": "ACTIVE",
     "JOINDT": "2024-01-10T21:41:59.9078147+00:00"
   },
   {
     "USER": "Florence50",
     "LOCATION": "Larsonville",
     "DEPARTMENT": "Home",
     "ROLE": "Quos autem sit",
     "EMPNO": "5ig65k1kv4",
     "STATUS": "ACTIVE",
     "JOINDT": "2023-05-09T01:14:04.1566342+00:00"
   },
   {
     "USER": "Chelsea.OConnell16",
     "LOCATION": "West Jaida",
     "DEPARTMENT": "Garden",
     "ROLE": "Totam quia dol.",
     "EMPNO": "mrqnq7t366",
     "STATUS": "ACTIVE",
     "JOINDT": "2024-01-14T20:55:33.3617975+00:00"
   }
 ]

dataEmployess.map(element,()=>{
   rows+=
   ` <tr>
   <td><input type="checkbox" /></td>
   <td>
     <div class="user-info">
         <img src="/Task2/assets/user-table.jpg" alt="">
       <div class="name-email">
         <span>${element.USER}</span><br /><span class="e-mail">{edgar@tezo.com}</span>
       </div>
     </div>
   </td>
   <td>${element.LOCATION}</td>
   <td>Product Engg</td>
   <td>Full-stack Developer</td>
   <td>${element,EMPNO}</td>
   <td><span>Active</span></td>
   <td>${element.JOINDT}</td>
   <td>...</td>
   </tr>`
   document.getElementById("employee-table").innerHTML=`lkdshdsich`
})
 
