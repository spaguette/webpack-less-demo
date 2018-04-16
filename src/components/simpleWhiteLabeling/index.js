import React, { Component } from 'react';

import styles from './styles.less';

class Demo extends Component {
    render() {
        return (
            <div className={styles.demoBox}>
                <h1 className={styles.boxTitle}>Hello World!</h1>
                <p className={styles.boxDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className={styles.boxButton}>
                    Click me!
                </button>
            </div>
        );
    }
}

export default Demo;
