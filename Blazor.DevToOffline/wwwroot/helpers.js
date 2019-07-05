window.getWindowSize = () => {
    return { height: innerHeight, width: window.innerWidth };
};

((window) => {
    let canvasContextCache = {};

    let getContext = (canvasId) => {
        if (!canvasContextCache[canvasId]) {
            canvasContextCache[canvasId] = canvasId.getContext('2d');
        }
        return canvasContextCache[canvasId];
    };

    window.__blazorCanvasInterop = {
        drawLine: (id, sX, sY, eX, eY) => {
            let context = getContext(id);

            context.lineJoin = 'round';
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(eX, eY);
            context.lineTo(sX, sY);
            context.closePath();
            context.stroke();
        },

        setContextPropertyValue: (id, propertyName, propertyValue) => {
            let context = getContext(id);

            context[propertyName] = propertyValue;
        }
    };
})(window);
