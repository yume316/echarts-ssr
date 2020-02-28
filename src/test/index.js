let ChartsSSR = require('../../bundle');
let path = require('path');
let targetPath = path.resolve(__dirname, '../../area.png');
let instance = new ChartsSSR({
    path: targetPath
});
instance.render();
instance.export();