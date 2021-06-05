import { TipoDocIdentidad } from './TipoDocIdentidad';
export class Persona{
    private id: String;
    private tipoPersona: number;
    private tipoDocIdentidad: TipoDocIdentidad;
    private estadoCivil: number;
    private apePaterno: String;
    private apeMaterno: String;
    private nombres: String;
    private numeroDoc: String;
    private fecNacimiento: Date;
    private sexo: String;
    private direccion: String;
    private telefono: String;
    private correoElet: String;
    private estado: String;
}