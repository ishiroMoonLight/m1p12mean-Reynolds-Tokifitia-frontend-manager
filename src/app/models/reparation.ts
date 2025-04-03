interface Reparation {
    id: string;
    nom: string;
    description: string;
    image: string;
    duree: string;
    prix: number;
}

interface CreateReparation {
    nom: string;
    description: string;
    image: string;
    duree: string;
    prix: number;
}