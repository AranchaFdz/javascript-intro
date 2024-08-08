import { describe, it, expect } from 'vitest';
import { tercerAngulo } from '../src/tercerAngulo';

describe('tercerAngulo', () => {
    it('debería devolver 90 cuando los ángulos son 30 y 60', () => {
        expect(tercerAngulo(30, 60)).toBe(90);
    });

    it('debería devolver 60 cuando los ángulos son 60 y 60', () => {
        expect(tercerAngulo(60, 60)).toBe(60);
    });

    it('debería devolver 59 cuando los ángulos son 43 y 78', () => {
        expect(tercerAngulo(43, 78)).toBe(59);
    });

    it('debería devolver 150 cuando los ángulos son 10 y 20', () => {
        expect(tercerAngulo(10, 20)).toBe(150);
    });

    it('debería lanzar un error cuando el primer ángulo es 0', () => {
        expect(() => tercerAngulo(0, 60)).toThrow('Un ángulo no puede ser 0');
    });

    it('debería lanzar un error cuando el segundo ángulo es 0', () => {
        expect(() => tercerAngulo(60, 0)).toThrow('Un ángulo no puede ser 0');
    });

    it('debería lanzar un error cuando ambos ángulos son 0', () => {
        expect(() => tercerAngulo(0, 0)).toThrow('Un ángulo no puede ser 0');
    });
});