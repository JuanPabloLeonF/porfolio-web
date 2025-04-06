export interface TypeTecnologyProject {
    urlImg: string;
    name: string;
}

export interface TypeProject {
    title: string;
    description: string;
    urlImg: string;
    urlRepositoryGit: string;
    tecnologiesList: TypeTecnologyProject[];
}

export const listProjects: TypeProject[] = [
    {
        title: "Proyecto de microservicios",
        description: "Proyecto de microservicios bastante importante para el desarrollo de la aplicacion",
        urlImg: "/images/bg-hero3.jpg",
        urlRepositoryGit: "#",
        tecnologiesList: [
            {
                urlImg: "/images/python.svg",
                name: "python"
            },
            {
                urlImg: "/images/flask.svg",
                name: "flask"
            },
            {
                urlImg: "/images/docker.svg",
                name: "docker"
            },
            {
                urlImg: "/images/mysql.svg",
                name: "mysql"
            },
        ]
    },
    {
        title: "Ecommerce",
        description: "Ecommerce bastante importante para el desarrollo de la aplicacion",
        urlImg: "/images/bg-hero2.jpg",
        urlRepositoryGit: "#",
        tecnologiesList: [
            {
                urlImg: "/images/angular.svg",
                name: "angular"
            },
            {
                urlImg: "/images/typescript.svg",
                name: "typescript"
            },
            {
                urlImg: "/images/python.svg",
                name: "python"
            },
            {
                urlImg: "/images/flask.svg",
                name: "flask"
            },
            {
                urlImg: "/images/mysql.svg",
                name: "mysql"
            }
        ]
    },
    {
        title: "Proyecto de restaurante",
        description: "Proyecto de restaurante bastante importante para el desarrollo de la aplicacion",
        urlImg: "/images/bg-hero.jpg",
        urlRepositoryGit: "#",
        tecnologiesList: [
            {
                urlImg: "/images/python.svg",
                name: "python"
            },
            {
                urlImg: "/images/flask.svg",
                name: "flask"
            },
            {
                urlImg: "/images/mysql.svg",
                name: "mysql"
            },
        ]
    },
    
]