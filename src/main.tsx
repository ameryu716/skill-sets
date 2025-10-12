import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './stylus/app.css'
import './stylus/main.css'
import './stylus/index.css'
import './stylus/lib.css'
import './stylus/annotation.css'


// import App from './App.tsx'
import ElSkillSets from './tsxs/skill-sets/SkillSets'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ElSkillSets />
  </StrictMode>,
)
