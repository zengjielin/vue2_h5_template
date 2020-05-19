// https://github.com/michael-ciniawsky/postcss-load-config

const AutoPrefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = ({ file }) => {
    let remUnit
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        remUnit = 37.5
    } else {
        remUnit = 75
    }
    return {
        plugins: [
            AutoPrefixer({
                browsers: ['last 20 versions', 'android >= 4.0']
            }),
            pxtorem({
                rootValue: remUnit,
                propList: ['*'],
                selectorBlackList: ['van-circle__layer']
            })
        ]
    }
}