import UsingContext from "./UsingContext"
import NotUsingContext from "./NotUsingContext"
import './App.css';
import { CoolContextProvider } from './CoolContext';

function App() {
  return (
    <CoolContextProvider>
      <UsingContext />
      <NotUsingContext />
    </CoolContextProvider>
  );
}

export default App;
