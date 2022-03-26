---
title: events
---

<div id="events">
</div>

<script>
$(document).ready(() => {
    const elem = $("#events");
    const spinner = $("<div class='spinner'>Now loading..</div>");
    spinner.appendTo(elem);
    getEvents((data) => {
      spinner.css("display", "none");
      $("<ul>").appendTo(elem).append(() => {
        return data.map((entry) => {
          return `<li><a href="${entry.url}">${entry.title}</a><span>${entry.date}</span></li>`
        });
      })
    })
})
</script>