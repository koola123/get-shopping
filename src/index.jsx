import { createRoot } from 'react-dom/client';

import './index.css';

const MyShoppingCart = () => {
  return (
    <div>
      <h1 class="">Let's Go Shopping!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyShoppingCart/>);
