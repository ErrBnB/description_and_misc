import Amenity from './components/Amenities.jsx';
import Title from './components/Title.jsx';
import Description from './components/Description.jsx';
import Highlights from './components/Highlights.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.getData.bind(this);
    this.getData((data) => {
      this.setState({
        basic: data.basic,
        descriptions: data.descriptions,
        amenities: data.amenities
      });
      window.app = this;
    });
  }

  getData (callback) {
    $.ajax({
      url: 'db/basics',
      method: 'GET',
      dataType: 'json',
      success: callback,
      error: () => {console.log('data retirival failed :(')}
  })}

  render() {
    var gotData = this.state;
    return (
      <div>
        {gotData ? (
          <div> 
            <Title data={this.state.basic}/>
            <Highlights />
            <Description />
            <Amenity data={this.state.amenities}/>
          </div>
        ) : (
          <div>Loading Page.....</div>
        )}
      </div>
    );
  }
}

window.App = App;