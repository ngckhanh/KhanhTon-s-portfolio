var dataJson = [
    {
        "img": "https://i.imgur.com/w5z4Izl.png",
        "title": "Greenify",
        "paragraph":"Greenify : an Environmental forum website.",
        "url":"https://greenify-seven.vercel.app/"
    },
    {
        "img": "",
        "title": "Lazada website",
        "paragraph":"Quizec : is The Quiz Game For Android.",
        "url":"https://github.com/ngckhanh/lazada"
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

