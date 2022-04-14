import type { NextApiRequest, NextApiResponse } from 'next'
import { Nucleus } from '../../../src/model/interfaces/Nucleus';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Nucleus[] | null>
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(nucleusList)
      break;
  
    default:
      res.status(405).send(null)
      break;
  }
}

export let nucleusList: Nucleus[] = [
    {
      title: "CEI Brincando Também se Aprende",
      description: "95 crianças atendidas, faixa etária de 2 a 3 anos e 11 meses de idade",
      address: "R. dos Patis, 308 - Vila Nova Cachoeirinha",
      email: "bta@caminhandofuturo.org.br",
      phone: "11 3983-3867",
      facebook: "https://www.facebook.com/Brincando-tamb%C3%A9m-se-aprende-584136931993978",
      ofProject: "CEI"
    },
    {
      title: "CEI Girassol",
      description: "60 crianças atendidas, faixa etária de 3 a 4 anos de idade",
      address: "R. Herman Rechter, 08 - Vila Penteado",
      email: "girassol@caminhandofuturo.org.br",
      phone: "11 3986-0516",
      facebook: "https://www.facebook.com/girassol.girassol",
      ofProject: "CEI"
    },
    {
      title: "CEI Pingo de Gente",
      description: "137 crianças atendidas, faixa etária de 0 a 3 anos de idade",
      address: "R. Daniel Pereira, 238 - Parque Tietê",
      email: "pingodengente@caminhandofuturo.org.br",
      phone: "11 3851-9034",
      facebook: "https://www.facebook.com/profile.php?id=100000132884350",
      ofProject: "CEI"
    },
    {
      title: "CEI Primeiros Passos",
      description: "141 crianças atendidas, faixa etária de 1 a 3 anos e 11 meses de idade",
      address: "R. Morato de Oliveira , 400",
      email: "primeirospassos@caminhandofuturo.org.br",
      phone: "11 3989-3383",
      facebook: "https://www.facebook.com/ceiprimeirospassossbf",
      ofProject: "CEI"
    },
    {
      title: "CEI Téquinho do Céu",
      description: "147 crianças atendidas, faixa etária de 3 a 4 anos",
      address: "Pça. Jequié, 38- Jdim Maracanã",
      email: "tequinho@caminhandofuturo.org.br",
      phone: "11 3984-9889",
      facebook: "https://www.facebook.com/ceiprimeirospassossbf",
      ofProject: "CEI"
    },
    {
      title: "CCA Arte na Rua",
      description: "121 crianças atendidas, faixa etária de 6 a 15 anos e 11 meses de idade",
      address: "R. Eduardo Costa, 192 – Jardim Damasceno",
      email: "11 3921-9107",
      phone: "artenarua@caminhandofuturo.org.br",
      facebook: "https://www.facebook.com/Nucleo.Arte.na.Rua",
      ofProject: "CCA"
    },
    {
      title: "CCA Beija-Flor",
      description: "240 crianças atendidas, faixa etária de 6 a 15 anos de idade",
      address: "Endereço: Rua Ubaldo Mendes de Oliveira, 150-Jardim Carombé",
      email: "beijaflor@caminhandofuturo.org.br",
      phone: "11 3922-7188",
      facebook: "https://www.facebook.com/cca.beijaflor",
      ofProject: "CCA"
    },
    {
      title: "CCA Caminhando",
      description: "184 crianças atendidas, faixa etária de 6 a 15 anos de idade",
      address: "R. Cunhanrequaro,93 – Jardim Peri Alto",
      email: "cpf@caminhandofuturo.org.br",
      phone: "11 3984-8625",
      facebook: "https://www.facebook.com/ccacaminhando.futuro",
      ofProject: "CCA"
    },
    {
      title: "CCA Canarinho",
      description: "180 crianças atendidas, faixa etária de 6 a 15 anos de idade",
      address: "R. Raimundo carneiro, 180, Jardim Carombé",
      email: "canarinho@caminhandofuturo.org.br",
      phone: "11 3921-7324",
      facebook: "https://www.facebook.com/cca.canarinho.3",
      ofProject: "CCA"
    },
    {
      title: "Caminhando para o Futuro",
      description: "Caminhando para o Futur",
      address: "R. Herman Rechter,43 B - Vila Penteado",
      email: "nucleodeaprendizagem@caminhandofuturo.org.br",
      phone: "11 2476-2654",
      facebook: "https://www.facebook.com/programaaprendiz",
      ofProject: "NA"
    },
]