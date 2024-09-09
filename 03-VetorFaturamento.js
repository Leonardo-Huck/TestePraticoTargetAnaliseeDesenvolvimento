/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, 
que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/


const fs = require('fs');

function carregarDados() {
    try {
        const dados = fs.readFileSync('03-JSON.json', 'utf8');
        const jsonData = JSON.parse(dados);

        return Object.entries(jsonData).map(([key, value]) => ({ [key]: value }));

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return null;
    }
}

function calcularFaturamento() {
    const dados = carregarDados();
    if (!dados) {
        console.log('Não foi possível calcular o faturamento devido a um erro ao carregar os dados.');
        return;
    }

    let menorValor = null;
    let maiorValor = null;
    let somaValores = 0;
    let diasComFaturamento = 0;

    dados.forEach(diaObj => {
        const dia = Object.values(diaObj)[0];
        if (dia.diaSemana !== "Sábado" && dia.diaSemana !== "Domingo") {
            if (menorValor === null || dia.valor < menorValor) menorValor = dia.valor;
            if (maiorValor === null || dia.valor > maiorValor) maiorValor = dia.valor;
            somaValores += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = somaValores / diasComFaturamento;
    const diasAcimaDaMedia = dados.filter(diaObj => {
        const dia = Object.values(diaObj)[0];
        return dia.valor > mediaMensal && dia.diaSemana !== "Sábado" && dia.diaSemana !== "Domingo";
    }).length;

    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento();



