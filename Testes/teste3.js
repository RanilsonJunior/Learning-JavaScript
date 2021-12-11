const pontuaçaoUsuario = 100;
const nivelUsuario = pontuaçaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;  // Caso não seja nada o padrão dele vai ser cor 'Preta'.
const corPadrão = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrão);



const vender = {
    produto: 'Televisão',
    preço: '1.200',
    Endereço: 'Varzea',
    comprar: {
        Produto: 'Computador',
        preço: '1.600',
        Endereço: 'Boa Viagem',
        alugar: {
            Produto: 'Cadeira',
            preço: 200,
            Endereço: 'Aldeia'
            }
        }
    }


console.log(vender);




const vender2 = {}
vender2.estado = 'Pernambuco'
vender2.cidade = 'Recife'
vender2.produto = 'Televisão'

console.log(vender2);

