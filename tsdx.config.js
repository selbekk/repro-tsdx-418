const babel = require('rollup-plugin-babel');

module.exports = {
  rollup(config, options) {
    const plugins = config.plugins.filter(
      plugin => !['babel', 'rpt2'].includes(plugin.name)
    );
    plugins.push(
      babel({
        exclude: 'node_modules/**',
        include: 'src/**/*',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    );
    config.plugins = plugins;
    return config;
  },
};
