import { flatten } from 'ctx-core/array'
import fs from 'node:fs'
import { join } from 'node:path'
import glob from 'tiny-glob'
import { project_json_ } from '../project_json_/index.js'
export async function project_json_a_() {
	const pkg_json = JSON.parse(await fs.promises.readFile('./package.json', 'utf-8'))
	const workspaces = pkg_json.workspaces || []
	const package_json_glob_a = workspaces.map((ws_pattern)=>join('.', ws_pattern, 'package.json'))
	return Promise.all(package_json_glob_a.map(($)=>glob($))).then(($aa)=>flatten($aa)).then(($a)=>$a.map(($)=>project_json_($))).then(($a)=>Promise.all($a))
}
export { project_json_a_ as projects_json_ }
