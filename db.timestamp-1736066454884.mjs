var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// astro:db:astro:db
var astro_db_exports = {};
__reExport(astro_db_exports, virtual_star);
import * as virtual_star from "@astrojs/db/dist/runtime/virtual.js";

// db/config.ts
var Author = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.number({ primaryKey: true }),
    name: astro_db_exports.column.text()
  }
});
var Comment = (0, astro_db_exports.defineTable)({
  columns: {
    authorId: astro_db_exports.column.number({ references: () => Author.columns.id }),
    body: astro_db_exports.column.text()
  }
});
var config_default = (0, astro_db_exports.defineDb)({
  tables: { Author, Comment }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXN0cm86ZGI6YXN0cm86ZGIiLCAiZGIvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQGFzdHJvanMvZGIvZGlzdC9ydW50aW1lL3ZpcnR1YWwuanNcIiIsICJpbXBvcnQgeyBkZWZpbmVUYWJsZSwgY29sdW1uLCBkZWZpbmVEYiB9IGZyb20gJ2FzdHJvOmRiJztcblxuY29uc3QgQXV0aG9yID0gZGVmaW5lVGFibGUoe1xuICAgIGNvbHVtbnM6IHtcbiAgICAgICAgaWQ6IGNvbHVtbi5udW1iZXIoeyBwcmltYXJ5S2V5OiB0cnVlIH0pLFxuICAgICAgICBuYW1lOiBjb2x1bW4udGV4dCgpLFxuICAgIH0sXG59KTtcblxuY29uc3QgQ29tbWVudCA9IGRlZmluZVRhYmxlKHtcbiAgICBjb2x1bW5zOiB7XG4gICAgICAgIGF1dGhvcklkOiBjb2x1bW4ubnVtYmVyKHsgcmVmZXJlbmNlczogKCkgPT4gQXV0aG9yLmNvbHVtbnMuaWQgfSksXG4gICAgICAgIGJvZHk6IGNvbHVtbi50ZXh0KCksXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVEYih7XG4gICAgdGFibGVzOiB7IEF1dGhvciwgQ29tbWVudCB9LFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLDhCQUFjOzs7QUNFZCxJQUFNLGFBQVMsOEJBQVk7QUFBQSxFQUN2QixTQUFTO0FBQUEsSUFDTCxJQUFJLHdCQUFPLE9BQU8sRUFBRSxZQUFZLEtBQUssQ0FBQztBQUFBLElBQ3RDLE1BQU0sd0JBQU8sS0FBSztBQUFBLEVBQ3RCO0FBQ0osQ0FBQztBQUVELElBQU0sY0FBVSw4QkFBWTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFVBQVUsd0JBQU8sT0FBTyxFQUFFLFlBQVksTUFBTSxPQUFPLFFBQVEsR0FBRyxDQUFDO0FBQUEsSUFDL0QsTUFBTSx3QkFBTyxLQUFLO0FBQUEsRUFDdEI7QUFDSixDQUFDO0FBRUQsSUFBTyxxQkFBUSwyQkFBUztBQUFBLEVBQ3BCLFFBQVEsRUFBRSxRQUFRLFFBQVE7QUFDOUIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
