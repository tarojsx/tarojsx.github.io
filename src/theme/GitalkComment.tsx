import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import _GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'

interface GitalkOptions {
    /** GitHub Application Client ID. */
    clientID: string
    /** GitHub Application Client Secret. */
    clientSecret: string
    /** GitHub repository. */
    repo: string

    /** GitHub repository 所有者，可以是个人或者组织。 */
    owner: string
    /** GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。 */
    admin: string[]
    /**
     * 页面的唯一标识。长度必须小于50。
     * @default `location.href`
     */
    id?: string
    /**
     * 页面的 issue ID 标识，若未定义number属性则会使用id进行定位。
     * @default -1
     */
    number?: number

    /**
     * GitHub issue 的标签。
     * @default `['Gitalk']`
     */
    labels?: string[]
    /**
     * GitHub issue 的标题。
     * @default `document.title`
     */
    title?: string
    /**
     * GitHub issue 的内容。
     * @default `location.href + header.meta[description]`
     */
    body?: string

    /**
     * 设置语言，支持 [en, zh-CN, zh-TW]。
     * @default `navigator.language || navigator.userLanguage.`
     */
    language?: string

    /**
     * 每次加载的数据大小，最多 100。
     * @default 10
     */
    perPage?: number

    /**
     * 类似Facebook评论框的全屏遮罩效果.
     * @default false
     */
    distractionFreeMode?: boolean
    /**
     * 评论排序方式， last为按评论创建时间倒叙，first为按创建时间正序。
     * @default last
     */
    pagerDirection?: string
    /**
     * 如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
     * @default false
     */
    createIssueManually?: boolean
    /**
     * GitHub oauth 请求到反向代理，为了支持 CORS。 [为什么要这样?](https://github.com/isaacs/github/issues/330)
     * @default https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token.
     */
    proxy?: string
    /**
     * 评论列表的动画。 [参考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)
     * @default
     * ```
     *  {
     *      staggerDelayBy: 150,
     *      appearAnimation: 'accordionVertical',
     *      enterAnimation: 'accordionVertical',
     *      leaveAnimation: 'accordionVertical',
     *  }
     * ```
     */
    flipMoveOptions?: {
        staggerDelayBy?: number
        appearAnimation?: string
        enterAnimation?: string
        leaveAnimation?: string
    }
    /**
     * 启用快捷键(cmd|ctrl + enter) 提交评论.
     * @default true
     */
    enableHotKey?: boolean
}

interface GitalkCommentProps extends Pick<GitalkOptions, 'id'> {}

const GitalkComponent: React.FC<{ options: GitalkOptions }> = _GitalkComponent

const GitalkComment: React.FC<GitalkCommentProps> = ({ id }) => (
    <BrowserOnly>
        {() => (
            <GitalkComponent
                options={{
                    clientID: '89c027a84358e41574a7',
                    clientSecret: 'a8bf1f4821121985589261e4c0117f9cbb80ea02',
                    repo: 'tarojsx.github.io',
                    owner: 'tarojsx',
                    admin: ['cncolder'],
                    id,
                }}
            />
        )}
    </BrowserOnly>
)

export default GitalkComment
