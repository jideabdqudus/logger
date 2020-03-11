import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/AddBtn"
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import './App.css';

const App =()=> {
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  })
  
  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <Logs/>
        <AddBtn/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
      </div> 
    </Fragment>
  );
}

export default App;
