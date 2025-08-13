document.addEventListener("DOMContentLoaded", () => {
    let burger = document.querySelector(".Hamburger");
    let navigation = document.querySelector(".navigation");

    burger.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
});
