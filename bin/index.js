#!G:\nodejs node
// 请求 commander 库
const program = require('commander')
const updateChk = require('../lib/update')
// 请求 lib/mirror.js
const setMirror = require('../lib/mirror')

// 从 package.json 文件中请求 version 字段的值，-v和--version是参数
program.version(require('../package.json').version, '-v, --version')

// upgrade 检测更新
program
	// 声明的命令
	.command('upgrade')
    // 描述信息，在帮助信息时显示
	.description("Check the js-plugin-cli version.")
	.action(() => {
    	// 执行 lib/update.js 里面的操作
		updateChk()
	})



// mirror 切换镜像链接
program
	.command('mirror <template_mirror>')
	.description("Set the template mirror.")
	.action((tplMirror) => {
		setMirror(tplMirror)
	})


// 解析命令行参数
program.parse(process.argv)



