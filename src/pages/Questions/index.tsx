import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import type { Question as QuestionSubmit, Option, QuestionElement, QuestionMap } from "../../types/Questions";

const Question = ({ id, removeQuestion, onChange, isEditable, label, obs }: QuestionElement): JSX.Element => {
  const [title, setTitle] = useState<string>("")
  const [options, setOptions] = useState<Option[]>([])
  const [editable, setEditable] = useState<boolean>(isEditable)
  const [questionLabel, setLabel] = useState<string>(label)
  const [questionObs, setObs] = useState<string>(obs)
  const optionRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].text = title
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [title])

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].options = options
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [options])

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].isEditable = editable
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [editable])

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].label = questionLabel
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [questionLabel])

  useEffect(() => {
    onChange(prev => {
      const index = prev.findIndex(opt => opt.id === id)
      prev[index].obs = questionObs
      prev[index].wasEdited = true
      return [...prev]
    })
  }, [questionObs])

  function handleEditable(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setEditable(e.target.checked)
  }
  function handleLabel(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setLabel(e.target.value);
  }
  function handleObs(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setObs(e.target.value);
  }
  function getMaxValue(): number {
    const max = options.reduce((acc, cur) => (cur.id > acc ? cur.id : acc) +1, 0)
    return max == 0 ? 1 : max
  }
  function alterTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    setTitle(e.target.value);
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
    <span><input onChange={alterTitle} value={title} placeholder='Insira um titulo'/></span>
    <span><input onChange={handleLabel} value={questionLabel} placeholder='Insira uma label'/></span>
    <span><input onChange={handleObs} value={questionObs} placeholder='Insira uma observação (opcional)'/></span>
    <span><input type="checkbox" checked={editable} onChange={handleEditable}/>Editable?</span>
    <span><button onClick={removeQuestion} value={id}>Remove Question</button></span>
    <ul>
      { options.map((o, i) => {
        if (i !== options.length -1)
          return <li key={o.id}>
            <span>OId: {o.id}</span>
            <input onChange={alterOption} value={o.text} id={String(o.id)}/>
            <span><button onClick={removeOption} value={o.id}>Remove Option</button></span>
          </li>
        else return <li key={o.id}>
            <span>OId: {o.id}</span>
            <input onChange={alterOption} value={o.text} id={String(o.id)} ref={optionRef}/>
            <span><button onClick={removeOption} value={o.id}>Remove Option</button></span>
          </li>
      }) }
      <button onClick={addOption}>Create option</button>
    </ul>
  </>
}

const CensusQuestions = (): JSX.Element => {
  const [questions, setQuestions] = useState<QuestionSubmit[]>([])
  const [init, setInit] = useState<boolean>(false)

  function getBaseQuestions(): void {
    api.get("/questions")
      .then(res => {
        const baseQuestions: QuestionSubmit[] = res.data.map((q: QuestionMap) => {
          return {
            id: q.id,
            text: q.question,
            label: q.questionLabel,
            obs: q.questionObs,
            options: q.questionAnswers,
            isBase: true,
            wasEdited: false,
            isEditable: q.isEditable,
            _id: q._id
          }
        })
        setQuestions(prev => [...prev, ...baseQuestions])
      })
      .then(() => setInit(true))
      .catch(err => console.log(err))
  }

  function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const mapped: QuestionMap[] = questions.map((q): QuestionMap | null => {
      if (q.wasEdited)
        return {
          id: q.id,
          question: q.text,
          questionLabel: q.label,
          questionObs: q.obs,
          questionAnswers: q.options,
          isEditable: q.isEditable,
          _id: q._id
        }
      return null
    }).filter((q): q is QuestionMap => !!q)
    mapped.forEach(q => {
      if (!q._id) api.post('/questions', q)
      else api.put(`/questions/${q._id}`, q)
    })
  }
  function removeQuestion(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const value = Number(e.currentTarget.value)
    setQuestions(prev => prev.filter(q => q.id !== value))
  }
  function getMaxValue(): number {
    const max = questions.reduce((acc, cur) => (cur.id > acc ? cur.id : acc) +1, 0)
    return max == 0 ? 1 : max
  }
  function addQuestion(isBase: boolean = false): void {
    const id = getMaxValue()
    setQuestions(prev => [
      ...prev, {
        id,
        text: "New question",
        label: "New label",
        obs: "",
        options: [],
        isBase,
        wasEdited: true,
        isEditable: false
      }
    ])
  }

  if (!init) getBaseQuestions()
  return <>
    <button onClick={() => addQuestion()}>Add Question</button>
    <div>
      { questions.map(q => {
        return <Question
          key={q.id}
          id={q.id}
          isEditable={q.isEditable}
          onChange={setQuestions}
          label={q.label}
          obs={q.obs}
          removeQuestion={removeQuestion}
        />
      })
      }
    </div>
    <button onClick={submit}>Submit</button>
  </>
}

export default CensusQuestions