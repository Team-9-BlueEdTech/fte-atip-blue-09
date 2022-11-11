import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { QuestionMap, CollabQuestion, CollabQuestionElement, CollabAnswerForm } from "../../types/Questions";

const Question = ({ id, onChange, obs, title, options, label }: CollabQuestionElement): JSX.Element => {
  const [option, setOption] = useState<number>(-1)
  function alterOption(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    const value = Number(e.target.id)
    setOption(value);
    onChange(prev => {
      const index = prev.findIndex(opt => opt.questionId === id)
      prev[index].answerId = value
      return [...prev]
    })
  }

  useMemo(() => {
    console.log(id, option)
  }, [option])

  return <>
    <span>QId: {id}</span>
    <span><strong>{title}</strong></span>
    <span><p>{obs}</p></span>
    <ul>
      { options.map(o => <input
          key={o.id}
          checked={option === o.id}
          type='radio'
          name={`${id}//${o.id}`}
          onChange={alterOption}
          value={o.text}
          id={String(o.id)}
        />)
      }
    </ul>
  </>
}

const CensusQuestions = (): JSX.Element => {
  const [questions, setQuestions] = useState<CollabQuestion[]>([])
  const [answers, setAnswers] = useState<CollabAnswerForm[]>([])
  const [init, setInit] = useState<boolean>(false)
  const [censusId] = useState(useParams().censusId)

  function getFormQuestions(): void {
    setInit(true)
    if (!censusId) return;
    if (questions.length) return;
    api.get("/census/" + censusId)
      .then(res => {
        const baseQuestions: CollabQuestion[] = res.data.questions.map((q: QuestionMap): CollabQuestion => {
          return {
            id: q.id,
            title: q.question,
            label: q.questionLabel,
            obs: q.questionObs,
            options: q.questionAnswers,
          }
        })
        setQuestions(baseQuestions)
        setAnswers(baseQuestions.map(q => ({ answerId: -1, questionId: q.id })))
      })
      .catch(err => console.log(err))
  }

  function submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
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
  }
  if (!init) getFormQuestions()
  return <>
    <form
      onSubmit={submit}
    >
      { questions.map(q => {
        return <Question
          key={q.id}
          id={q.id}
          onChange={setAnswers}
          label={q.label}
          obs={q.obs}
          options={q.options}
          title={q.title}
        />
      })
      }
      <button type='submit'>Submit</button>
    </form>
    {/* <button onClick={submit}>Submit</button> */}
  </>
}

export default CensusQuestions