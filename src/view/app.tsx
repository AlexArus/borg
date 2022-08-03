import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from "react-dom/client";

const appContainer = document.getElementById("app");

const root = createRoot(appContainer);

root.render(<App/>);


import Button from '@mui/material/Button';

function App() {
    return <Button variant="contained">borg</Button>;
  }