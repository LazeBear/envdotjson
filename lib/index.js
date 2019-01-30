const fs = require('fs');
const path = require('path');

const DEFAULT_OPTIONS = {
  path: path.resolve(process.cwd(), 'env.json'),
  encoding: 'utf8'
};

function log(msg) {
  console.warn('Load failed:', msg);
}

function load(options) {
  const env = process.env.NODE_ENV;
  let { path, encoding } = DEFAULT_OPTIONS;
  let content;

  if (options) {
    if (options.path) {
      if (typeof options.path === 'string' && options.path.endsWith('.json')) {
        path = options.path;
      } else {
        log('Invalid env.json path');
        return;
      }
    }
    if (options.encoding) {
      encoding = options.encoding;
    }
  }

  // load the file
  try {
    content = JSON.parse(fs.readFileSync(path, { encoding }));
  } catch (e) {
    log(e.message);
    return;
  }

  const defaultEnv = content.default ? content.default : {};
  const currentEnv = content[env] ? content[env] : {};
  const mergedEnv = { ...defaultEnv, ...currentEnv };

  // ignore NODE_ENV
  delete mergedEnv.NODE_ENV;

  Object.keys(mergedEnv).forEach(key => {
    if (!process.env.hasOwnProperty(key)) {
      process.env[key] = mergedEnv[key];
    }
  });
}

module.exports.load = load;
