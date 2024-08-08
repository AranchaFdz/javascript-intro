import { describe, it, expect } from 'vitest';
import { DNI } from '../src/dni';

describe('DNI', () => {
    it('debería devolver "T" para el número 0', () => {
        const dni = new DNI(0);
        expect(dni.calcularLetra()).toBe('T');
    });

    it('debería devolver "R" para el número 1', () => {
        const dni = new DNI(1);
        expect(dni.calcularLetra()).toBe('R');
    });

    it('debería devolver "W" para el número 2', () => {
        const dni = new DNI(2);
        expect(dni.calcularLetra()).toBe('W');
    });

    it('debería devolver "A" para el número 3', () => {
        const dni = new DNI(3);
        expect(dni.calcularLetra()).toBe('A');
    });

    it('debería devolver "G" para el número 4', () => {
        const dni = new DNI(4);
        expect(dni.calcularLetra()).toBe('G');
    });

    it('debería lanzar un error para un número fuera de rango', () => {
        expect(() => new DNI(-1)).toThrow('El dato introducido es incorrecto');
        expect(() => new DNI(100000000)).toThrow('El dato introducido es incorrecto');
    });

    it('debería lanzar un error para un dato no numérico', () => {
        expect(() => new DNI('ABC')).toThrow('El dato introducido es incorrecto');
    });
});








