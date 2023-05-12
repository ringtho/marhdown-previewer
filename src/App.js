import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App () {
  const [markdown, setMarkdown] = useState('')
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isPreviewerOpen, setIsPreviewerOpen] = useState(false)
  useEffect(() => {
    fetch('markdown.md')
      .then(res => res.text())
      .then(data => setMarkdown(data))
  }, [])

  const handleClick = (form) => {
    if (form === 'editor') {
      setIsEditorOpen(!isEditorOpen)
    } else if (form === 'previewer') {
      setIsPreviewerOpen(!isPreviewerOpen)
    }
  }

  return (
    <div className="app">
      <section
        className={`editor-container ${isPreviewerOpen ? 'previewer-open' : ''}`}>
        <div className="editor-header">
          <i className="fa-brands fa-free-code-camp"></i>
          <h3>Editor</h3>
          {!isEditorOpen &&
            <i className="fa fa-arrows-alt" onClick={
              () => handleClick('editor')}></i>
          }
          {isEditorOpen &&
            <i className="fa fa-compress-arrows-alt" onClick={
              () => handleClick('editor')}></i>
          }
        </div>
        <textarea id="editor"
        className={`${isEditorOpen ? 'textarea-full' : 'textarea-closed'}`}
          onChange={e => setMarkdown(e.target.value)}
          value={markdown}>
        </textarea>
      </section>
      <section
        className={`preview-container ${isEditorOpen ? 'editor-open' : ''}`}>
        <div className="preview-header">
          <i className="fa-brands fa-free-code-camp"></i>
          <h3>Previewer</h3>
          {!isPreviewerOpen &&
          <i className="fa fa-arrows-alt" onClick={
            () => handleClick('previewer')}></i>
          }
          {isPreviewerOpen &&
            <i className="fa fa-compress-arrows-alt" onClick={
              () => handleClick('previewer')}></i>
          }
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
