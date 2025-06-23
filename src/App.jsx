import { Provider } from 'react-redux'
import './App.css'
import PostList from './components/PostList'
import store from './redux/store'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <Provider store={store}>
      <LoginForm />
      <PostList />
    </Provider>
  )
}

export default App
