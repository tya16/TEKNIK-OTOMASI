function openModal(img) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("imgModal").src = img.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
