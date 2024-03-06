import s from './app.module.sass'
import FormSection from './components/formSection/FormSection'
import FormSteps from './components/formSteps/FormSteps'

function App() {

  return (
    <div className={s.mainBody}>
      <FormSteps />
      <div>
        <FormSection />
        
      </div>
    </div>
  )
}

export default App


