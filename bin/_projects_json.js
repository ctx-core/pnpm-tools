#!/usr/bin/env node
require = require('esm')(module)
const { run } = require('@ctx-core/function')
const { _projects_json } = require('@ctx-core/pnpm-tools')
run(async () => {
	console.info(JSON.stringify(await _projects_json(), null, 2))
}).then()
