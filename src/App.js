import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  font-size: 15px;
  padding: 10px;
  border: 1ps solid #000;
  margin-bottom: 8px;
`;

function App(){

const [ distancia, setDistancia] = useState('');
const [ litros, setLitros] = useState('');

  return(
    <>
      <Container>
        <Title>Calculadora de Consumo de Combustível</Title>
        <span>Qual a distância percorrida em KM?</span>
        <Input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} />
        <span>Qual a quantidade de combustivel em litros L?</span>
        <Input type="number" value={litros} onChange={(e) => setLitros(e.target.value)} />

        {distancia && litros &&
          <h4>Consumo: R$ {parseInt(distancia / litros)} km/litro</h4>
        }

        
      </Container>

    </>
  )
}

export default App;