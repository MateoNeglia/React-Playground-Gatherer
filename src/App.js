import './App.css';

let cardList = [
  {
    name: 'Pokemon Game API',
    image: 'images/pokemon-api.png',
    url: 'https://pokemon-m7mv78mpx-mateoneglia.vercel.app/',
  },
  {
    name: 'Color Palette Picker',
    image: 'images/color-palette.png',
    url: 'https://color-palettes-app.vercel.app/'
  },
  {
    name: 'Card-dealing API',
    image: 'images/card-deal.png',
    url: 'https://react-card-dealing-app.vercel.app/'
  }
]

function App() {
  return (
    <div className="App App-header">
        <h1>This are some of my current React playground apps</h1>
        <p>I've made for testing and practicing purposes</p>
        
        <div>
        {cardList.map((project, index) => (
          <div className='project-card image-box' key={index}>
            <a href={project.url} target='_blank' rel="noreferrer" >
              <img className='portfolio-image' src={project.image} alt={project.name} width={'300px'}/>
              <div className='content'>
                <h3 className='title'>{project.name}</h3>
              </div>            
            </a>            
          </div>            
        ))}
        </div>
    </div>
  );
}

export default App;
