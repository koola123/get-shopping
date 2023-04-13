import { createRoot } from 'react-dom/client';

import './index.css';

const MyShoppingCart = () => {
  return (
    <div className="container">
      <h1>Let's Go Shopping!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyShoppingCart/>);
