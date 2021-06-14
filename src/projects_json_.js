import fs from 'fs';
import yaml from 'js-yaml';
import globby from 'globby';
import { join } from 'path';
import { project_json_ } from './project_json_';
export async function projects_json_() {
    const workspace_yaml_buffer = await fs.promises.readFile('./pnpm-workspace.yaml');
    const doc = yaml.load(workspace_yaml_buffer.toString());
    const package_json_globs = doc.packages.map(doc_package => {
        return join('.', doc_package, 'package.json');
    });
    const projects_json = await Promise.all((await globby(package_json_globs)).map(package_path => {
        return project_json_(package_path);
    }));
    return projects_json;
}
//# sourceMappingURL=src/projects_json_.js.map