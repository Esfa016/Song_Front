
import './App.css';
import MyForm from './componenents/addform';
import SongsTable from './componenents/table';

import store from './redux/store';
import {Provider} from 'react-redux';
import StatCard from './componenents/statcard';

import { NavBar } from './componenents/navbar';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import EditPage from './componenents/editform';
import SongsInGenre from './componenents/songsInGenre';

function App() {
  return <>
  <Provider store={store}> 
<BrowserRouter>
<NavBar/>
  <Routes>
  <Route index element ={<SongsTable/>} />
  <Route path='/add' element={<MyForm/>}/>
  <Route path='/edit/:id' element={<EditPage/>}/>

  <Route path='/songsInGenre'  element={<SongsInGenre/>}/>
  <Route path='/stastics' element={<StatCard/>}/>
  <Route path='' element={<h1>404 Page NotFound</h1>}/>
  </Routes>
  </BrowserRouter>
 
  {/* <Grid container spacing={1}>
      <Grid item xs={1} md={1} lg={2}>
        <MyForm></MyForm>
      </Grid>
     
      
      <Grid >
          <SongsTable></SongsTable>
      </Grid>
      <Grid item xs={3} md={1} lg={3}>
       
       <StatCard/>
             </Grid>
      
  </Grid> */}
  </Provider>
  
  </>
}

export default App;
