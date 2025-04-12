function Navbar(props) {
    // 是否登录
    const [isSignIn, setIsSignIn] = React.useState(true);
    const [nickname, setNickname] = React.useState('张三');
    const [headIcon, setHeadIcon] = React.useState('../../img/avatar-max-img.png');
    const [kw, setKw] = React.useState('');

    return (
        <div style={{height: '48px', backgroundColor: '#f8f8f8'}}>
            <div className="container h-100 d-flex align-items-center justify-content-between">
                {/* 左侧内容 */}
                <div className="d-flex">
                    <img onClick={() => {
                        location.href = '/bbs论坛html项目/home.html'
                    }} src="./img/logo.png" style={{height: '32px'}} className="me-3"/>
                    <input value={kw} onInput={ev => {
                        setKw(ev.target.value)
                    }} type="text" className="form-control form-control-sm" placeholder="搜索"/>
                </div>
                {/* 右侧内容 */}
                {isSignIn ? (
                        <div className="d-flex align-items-center">
                            <span>欢迎，{nickname}!</span>
                            {/* 下拉菜单 */}
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{width: '32px'}} src={headIcon}/>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/setting.html">个人中心</a></li>
                                    <li><a className="dropdown-item" href="/bbs论坛html项目/setting.html">设置</a></li>
                                    <li><a className="dropdown-item" href="#">退出</a></li>
                                </ul>
                            </div>
                            <button className="btn btn-outline-secondary" onClick={() => {
                                // /bbs论坛html项目/
                                // http://localhost:61414/bbs论坛html项目/
                                location.href = '/bbs论坛html项目/publish.html'
                            }}>发起
                            </button>
                        </div>
                    ) :
                    (
                        <div>
                            <button onClick={() => {
                                location.href = '/bbs论坛html项目/signIn.html'
                            }} className="btn btn-success me-2">登录
                            </button>
                            <button onClick={() => {
                                location.href = '/bbs论坛html项目/signUp.html'
                            }} className="btn btn-primary">注册
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}