import logo from './logo.svg';
import './App.css';
import MyForm from './componenents/addform';
import SongsTable from './componenents/table';
import Grid  from '@mui/material/Grid';
import store from './redux/store';
import {Provider} from 'react-redux';
import StatCard from './componenents/statcard';
import BasicCard from './componenents/statcard';
import Card2 from './componenents/Card';
function App() {
  return <>
  <Provider store={store}> 
  <Grid container spacing={1}>
      <Grid item xs={1} md={1} lg={2}>
        <MyForm></MyForm>
      </Grid>
     
      
      <Grid >
          <SongsTable></SongsTable>
      </Grid>
      <Grid item xs={3} md={1} lg={3}>
       
       <StatCard/>
             </Grid>
      
  </Grid>
  </Provider>
  
  </>
}

export default App;
