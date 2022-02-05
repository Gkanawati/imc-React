import './app.css';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');       /* Define variaveis para armezenar dados do input */
  const [altura, setAltura] = useState('');   /* O useState é utlizado para armazenar dados e fazer requisição */
                                              /* useState permite que o conteudo seja dinamico  */
  const[mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Voce está abaixo do peso! seu IMC: " + imc.toFixed(2));
    }
    else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso Ideal! Seu IMC: " + imc.toFixed(2));
    }
    else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do seu peso! Sem IMC" + imc.toFixed(2));
    }
    else if (imc > 34.9) {
      setMensagem("Cuidado Obesidade! Seu IMC " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">

        <input type="text"
          placeholder="Peso em (kg) Ex: 54"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input type="text"
          placeholder="Altura em (cm) Ex: 176"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}