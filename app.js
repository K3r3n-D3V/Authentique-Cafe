<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Authentique Cafe Menu page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <link rel="stylesheet" href="styles.css">

</head>

<body>
  <main>

    <div class="swiper mySwiper">
    <video class="video" src="./Images/5101165-uhd_3840_2160_25fps.mp4" autoplay muted loop></video>
      <!-- <div class="content">

      </div> -->
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./Images/nathan-dumlao-6VhPY27jdps-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/nathan-dumlao-Ic8RmXGyfNc-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/toa-heftiba-l_ExpFwwOEg-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/tyler-nix-YVdhzpHD7E8-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/shreyak-singh-cqCvf25qKDU-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/pamela-lima-S62XRJ2ukRk-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/pariwat-pannium-4ZYuiAMZrNU-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="Images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="Images/sam-moghadam-khamseh-yxZSAjyToP4-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/nathan-dumlao-pnmRtTHWqDM-unsplash.jpg" alt="coffee">
      </div>
      <div class="swiper-slide">
        <img src="./Images/ceyda-ciftci-nNjxgeGuzAs-unsplash.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/Coffee ☕️.jpeg" />
      </div>
      <div class="swiper-slide">
        <img src="./Images/daniel-tafjord-7GTxjNejlwg-unsplash.jpg" />
      </div>
    </div>
  </div>
  <!-- <div class="navbar">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div> -->
</main>

<div class="page"></div>
<div class="page"></div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop:  true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  </script>
</body>

</html>


