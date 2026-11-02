/* Left rail for sub-pages: sticky title plus an "On this page" list built from the page's sections. */
(function () {
  var post = document.querySelector('[role="main"] .post');
  if (!post) return;
  var head = post.querySelector(":scope > .post-header"),
    art = post.querySelector(":scope > article");
  if (!head || !art) return;
  document.body.classList.add("has-rail");
  var hs = [].slice.call(art.querySelectorAll("h2, .cv > .card > .card-title, [data-toc]")).filter(function (h) {
    return !h.closest(".projects");
  });
  if (hs.length < 2) hs = [].slice.call(art.querySelectorAll(":scope > h3"));
  if (hs.length < 2) return;
  var nav = document.createElement("nav"),
    ol = document.createElement("ol"),
    links = [];
  nav.className = "rail-toc";
  nav.setAttribute("aria-label", "On this page");
  nav.innerHTML = "<p>On this page</p>";
  hs.forEach(function (h, i) {
    var label = h.getAttribute("data-toc") || h.textContent.trim();
    var target = h.closest(".card") || h;
    if (!target.id)
      target.id =
        h.id ||
        "sec-" +
          label
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    var li = document.createElement("li"),
      a = document.createElement("a");
    if (h.hasAttribute("data-toc") || (h.tagName === "H3" && hs[0].tagName !== "H3")) li.className = "sub";
    a.href = "#" + target.id;
    a.textContent = label;
    li.appendChild(a);
    ol.appendChild(li);
    links.push([target, a]);
  });
  nav.appendChild(ol);
  head.appendChild(nav);
  function update() {
    var y = window.scrollY + 140,
      cur = links[0];
    links.forEach(function (l) {
      if (l[0].getBoundingClientRect().top + window.scrollY <= y) cur = l;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = links[links.length - 1];
    links.forEach(function (l) {
      l[1].classList.toggle("on", l === cur);
    });
  }
  var t = 0;
  window.addEventListener(
    "scroll",
    function () {
      if (!t)
        t = requestAnimationFrame(function () {
          t = 0;
          update();
        });
    },
    { passive: true }
  );
  update();
})();

/* Beyond Research: fill the time axis as the reader moves down through the sets. */
(function () {
  var j = document.querySelector(".journey");
  if (!j) return;
  var secs = [].slice.call(j.querySelectorAll(".jr")),
    t = 0;
  function update() {
    t = 0;
    var line = window.innerHeight * 0.45,
      r = j.getBoundingClientRect(),
      h = r.height - 40;
    var p = Math.max(0, Math.min(1, (line - r.top) / h));
    j.style.setProperty("--p", p.toFixed(4));
    secs.forEach(function (s) {
      s.classList.toggle("on", s.querySelector(".jr-dot").getBoundingClientRect().top < line);
    });
    j.classList.toggle("done", p >= 0.999);
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!t) t = requestAnimationFrame(update);
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
  update();
})();
