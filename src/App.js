import React from 'react';
import './App.css';
import MultipleSelect from './MultipleSelect';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import spreadsheet from './Data/lolchamps.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Gender = ["Male", "Female", "Other"];
const Position = ["Top", "Jungle", "Middle", "Bottom", "Support"];
const Species = ["Darkin","Vastayan","Human","Minotaur","Undead","God","Celestial","God-Warrior",
"Void-Being","Golem","Cyborg","Yordle","Aspect","Chemically Altered","Demon","Unknown","Spirit","Revenant","Dragon","Brackern",
"Iceborn","Cat","Magicborn","Spiritualist","Magically Altered","Dog","Yeti","Troll","Rat"].sort();
const Resources = ["Manaless","Mana","Energy","Health costs","Rage","Courage","Shield","Fury","Ferocity","Heat","Grit","Bloodthirst","Flow"].sort();
const Range = ["Melee","Ranged"];
const Region = ["Runeterra","Ionia","Shurima","Freljord","Noxus","Targon","Void","Zaun","Piltover","Bandle City","Demacia","Bilgewater","Camavor","Icathia","Ixtal","Shadow Isles"].sort()
const Release = [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = 
    {
      data: [],
      gender: [],
      position: [],
      species: [],
      resources: [],
      range: [],
      region: [],
      release: []
    }
  }

  onChangeGender = gender => {
    this.setState({ gender: gender }, this.onChange);
  };
  onChangePosition = position => {
    this.setState({ position: position }, this.onChange);
  };
  onChangeSpecies = species => {
    this.setState({ species: species }, this.onChange);
  };
  onChangeResources = resources => {
    this.setState({ resources: resources }, this.onChange);
  };
  onChangeRange = range => {
    this.setState({ range: range }, this.onChange);
  };
  onChangeRegion = region => {
    this.setState({ region: region }, this.onChange);
  };
  onChangeRelease = release => {
    this.setState({ release: release }, this.onChange);
  };

  onChange(){
    this.setState({
      data : []
    }, this.filterSpreadsheet);
  }

  filterSpreadsheet(){
    var filteredGenderSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.gender.length === 0 ){
        filteredGenderSpreadsheet.push(element);
      }else{
        this.state.gender.forEach(type => {
          if(element.Gender.includes(type))
          filteredGenderSpreadsheet.push(element);
        });
      }
    });

    var filteredPosSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.position.length === 0 ){
        filteredPosSpreadsheet.push(element);
      }else{
        this.state.position.forEach(type => {
          if(element.Position.includes(type))
          filteredPosSpreadsheet.push(element);
        });
      }
    });

    var filteredSpeciesSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.species.length === 0 ){
        filteredSpeciesSpreadsheet.push(element);
      }else{
        this.state.species.forEach(type => {
          console.log(type);
          if(element.Species.includes(type))
          filteredSpeciesSpreadsheet.push(element);
        });
      }
    });

    var filteredResourcesSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.resources.length === 0 ){
        filteredResourcesSpreadsheet.push(element);
      }else{
        this.state.resources.forEach(type => {
          if(element.Resource.includes(type))
          filteredResourcesSpreadsheet.push(element);
        });
      }
    });

    var filteredRangeSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.range.length === 0 ){
        filteredRangeSpreadsheet.push(element);
      }else{
        this.state.range.forEach(type => {
          if(element.Ranged.includes(type))
          filteredRangeSpreadsheet.push(element);
        });
      }
    });

    var filteredRegionSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.region.length === 0 ){
        filteredRegionSpreadsheet.push(element);
      }else{
        this.state.region.forEach(type => {
          if(element.Region.includes(type))
            filteredRegionSpreadsheet.push(element);
        });
      }
    });

    var filteredReleaseSpreadsheet = [];
    spreadsheet.forEach(element => {
      if (this.state.release.length === 0 ){
        filteredReleaseSpreadsheet.push(element);
      }else{
        this.state.release.forEach(type => {
          if(element.Release.includes(type))
            filteredReleaseSpreadsheet.push(element);
        });
      }
    });

    var filteredSpreadsheet = filteredGenderSpreadsheet.filter(value => filteredPosSpreadsheet.includes(value));
    filteredSpreadsheet = filteredSpreadsheet.filter(value => filteredSpeciesSpreadsheet.includes(value));
    filteredSpreadsheet = filteredSpreadsheet.filter(value => filteredResourcesSpreadsheet.includes(value));
    filteredSpreadsheet = filteredSpreadsheet.filter(value => filteredRangeSpreadsheet.includes(value));
    filteredSpreadsheet = filteredSpreadsheet.filter(value => filteredReleaseSpreadsheet.includes(value));
    filteredSpreadsheet = filteredSpreadsheet.filter(value => filteredRegionSpreadsheet.includes(value));

    this.setState({
      data : filteredSpreadsheet
    });
  }

  componentDidMount(){
    this.onChange()
  }

  render() {
    

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <div className="AppBar grid-container">
            <div className="grid-item AppTitle">Lordle-Helper</div>
            <MultipleSelect className="grid-item" id="Gender" list={Gender} title="Gender" onChange={this.onChangeGender}/>
            <MultipleSelect className="grid-item" id="Position" list={Position} title="Position" onChange={this.onChangePosition}/>
            <MultipleSelect className="grid-item" id="Species" list={Species} title="Species" onChange={this.onChangeSpecies}/>
            <MultipleSelect className="grid-item" id="Resources" list={Resources} title="Resources" onChange={this.onChangeResources}/>
            <MultipleSelect className="grid-item" id="Range" list={Range} title="Range" onChange={this.onChangeRange}/>
            <MultipleSelect className="grid-item" id="Region" list={Region} title="Region" onChange={this.onChangeRegion}/>
            <MultipleSelect className="grid-item" id="Release date" list={Release} title="Release date" onChange={this.onChangeRelease}/>
          </div>
          <div className="row-container AppContent">
            {
              this.state.data.map(element => (
                <div className='collumn-container'>
                  <div className="champ-item" key={element.champion}>{element.Champion}</div>
                  <div className={"champ-item " + element.Gender} key={element.champion}>{element.Gender}</div>
                  <div className={"champ-item " + element.Position} key={element.champion}>{element.Position}</div>
                  <div className={"champ-item " + element.Species} key={element.champion}>{element.Species}</div>
                  <div className={"champ-item " + element.Resource} key={element.champion}>{element.Resource}</div>
                  <div className={"champ-item " + element.Ranged} key={element.champion}>{element.Ranged}</div>
                  <div className={"champ-item " + element.Region} key={element.champion}>{element.Region}</div>
                  <div className={"champ-item " + element.Release} key={element.champion}>{element.Release}</div>
                </div>
              ))
            }
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
