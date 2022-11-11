import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import CollabTerms from "../../components/CollabTerms";
import { QuestionMap, CollabQuestion, CollabQuestionElement, CollabAnswerForm } from "../../types/Questions";

interface SubmitRequest {
  question: CollabAnswerForm[] | null
  lgpdStatus: boolean
  census: string
}

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
  const [LGPTaccepted, setLGPT] = useState<boolean>(false)
  const [censusId] = useState<string>(useParams().censusId || "undefined")

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

  function submit(answers: CollabAnswerForm[] | null): void {
    console.log(answers)
    const data: SubmitRequest = {
      question: answers,
      lgpdStatus: LGPTaccepted,
      census: censusId
    }
    console.log(data)
    api.post('/answers', data)
  }

  useMemo(() => console.log(LGPTaccepted), [LGPTaccepted])

  return <>
    { LGPTaccepted ? 
      questions.map(q => <Question
        key={q.id}
        id={q.id}
        onChange={setAnswers}
        label={q.label}
        obs={q.obs}
        options={q.options}
        title={q.title}
      />)
      : <CollabTerms
        onAccept={() => {
          setInit(true)
          if (!init) {
            setLGPT(true)
            getFormQuestions()
          }
        }}
        onReject={() => {
          setInit(true)
          if (!init) submit(null)
        }}
      />
    }
    { init && LGPTaccepted && <button onClick={() => submit(answers)}>Submit</button>}
  </>
}

export default CensusQuestions