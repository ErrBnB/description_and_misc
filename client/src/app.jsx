import Amenity from './components/Amenities.jsx';
import Title from './components/Title.jsx';
import Description from './components/Description.jsx';
import Highlights from './components/Highlights.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div> Render Success?</div>
        <Title />
        <Highlights />
        <Description />
        <Amenity />
      </div>
    );
  }
}

window.App = App;