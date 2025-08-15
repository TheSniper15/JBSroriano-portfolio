const cube = document.getElementById('cube');
document.querySelectorAll('.side-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
        const face = btn.getAttribute('data-face');
        let rotation;
        switch (face) {
            case 'front': rotation = 'rotateY(0deg)'; break;
            case 'back': rotation = 'rotateY(180deg)'; break;
            case 'right': rotation = 'rotateY(-90deg)'; break;
            case 'left': rotation = 'rotateY(90deg)'; break;
            case 'top': rotation = 'rotateX(-90deg)'; break;
            case 'bottom': rotation = 'rotateX(90deg)'; break;
        }
        cube.style.transform = rotation;
    });
});

document.getElementById("toggle-exp").addEventListener("click", function () {
    document.getElementById("exp-content").classList.toggle("hidden");
});
