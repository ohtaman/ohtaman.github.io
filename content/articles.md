---
title: Articles
---

<h2>Zenn</h2>

<div id="zenn">
</div>

<h2>Qiita</h2>

<div id="qiita">
</div>

<script>
$(document).ready(() => {
    {
    const elem = $("#zenn");
    const spinner = $("<div class='spinner'>Now loading..</div>");
    spinner.appendTo(elem);
    getZenn((data) => {
      spinner.css("display", "none");
      $("<ul>").appendTo(elem).append(() => {
        return data.map((entry) => {
          return `<li><a href="${entry.url}">${entry.title}</a><span>${entry.date}</span></li>`
        });
      });
    });
    }

    {
    const elem = $("#qiita");
    const spinner = $("<div class='spinner'>Now loading..</div>");
    spinner.appendTo(elem);
    getQiita((data) => {
      spinner.css("display", "none");
      $("<ul>").appendTo(elem).append(() => {
        return data.map((entry) => {
          return `<li><a href="${entry.url}">${entry.title}</a><span>${entry.date}</span></li>`
        });
      });
    });
    }
})
</script>