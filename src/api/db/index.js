export const Tabela = (result) => {

    const data = {
  
      homens: {
        6 : {
          grave: {
            texto: 'Abaixo do peso',
            valor: '≤ 14.4',
            condicao: result <= 14.4
          },
          saudavel: {
            texto: 'Saudavél',
            valor: '14.5 - 16.5',
            condicao: result >= 14.5 && result < 16.6
          },
          sobrepeso: {
            texto: 'Sobrepeso',
            valor: '16.6 - 18.0 ',
            condicao: result > 16.5 && result < 18.0
          },
          grauUm: {texto: 'Obeso',
          valor: '18.0 ≥',
          condicao: result >= 18.0}
        },
        7 : {
          grave: {
            texto: 'Abaixo do peso',
            valor: '≤ 14.9',
            condicao: result <= 14.9
          },
          saudavel: {
            texto: 'Saudavél',
            valor: '15.0 - 17.2',
            condicao: result >= 15.0 && result < 17.3
          },
          sobrepeso: {
            texto: 'Sobrepeso',
            valor: '17.3 - 19.1 ',
            condicao: result > 17.2 && result < 19.1
          },
          grauUm: {texto: 'Obeso',
          valor: '18.0 ≥',
          condicao: result >= 19.1
          }
        },
      },    
      mulheres: {
      },
      adultos: {
          grave: {
            ratio: 138,
            texto: 'Magreza grave',
            valor: '≤ 15.9',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result < 16.0
          },
          moderado: {
            ratio: 49,
            texto: 'Magreza Moderada',
            valor: '16.0 - 18.4',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 15.9 && result < 18.5
          },
          leve: {
            ratio: 49,
            texto: 'Magreza Leve',
            valor: '17.0 - 18.4',
            color:'rgb(255,215,0)', 
            fontWeight:'bold',
            normal: 66.7,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 16.9 && result < 18.5
          },
          saudavel: {
            ratio: 7,
            texto: 'Saudável',
            valor: '18.5 - 24.9',
            color:'rgb(50,205,50)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 18.4 && result < 25.0
          },
          sobrepeso: {
            ratio: 97,
            texto: 'Sobrepeso',
            valor: '25.0 - 29.9',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 24.9 && result < 30.0
          },
          grauUm: {
            ratio: 97,
            texto: 'Obesidade Grau I',
            valor: '30.0 - 34.9',
            color:'rgb(255, 140, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 29.9 && result < 35.0
          },
          grauDois: {
            ratio: 138,
            texto: 'Obesidade Grau II',
            valor: '35.0 - 39.9',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 34.9 && result < 40.0
          },
          grauTres: {
            ratio: 138,
            texto: 'Obesidade Grau III',
            valor: '40.0 ≥',
            color:'rgb(255, 0, 0)', 
            fontWeight:'bold',
            normal: 90.0,
            faixa: '66.7 - 90.0 kg',
            condicao: result > 39.9
          }
        }
      }
      return data
    }