const sources: Resource[] = [
    // 3D Models
    {
        name: 'computerSetupModel',
        type: 'gltfModel',
        path: 'models/Computer/computer_setup.glb',
    },
    {
        name: 'environmentModel',
        type: 'gltfModel',
        path: 'models/World/environment.glb',
    },
    {
        name: 'decorModel',
        type: 'gltfModel',
        path: 'models/Decor/decor.glb',
    },
    
    // Textures - Computer & Environment
    {
        name: 'computerSetupTexture',
        type: 'texture',
        path: 'models/Computer/baked_computer.jpg',
    },
    {
        name: 'environmentTexture',
        type: 'texture',
        path: 'models/World/baked_environment.jpg',
    },
    {
        name: 'decorTexture',
        type: 'texture',
        path: 'models/Decor/baked_decor_modified.jpg',
    },
    
    // Monitor Layer Textures - Compressed
    {
        name: 'monitorSmudgeTexture',
        type: 'texture',
        path: 'textures/monitor/layers/compressed/smudges.jpg',
    },
    {
        name: 'monitorShadowTexture',
        type: 'texture',
        path: 'textures/monitor/layers/compressed/shadow-compressed.png',
    },
    {
        name: 'monitorReflectionTexture',
        type: 'texture',
        path: 'textures/monitor/layers/compressed/reflection-compressed.png',
    },
    
    // Monitor Layer Textures - PNG
    {
        name: 'monitorDustTexture',
        type: 'texture',
        path: 'textures/monitor/layers/png/dust.png',
    },
    {
        name: 'monitorReflectionPngTexture',
        type: 'texture',
        path: 'textures/monitor/layers/png/reflection.png',
    },
    {
        name: 'monitorShadowPngTexture',
        type: 'texture',
        path: 'textures/monitor/layers/png/shadow.png',
    },
    {
        name: 'monitorSmudgesPngTexture',
        type: 'texture',
        path: 'textures/monitor/layers/png/smudges.png',
    },
    
    // Environment Map Cube Texture
    {
        name: 'environmentMap',
        type: 'cubeTexture',
        path: [
            'textures/environmentMap/px.jpg', // positive x
            'textures/environmentMap/nx.jpg', // negative x
            'textures/environmentMap/py.jpg', // positive y
            'textures/environmentMap/ny.jpg', // negative y
            'textures/environmentMap/pz.jpg', // positive z
            'textures/environmentMap/nz.jpg', // negative z
        ],
    },
    
    // Audio - Mouse & Keyboard
    {
        name: 'mouseDown',
        type: 'audio',
        path: 'audio/mouse/mouse_down.mp3',
    },
    {
        name: 'mouseUp',
        type: 'audio',
        path: 'audio/mouse/mouse_up.mp3',
    },
    {
        name: 'keyboardKeydown1',
        type: 'audio',
        path: 'audio/keyboard/key_1.mp3',
    },
    {
        name: 'keyboardKeydown2',
        type: 'audio',
        path: 'audio/keyboard/key_2.mp3',
    },
    {
        name: 'keyboardKeydown3',
        type: 'audio',
        path: 'audio/keyboard/key_3.mp3',
    },
    {
        name: 'keyboardKeydown4',
        type: 'audio',
        path: 'audio/keyboard/key_4.mp3',
    },
    {
        name: 'keyboardKeydown5',
        type: 'audio',
        path: 'audio/keyboard/key_5.mp3',
    },
    {
        name: 'keyboardKeydown6',
        type: 'audio',
        path: 'audio/keyboard/key_6.mp3',
    },
    
    // Audio - Atmosphere & Computer
    {
        name: 'startup',
        type: 'audio',
        path: 'audio/startup/startup.mp3',
    },
    {
        name: 'office',
        type: 'audio',
        path: 'audio/atmosphere/office.mp3',
    },
    {
        name: 'computerIdle',
        type: 'audio',
        path: 'audio/computer/idle.wav',
    },
    {
        name: 'computerIdle2',
        type: 'audio',
        path: 'audio/computer/idle_2.wav',
    },
    {
        name: 'ccType',
        type: 'audio',
        path: 'audio/cc/type.mp3',
    },
    
    // Audio - Radio
    {
        name: 'radio1',
        type: 'audio',
        path: 'audio/radio/1.mp3',
    },
    {
        name: 'radio2',
        type: 'audio',
        path: 'audio/radio/2.mp3',
    },
    {
        name: 'radio3',
        type: 'audio',
        path: 'audio/radio/3.mp3',
    },
];

export default sources;
