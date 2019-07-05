window.getWindowSize = () => {
    return { height: window.innerHeight, width: window.innerWidth };
};

((window) => {
    let canvasContextCache = {};

    let getContext = (canvas) => {
        if (!canvasContextCache[canvas]) {
            canvasContextCache[canvas] = canvas.getContext('2d');
        }
        return canvasContextCache[canvas];
    };

    window.__blazorCanvasInterop = {
        drawLine: (canvas, sX, sY, eX, eY) => {
            let context = getContext(canvas);

            context.lineJoin = 'round';
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(eX, eY);
            context.lineTo(sX, sY);
            context.closePath();
            context.stroke();
        },

        setContextPropertyValue: (canvas, propertyName, propertyValue) => {
            let context = getContext(canvas);

            context[propertyName] = propertyValue;
        }
    };
})(window);
