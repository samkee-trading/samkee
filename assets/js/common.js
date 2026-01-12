const $gnb = document.querySelector(".gnb");
const $mobBtn = document.querySelector(".gnb__m");

function scroll() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $gnb.classList.add("is-scroll");
  } else {
    $gnb.classList.remove("is-scroll");
  }
}

// 스크롤 할 경우 scroll 함수 실행
window.onscroll = function() {
  scroll();
};

$mobBtn.addEventListener("click", function() {
  if ($gnb.classList.contains("is-active")) {
    $gnb.classList.remove("is-active");
  } else {
    $gnb.classList.add("is-active");
  }
});

(function inView() {
  var $animation_elements = $(".ani-el");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
      //console.log(element_top_position);

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.find(".char").each(function(i, char) {
          setTimeout(function() {
            $(char).addClass("is-reveal");
          }, 65 * i);
        });
      } else {
        //$element.removeClass('in-view');
      }
    });
  }
  $window.on("scroll resize", check_if_in_view);
  $window.on("load", check_if_in_view);
  $window.trigger("scroll");
})();

function setText(aniEl) {
  aniEl.each(function (i, el) {
    var word = $(el).text().trim();
    var letters = word.split("");
    var renderLetters = letters.map(function (letter, i) {
      letter = letter === " " ? "&nbsp;" : letter;
      return "<span class=\"char\">".concat(letter, "</span>");
    });
    $(el).html(renderLetters);
  });
}

setText($(".ani-el"));
setText($(".main-ani"));

$(".main-ani").find(".char").each(function(i, char) {
  setTimeout(function() {
    $(char).addClass("is-reveal");
  }, 45 * i);
});

// main slider scale & fade effet
//메인 슬라이더 애니메이션 효과
var now = 0;
var img = $(".main-slider div");

function autoSlide() {
  img
    .eq(now)
    .fadeOut("slow")
    .removeClass("scale");
  now++;
  if (now === 3) {
    now = 0;
  }
  img
    .eq(now)
    .fadeIn("slow")
    .addClass("scale");
}

img
  .eq(0)
  .fadeIn()
  .addClass("scale");
setInterval(function() {
  autoSlide();
}, 6500);

//counter
(function inView() {
  var $animation_elements = $(".point__em");
  var $window = $(window);
  var done = false;

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;
      //console.log(element_top_position);

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position &&
        !done
      ) {

        // Count function
        function countUp(elem, countFrom, countTo) {
          elem.text(countFrom);

          if (countFrom < countTo) {
            countFrom++;

            setTimeout(function() {
              countUp(elem, countFrom, countTo);
            }, 50);
          }
          done = true;
        }

        $animation_elements.each(function(i, el) {
          var countTo = $(el).text();
          var countFrom = (countTo - 10 < 0) ? 0 : countTo - 10; 
          countUp($(el), countFrom, countTo);
        });
      }
    });
  }
  $window.on("scroll resize", check_if_in_view);
  $window.on("load", check_if_in_view);
  $window.trigger("scroll");
})();
