export class Alumno {
  apellido: string;

   constructor(public matricula?:number,
    public nombre?: string,
    public carrera?: string){
    }

    setApellido(apellido:string):void{
        this.apellido = apellido;
    }
}
