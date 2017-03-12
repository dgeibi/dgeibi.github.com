const yaml = require('yaml-js')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const collections = {}
const defaults = []
const layout = 'note'
const config = {
  "title": "dgeibi's notebook",
  "email": "png.inside@gmail.com",
  "description": "dgeibi's notebook",
  "baseurl": "",
  "url": "https://note.dgeibi.xyz",
  "lang": "cmn-hans",
  "author": "dgeibi",
  "timezone": "Asia/Shanghai",
  "highlighter": "rouge",
  "markdown": "kramdown",
  "kramdown": {
    "input": "GFM",
    "auto_ids": false
  },
  "exclude": [
    "vendor",
    "Gemfile",
    "Gemfile.lock",
    "Rakefile",
    "yarn.lock",
    "package.json",
    "README.md",
    path.basename(__filename),
  ],
  collections,
  defaults,
}
const filename = '_config.yml'
const globIgnore = ['_layouts', '_sass', '_data', filename, '_includes', '_drafts', '_site', '_plugins']
glob('_*', { ignore: globIgnore }, function (err, dirs) {
  if (err) console.log(err)
  dirs.forEach((dir) => {
    dir = dir.replace('_', '')
    /** push default */
    defaults.push({
      "scope": {
        "path": "",
        "type": dir
      },
      "values": {
        layout,
        "toc": true
      }
    })
    /** push collection */
    collections[dir] = {
      "output": true,
      "permalink": "/:collection/:path/"
    }
  })
  /** dump yaml */
  fs.writeFileSync('_config.yml', yaml.dump(config))
  console.log(`${filename} dumped.`)
})
