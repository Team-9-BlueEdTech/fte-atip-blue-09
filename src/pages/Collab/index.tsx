import { useEffect, useState } from "react"

const Collab = () => {
  
  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <h1>
        Collab Page
      </h1>
      <div style={{minHeight:"300px", fontSize:"50px", textAlign:"center", border:"5px solid black", margin:"10% 1% 1% 1%"}}
      onDrop={(event) => {
        event.preventDefault()
        Array.from(event.dataTransfer.files).forEach(async file => {
          let text = await file.text()
          let result = text.split(/[\r\n]+/).map(line => line.split(",")[0]).filter(item => !!item)
          result.shift()
          setData(result)
          // let result = parse<{email: string}>(text, { header: true})
          // setData(result.data.map(item => item.email))
          // console.log(data)
        })
      }}
      >
        Drop csv File
      </div>
      <div>
        {data.map((item) => {
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