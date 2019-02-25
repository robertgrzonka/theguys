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
        border-radius: 3px;
        max-height: 30rem;
        z-index: 10;
      }

      .editor {
        overflow: scroll;
        color: #F9FAFB;
        background: #1D1F21;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
        display: inline-block;
        font-size: 0.9rem;
        height: 30rem;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,0.1);
      }

      .preview {
        position: relative;
        color: #212B35;
        background: #F9FAFB;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
        height: 30rem;
        display: inline-block;
        vertical-align: top;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,0.1);
      }
      `}
    </style>
  </div>
)

export default Code
