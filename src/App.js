import logo from './logo.svg';
import './App.css';
import MyForm from './componenents/addform';
import SongsTable from './componenents/table';
import Grid  from '@mui/material/Grid';
import store from './redux/store';
import {Provider} from 'react-redux';
function App() {
  return <>
  <Provider> store={store}
  <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={6}>
        <MyForm></MyForm>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
          <SongsTable></SongsTable>
      </Grid>
  </Grid>
  </Provider>
  
  </>
}

export default App;
