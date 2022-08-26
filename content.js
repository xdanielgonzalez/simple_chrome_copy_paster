chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    try{
      if(request.type === "copy"){
        chrome.storage.sync.set({
          webContent: document.getElementById("alt_text").value
        }, function(){
        console.log("Saved!")
    })
    sendResponse({status: "Success!"});
    }
    else if(request.type === "paste"){
      console.log("I got a paste request")
      document.getElementById("pasted_text").value = request.dataToBePasted;
      console.log("Hey data should be in the box what gives?")
    sendResponse({status: "Success!"});
    }}
    catch (error) {
      console.log(error)
      sendResponse({status: "Exception occurred!"});
    }
});

// I think i only need one of these lets see 
// , function(){
//       console.log("Success!")
//     }


