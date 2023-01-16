type Bird = {
    name: string,
    peso: number | string,
    scientificName: string
};


const sumNumbers = (num1: number, num2: number): number => num1 + num2;

type Adress = {
    city: string,
    adress: string,
    number: string | number
};

interface Car  {
    _brand: string,
    _color: string,
    _doors: number
}   

class Car {
    constructor(brand: string, color: string, doors: number) {
        this._brand = brand
        this._color = color
        this._doors = doors
    }
    honk(): void {
        console.log('Buzina')
    } 

    turnOn(): void {
        console.log('Ligando carro')
    }

    turnOff(): void {
        console.log('desligando carro')
    }

    speedUp(): void {
        console.log('acelerando carro')
    }

    speedDown(): void {
        console.log('freiando carro')
    }

    stop():void {
        console.log('parando carro')
    }

    turn(direction: string): void {
        console.log(`virando para ${ direction }`)
    }


}
