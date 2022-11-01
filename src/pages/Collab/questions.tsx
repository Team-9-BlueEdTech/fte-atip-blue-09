import React, { useRef, useMemo, useState } from "react"
import '../../assets/styles/collab.css'
import type { Option, QuestionArray } from "../../types/Questions"

const Questions = () => {
  const [initalized, setInit] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionArray>([])
  const [options, setOptions] = useState<Option[][]>([])
  const questionRef = useRef<HTMLInputElement>(null)
  const optionRef = useRef<HTMLInputElement>(null)
  async function fetchBaseQuestions(): Promise<void> {
    const baseQuestions = await Promise.resolve([
        {
          id: 1,
          text: "Qual sua faixa etária?",
          options: [
            {
              id: 1,
              text: '13 a 21 anos'
            },
            {
              id: 2,
              text: '22 a 35 anos'
            },
            {
              id: 3,
              text: '36 a 55 anos'
            },
            {
              id: 4,
              text: '56 a 80 anos'
            },
            {
              id: 5,
              text: 'mais de 80 anos'
            }
          ]
        }
      ])
    setQuestions(baseQuestions)
    setInit(true)
  }

  const removeQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const target = e.target as HTMLButtonElement
    setQuestions(prev => prev.filter(item => item.id != Number(target.value)))
  }

  const removeOption = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const target = e.target as HTMLButtonElement;
    const ids: [number, number] = target.value.split(',').map(Number) as [number, number]
    console.log(ids)
    const questionIndex = questions.findIndex(a => a.id == ids[0])
    const optionIndex = questions[questionIndex].options.findIndex(a => a.id == ids[1])
    setQuestions(prev => {
      prev[questionIndex].options = prev[questionIndex].options.filter(opt => opt.id != ids[1])
      prev[questionIndex].options = prev[questionIndex].options.map((opt, i) => { if (i >= optionIndex) opt.id--; return opt })
      console.log(prev)
      return prev
    })
    console.log(questions[questionIndex])
  }

  const createQuestion = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const value = questionRef.current?.value
    if (!value) return;
    const q: QuestionsInterface = {
      id: questions.length,
      text: value,
      options: []
    }
    setQuestions(prev => [...prev, q])
    questionRef.current.value = ''
  }

  const createOption = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const value = optionRef.current?.value
    if (!value) return
    const o: Option = {
      id: 0,
      text: value,
    }
  }
  
  useMemo(() => {
    if (questions.length)
      console.log(questions)
  }, [questions])

  if (!initalized) fetchBaseQuestions()

  return (
    <div>
      <h1>
        Collab Page
      </h1>
      <div style={{ position: 'relative' }} className='container'>
        <form
          onSubmit={createQuestion}
        >
          <input ref={questionRef} type='text' placeholder={'Create a question'} disabled={!initalized} />
          <button type="submit">Add</button>
        </form>
        <ul>
          { questions.map(i => <li key={i.id}>
            <div>
              {i.text}
              <span>
                <button onClick={removeQuestion} value={i.id}> X </button>
              </span>
              <form
                onSubmit={createOption}
              >
                <ol>
                  {
                    i.options.map(o => 
                      <li key={`${i.id}/${o.id}`}>
                          <span>{o.id} - </span>
                          <span>{o.text}<button onClick={removeOption} value={[i.id, o.id].map(String)}> X </button></span>
                      </li>
                    )
                  }
                  <input ref={optionRef} type='text' placeholder={'Create a option'} disabled={!initalized} />
                  <button type="submit">Add</button>
                </ol>
              </form>
            </div>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Questions