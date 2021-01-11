import React from 'react'
import {HashRouter as Router , Switch , Route} from 'react-router-dom'
import HistoryContextProvider from './context/historyContext'
import SearchContextProvider from './context/searchcontext'
import HistoryPage from './pages/HistoryPage/historypage'
import HomePage from './pages/homepage/homepage'
import ImagePage from './pages/ImagePage/imagepage'
import SearchPage from './pages/searchpage/searchpage'

function App() {
  return (
      <div className="App">
            <HistoryContextProvider>
              <SearchContextProvider>
                <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                    <Route exact path='/search/images'>
                      <ImagePage/>
                    </Route>
                    <Route exact path='/search'>
                      <SearchPage/>
                    </Route>
                    <Route exact path='/'>
                      <HomePage/>
                    </Route>
                    <Route exact path='/search/history'>
                      <HistoryPage/>
                    </Route>
                    </Switch>
                  </Router>
                </SearchContextProvider>
              </HistoryContextProvider>
            
      
      </div>
  );
}

export default App;
