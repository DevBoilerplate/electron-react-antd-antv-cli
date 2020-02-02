const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackPlugin
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

/**
 * @primay-color适当修改主题
 */
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1890ff'
        }
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
)