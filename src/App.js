import React from 'react';
import './App.css';
import refresh from './refresh.svg';
import Grid from './Grid';

class App extends React.Component {
  refresh = () => {
    window.location.reload();
  };

  render() {
    return  <div className="box">
      <img src={refresh} className='reset' onClick={this.refresh} alt=""/>
      <div className="container">
        <Grid />
      </div>
    </div>;
  };
}

export default App;
