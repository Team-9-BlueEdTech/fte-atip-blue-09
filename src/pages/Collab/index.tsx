import { useRef, useMemo, useState, DragEvent, FormEvent } from "react"
import '../../assets/styles/collab.css'

const Collab = () => {
  const [dragActive, setDrag] = useState<boolean>(true)
  const [dragOver, setDragOver] = useState<boolean>(false)
  const [list, setList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const removeIndex = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement
    setList(prev => prev.filter(item => item != target.value))
  }

  const handleDrop = (e: DragEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    // setDrag(false)
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
    <div>
      <h1>
        Collab Page
      </h1>
      <div style={{ position: 'relative' }} className='container'>
        <form
          id="file-upload"
          style={{
            userSelect: 'none',
            border:'5px solid transparent',
            position: 'relative',
            top: 0,
            left: 0
          }}
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
              color: dragOver ? '#00FA19' :  'aliceblue'
            }}
          >
            <div style={{ fontSize: '50px', textAlign: 'center' }}>
              <p>Drag a CSV file or</p>
              <button className="upload-button">Upload a file</button>
            </div>
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
          <input ref={inputRef} type='text' />
          <button type="submit">Add</button>
        </form>
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
      </div>
    </div>
  )
}

export default Collab