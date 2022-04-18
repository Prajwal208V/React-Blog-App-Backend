import React from 'react';
import { Ui } from './components/UI/UI';
import { Provider } from "react-redux";
import { Store } from './components/store/specificIteam';

const App = () => {
  return (
    <div>
      <Provider store={Store}>  {/*redux-store*/}
          <Ui />
      </Provider>
    </div>
  )
}

export default App;