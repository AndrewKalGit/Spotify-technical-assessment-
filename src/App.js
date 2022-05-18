import './App.css';
import bb8 from './favicon.png'

function App() {
  return (
    <div>
      <h1>
        AI like bb8
      </h1>
         <img src={bb8} alt='bb8'/>
      <form>
        <h4>Feed some text to bb8</h4>
        <textarea name='text' ></textarea>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

export default App;
