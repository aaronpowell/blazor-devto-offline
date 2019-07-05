using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Blazor.DevToOffline
{
    public class Canvas2DContext
    {
        private readonly IJSRuntime jsRuntime;
        private readonly ElementRef canvasRef;

        public Canvas2DContext(IJSRuntime jsRuntime, ElementRef canvasRef)
        {
            this.jsRuntime = jsRuntime;
            this.canvasRef = canvasRef;
        }

        public async Task DrawLine(long startX, long startY, long endX, long endY)
        {
            await jsRuntime.InvokeAsync<object>("__blazorCanvasInterop.drawLine", canvasRef, startX, startY, endX, endY);
        }

        public async Task SetStrokeStyleAsync(string strokeStyle)
        {
            await jsRuntime.InvokeAsync<object>("__blazorCanvasInterop.setContextPropertyValue", canvasRef, "strokeStyle", strokeStyle);
        }
    }
}
