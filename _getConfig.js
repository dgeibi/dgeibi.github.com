const yaml = require('yaml-js')
const fs = require('mz/fs')

const files = ['_data/notes.yml', '_default.yml']
Promise.all(files.map(file => fs.readFile(file, { encoding: 'utf8' })))
  .then((datas) => {
    const layout = 'note'
    const collections = {}
    const defaults = []
    const notes = yaml.load(datas[0])
    const config = yaml.load(datas[1])
    Object.keys(notes).forEach((note) => {
      defaults.push({
        scope: {
          path: '',
          type: note,
        },
        values: {
          layout,
          toc: true,
        },
      })

      collections[note] = {
        output: true,
        permalink: '/:collection/:path/',
      }
    })

    Object.assign(config, { collections, defaults })

    /** dump yaml */
    fs.writeFileSync('_config.yml', yaml.dump(config))
  })
