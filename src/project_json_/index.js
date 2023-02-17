import fs from 'fs'
import { dirname } from 'path'
/**
 * @param package_json_path{string}
 * @returns {Promise<import('./index.d.ts').project_T>}
 */
export async function project_json_(package_json_path) {
	const package_json_buffer = await fs.promises.readFile(package_json_path)
	const package_json_str = package_json_buffer.toString()
	const package_json = JSON.parse(package_json_str)
	const package_name = package_json.name
	const package_version = package_json.version
	const package_dir = dirname(package_json_path)
	return {
		package_name,
		package_version,
		package_dir
	}
}
