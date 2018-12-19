(function($) {
  ("use strict");

  // bootstrap dropdown hover

  $("nav .dropdown").hover(
    function() {
      var $this = $(this);
      //   timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function() {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function() {
    console.log("show");
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  $("#appointment_date").datepicker({
    format: "m/d/yyyy",
    autoclose: true
  });
  $("#appointment_time").timepicker();

  var contentWayPoint = function() {
    var i = 0;
    $(".element-animate").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .element-animate.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(function() {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn element-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft element-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight element-animated");
                } else {
                  el.addClass("fadeInUp element-animated");
                }
                el.removeClass("item-animate");
              }, k * 100);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  //funcion para abrir el modal de pertenece
  var mod;
  $(".btnPertence")
    .off("click")
    .on("click", function(e) {
      e.preventDefault();
      mod = $(".modalContacto").modal({
        showClose: false,
        fadeDuration: 100
      });
    });

    //funcion para abrir el modal de empresas
  var mod2;
  $(".btnOpenMod")
    .off("click")
    .on("click", function(e) {
      e.preventDefault();
      mod2 = $(".modalEnterprise").modal({
        showClose: false,
        fadeDuration: 100
      });
    });

  //funcion con ajax para mandar el mail desde index
  $(".btnMail")
    .off("click")
    .on("click", function(e) {
      e.preventDefault();
      var name = $("#appointment_name");
      var email = $("#appointment_email");
      var spec = $("#appointment_spec");
      var phone = $("#appointment_phone");
      var msg = $("#appointment_message");
      var vars = [name.val(), email.val(), spec.val(), phone.val(), msg.val()];
      if (isValidEmailAddress(email.val())) {
        $.post("php/mail.php", { form: vars }, function(data) {
          console.log(data);
        });
      } else {
        console.log("el email no cumple con la estructura correcta...");
      }
    });

  //funcion con ajax para mandar el mail desde contacto
  $(".btnSendCMail")
    .off("click")
    .on("click", function(e) {
      e.preventDefault();
      var name = $("#cname");
      var email = $("#cemail");
      var spec = $("#canem2");
      var msg = $("#cmessage");
      var vars = [name.val(), email.val(), spec.val(), msg.val()];
      if (isValidEmailAddress(email.val())) {
        $.post("php/mail.php", { form: vars }, function(data) {
          console.log(data);
        });
      } else {
        console.log("el email no cumple con la estructura correcta...");
      }
    });

  $(".btnEMail")
    .off("click")
    .on("click", function(e) {
      e.preventDefault();
      var name = $("#enterprise_name");
      var email = $("#enterprise_email");
      var spec = $("#conatct_person");
      var phone = $("#ep1").val() + "" + $("#ep2").val() + "" + $("#ep3").val() ;
      var ne = $('.modalEnterprise input:radio[name="ne"]:checked');
      var vars = [name.val(), email.val(), spec.val(), phone, ne.val()];
      if (isValidEmailAddress(email.val())) {
        $.post("php/mail.php", { form: vars }, function(data) {
          console.log(data);
        });
      } else {
        console.log("el email no cumple con la estructura correcta...");
      }
    });
  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  //funcion de busqueda de doctores
  var displayResults, findAll, maxResults, names, resultsOutput, searchInput;

  names = [
    ,
    "Alergólogos",
    "Angiólogos",
    "Cardiólogos",
    "Dentistas - Odontólogos",
    "Dermatólogos",
    "Endocrinólogos",
    "Gastroenterólogos",
    "Geriatras",
    "Ginecólogos oncológicos",
    "Hematólogos",
    "Homeópatas",
    "Internistas",
    "Médicos estéticos",
    "Nefrólogos",
    "Neumólogos",
    "Neurólogos",
    "Nutriólogos",
    "Oftalmólogos",
    "Oncólogos",
    "Optometristas",
    "Otorrinolaringólogos",
    "Pediatras",
    "Podólogos",
    "Proctólogos",
    "Psicólogos",
    "Psiquiatras",
    "Reumatólogos",
    "Urólogos",
    "Practitioner"
  ];

  // encuentra todas las coincidencias en el array de li
  findAll = (wordList, collection) => {
    return collection.filter(function(word) {
      var word = word.toLowerCase();
      return wordList.some(function(w) {
        return ~word.indexOf(w);
      });
    });
  };

  //muestra las coincidencias en la nueva lista
  displayResults = function(resultsEl, wordList) {
    if (wordList.length > 0) {
      return (resultsEl.innerHTML = wordList
        .map(function(w) {
          return '<li><a href="doctors.html">' + w + "</a></li>";
        })
        .join(""));
    } else {
      $("#results").empty();
    }
  };

  // Handle keyboard events
  searchInput = document.getElementById("search");

  resultsOutput = document.getElementById("results");

  maxResults = 7;
  //funcion general tel input search
  if (searchInput != null) {
    searchInput.addEventListener("keyup", e => {
      var suggested, value;
      if (names.length > 0) {
        value = searchInput.value.toLowerCase().split(" ");
        suggested = value[0].length ? findAll(value, names) : [];
        return displayResults(resultsOutput, suggested);
      } else {
        $("#results").empty();
      }
    });
  }
})(jQuery);
