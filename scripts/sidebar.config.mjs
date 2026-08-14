import Interview from "./sidebar/面试题.mjs";

/**
 * @typedef {{ title?: string, icon?: string, order?: number }} FolderMeta
 * @typedef {{ path: string, dir: string }} SidebarModuleConfig
 */

/** @type {SidebarModuleConfig[]} */
export const modules = [
  { path: "/面试题/", dir: "面试题" },
];

/**
 * @param {string} moduleDir
 * @param {Record<string, FolderMeta>} localFolders
 * @returns {Record<string, FolderMeta>}
 */
function prefix(moduleDir, localFolders) {
  /** @type {Record<string, FolderMeta>} */
  const out = {};
  for (const [folder, meta] of Object.entries(localFolders)) {
    out[`${moduleDir}/${folder}`] = meta;
  }
  return out;
}

/** @type {Record<string, FolderMeta>} */
export const folders = {
  ...prefix("面试题", Interview),
};

export const defaultFolderIcon = "folder";
