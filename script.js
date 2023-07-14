const note_list = document.querySelector(".info__list__ul");
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnote.com%2Finfo%2Frss"
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
      li.classList.add("info__list__li");
      a.textContent = value.title;
      a.setAttribute("target", "_blank");
      a.setAttribute("href", value.link);
      li.append(a);
      note_list.appendChild(li);
      if (index == 2) {
        break;
      }
      index++;
    }
  });

console.log("%cMeitou", "color: #000; font-weight: bold; font-size: 60px;");
