console.log("Script js is loaded!")
const projects = document.querySelectorAll('.projects-list');
const options = {
  root: null, 
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

projects.forEach(project => observer.observe(project));

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}
