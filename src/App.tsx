import s from './app.module.sass'
import FormSection from './components/formSection/FormSection'
import FormSteps from './components/formSteps/FormSteps'
import SubmitSection from './components/submitSection/SubmitSection'
import useViewController from './utils/useViewController'

function App() {

  const {
    step,
    total,
    services,
    handleService,
    changeStep,
    handlePlan,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <FormSteps changeStep={changeStep} step={step}/>
      <div className={s.rightBox}>
        <FormSection step={step} total={total} handlePlan={handlePlan} services={services} handleService={handleService}/>
        <SubmitSection step={step} changeStep={changeStep}/>
      </div>
    </div>
  )
}

export default App


