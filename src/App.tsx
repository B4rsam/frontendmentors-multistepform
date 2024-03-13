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
    plan,
    handleService,
    changeStep,
    handlePlan,
    writeToStorage,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <FormSteps changeStep={changeStep} step={step}/>
      <div className={s.rightBox}>
        <FormSection step={step} total={total} handlePlan={handlePlan} services={services} handleService={handleService} plan={plan} changeStep={changeStep} />
        <SubmitSection step={step} changeStep={changeStep} writeToStorage={writeToStorage}/>
      </div>
    </div>
  )
}

export default App


