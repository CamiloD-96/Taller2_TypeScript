export class Serie{ 
    id: number;
    titulo: string;
    plataforma: string;
    temporadas: number;
    descripcion: string;
    url: string;
    foto: string;
    constructor(id: number, titulo: string, plataforma: string, temporadas: number, descripcion: string, url: string, foto: string){
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.url = url;
        this.foto = foto;
    }
}