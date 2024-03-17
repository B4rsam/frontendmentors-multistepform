import s from './app.module.sass'
import FormSection from './components/formSection/FormSection'
import FormSteps from './components/formSteps/FormSteps'
import SubmitSection from './components/submitSection/SubmitSection'
import useViewController from './utils/useViewController'

function App() {

  const {
    step,
    total,
    data,
    formOperation,
    handleService,
    changeStep,
    handlePlan,
    handleAnnual,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <FormSteps changeStep={changeStep} step={step} />
      <div className={s.rightBox}>
        <FormSection step={step} total={total} handlePlan={handlePlan} data={data} handleService={handleService} changeStep={changeStep} formOperation={formOperation} handleAnnual={handleAnnual}/>
        <SubmitSection step={step} changeStep={changeStep} />
      </div>
    </div>
  )
}

export default App


