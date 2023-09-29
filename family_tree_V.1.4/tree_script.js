function zoomIn() {
    currentScale += 0.1;
    applyZoom();
}

function zoomOut() {
    currentScale -= 0.1;
    applyZoom();
}

function applyZoom() {
    document.querySelector('.tree').style.transform = `scale(${currentScale})`;
}
