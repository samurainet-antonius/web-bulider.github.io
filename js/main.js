const editor = grapesjs.init({
    container:"#editor",
    fromElement:true,
    width:'auto',
    StorageManager:false,
    plugins:['gjs-preset-webpage','grapesjs-blocks-bootstrap4'],
    pluginsOpts:{
        "gjs-preset-webpage":{},
        'grapesjs-blocks-bootstrap4': {
            blocks: {},
            blockCategories: {},
            labels: {},
            gridDevicesPanel: true,
            formPredefinedActions: [
                {name: 'Contact', value: '/contact'},
                {name: 'landing', value: '/landing'},
            ]
        }
    },
    canvas: {
        styles: [
            'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
        ],
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js',
            'https://unpkg.com/@popperjs/core@2',
            'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
        ],
 
    }
});