var dataJson = [
    {
        "img": "https://i.imgur.com/w5z4Izl.png",
        "title": "Greenify",
        "paragraph":"an Environmental forum website.",
        "url":"https://greenify-seven.vercel.app/"
    },
    {
        "img": "",
        "title": "Lazada website",
        "paragraph":"is a prominent e-commerce platform offering a vast array of products and services to consumers.",
        "url":"https://github.com/ngckhanh/lazada"
    },
    {
      "img": "",
      "title": "War Remnants Museum",
      "paragraph":"offers a poignant exploration of Vietnam's wartime history through powerful exhibits and poignant narratives.",
      "url":"https://ucd-museum-19.vercel.app/"
    }
    
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content;">
    <div
      style="padding: 12px"
      class="project progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
        <h2 style="color: txt-color">${item.title}</h2>
        <p style="color: txt-color; font-size: medium">
        ${item.paragraph}
        </p>
        <a
          rel="noopener"
          href="${item.url}"
          target="_blank"
          title="${item.title}">
          <button type="button" class="btn btn-secondary">
            View
          </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;

