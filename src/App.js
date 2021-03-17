import logo from './logo.svg';
import Navbar from './Components/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import {Provider} from 'react-redux'
import store from './store'
import Home from './pages/Home'


function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
