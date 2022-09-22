import { flatten } from '@ctx-core/array'
import fs from 'fs'
import yaml from 'js-yaml'
import { join } from 'path'
import glob from 'tiny-glob'
import { project_json_, project_T } from './project_json_.js'
export async function project_json_a_():Promise<project_T[]> {
	const workspace_yaml_buffer = await fs.promises.readFile('./pnpm-workspace.yaml')
	const doc = yaml.load(workspace_yaml_buffer.toString()) as { packages:string[] }
	const package_json_glob_a = doc.packages.map(doc_package=>join('.', doc_package, 'package.json'))
	return Promise.all(package_json_glob_a.map($=>glob($)))
		.then($aa=>flatten<string>($aa))
		.then($a=>$a.map($=>project_json_($)))
		.then($a=>Promise.all($a))
}
export { project_json_a_ as projects_json_ }
