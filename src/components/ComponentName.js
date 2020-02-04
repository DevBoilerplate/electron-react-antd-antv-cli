import React from 'react'
import PropTypes from 'prop-types'

// 测试组件与基于propTypes的props类型检查
function ComponentName ({name, num}) {
    return(
        <div>
            name: {name} number: {num}
        </div>
    )
}

// 设置默认值
ComponentName.defaultProps = {
    num: 0
}

// 设置props的类型检查，并设置name要求提供
ComponentName.propTypes = {
    name: PropTypes.string.isRequired,
    num: PropTypes.number
}

export default ComponentName