import { useRef, useMemo, useState, DragEvent, FormEvent } from "react"
import '../../assets/styles/collab.css'

const Collab = () => {
  
  const [dragActive, setDrag] = useState<boolean>(true)
  const [dragOver, setDragOver] = useState<boolean>(false)
  const [list, setList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

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
      <div style={{ position: 'relative' }}>
        <form
          id="file-upload"
          style={{
            userSelect: 'none',
            border:`5px solid ${dragOver && dragActive ? 'lightgreen' : 'transparent'}`,
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
            style={{
              height: 'inherit',
              width: 'inherit',
              display: 'block',
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10
            }}
            onDrag={console.log}
            draggable={true}
          />
          <label id="label-upload" htmlFor="file-input">
            <div style={{ fontSize: '50px', textAlign: 'center' }}>
              <p>Drag a CSV file or</p>
              <button className="upload-button">Upload a file</button>
            </div>
          </label>
        </form>
      </div>
      <form onSubmit={e => {
        e.preventDefault()
        const value = inputRef.current?.value
        if (!value) return;
        setList(prev => [...prev, value])
        inputRef.current.value = ''
      }}>
        <input ref={inputRef} type='text' />
        <button type="submit">Add</button>
      </form>
      <div>
        {list.map((item) => {
          return <p key={item}>
            { item }
          </p>
        }
        )}
      </div>
    </div>
  )
}

export default Collab