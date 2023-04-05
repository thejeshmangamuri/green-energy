const services = {
  1: {
      title: "Solar Energy",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image: "./img/img-1.jpg" 
  },
  2: {
      title: "Wind Energy",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image: "./img/img-2.jpg" 
  },
  3: {
      title: "Hydropower Energy",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image: "./img/img-3.jpg" 
  }
};

  const buttons = document.querySelectorAll(".button-group button");
  const content = document.querySelector("#content");
  
 
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        buttons.forEach(function(btn) {
            btn.classList.remove("active-button");
        });

        button.classList.add("active-button");

const id = button.getAttribute("id").slice(-1);

const service = services[id];

// content.innerHTML = `<h2>${service.title}</h2><p>${service.content}</p><img src="${service.image}" alt="${service.title} Image">`;
content.innerHTML = `
<h2>${service.title}</h2>
<img src="${service.image}" alt="${service.title} Image">
<p>${service.content}</p>`;

    });
  });

+
buttons[0].classList.add("active-button");


const mediaQuery = window.matchMedia('(min-width: 30rem)');
const container = document.querySelector('.container');
const masthead = document.querySelector('.masthead');

function handleMediaQuery(mediaQuery) {
if (mediaQuery.matches) {
  container.style.fontSize = '1.2rem';
  masthead.style.height = '50vh';
} else {
  container.style.fontSize = '1rem';
  masthead.style.height = '30rem';
}
}

handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
