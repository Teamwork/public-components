import MagicString from 'magic-string';
/**
 * Rollup plugin that removes all license banners of source files.
 * This is necessary to avoid having the license comment repeated in the output.
 */
let polymerLicense = null;

export default function () {
  return {
    name: 'clean-licenses',
    transform(code) {
      const newContent = new MagicString(code);
      const regex = new RegExp(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm);
      [...code.matchAll(regex)].forEach((match) => {
        if (match[0].indexOf('http://polymer.github.io/LICENSE.txt') > -1) {
          if (!polymerLicense) [polymerLicense] = match;
          newContent.overwrite(match.index, match.index + match[0].length, '\n\n');
        }
      });
      return {
        code: newContent.toString(),
        map: newContent.generateMap({ hires: true }),
      };
    },
    renderChunk(code) {
      const newContent = new MagicString(code);
      if (polymerLicense) newContent.prependLeft(0, polymerLicense);
      return {
        code: newContent.toString(),
        map: newContent.generateMap({ hires: true }),
      };
    },
  };
}
