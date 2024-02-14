onload = () => {
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
};
function revealFlower() {
document.getElementById('gift-box').style.display = 'none';
document.getElementById('flower').classList.remove('hidden');
}