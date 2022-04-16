


document.getElementById("szamolGomb").addEventListener("click", function() {
   let jk1Pont = 0;
   let jk2Pont = 0;
   const jk1Pontjai = document.getElementsByClassName("jk1Pont");
   const jk2Pontjai = document.getElementsByClassName("jk2Pont");
   for (let pont of jk1Pontjai) {
      jk1Pont += Number(pont.value);
   }
   for (let pont of jk2Pontjai) {
      jk2Pont += Number(pont.value);
   }
   const jk1Eredmeny =  document.getElementById("jk1Eredmeny");
   const jk2Eredmeny =  document.getElementById("jk2Eredmeny");

   jk1Eredmeny.innerHTML = jk1Pont;
   jk2Eredmeny.innerHTML = jk2Pont;
   jk1Eredmeny.classList.remove("hidden");
   jk2Eredmeny.classList.remove("hidden");
   

   console.log(jk1Pont, jk2Pont);
});