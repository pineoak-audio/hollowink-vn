class WEBHOOK extends RenJS.Plugin {
    
  
    
    onCall(msge) {
        
        text = null;
        this.text.text = this.game.managers.logic.parseVars(msge.body);
        
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1033937572872855603/JAZsLxu_JcPUiNFH1IN0WLNL8MWtt28VIZKtIE1la39IXpz5TilOAAT41Edo-pEa9RWJ");
      // replace the url in the "open" method with yours
        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "Visual Novel",
            avatar_url: "",
            content: this.text.text + "Penesvaldo"

        }

        request.send(JSON.stringify(params));


        }
    
    
       
}

RenJSGame.addPlugin('WEBHOOK', WEBHOOK);