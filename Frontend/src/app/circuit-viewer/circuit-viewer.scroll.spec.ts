import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CircuitViewerComponent } from './circuit-viewer.component';

describe('CircuitViewerComponent (scroll y layout)', () => {
    let fixture: ComponentFixture<CircuitViewerComponent>;
    let component: CircuitViewerComponent;

    function bigCircuit(cols: number, longName?: string) {
        const columns: any[] = [];
        for (let i = 0; i < cols; i++) {
            columns.push(i === 3 && longName ? [longName] : ['H', 1]);
        }
        return { cols: columns };
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [CircuitViewerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CircuitViewerComponent);
        component = fixture.componentInstance;
    });

    function render(code: any) {
        component.quirkCode = code;
        component.ngOnChanges({} as any);
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector('.circuit-canvas-container') as HTMLElement;
        container.style.width = '600px';
        container.style.height = '400px';
        return container;
    }

    it('el contenedor desplaza y permite llegar al principio', () => {
        const container = render(bigCircuit(80));
        expect(container.scrollWidth).toBeGreaterThan(container.clientWidth);
        container.scrollLeft = 500;
        component.resetZoom();
        expect(container.scrollLeft).toBe(0);
    });

    it('arrastrar desde el dibujo mueve el scroll; pulsar fuera del svg no arrastra', () => {
        const container = render(bigCircuit(80));
        const svg = container.querySelector('svg') as SVGElement;

        // Clic sobre el contenedor (barra de desplazamiento): no arrastra
        container.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 100, clientY: 100, bubbles: true }));
        expect(component.isDragging).toBeFalse();

        // Clic sobre el svg: arrastra
        container.scrollLeft = 400;
        svg.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 300, clientY: 100, bubbles: true }));
        expect(component.isDragging).toBeTrue();
        svg.dispatchEvent(new MouseEvent('mousemove', { clientX: 250, clientY: 100, bubbles: true }));
        expect(container.scrollLeft).toBe(450);
        container.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        expect(component.isDragging).toBeFalse();
    });

    it('un nombre largo ensancha el circuito y se recorta en la caja', () => {
        const longName = 'q'.repeat(30);
        render(bigCircuit(5, longName));
        const widthWith = component.svgWidth;
        const base = new CircuitViewerComponent();
        base.quirkCode = bigCircuit(5);
        base.ngOnChanges({} as any);
        expect(widthWith).toBeGreaterThan(base.svgWidth);
        const cell = component.visualCols[3].find(c => c.type === 'gate')!;
        expect(cell.label).toBe(longName);
        expect(component.gateText(cell, 3).endsWith('…')).toBeTrue();
        expect(component.gateText(cell, 3).length).toBeLessThan(longName.length);
    });
});
