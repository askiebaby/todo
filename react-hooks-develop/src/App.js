import './App.scss';
import TodoPage from './pages/Todo/Todo.page';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);

function App() {
  return <TodoPage />;
}

export default App;
