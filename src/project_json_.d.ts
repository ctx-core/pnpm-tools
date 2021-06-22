export declare function project_json_(package_json_path: string): Promise<project_T>;
export interface project_T {
    package_name: string;
    package_version: string;
    package_dir: string;
}
