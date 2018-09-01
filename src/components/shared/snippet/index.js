import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Snippet = ({files, children, title}) => (
    <div className={styles.root}>
        <hr className={styles.hr}/>
        <h2>{title}</h2>
        <div className={styles.output}>
            <div className={styles.fileName}>Output</div>
            <div className={styles.outputContent}>{children}</div>
        </div>
        {files.map(file => (
            <div key={file.name} className={styles.file}>
                <div className={styles.fileName}>{file.name}</div>
                <pre className={styles.pre}>{file.source}</pre>
            </div>
        ))}
    </div>
);

Snippet.propTypes = {
    title: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        source: PropTypes.string
    })),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
};

export default Snippet;
