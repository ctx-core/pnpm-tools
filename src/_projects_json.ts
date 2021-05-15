import fs from 'fs'
import yaml from 'js-yaml'
import globby from 'globby'
import { join } from 'path'
import { _project_json } from './_project_json'
export async function _projects_json() {
	const workspace_yaml_buffer = await fs.promises.readFile('./pnpm-workspace.yaml')
	const doc = yaml.load(workspace_yaml_buffer.toString()) as { packages:string[] }
	const package_json_globs = doc.packages.map(doc_package=>{
		return join('.', doc_package, 'package.json')
	})
	const projects_json = await Promise.all(
		(await globby(package_json_globs)).map(package_path=>{
			return _project_json(package_path)
		})
	)
	return projects_json
}
