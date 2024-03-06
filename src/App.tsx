import s from './app.module.sass'
import FormSection from './components/formSection/FormSection'
import FormSteps from './components/formSteps/FormSteps'
import SubmitSection from './components/submitSection/SubmitSection'

function App() {

  return (
    <div className={s.mainBody}>
      <FormSteps />
      <div>
        <FormSection />
        <SubmitSection />
      </div>
    </div>
  )
}

export default App


