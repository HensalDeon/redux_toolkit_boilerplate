import { Provider } from 'react-redux'
import './App.css'
import PostList from './components/PostList'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  )
}

export default App
