import './App.css'
import { Header } from './Components/Header/Header'
import { ProjectSection } from './Components/Projects/Project'
import { Contact } from './Components/Contact/Conctact'
import { LanguageProvider } from './hooks/LanguageContext'

function App() {

  return (
    <>
      <LanguageProvider>
        <Header></Header>
        <ProjectSection></ProjectSection>
        <Contact></Contact>
      </LanguageProvider>


    </>
  )
}

export default App
