import Counter from "./CounterScreen/Index";
import {store} from "./Store"
import { Provider } from 'react-redux';
const App=()=> {
  return (
    <Provider store={store}><Counter/></Provider>  
  );
} 

export default App;
