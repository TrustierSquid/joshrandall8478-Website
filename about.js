// Remove the transition class
const divider = document.querySelector('#divider');
const skills__title = document.querySelector('#skills__title');
const hr = document.querySelectorAll('.skills__divider');
const category__titles = document.querySelectorAll('.category__titles');
const skills__item = document.querySelectorAll('.skills__item');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        divider.classList.add('active');
        skills__title.classList.add('active');
        hr.forEach((element) => {
            element.classList.add('active');
        })
        category__titles.forEach((element) => {
            element.classList.add('active');
        })
        skills__item.forEach((element) => {
            element.classList.add('active');
        })
        return;
    }
    });
});

observer.observe(document.querySelector('.skills'));