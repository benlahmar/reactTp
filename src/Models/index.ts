export interface Filiere
{
    id:number ;
    nom:string;
    description:string;
    image:string;
    semestres:Semestre[];
    
}

export interface Semestre
{
    id:number ;
    code:string;
    nom:string;
    modules: Module[];
    
}

export interface Module
{
    id:number ;
    nom:string;
    desciption:string;
}