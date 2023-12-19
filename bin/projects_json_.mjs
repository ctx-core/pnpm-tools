#!/usr/bin/env node
import { run } from 'ctx-core/function'
import projects_json_ from '../index.js'
await run(async () => {
	console.info(JSON.stringify(await projects_json_(), null, 2))
})
