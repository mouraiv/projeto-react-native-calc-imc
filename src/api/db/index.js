export const Tabela = (result, altura) => {

    const data = {
  
      homens: {
        7 : {
          grave: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Abaixo do peso',
            valor: '≤ 13.6',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 44.3,
            faixa: '44.3 - 62.0 kg',
            condicao: result <= 13.6
          },
          saudavel: {
            ratio: 0,
            risco: 'BAIXO',
            texto: 'Saudavél',
            valor: '13.7 - 19.1',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 62.0,
            faixa: '44.3 - 62.0 kg',
            condicao: result >= 13.7 && result < 19.2
          },
          sobrepeso: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Sobrepeso',
            valor: '19.2 - 21.0 ',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 62.0,
            faixa: '44.3 - 62.0 kg',
            condicao: result > 19.1 && result < 21.1
          },
          grauUm: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obeso',
            valor: '21.1 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 62.0,
            faixa: '44.3 - 62.0 kg',
            condicao: result >= 21.1
          }
        },
        8 : {
          grave: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Abaixo do peso',
            valor: '≤ 14.2',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 46.3,
            faixa: '46.3 - 62.4 kg',
            condicao: result <= 14.2
          },
          saudavel: {
            ratio: 0,
            risco: 'BAIXO',
            texto: 'Saudavél',
            valor: '14.3 - 19.2',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 62.4,
            faixa: '46.3 - 62.4 kg',
            condicao: result >= 14.3 && result < 19.3
          },
          sobrepeso: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Sobrepeso',
            valor: '19.3 - 22.5 ',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 62.4,
            faixa: '46.3 - 62.4 kg',
            condicao: result > 19.2 && result < 22.6
          },
          grauUm: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obeso',
            valor: '22.6 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 62.4,
            faixa: '46.3 - 62.4 kg',
            condicao: result >= 22.6
          }
        },
      },    
      mulheres: {
        7 : {
          grave: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Abaixo do peso',
            valor: '≤ 13.2',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 43.0,
            faixa: '43.0 - 58.8 kg',
            condicao: result <= 13.2
          },
          saudavel: {
            ratio: 0,
            risco: 'BAIXO',
            texto: 'Saudavél',
            valor: '13.3 - 18.1',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 58.8,
            faixa: '43.0 - 58.8 kg',
            condicao: result >= 13.3 && result < 18.2
          },
          sobrepeso: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Sobrepeso',
            valor: '18.2 - 23.0 ',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 58.8,
            faixa: '43.0 - 58.8 kg',
            condicao: result > 18.1 && result < 23.1
          },
          grauUm: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obeso',
            valor: '23.1 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 58.8,
            faixa: '43.0 - 58.8 kg',
            condicao: result >= 23.1
          }
        },
        8 : {
          grave: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Abaixo do peso',
            valor: '≤ 13.2',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 43.0,
            faixa: '43.0 - 60.7 kg',
            condicao: result <= 13.2
          },
          saudavel: {
            ratio: 0,
            risco: 'BAIXO',
            texto: 'Saudavél',
            valor: '13.3 - 18.7',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 60.7,
            faixa: '43.0 - 60.7 kg',
            condicao: result >= 13.3 && result < 18.8
          },
          sobrepeso: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Sobrepeso',
            valor: '18.8 - 22.2 ',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 60.7,
            faixa: '43.0 - 60.7 kg',
            condicao: result > 18.7 && result < 22.3
          },
          grauUm: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obeso',
            valor: '22.3 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 60.7,
            faixa: '43.0 - 60.7 kg',
            condicao: result >= 22.3
          }
        },
      },
      adultos: {
          grave: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Magreza grave',
            valor: '≤ 15.9',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result < 16.0
          },
          moderado: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Magreza Moderada',
            valor: '16.0 - 18.4',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 15.9 && result < 18.5
          },
          leve: {
            ratio: 45,
            risco: 'MÉDIO',
            texto: 'Magreza Leve',
            valor: '17.0 - 18.4',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 16.9 && result < 18.5
          },
          saudavel: {
            ratio: 0,
            risco: 'BAIXO',
            texto: 'Saudável',
            valor: '18.5 - 24.9',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 18.4 && result < 25.0
          },
          sobrepeso: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Sobrepeso',
            valor: '25.0 - 29.9',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: (190-100)-((190-150)/2),
            faixa: '66.7 - 90.0 kg',
            condicao: result > 24.9 && result < 30.0
          },
          grauUm: {
            ratio: 99,
            risco: 'ALTO',
            texto: 'Obesidade Grau I',
            valor: '30.0 - 34.9',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 29.9 && result < 35.0
          },
          grauDois: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obesidade Grau II',
            valor: '35.0 - 39.9',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 34.9 && result < 40.0
          },
          grauTres: {
            ratio: 145,
            risco: 'CRÍTICO',
            texto: 'Obesidade Grau III',
            valor: '40.0 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            
            condicao: result > 39.9
          }
        }
      }
      return data
    }