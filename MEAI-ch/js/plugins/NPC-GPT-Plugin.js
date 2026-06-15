 /*:
 * @plugindesc [RPG Maker MZ] [Version 1.20] [Gamer Tools Studio] [Modified]
 * 
 * @param apiKey
 * @text API Key
 * @desc The API key to be used for making requests to the server.
 * @type string
 * @default
 *
 * @param apiKeyVariable
 * @text API Key Variable
 * @desc The ID of the variable that contains the API key.
 * @type variable
 * @default 18
 *
 * @param gptResponseVariableId
 * @text GPT Response Variable ID
 * @desc The ID of the variable where the GPT response will temporarily be stored.
 * @type variable
 * @default 6
 *
 * @param responseStatusVariable
 * @text Response Status Variable
 * @desc The ID of the variable to track the response status.
 * @type variable
 * @default 13
 *
 *
 * @author Gamer Tool Studio
 *
 * @help 
 *  
 ===============================================================================
 * Introduction
 ===============================================================================
 *
 * This plugin enables the deployment of dynamic AI-powered conversations
 * with NPCs in RPG Maker MZ game events by sending user inputs to a server 
 * and displaying the server's creative responses wrapped neatly in the game 
 * as one of your characaters. Craft interactive conversations with artificial 
 * intelligence, immersing players in captivating stories and engaging gameplay.
 *
 * Features include, but are not limited to, the following:
 *
 *  * Enable user text input for interactive character conversations.
 *  * Send user inputs as requests to Chat GPT API for dynamic responses.
 *  * Establish character contexts and traits to guide Chat GPT's interactions.
 *  * Receive Chat GPT's responses seamlessly, delivered through in-game    
 *    characters. 
 *  * Display AI-generated responses smoothly within game events.
 *  * Control the length of both input and output messages for optimal
 *    storytelling.
 *
 ===============================================================================
 * Requirements
 ===============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations         
 * of RPG Maker.
 * 
 * =============================================================================
 * 1. Plugin Parameters
 *==============================================================================
 *
 * The plugin has four parameters that you need to configure.
 *
 * --- 
 *    
 * API Key 
 *
 * 不再使用，已改为直连自定义中转站，无需填写。
 *  
 * ---
 * 
 * GPT Response Variable ID
 * 
 * This is the ID of the variable where the characters responses provided by the 
 * server is temporarily stored.
 * 
 * ---
 *
 * Response Status Variable
 * 
 * This is the ID of the variable used by sendRequest Command to control the 
 * status of the player and NPC response.
 * 
 =============================================================================
 * 2. Commands List
 *==============================================================================
 *  
 * Character Context / User Input / Send Request / Display Response
 *
 * ============================================================================
 *
 * @command userInput
 * @text User Input
 * @desc Creates a custom dialogue window for the player to input text and stores it in a custom variable.
 *
 * @arg actorName
 * @text Actor Name
 * @desc The name of the actor. Default is main player name.
 * @type text
 * @default
 *
 * @arg actorFaceImage
 * @text Actor Face Image
 * @desc The face image of the actor. Default is main player image.
 * @type file
 * @dir img/faces/
 * @default
 *
 * @arg actorFaceImageIndex
 * @text Actor Face Image Index
 * @desc The face image index of the actor. Default is main player face index.
 * @type number
 * @default 0
 *
 * @arg placeholderText
 * @text Placeholder Text
 * @desc The placeholder text. Default is "Enter your message...".
 * @type text
 * @default Enter your message...
 *
 * @arg inputVariable
 * @text Input Variable
 * @desc The variable to store the input text. Default is variable 19.
 * @type variable
 * @default 19
 *
 * @arg maxInputWords
 * @text Max Input Words
 * @desc The maximum number of words allowed in the user input.
 * @type number
 * @default 50
 *
 * @command sendRequest
 * @text Send Request
 * @desc Sends the user input to the server and stores the response for the "Display Response" command.
 *
 * @arg inputVariable
 * @text Input Variable
 * @desc The variable to store the input text. Default is variable 19.
 * @type variable
 * @default 19
 *
 * @arg historyVariableId
 * @text History Variable ID
 * @desc The ID of the variable used to store the conversation history.
 * @type variable
 * @default 11
 *
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable used to store the character context data.
 * @type variable
 * @default 12
 * 
 * @command characterContext
 * @text Character Context
 * @desc Stores NPC personality data and stores it in a variable.
 *
 * @arg name
 * @text Name 
 * @desc Name of the character.
 * @type string
 * @default GPTWizard
 *
 * @arg environment
 * @text Environment 
 * @desc The type of game or environment where the story unfolds. 
 * @type string
 * @default RPG Game
 *
 * @arg age
 * @text Age
 * @desc The age of the character.
 * @type number
 * @default 33
 *
 * @arg traits
 * @text Personality Traits
 * @desc The traits of the character in a string.
 * @type string
 * @default shy,  mystic, adventurous
 *
 * @arg dialogueStyle
 * @text Dialogue Style
 * @desc The speech style of the character.
 * @type string
 * @default mysterious
 *
 * @arg backgroundStory
 * @text Background Story
 * @desc The background story of the character.
 * @type string
 * @default GPT WIzard is a Mage who lives in Mystery Foster.
 *
 * @arg eventsKnowledge
 * @text Events Knowledge
 * @desc The character's knowledge of events stored as a JSON object.
 * @type string
 * @default Knows there is a secret map at the entrance of the big cave under a yellow flower.
 *
 * @arg interests
 * @text Interests
 * @desc The character's interests stored as a JSON object.
 * @type string
 * @default Astrology, Herbology, History
 *
 * @arg friendliness
 * @text Friendliness
 * @desc The friendliness level of the character. Options: enemy, low, regular, high, best friend.
 * @type select
 * @option enemy
 * @option low
 * @option regular
 * @option high
 * @option best friend
 * @default regular
 *
 * @arg maxOutputWords
 * @text Max Output Words
 * @desc The maximum number of words allowed in the server response output.
 * @type number
 * @default 50
 *
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable to store the character context data.
 * @type variable
 * @default 12
 * 
 * @command displayResponse
 * @text Display Response
 * @desc Displays the stored response in the response window.
 *
 * @arg eventId
 * @text Event ID
 * @desc The ID of the event to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg eventPageId
 * @text Event Page ID
 * @desc The ID of the event page to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg actorImage
 * @text Actor Image
 * @desc The default actor image to be displayed in the response window.
 * @type file
 * @dir img/faces
 * @default Actor1
 *
 * @arg actorImageIndex
 * @text Actor Image Index
 * @desc The index of the face to be displayed from the selected actor image file (From 0 to 7).
 * @type number
 * @default 0
 *
 * @arg actorName
 * @text Actor Name
 * @desc The default actor name to be displayed in the response window.
 * @type string
 * @default GPT Wizard
 *
 * @arg wrapTextLength
 * @text Wrap text length
 * @desc The maximum word length for wrapping the server response in the response window (default: 40).
 * @type number
 * @default 40
 */

(function() {
  // Retrieve the plugin parameters
  var pluginParams = PluginManager.parameters('NPC-GPT-Plugin');
  var gptResponseVariableId = parseInt(pluginParams['gptResponseVariableId']) || 6;
  var responseStatusVariable = parseInt(pluginParams['responseStatusVariable']) || 13;

  // ============================================================
  // 自定义中转站地址，在这里统一修改
  // ============================================================
  var CUSTOM_API_URL = "https://gtrhhgffhutr-meqhwqflxb.cn-hangzhou.fcapp.run";

  // Prepare Input
  Window_Message.prototype.prepareInputWindow = function(args) {
      this._inputArgs = args;
      this._inputVariable = parseInt(args.inputVariable, 10) || 19;
      this._inputLines = [''];

      const actorName = args.actorName || $gameParty.leader().name();
      $gameMessage.setSpeakerName(actorName);

      this.activateInput();
      this.open();
      this.setPositionType();
      this.refreshInputWindow();
  };

  Window_Message.prototype.setPositionType = function() {
      const positionType = 2;
      this.y = this.calculateY(positionType);
  };

  Window_Message.prototype.calculateY = function(positionType) {
      const messageY = {
          0: 0,
          1: (Graphics.boxHeight - this.height) / 2,
          2: Graphics.boxHeight - this.height
      };
      return messageY[positionType];
  };

  // Activate Input
  Window_Message.prototype.activateInput = function() {
      if (this._inputActive) return;

      this._originalKeyMapper = Object.assign({}, Input.keyMapper);
      this._overrideKeyMapperForTextInput();

      this._inputActive = true;
      this._boundHandleInput = this.handleInput.bind(this);
      document.addEventListener('keydown', this._boundHandleInput);

      this._lastInputTime = 0;
      this.refreshInputWindow();
  };

  // Deactivate Input
  Window_Message.prototype.deactivateInput = function() {
      document.removeEventListener('keydown', this._boundHandleInput);
      Input.keyMapper = this._originalKeyMapper;
      this._inputActive = false;
  };

  Window_Message.prototype._overrideKeyMapperForTextInput = function() {
      Input.keyMapper[32] = 'space';
      Input.keyMapper[90] = 'z';
      Input.keyMapper[88] = 'x';
      Input.keyMapper[87] = 'w';
      Input.keyMapper[80] = 'p';
  };

  // Handle Input
  Window_Message.prototype.handleInput = function(event) {
      if (!this._inputActive || !this.isOpen()) return;

      const currentLineIndex = this._inputLines.length - 1;
      let currentLine = this._inputLines[currentLineIndex];

      if (event.key === 'Enter') {
          this.processInput();
          event.preventDefault();
      } else if (event.key === 'Backspace') {
          if (currentLine.length > 0) {
              this._inputLines[currentLineIndex] = currentLine.slice(0, -1);
          } else if (this._inputLines.length > 1) {
              this._inputLines.pop();
          }
          this.refreshInputWindow();
      } else if (event.key.length === 1) {
          if (currentLine.length < 40) {
              this._inputLines[currentLineIndex] += event.key;
          } else if (this._inputLines.length < 4) {
              this._inputLines.push(event.key);
          }
          this.refreshInputWindow();
      }
  };

  // Process Input
  Window_Message.prototype.processInput = function() {
      const inputText = this._inputLines.join('\n');
      $gameVariables.setValue(this._inputVariable, inputText);
      this.deactivateInput();
      this.close();
      $gameMessage.setSpeakerName('');
  };

  // Refresh Input Window
  Window_Message.prototype.refreshInputWindow = function() {
      if (!this._inputLines) {
          return;
      }

      const faceImageWidth = 144;
      const textMargin = 15;
      const textStartX = faceImageWidth + textMargin;
      const textStartY = 0;

      this.contents.clearRect(textStartX, textStartY, this.contents.width - textStartX, this.contents.height);
      this.resetFontSettings();

      const textToShow = this._inputLines.join('').trim() !== '' ? this._inputLines.join('\n') : "Enter your message...";
      this.drawTextEx(textToShow, textStartX, textStartY);
  };

  // Clear contents
  Window_Message.prototype.clear = function() {
      this.contents.clear();
      this._textState = null;
  };

  // Display the text response within the window limits
  function wrapText(text, wrapTextLength) {
      const words = text.split(' ');
      let wrappedText = '';
      let currentLine = '';

      for (const word of words) {
          const potentialLine = currentLine + (currentLine ? ' ' : '') + word;
          if (potentialLine.length <= wrapTextLength) {
              currentLine = potentialLine;
          } else {
              wrappedText += (wrappedText ? '\n' : '') + currentLine;
              currentLine = word;
          }
      }

      if (currentLine) {
          wrappedText += (wrappedText ? '\n' : '') + currentLine;
      }

      return wrappedText;
  }

  // Show NPC response in-game
  function showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength) {
      const responseContent = response.content;
      const wrappedResponse = wrapText(responseContent, wrapTextLength);

      $gameMessage.clear();

      const faceIndex = actorImageIndex || 0;
      console.log("Used Actor Image File: " + actorImageFile);
      console.log("Used Face Index: " + faceIndex);

      $gameMessage.setFaceImage(actorImageFile, faceIndex);
      $gameMessage.setSpeakerName(actorName);
      $gameMessage.add(wrappedResponse);

      if (eventId > 0) {
          const event = $gameMap.event(eventId);
          if (event) {
              event.start(eventPageId);
          }
      }
  }

  const pluginName = "NPC-GPT-Plugin";

  PluginManager.registerCommand(pluginName, 'userInput', function (args) {
      const inputVariable = parseInt(args.inputVariable, 10) || 19;
      const actorName = args.actorName || $gameParty.leader().name();
      const actorFaceImage = args.actorFaceImage || $gameParty.leader().faceName();
      const actorFaceImageIndex = parseInt(args.actorFaceImageIndex, 10) || $gameParty.leader().faceIndex();
      const placeholderText = args.placeholderText ? args.placeholderText : 'Enter your message...';
      const maxInputWords = parseInt(args.maxInputWords, 10) || 50;

      $gameMessage.setFaceImage(actorFaceImage, actorFaceImageIndex);
      $gameMessage.setSpeakerName(actorName);
      $gameMessage.add(placeholderText);

      const scene = SceneManager._scene;
      if (scene instanceof Scene_Map) {
          const messageWindow = scene._messageWindow;
          if (messageWindow) {
              messageWindow.prepareInputWindow(args);
              messageWindow.activateInput();
          }
      }
  });

  PluginManager.registerCommand(pluginName, 'sendRequest', function (args) {
      const contextVariableId = parseInt(args.contextVariableId, 10) || 12;
      const maxInputWords = parseInt(args.maxInputWords, 10) || 50;
      const inputVariable = parseInt(args.inputVariable, 10) || 19;
      const userInput = $gameVariables.value(inputVariable).toString();

      if (userInput.trim() !== '') {
          const words = userInput.split(' ');
          const limitedUserInput = words.slice(0, maxInputWords).join(' ');

          // 从 contextVariableId 变量里取出角色设定，拼成 system prompt
          const context = $gameVariables.value(contextVariableId);
          const systemPrompt = `你是一个RPG游戏中的NPC。
名字：${context.name}，年龄：${context.age}。
性格特征：${context.personalityTraits}。
说话风格：${context.dialogueStyle}。
背景故事：${context.backgroundStory}。
掌握的事件信息：${context.eventsKnowledge}。
所处环境：${context.environment}。
兴趣爱好：${context.interests}。
对玩家的友好程度：${context.friendliness}。
请将回复控制在${context.maxOutputWords}个词以内，用角色的口吻回复。`;

          console.log("System Prompt:", systemPrompt);
          console.log("User Input:", limitedUserInput);
          console.log("Sending request to custom API...");

          // 把 inputVariable 清零，防止重复触发
          $gameVariables.setValue(inputVariable, 0);

          // 发送请求到自定义中转站
          fetch(CUSTOM_API_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  system: systemPrompt,
                  user: limitedUserInput
              })
          })
          .then(function(response) {
              if (response.ok) {
                  return response.json();
              } else {
                  throw new Error("HTTP request failed with status: " + response.status);
              }
          })
          .then(function(data) {
              console.log("Received response from custom API:", data);

              // 把 data.reply 包装成插件 displayResponse 期望的格式
              $gameVariables.setValue(gptResponseVariableId, {
                  content: data.reply
              });

              // 把 responseStatusVariable 设为 1，触发 Event Page 4
              $gameVariables.setValue(responseStatusVariable, 1);
          })
          .catch(function(error) {
              console.error("Error:", error);
          });
      }
  });

  PluginManager.registerCommand(pluginName, "characterContext", function (args) {
      const name = args.name;
      const age = parseInt(args.age, 10) || 0;
      const traits = args.traits || '';
      const dialogueStyle = args.dialogueStyle || '';
      const backgroundStory = args.backgroundStory || '';
      const eventsKnowledge = args.eventsKnowledge || '';
      const environment = args.environment || '';
      const interests = args.interests || '';
      const friendliness = args.friendliness || 'regular';
      const contextVariableId = parseInt(args.contextVariableId, 10);
      const maxOutputWords = parseInt(args.maxOutputWords, 10) || 50;

      const characterContext = {
          name: name,
          age: age,
          personalityTraits: traits,
          dialogueStyle: dialogueStyle,
          backgroundStory: backgroundStory,
          eventsKnowledge: eventsKnowledge,
          environment: environment,
          interests: interests,
          friendliness: friendliness,
          maxOutputWords: maxOutputWords,
      };

      $gameVariables.setValue(contextVariableId, characterContext);

      console.log("Provided contextVariableId:", contextVariableId);
      console.log("contextVariableId content:", $gameVariables.value(contextVariableId));
  });

  PluginManager.registerCommand(pluginName, "displayResponse", function (args) {
      const eventId = parseInt(args.eventId, 10) || 0;
      const eventPageId = parseInt(args.eventPageId, 10) || 0;
      const actorImageFile = args.actorImage;
      const actorImageIndex = parseInt(args.actorImageIndex) || 0;
      const actorName = args.actorName;
      const wrapTextLength = parseInt(args.wrapTextLength) || 40;
      const response = $gameVariables.value(gptResponseVariableId);

      if (response && typeof response === 'object') {
          showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength);
      }

      // 把 responseStatusVariable 重置为 0
      $gameVariables.setValue(responseStatusVariable, 0);
  });
})();
