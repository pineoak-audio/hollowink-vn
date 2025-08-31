class KeyBindEnter extends RenJS.Plugin {
  
  
    onInit() {
    
      this.game.input.keyboard.addKey(Phaser.Input.M)
            .onDown.add(this.game.onTap, this.game)
      
      this.game.input.keyboard.addKey(Phaser.Input.D)
            .onDown.add(this.game.onTap, this.game)
    }
  

}

RenJSGame.addPlugin('KeyBindEnter', KeyBindEnter)