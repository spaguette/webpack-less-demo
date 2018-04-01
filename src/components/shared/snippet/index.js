import React from 'react';

import styles from './styles.css';

function Snippet({ files, children }) {
    return (
      <div className={styles.root}>
        <div className={styles.output}>
          <div className={styles.fileName}>Output</div>
          <div className={styles.outputContent}>
            { children }
          </div>
        </div>
        {files.map(file => (
            <div key={file.name} className={styles.file}>
              <div className={styles.fileName}>{ file.name }</div>
              <pre className={styles.pre}>{ file.source }</pre>
            </div>
          ))
        }
      </div>
    );
}

export default Snippet;
