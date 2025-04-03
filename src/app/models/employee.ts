interface Employee {
    _id?: string;
    name: string;
    firstname: string;
    bio?: string;
    email: string;
    password: string;
    pfp?: string; // URL de la photo de profil
    salary: number;
    createdAt?: Date;
    updatedAt?: Date;
    reparation?: Reparation[] | null; // Peut être un objet complet ou null
}

interface CreateEmployee {
    name: string;
    firstname: string;
    bio?: string;
    email: string;
    password?: string;
    pfp?: string; // URL de la photo de profil
    salary: number;
}
