import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import type { Option, QuestionMap, CensusQuestionSelect, CensusQuestionElement } from "../../types/Questions";

const Question = ({ id, onChange, label, obs, title, isEnabled }: CensusQuestionElement): JSX.Element => {
  const [options, setOptions] = useState<Option[]>([])
  const [enabled, setEnabled] = useState<boolean>(isEnabled)
  const optionRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].options = options
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [options])

  function handleEnabled(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setEnabled(e.target.checked)
  }
  function getMaxValue(): number {
    const max = options.reduce((acc, cur) => (cur.id > acc ? cur.id : acc) +1, 0)
    return max == 0 ? 1 : max
  }
  function alterOption(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setOptions(prev => {
      const index = prev.findIndex(opt => opt.id === Number(e.target.id))
      prev[index].text = e.target.value
      return [...prev]
    });
  }
  function addOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setOptions(prev => [...prev, {id: getMaxValue(), text: "New option"}])
    setTimeout(() => optionRef.current?.focus(), 100)
  }
  function removeOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const value = Number(e.currentTarget.value)
    setOptions(prev => {
      const curr = prev.filter(opt => opt.id !== value)
      curr.forEach(o => { if (o.id > value) o.id-- })
      return [...curr]
    })
  }

  return <>
    <span>QId: {id}</span>
    <span><strong>{title}</strong></span>
    <span><strong>{label}</strong></span>
    <span><strong>{obs}</strong></span>
    <span><input type="checkbox" checked={enabled} onChange={handleEnabled}/>Editable?</span>
    { enabled ? (
      <ul>
        { options.map((o, i) => {
          return <li key={o.id}>
            <span>OId: {o.id}</span>
            <input onChange={alterOption} value={o.text} id={String(o.id)}/>
            <span><button onClick={removeOption} value={o.id}>Remove Option</button></span>
          </li>
        }) }
        <button onClick={addOption}>Create option</button>
      </ul>
    )
    : null}
  </>
}

const CensusQuestions = (): JSX.Element => {
  const [questions, setQuestions] = useState<CensusQuestionSelect[]>([])
  const [init, setInit] = useState<boolean>(false)

  function getBaseQuestions(): void {
    api.get("/questions")
      .then(res => {
        const baseQuestions: CensusQuestionSelect[] = res.data.map((q: QuestionMap) => {
          return {
            id: q.id,
            text: q.question,
            label: q.questionLabel,
            obs: q.questionObs,
            options: q.questionAnswers,
            isBase: true,
            wasEdited: false,
            isEditable: q.isEditable,
            _id: q._id,
            enabled: true
          }
        })
        setQuestions(prev => [...prev, ...baseQuestions])
      })
      .then(() => setInit(true))
      .catch(err => console.log(err))
  }

  // function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //   e.preventDefault()
  //   const mapped: QuestionMap[] = questions.map((q): QuestionMap | null => {
  //     if (q.wasEdited)
  //       return {
  //         id: q.id,
  //         question: q.text,
  //         questionLabel: q.label,
  //         questionObs: q.obs,
  //         questionAnswers: q.options,
  //         isEditable: q.isEditable,
  //         _id: q._id
  //       }
  //     return null
  //   }).filter((q): q is QuestionMap => !!q)
  //   mapped.forEach(q => {
  //     if (!q._id) api.post('/questions', q)
  //     else api.put(`/questions/${q._id}`, q)
  //   })
  // }
  if (!init) getBaseQuestions()
  return <>
    <div>
      { questions.map(q => {
        return <Question
          key={q.id}
          id={q.id}
          isEditable={q.isEditable}
          onChange={setQuestions}
          label={q.label}
          obs={q.obs}
          isEnabled={q.enabled}
          title={q.text}
        />
      })
      }
    </div>
    {/* <button onClick={submit}>Submit</button> */}
  </>
}

export default CensusQuestions