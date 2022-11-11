import { useRef, useMemo, useState, DragEvent, FormEvent } from "react"
import '../../assets/styles/collab.css'
import * as S from "./styled";
import Header from "../../components/Header";
import Button from "../../components/Button";
const Collab = () => {
  const [dragActive, setDrag] = useState<boolean>(true)
  const [dragOver, setDragOver] = useState<boolean>(false)
  const [list, setList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const removeIndex = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement
    setList(prev => prev.filter(item => item != target.value))
  }

  const executeSubmit = (): void => {
    const body = {
      emails: list
    }
    fetch('link pro cuzinho', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
  }

  const handleDrop = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0])
      Array.from(e.dataTransfer.files).forEach(file => file.text().then(parse))
  }

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement
    setDrag(false)
    setDragOver(false)
    if (target.files && target.files[0])
      Array.from(target.files).forEach(file => file.text().then(parse))
  }

  async function parse(file: string): Promise<void> {
    const email: string[] = []
    const lines = file.split('\n').map(collum => collum.split(',').map(row => row.trim()))
    const emailIndex = lines[0].indexOf('email')
    lines.forEach(line => email.push(line[emailIndex]))
    email.shift()
    setList(prev => [...prev, ...email.filter(v => v)])
  }

  useMemo(() => {
    if (list.length)
      console.log(list)
  }, [list])

  return (
    <>

      <S.DivDashboard>
  

        <form
          id="file-upload"
          onDragOver={() => setDragOver(true)}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onChange={handleChange}
        >
          <input
            type='file'
            accept='text/csv'
            multiple={true}
            disabled={!dragActive}
            id="file-input"
          />
          <label
            id="label-upload"
            htmlFor="file-input"
            style={{
              borderColor: dragOver ? '#00FA19' :  '#CBD5E1',
              color: dragOver ? '#00FA19' :  'black'
            }}
          >
            <h1>Arraste um arquivo CSV ou clique para procurar</h1>
          </label>
        </form>
        <form
          onSubmit={e => {
            e.preventDefault()
            const value = inputRef.current?.value
            if (!value) return;
            setList(prev => [...prev, value])
            inputRef.current.value = ''
          }}
          id='add-single'
        >
          <input ref={inputRef} type='text' placeholder="Ou Insira E-mails individualmente" />
          {/*<button type="submit">Add</button>*/}
          <Button variant="add" type="submit" text="Adicionar" />
        </form>
        {/*<button type="submit" onClick={executeSubmit}>Submit Emails</button>*/}
        <Button type="submit" text="Salvar Alterações" onClick={executeSubmit}/>
        <ul>
          { list.map(i => <li key={i}>
            <div>{i}
              <span>
                <button onClick={removeIndex} value={i}> X </button>
              </span>
            </div>
            </li>)
          }
        </ul>

      </S.DivDashboard>

    </>
  )
}

export default Collab
