const RenJSConfig =  {
  'name': 'HollowInk',
  'w': 1280,
  'h': 720,
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
    'background': 'assets/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': 'assets/gui/loaderloading-bar.png',
      'position': {
        'x': 374,
        'y': 610
      },
      'size': {
        'w': 532,
        'h': 28
      }
    }
  },
  'fonts': 'assets/gui/fonts.css',
  'guiConfig': 'story/GUI.yaml',
  storyConfig: 'story/Config.yaml',
  storySetup: 'story/Setup.yaml',
  'storyText': [
    'story/game/Story.yaml',
    'story/game/NPC.yaml',
    'story/game/Maps.yaml',
    'story/game/Quests.yaml',
    'story/game/Cutscenes.yaml'
  ],
  'logChoices': true,
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
