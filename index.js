// Type writer
const containerEL = document.querySelector(".container");
const career = ["Webdeveloper","Youtuber","Freelancer","Creator"];
let characterIndex = 0;
let careerIndex = 0;
updateText();
function updateText(){
  const currentCreer = career[careerIndex].slice(0,characterIndex);
  containerEL.innerHTML = 
  `<h2>I am <span class= "career">${currentCreer}<span class="cursor">|</span></h2>` ;
  if(characterIndex < career[careerIndex].length){
    characterIndex++;
    setTimeout(updateText,100);
  }
  else{
    setTimeout(()=>{
      careerIndex = (careerIndex + 1) % career.length ;
      characterIndex = 0;
      updateText();
     },500)
  }    
} 
// Dropdown box show when we toggle the content
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
      // Try to find the closest dropdown sibling
      let dropdown = toggleBtn.closest("li")?.querySelector(".dropdown");

      if (dropdown) {
        dropdown.classList.toggle("show");
        toggleBtn.classList.toggle("active");
      }
    });
  });
});
/* Toggle menu */
document.addEventListener("DOMContentLoaded",function(){
  const toggleMenu = document.querySelector(".toggle-menu");
  const icon = toggleMenu.querySelector("i");
  const profile = document.querySelector(".profile");
  toggleMenu.addEventListener("click",()=>{
     profile.classList.toggle("show");
     icon.classList.toggle("fa-bars");
     icon.classList.toggle("fa-xmark");
  });
});
/* Slider */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.slide').forEach(sec => observer.observe(sec));
/* Count the number */
document.addEventListener("DOMContentLoaded", function () {
  const data = document.querySelectorAll("[data-target]");
  const banner = document.querySelector(".banner");
  let counted = false; // to prevent recounting

  function countNumber() {
    data.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        countNumber();
        counted = true;
        observer.unobserve(banner); // stop observing after triggering
      }
    });
  }, {
    threshold: 0.5 // triggers when 50% of banner is visible
  });

  observer.observe(banner);
});
// Progress Bar
document.addEventListener("DOMContentLoaded", function () {
    const progresses = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const percent = progress.getAttribute("data-percentage");
          const bar = progress.querySelector(".bar");
          const sub = progress.closest(".sub");
          const numberText = sub.querySelector("h3");

          // Staggered delay
          setTimeout(() => {
            bar.style.width = percent;

            // Count-up animation
            let target = parseInt(percent);
            let current = 0;
            const interval = setInterval(() => {
              if (current >= target) {
                clearInterval(interval);
              } else {
                current++;
                numberText.textContent = current + "%";
              }
            }, 10); // speed of count

          }, index * 200); // 200ms delay between each bar

          observer.unobserve(progress);
        }
      });
    }, {
      threshold: 0.4
    });

    progresses.forEach(progress => {
      observer.observe(progress);
    });
  });
/* Map */
// script.js
function initMap() {
  // Coordinates for IIT Delhi
  const dist = { lat: 19.387388, lng: 85.051544};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
      center: dist,
      });
  const marker = new google.maps.Marker({
    position: dist,
    map: map,
    title: "Ganjam",
    animation: google.maps.Animation.DROP,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "<strong>Ganjam</strong>.",
    });
    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
// Auto-open popup
  infoWindow.open(map, marker);
}
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }  
