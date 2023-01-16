
class Estudante {
   private _matricula: string;
   private _nome: string;
   private _grades: number[];
   private _workGrades: number[];

    constructor(matricula:string, nome:string, grades: number[], workGrades: number[]) {
        this._matricula = matricula;
        this._nome = nome;
        this._grades = grades;
        this._workGrades = workGrades;
    }

    get matricula(): string { return this._matricula };
    get nome(): string { return this._nome };
    get grades():number[] { return [...this._grades] }
    get workGrades():number[] { return [...this._workGrades]}

    
    sumGrades():number { return this._grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue,0 ) }

    gradesMedia(): number {
       const gradesSum = this.sumGrades();
       const result = gradesSum / this._grades.length;
       return result;
    } 
}

const aluno1 = new Estudante('15', 'tomas', [6, 4, 6, 9], [2, 3]);
console.log(aluno1.gradesMedia())
console.log(aluno1.workGrades)