const fs = require('fs')
const path = require('path')

function walk_dir(dir, callback) {
    let files = fs.readdirSync(dir, {
        withFileTypes: true
    })

    for (let file of files) {
        let file_path = path.join(dir, file.name)

        if (file.isDirectory()) {
            walk_dir(file_path, callback)
        } else {
            callback(file_path)
        }
    }
}

module.exports = walk_dir
