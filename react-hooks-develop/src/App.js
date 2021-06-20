import './App.scss';
import TodoPage from './pages/Todo/Todo.page';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return <TodoPage />;
}

export default App;
