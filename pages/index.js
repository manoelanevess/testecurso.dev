import { useState } from "react";

function Home() {
  const [mostrarCard, setMostrarCard] = useState(false);

  return (
    <div className="container">
      <h1>Oi amo, clica no botão se vc me ama 🤍</h1>

      <button onClick={() => setMostrarCard(true)}>
        Clicar aqui
      </button>

      {mostrarCard && (
        <div className="card">
          <p>Eu te amo mais do que tudo 💖</p>
        </div>
      )}
    </div>
  );
}

export default Home;
