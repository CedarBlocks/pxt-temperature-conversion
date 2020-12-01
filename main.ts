namespace Temperature {

    //% block
    export function CelsiusToFahrenheit(c: number): number {
        return ((c * 9 / 5) + 32);
    };

    //% block
    export function FahrenheitToCelsius(f: number): number {
        return (( f - 32) * 5 / 9);
    };
}
