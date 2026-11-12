let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
let navbar = document.querySelector(".navbar");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    let targetId = this.getAttribute("href");

    // التأكد أن اللينك يبدأ بـ # ويشير لسكشن حقيقي
    if (targetId && targetId.startsWith("#") && targetId.length > 1) {
      e.preventDefault();

      let targetElement = document.querySelector(targetId);

      if (targetElement) {
        // 1. تفعيل كلاس active
        navLinks.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");

        // 2. حساب ارتفاع الـ Navbar بدقة
        let navHeight = navbar.offsetHeight;

        // 3. حساب المسافة الحقيقية للسكشن من أعلى الصفحة وطرح ارتفاع الناف بار
        let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        let offsetPosition = elementPosition - navHeight;

        // 4. النزول للمكان المضبوط
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  });
});


// الزرار العائم


const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  // فحص التمرير على النافذة وعلى المستند معاً
  window.onscroll = function () {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPos > 100) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };

  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}