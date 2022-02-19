var header = document.querySelector(".nav-bar");
      var origOffsetY = header.offsetTop;

      function onScroll(e) {
        window.scrollY >= origOffsetY
          ? header.classList.add("sticky")
          : header.classList.remove("sticky");
          console.log('scrolled')

      }
      document.addEventListener("scroll", onScroll);