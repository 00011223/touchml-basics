function ListItem(props) {
    const imgStyle = {width: '64px', height: '64px'}
    const titleStyle = {color: '#4c83fd', fontSize: '20px'}
    const contentStyle = {fontSize: '14px'}

    return (
        <div className="d-flex flex-row" onClick={() => {
            location.href = '/bbs论坛html项目/detail.html?id=' + props.id
        }}>
            <img className="me-2" style={imgStyle} src={props.headIcon} alt=""/>
            {/* 右侧文本 */}
            <div className="d-flex flex-column justify-content-between">
                {/* 标题 */}
                <div style={titleStyle}>{props.title}</div>
                <div style={contentStyle}>张三 回复了问题 · 2人关注 · 1个回复 · 187次浏览 · 2022-09-26 13:45</div>
            </div>
        </div>
    )
}