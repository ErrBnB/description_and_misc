import Amenity from './components/Amenities.jsx';
import Title from './components/Title.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div> Render Success?</div>
        <Title />
      </div>
    );
  }
}

window.App = App;