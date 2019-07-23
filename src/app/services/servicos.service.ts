export class ServicosService {

    public servicos: Array<any> = [
        {
            id: 1,
            titulo: "Chat Bot",
            descricao: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.",
            destaque: true,
            imagem: [
                {url: "/assets/servicos/img1.jpg"}
            ]
        },

        {
            id: 2,
            titulo: "Aplicativos",
            descricao: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.",
            destaque: true,
            imagem: [
                {url: "/assets/servicos/img2.jpg"}
            ]
        },

        {
            id: 3,
            titulo: "Sistemas Web",
            descricao: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.",
            destaque: true,
            imagem: [
                {url: "/assets/servicos/img3.jpg"}
            ]
        },
    ]

    public getServicos(): Array<string>{
        return this.servicos
    }
}