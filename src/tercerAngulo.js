export function tercerAngulo(angulo1, angulo2) {
    if (angulo1 === 0 || angulo2 === 0) {
        throw new Error('Un ángulo no puede ser 0');
    }
    return 180 - (angulo1 + angulo2);
}