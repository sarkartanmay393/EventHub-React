

import Events from './components/Events';

const RootBoxStyles = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',

}

function App() {

  return (
    <div className='' style={RootBoxStyles}>
      <Events />
    </div>
  );
}

export default App;
