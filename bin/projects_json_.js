#!/usr/bin/env node
require = require('esm')(module)
const { run } = require('@ctx-core/function')
const { projects_json_ } = require('../dist')
run(async () => {
	console.info(JSON.stringify(await projects_json_(), null, 2))
}).then()
