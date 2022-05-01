import { Nucleus as NucleusInterface } from "../interfaces/Nucleus"

export class Nucleus {
    private api_url!: string
    private endpoint_url!: string
    private endpoint = 'nucleus'

    constructor() {
        if(!process.env.API_URL)
            throw `Environment API_URL not set`
        
        this.api_url = process.env.API_URL
        this.endpoint_url = this.api_url + this.endpoint
    }

    async getAll(): Promise<NucleusInterface[]> {
        return nucleusList
    }
}

let nucleusList: NucleusInterface[] = [
    {
      title: "CEI Brincando Também se Aprende",
      description: "95 crianças atendidas <br/> Faixa etária de 2 a 3 anos de idade",
      address: "Rua dos Patis, 308 - Vila Nova Cachoeirinha",
      email: "bta@caminhandofuturo.org.br",
      phone: "11 3983-3867",
      facebook: "https://www.facebook.com/Brincando-tamb%C3%A9m-se-aprende-584136931993978",
      ofProject: "CEI",
      mapsLink: "https://www.google.com.br/maps/place/CR.P.CONV+BRINCANDO+TAMBEM+SE+APRENDE/@-23.4712815,-46.6638875,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef7654f6f02d1:0x5abf156e6daed8bc!8m2!3d-23.4712916!4d-46.6617006"
    },
    {
      title: "CEI Girassol",
      description: "60 crianças atendidas <br/> Faixa etária de 3 a 4 anos de idade",
      address: "Rua Herman Rechter, 08 - Vila Penteado",
      email: "girassol@caminhandofuturo.org.br",
      phone: "11 3986-0516",
      facebook: "https://www.facebook.com/girassol.girassol",
      ofProject: "CEI",
      mapsLink: "https://www.google.com.br/maps/place/Centro+de+Educa%C3%A7%C3%A3o+Infantil+Girassol/@-23.4716052,-46.6821138,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef9dcf1b50053:0xad8f60f3693998b7!8m2!3d-23.4715969!4d-46.6799292"
    },
    {
      title: "CEI Pingo de Gente",
      description: "137 crianças atendidas <br/> Faixa etária de 0 a 3 anos de idade",
      address: "Rua Daniel Pereira, 238 - Parque Tietê",
      email: "pingodengente@caminhandofuturo.org.br",
      phone: "11 3851-9034",
      facebook: "https://www.facebook.com/profile.php?id=100000132884350",
      ofProject: "CEI",
      mapsLink: "https://www.google.com.br/maps/place/CEI+INDIR+PINGO+DE+GENTE/@-23.4653838,-46.6798748,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef9e6fc44f9eb:0xb9d253d127e23022!8m2!3d-23.4653247!4d-46.6776856"
    },
    {
      title: "CEI Primeiros Passos",
      description: "141 crianças atendidas <br/> Faixa etária de 1 a 3 anos de idade",
      address: "Rua Morato de Oliveira, 400 - Parque Itaberaba",
      email: "primeirospassos@caminhandofuturo.org.br",
      phone: "11 3989-3383",
      facebook: "https://www.facebook.com/ceiprimeirospassossbf",
      ofProject: "CEI",
      mapsLink: "https://www.google.com.br/maps/place/CR.P.CONV+PRIMEIROS+PASSOS/@-23.5533835,-46.6479727,12z/data=!4m9!1m2!2m1!1scei+primeiros+passos!3m5!1s0x94cef9d1158789d3:0xf26b07d5fb2f302!8m2!3d-23.4802386!4d-46.6787368!15sChRjZWkgcHJpbWVpcm9zIHBhc3Nvc5IBBnNjaG9vbA"
    },
    {
      title: "CEI Téquinho do Céu",
      description: "147 crianças atendidas <br/> Faixa etária de 3 a 4 anos",
      address: "Praça Jequié, 38 - Jardim Maracanã",
      email: "tequinho@caminhandofuturo.org.br",
      phone: "11 3984-9889",
      facebook: "https://www.facebook.com/ceiprimeirospassossbf",
      ofProject: "CEI",
      mapsLink: "https://www.google.com.br/maps/place/Pra%C3%A7a+Jequi%C3%A9,+38+-+Jardim+Maracana,+S%C3%A3o+Paulo+-+SP,+02839-120/@-23.475794,-46.6835242,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef9c4dd99d543:0x318f112c080b333d!8m2!3d-23.475794!4d-46.6813355"
    },
    {
      title: "CCA Arte na Rua",
      description: "121 crianças atendidas <br/> Faixa etária de 6 a 15 anos de idade",
      address: "Rua Eduardo Costa, 192 – Jardim Damasceno",
      email: "artenarua@caminhandofuturo.org.br",
      phone: "11 3921-9107",
      facebook: "https://www.facebook.com/Nucleo.Arte.na.Rua",
      ofProject: "CCA",
      mapsLink: "https://www.google.com.br/maps/place/CCA+ARTE+NA+RUA/@-23.5147002,-46.7623715,12z/data=!4m9!1m2!2m1!1sCCA+Arte+na+Rua!3m5!1s0x94cefa2617630929:0xa5bd86577f7256f8!8m2!3d-23.4482668!4d-46.6969788!15sCg9DQ0EgQXJ0ZSBuYSBSdWGSAQZzY2hvb2w"
    },
    {
      title: "CCA Beija-Flor",
      description: "240 crianças atendidas <br/> Faixa etária de 6 a 15 anos de idade",
      address: "Rua Ubaldo Mendes de Oliveira, 150 - Jardim Carombé",
      email: "beijaflor@caminhandofuturo.org.br",
      phone: "11 3922-7188",
      facebook: "https://www.facebook.com/cca.beijaflor",
      ofProject: "CCA",
      mapsLink: "https://www.google.com.br/maps/place/CCA+BEIJA-FLOR/@-23.4563561,-46.7056558,17z/data=!3m1!4b1!4m5!3m4!1s0x94cefa2993c89c39:0xf67a1ad633c8268f!8m2!3d-23.4563715!4d-46.7034882"
    },
    {
      title: "CCA Caminhando",
      description: "184 crianças atendidas <br/> Faixa etária de 6 a 15 anos de idade",
      address: "Rua Cunhanrequaro, 93 – Vila Cosmopolita",
      email: "cpf@caminhandofuturo.org.br",
      phone: "11 3984-8625",
      facebook: "https://www.facebook.com/ccacaminhando.futuro",
      ofProject: "CCA",
      mapsLink: "https://www.google.com.br/maps/place/CCA+CAMINHANDO+PARA+O+FUTURO/@-23.4549275,-46.6742222,17z/data=!4m5!3m4!1s0x94cef9fcc2270afb:0x31a36ca0669176a3!8m2!3d-23.4540117!4d-46.6732958"
    },
    {
      title: "CCA Canarinho",
      description: "180 crianças atendidas <br/> Faixa etária de 6 a 15 anos de idade",
      address: "Rua Raimundo Carneiro, 180 - Jardim Carombé",
      email: "canarinho@caminhandofuturo.org.br",
      phone: "11 3921-7324",
      facebook: "https://www.facebook.com/cca.canarinho.3",
      ofProject: "CCA",
      mapsLink: "https://www.google.com.br/maps/place/CCA+CANARINHO/@-23.4560486,-46.7026222,17z/data=!3m1!4b1!4m5!3m4!1s0x94cefa281981dbb9:0x37e872002293556!8m2!3d-23.4560536!4d-46.7004335"
    }
]