import React, { useRef, useMemo, useState } from "react"
import '../../assets/styles/collab.css'
import type { Option, OptionArray, Question, QuestionArray, QuestionIndex} from "../../types/Questions"

const Questions = () => {
  const [initalized, setInit] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionArray>([])
  const [options, setOptions] = useState<OptionArray[]>([])
  const questionRef = useRef<HTMLInputElement>(null)
  const questionIDRef = useRef<HTMLInputElement>(null)
  const optionsValueRef = useRef<HTMLInputElement>(null)
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
    const qs: QuestionArray = []
    const opts: OptionArray[] = baseQuestions.map(q => {
      const max = Math.max(...options.map(o => o[0]))
      const index = isFinite(max) ? max : 2;
      console.log('index', index, options.map(o => o[0]))
      const o: OptionArray = [index, q.options]
      qs.push({ id: q.id, text: q.text, options: index })
      return o;
    })
    setOptions(opts)
    setQuestions(qs)
    setInit(true)
  }

  const removeQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const target = e.target as HTMLButtonElement
    const id = Number(target.value)
    const index = questions.findIndex(q => q.id === id)
    const qid = questions[index].id
    setQuestions(prev => prev.filter(item => item.id != id))
    setOptions(prev => prev.filter(item => item[0] != qid))
    console.log('Removed QUESTION')
  }

  const removeOption = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const ids: [number, number] = target.value.split(',').map(Number) as [number, number]
    console.log(ids)
    const questionIndex = questions.findIndex(a => a.id == ids[0])
    const optionsIndex = questions[questionIndex].options
    setOptions(prev => {
      return prev.map(item => {
        if (item[0] == optionsIndex)
          item[1] = item[1].filter(item => item.id != ids[1])
        return item
      })
    })
    console.log('Removed OPTION')
  }

  const createQuestion = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const value = questionRef.current?.value
    if (!value) return;
    const max = Math.max(...options.map(o => o[0]))
    const id = isFinite(max) ? max : 2;
    console.log('createQuestion', id, options)
    const q: QuestionIndex = {
      id: questions.length +1,
      text: value,
      options: id
    }
    const o: OptionArray = [id, []]
    setQuestions(prev => [...prev, q])
    setOptions(prev => [...prev, o])
    console.log('Created QUESTION')
  }

  const createOption = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const id = questionIDRef.current?.value;
    const value = optionsValueRef.current?.value;
    console.log(id, value)
    if (!value) return
    const questionIndex = questions.findIndex(a => a.id == Number(id));
    const optIndex = questions[questionIndex].options;
    setOptions(prev => {
      const index = prev.findIndex(a => a[0] == optIndex);
      prev[index][1].push({
        id: prev[index][1].length,
        text: value,
      });
      return prev;
    })
    console.log('Created OPTION')
  }
  
  useMemo(() => {
    if (questions.length) {
      console.log("Questions:", questions)
      console.log("Options:", options)
    }
  }, [questions, options])

  if (!initalized) fetchBaseQuestions()

  return (
    <div>
      <h1>
        Questions Page
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
                    options[options.findIndex(a => a[0] == i.options)][1].map(o => 
                      <li key={`${i.id}/${o.id}`}>
                          <span>// {i.id}/{o.id} - </span>
                          { //! Por algum motivo, a função `removeOption` está sendo executada ao dar submit ao form
                            <span>{o.text}<button onClick={removeOption} value={[i.id, o.id].map(String)}> X </button></span>
                          }
                      </li>
                    )
                  }
                  <input ref={questionIDRef} type='number' value={i.id} readOnly style={{ display: 'none' }} />
                  <input ref={optionsValueRef} type='text' placeholder={'Create a option'} disabled={!initalized}/>
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