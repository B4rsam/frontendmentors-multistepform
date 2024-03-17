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
    changeStep,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <FormSteps changeStep={changeStep} step={step} />
      <div className={s.rightBox}>
        <FormSection step={step} total={total} data={data} changeStep={changeStep} formOperation={formOperation}/>
        <SubmitSection step={step} changeStep={changeStep} />
      </div>
    </div>
  )
}

export default App


