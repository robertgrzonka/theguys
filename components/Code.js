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
        color: white;
        background: black;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
<<<<<<< HEAD
        display: inline-block;
        font-size: 0.9rem;
        max-height: 30rem;
        border-radius: 3px;
=======
        max-height: 30rem;
        display: inline-block;
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
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
        max-height: 30rem;
        display: inline-block;
        vertical-align: top;
<<<<<<< HEAD
        border-radius: 3px;
=======
        height: auto;
        z-index: 10;
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
      }
      `}
    </style>
  </div>
)

export default Code
