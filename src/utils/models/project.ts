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
        description: "Proyecto de microservicios bastante importante para el desarrollo de la aplicacion Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, magnam suscipit perspiciatis inventore illo neque! Aliquam illo nostrum similique unde laudantium dolores eius, quo neque consequatur voluptas quisquam a at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, magnam suscipit perspiciatis inventore illo neque! Aliquam illo nostrum similique unde laudantium dolores eius, quo neque consequatur voluptas quisquam a at!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, magnam suscipit perspiciatis inventore illo neque! Aliquam illo nostrum similique unde laudantium dolores eius, quo neque consequatur voluptas quisquam a at!",
        urlImg: "/images/bg-hero3.webp",
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
        urlImg: "/images/bg-hero2.webp",
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
        urlImg: "/images/bg-hero.webp",
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