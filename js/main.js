$(document).ready(function () {
  $("#first-sliderrr").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    pauseOnHover: true,
    onSliderLoad: function () {
      $("#first-sliderrr").removeClass("cS-hidden");
    },
  });
  $("#second-sliderrr").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    pauseOnHover: true,
    onSliderLoad: function () {
      $("#second-sliderrr").removeClass("cS-hidden");
    },
  });
  $('[data-toggle="tooltip"]').tooltip();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0.1) {
      $(".big-nav").css({
        position: "fixed",
        background: "#2c3640",
      });
      $(".big-products").css({
        position: "fixed",
        top: "70px",
        right: '0px'
        // transition: "0.5s",
        // background: "#545557",
      });
    } else {
      $(".big-nav").css({
        position: "relative",
        background: "transparent",
      });

      $(".big-products").css({
        position: "relative",
        top: "20px",
        right: "-173px"
        // background: "transparent",
      });
    }
  });

  // if (window.matchMedia("(max-width:1266px)").matches) {
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 0.1) {
  //       $(".big-nav").css({
  //         position: "fixed",
  //         background: "#2c3640",
  //       });
  //       $(".big-products").css({
  //         position: "fixed",
  //         top: "70px",

  //       });
  //     } else {
  //       $(".big-nav").css({
  //         position: "relative",
  //         background: "transparent",
  //       });

  //       $(".big-products").css({
  //         position: "relative",
  //         top: "0px",
  //       });
  //     }
  //   });
  // }

  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    gallery: false,
    galleryMargin: 100,
    thumbMargin: 10,
    controls: false,
    keyPress: true,
    controlNav: false,
    slideshow: false,
    enableDrag: true,
    enableTouch: false,
    // easing: "linear",
    currentPagerPosition: "middle",
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  $('.scroll_top_icon').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  })
});

// if (document.readyState == "loading") {
// 	document.addEventListener("DOMContentLoaded", ready)
// } else {
// 	ready()
// }

document.addEventListener("DOMContentLoaded", loadingFunction);

// function init() {
//   const media = window.matchMedia("(max-width:1266px)");
//   console.log(media);
//   media.addEventListener("change", svbs);
// }

// function svbs() {
//   const media = window.matchMedia("(max-width:1266px)");
//   const scrollTopArrow = document.getElementsByClassName("scroll_top_icon")[0];
//   let biiggg = document.getElementsByClassName("big-products")[0];
//   if (media.matches == true) {
//     console.log(media.matches);
//     biiggg.style.top = "40px";
//     scrollTopArrow.style.background = "red";
//     biiggg.style.position = "fixed";
//   } else {
//     console.log(media.matches);
//     scrollTopArrow.style.background = "green";
//     biiggg.style.top = "40px";
//     biiggg.style.position = "fixed";
//   }
// }

// const bdy = document.getElementById("bdy");
// // const bdy = document.querySelector(".bdy");
// const products = document.getElementById("products");
// const btnProducts = document.getElementById("product-btn");
// const blog = document.querySelector(".blog");
// const dropBlog = document.querySelector(".drop-blog");
// const bigProduct = document.querySelector(".big-products");
// const hovers = document.getElementsByClassName('activves')[0];

// btnProducts.addEventListener("mouseenter", function () {
//   bigProduct.classList.add("activves");
//   console.log("product button has class activess");
// });
// btnProducts.addEventListener("mouseleave", function () {
//   bigProduct.classList.remove("activves");
//   console.log("product button has class activess");
// });
// bigProduct.addEventListener("mouseenter", function () {
//   bigProduct.classList.add("activves");
//   hovers.style.transition = 'top 0.3s ease-in-out'
//   console.log("product button has class activess");
// });
// bigProduct.addEventListener("mouseleave", function () {
//   bigProduct.classList.remove("activves");
//   console.log("product button has class activess");
// });



// btnProducts.onmouseenter = function () {
//   products.style.opacity = "1";
//   products.style.visibility = "visible";
//   products.style.transition = "opacity 0.5s ease-out";
//   products.style.transitionDelay = "0.2s";
// };
// products.onmouseleave = function () {
//   products.style.opacity = "0";
//   products.style.visibility = "hidden";
//   products.style.transition = "opacity 0.5s ease-out";
// };

// var myButtonsFromCart = document.querySelector(".buttons");
// var myBoxFromSlider = document.querySelector(".box");

// myBoxFromSlider.onmouseenter("");

// function loadingFunction() {
//   var myWindowLoading = document.getElementById("window-loading");
//   myWindowLoading.style.display = "none";
// }


function loadingFunction() {
  setTimeout(function () {
    var myWindowLoading = document.getElementById("window-loading");
    myWindowLoading.style.display = "none";

  }, 1000)
}






// var quickViewBtn = document.querySelectorAll(".search-product");
// var quickView = document.querySelector(".myViewPort");
var quickViewBtn = document.querySelectorAll(".search-product");
var quickView = document.querySelector(".myViewPort");
var i;
console.log(quickViewBtn);
quickView.onclick = function () {
  quickView.style.display = "none";
};
for (i = 0; i < quickViewBtn.length; i++) {
  quickViewBtn[i].onclick = function () {
    quickView.style.display = "block";
  };
}

var mySearchInput = document.getElementById("search-inpt");
var mySearchDiv = document.querySelector(".search");
var mySearchIcons = document.getElementById("search-icons");
console.log(mySearchInput.length);
if (mySearchInput.length > 0) {
  mySearchIcons.onmouseenter = function () {
    console.log("you hover now ");

    mySearchDiv.style.visibility = "visible";
    mySearchDiv.style.opacity = "1";
    mySearchDiv.style.top = "0px";
  };
} else {
  //   mySearchDiv.style.visibility = "hidden";
  //   mySearchDiv.style.opacity = "0";
  //   mySearchDiv.style.top = "0px";
}

// quickViewBtn.forEach(function (quickViewBtns) {
// 	quickViewBtns.onclick = function () {
// 		quickView.style.display = "block";
// 		console.log(quickViewBtns);
// 		quickView.onclick = function () {
// 			quickView.style.display = "none";
// 		};
// 	};
// });


// const productButtton = document.getElementById('product-btn')

// productButtton.addEventListener('mouseenter', () => {


//   const bdy = document.getElementsByClassName('bdy')[0]
//   bdy.classList.add('bdy-toggle')

// })


const MenuButtonMoblie = document.getElementsByClassName('menu_mobile')[0]
const firstUl = document.getElementsByClassName('first-ul')[0]
const closeButtonMoblie = document.getElementsByClassName('close-btn')[0]
MenuButtonMoblie.addEventListener('click', () => {
  console.log("yes its work")
  console.log(firstUl)
  firstUl.style.left = "0";
  firstUl.style.transition = "left 0.3s ease-in-out";


})
closeButtonMoblie.addEventListener('click', () => {
  console.log("yes its work")
  console.log(firstUl)
  firstUl.style.left = "";
  firstUl.style.transition = "left 0.3s ease-in-out";
})

const option = document.querySelectorAll('#selec option')
const selector = document.getElementById('selec')

option.forEach(function (opt) {
  opt.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

  })
})



const carousel = document.querySelectorAll('#carousel')

carousel.forEach(button => {
  button.addEventListener('click', e => {
    const clicked = e.target
    for (let i = 0; i < carousel.length; i++) {
      const caro = carousel[i]
      caro.classList.remove('checked')
    }
    console.log(clicked)
    clicked.classList.add('checked')

  })
})


window.addEventListener('scroll', function () {

  const scrollIcons = document.getElementsByClassName('scroll_top_icon')[0]
  if (window.scrollY > 400) {
    scrollIcons.style.opacity = '1'
    scrollIcons.style.visibility = 'visible'
    scrollIcons.style.transition = '0.5s ease-in-out'


  } else {
    const scrollIcons = document.getElementsByClassName('scroll_top_icon')[0]
    scrollIcons.style.opacity = '0'
    scrollIcons.style.visibility = 'hidden'
    scrollIcons.style.transition = '0.5s ease-in-out'
  }
})
