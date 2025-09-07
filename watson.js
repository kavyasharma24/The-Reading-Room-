window.watsonAssistantChatOptions = {
  integrationID: "cb085bf0-5d51-4a50-aa65-7e6588886a62", // Your integration ID
  region: "jp-tok", // Region
  serviceInstanceID: "874025e0-397d-49db-abae-021763128c82", // Service instance ID
  onLoad: async (instance) => {
    window.chatInstance = instance;
    await instance.render();
  }
};

setTimeout(function(){
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
          (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

function startChat() {
  if (window.chatInstance) {
    window.chatInstance.openWindow();
  }
}
