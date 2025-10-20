import './StartScreen.css'

const StartScreen = ({start}) => {
  return (
    <main className='start'>
        <header>
            <h1>Secret Word</h1>
        </header>

        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={start}>Começar o jogo</button>
    </main>
  )
}

export default StartScreen