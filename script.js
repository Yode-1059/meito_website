const note_list = document.querySelector(".info__list__ul");
if (note_list) {
  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnote.com%2Ftest_hosta518%2Frss"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let data = json.items;
      let index = 0;
      for (value of data) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const div = document.createElement("div");
        li.classList.add("info__list__li");
        p.textContent = value.title;
        img.setAttribute("src", "./img/note.jpg");
        div.classList.add("info__list__content");
        p.classList.add("info__list__p");
        img.classList.add("info__list__img");
        div.append(p);
        a.append(img);
        a.append(div);
        a.setAttribute("target", "_blank");
        a.setAttribute("href", value.link);
        li.append(a);
        note_list.appendChild(li);
        if (index == 3) {
          break;
        }
        index++;
      }
    });
}

console.log("%cMeitou", "color: #000; font-weight: bold; font-size: 60px;");
const o_s = document.querySelectorAll(".question__content__o_s");
const context__a = document.querySelectorAll(".question__content__a");
const hum_btn = document.querySelector(".header__hum__btn");
const hum = document.querySelector(".header__hum");
const body = document.querySelector("body");
const content = document.querySelector(".header__content");
const header = document.querySelector(".header");
const title = document.querySelector(".header__title");
const btn = document.querySelector(".header__hum__btn");
const hum_close = document.querySelector("#hum_close");
const header__title = document.querySelector(".header__title");
const mainvisual = document.querySelector(".mainvisual__catch");
const header__link = document.querySelectorAll(".header__link");

hum_btn.addEventListener("click", () => {
  hum.classList.toggle("open");
  body.classList.toggle("open");
  content.classList.toggle("open");
  header.classList.toggle("open");
  title.classList.toggle("open");
  btn.classList.toggle("open");
});

const close = () => {
  hum.classList.remove("open");
  body.classList.remove("open");
  content.classList.remove("open");
  header.classList.remove("open");
  title.classList.remove("open");
  btn.classList.remove("open");
};

if (mainvisual) {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.62,
  };

  const logoPop = (entry) => {
    if (entry[0].isIntersecting) {
      header__title.classList.add("unpop");
    } else {
      header__title.classList.remove("unpop");
    }
  };

  const logoPopup = new IntersectionObserver(logoPop, options);
  logoPopup.observe(mainvisual);
}
if (hum_close) {
  hum_close.addEventListener("click", () => {
    if (window.innerWidth >= 1030) {
      close();
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1030) {
    close();
  }
});

o_s.forEach((e, index) => {
  e.addEventListener("click", () => {
    e.classList.toggle("open");
    context__a[index].classList.toggle("open");
  });
});

header__title.addEventListener("click", () => {
  close();
});
