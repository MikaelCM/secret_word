import './End.css'

const End = ({retry, score}) => {
  return (
    <main>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Tentar de novo</button>
    </main>
  )
}

export default End