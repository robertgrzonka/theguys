import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const Code = props => (
  <div className='wrapper'>
    <LiveProvider code={props.code} noInline>
      <div className='editor'>
        <LiveEditor />
      </div>
      <div className='preview'>
        <LiveError />
        <LivePreview />
      </div>
    </LiveProvider>
    <style jsx>
      {`
      .wrapper {
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .editor {
        overflow: scroll;
        color: white;
        background: black;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
        max-height: 30rem;
        display: inline-block;
      }

      .preview {
        position: relative;
        color: black;
        background: white;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
        display: inline-block;
        vertical-align: top;
        height: auto;
        z-index: 10;
      }
      `}
    </style>
  </div>
)

export default Code
