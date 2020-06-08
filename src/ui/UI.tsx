import React from 'react'
import classNames from 'classnames'
import styles from './UI.module.scss'

interface UIProps {
    className?: string
    block?: boolean
}

export const UI: React.FC<UIProps> = ({ className, block, children }) => {
    return (
        <div className={classNames(styles.ui, { [styles.block]: block }, className)}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}
