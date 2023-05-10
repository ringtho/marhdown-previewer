import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App () {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    fetch('markdown.md')
      .then(res => res.text())
      .then(data => setMarkdown(data))
  }, [])

  return (
    <div className="app">

      <section className="editor-container">
        <div className="editor-header">
          <i className="fa-brands fa-free-code-camp"></i>
          <h3>Editor</h3>
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea id="editor" onChange={e => setMarkdown(e.target.value)} value={markdown}>
        </textarea>
      </section>
      <section className="preview-container">
        <div className="preview-header">
          <i className="fa-brands fa-free-code-camp"></i>
          <h3>Previewer</h3>
          <i className="fa fa-arrows-alt"></i>
        </div>
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  )
}

export default App
