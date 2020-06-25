import React from 'react'
import GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'

const GitalkComment = () => (
    <GitalkComponent
        options={{
            clientID: '89c027a84358e41574a7',
            clientSecret: 'a8bf1f4821121985589261e4c0117f9cbb80ea02',
            repo: 'tarojsx.github.io', // 仓库名称
            owner: 'tarojsx', // 仓库作者
            admin: ['cncolder'],
            id: location.pathname, // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
        }}
    />
)

export default GitalkComment
