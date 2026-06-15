//=============================================================================
// Plugin Name: WinterDream Translation
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: Allow you to translate the game
// Terms of Use: By using this plugin you agree at our ToU (https://drive.google.com/file/d/1lG2Lep2Unme80ghZD7-fA-hPGWKLsiR7/view)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Allow you to translate the game
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 * @base WD_Core
 * @orderAfter WD_Core
 * 
 * @param defaultCombatMiss
 * @parent defaultLanguage
 * @text Miss (Combat)
 * @desc Default language "Miss" in combat, usually hardcoded in the engine
 * @default Miss
 * 
 * @param defaultOptionOn
 * @parent defaultLanguage
 * @text Options "ON"
 * @desc Default language "ON" toggle in the options scene, usually hardcoded in the engine
 * @default ON
 * 
 * @param defaultOptionOff
 * @parent defaultLanguage
 * @text Options "OFF"
 * @desc Default language "OFF" toggle in the options scene, usually hardcoded in the engine
 * @default OFF
 * 
 * @param mainTranslation
 * @type struct<mainTrans>[]
 * @text Other Languages Translations
 * @desc Translate your Project!
 * @default []
 * 
 * @command --line1--
 * @text === JSON DATABASE ===
 * @desc Commands to manipulate JSONs
 * 
 * @command createAllNewJSON
 * @text Write All Translation JSON (Will overwrite existings!)
 * @desc Create all nine JSON start data in data/WD_Translation. Warning: This will overwrite the existing file
 * 
 * @command createNewJSON 
 * @text Write a new Translation JSON (Will overwrite existing!)
 * @desc Creates a new, ready to be translated, file in data/WD_Translation. Warning: This will overwrite the existing file
 * 
 * @arg dataType
 * @text Data Type
 * @desc Select the data type you want to create
 * @default 0
 * @type select
 * @option Actors
 * @value 0
 * @option Classes
 * @value 1
 * @option Enemies
 * @value 2
 * @option Items
 * @value 3
 * @option Armors
 * @value 4
 * @option Weapons
 * @value 5
 * @option Skills
 * @value 6
 * @option States
 * @value 7
 * @option Map Names
 * @value 8
 *
 * @command createTextCodeTranslations
 * @text Create Text Translation JSON (Will overwrite existing!)
 * @desc Create the JSON with all the game Text Data
 * 
 * @command updateTextCodeTranslations
 * @text Update Text Translation JSON
 * @desc Update the Text Data JSON with new translations while leaving old one intact
 * 
 * @help WD_Translation.js
 *
 * This Plugins help you translate your game in different languages and is capable of
 * autoselecting the matching language package to the user machine language (if available).
 * 
 * Important note: This plugin needs WD_Core to work, it's a free plugin that you can
 * download on my pages linked below. In Rpg Maker Plugin list, WD_Core need to be above
 * this plugin
 * 
 * There are different translation methods for different text data of the game, here is a
 * little guide on how to successfuly translate everything.
 * 
 * PRO TIP BEFORE STARTING: Do your language pack at the END of your project, it's a lot 
 * easier to translate all the data in one go instead of doing continuos changes to the
 * plugin files!
 * 
 * STEP 0 - Installation: Really important!!! The plugin will crash without it! Unzip the
 * "Unzip in data folder.zip" and place it in data! 
 * You should have (your project)/data/WD_Translation/ with 10 json inside. Of course 
 * install the WD_Translation.js as usual in the plugin folder
 * 
 * STEP 1 - Setup the Default Language: The default language is your vanilla project, it uses
 * all the Text Data that you set up in the RPG Maker editor as it is, without any changes.
 * The only extra option I added is the "Combat Miss", normally RPG Maker would use an hard
 * coded string for it (for example "Miss" in english) that's not editable.
 * Now you can set it, just try to stay in a small range of letters to avoid text compression.
 * 
 * STEP 2 - Create the language packages: The second step is opening the "Other Language Translations"
 * field in the Plugin Parameters and start translating. The first field is the target language 
 * and then you have all the various system terms, parameters and so on!
 * 
 * STEP 3 - Database JSON creation: Dynamic database like Items, Monsters or Maps will need to
 * be handled via JSON. Doing this only before wrapping up your project is warmly recommended.
 * First of all you need to setup the WD_Translation folder in your project data folder, the
 * download on Itch or Ko-Fi already provide a premade folder with blank JSONs. Then, inside
 * the game, create a temporary event and use the command "Write a new translation JSON" once
 * for every JSON you need to create (usually you need all of them unless your project skips
 * certain mechanics, only "Map Names" isn't always useful, if you are not displaying the map
 * informations just skip it). Now you have JSON files in the WD_Translation folder with all
 * the languages you created so far (that's why it's IMPORTANT to 100% complete STEP 2 before
 * STEP 3) and the relevant translation informations (for example items have the name and the
 * description, all the rest of the data is skipped as it has nothing to do with multilanguage).
 * Use a program like Notepad++ or VScode to open them and manually translate the entries.
 * When the user changes the language the plugin will load those JSON (so leave every file there
 * even if it's empty!), search for the correct language and edit the $data... file of RPG
 * Maker to the new language. If there is no matching language, the default RPG Maker file will
 * be left in place (or reset if changed before)
 * 
 * STEP 4 - Text String JSON and translation: Creating a text translation can be long, but I 
 * tried to keep it as comfortable and easy as possible. First, tag EVERY text you want to 
 * translate with ||WDT...|| add an UNIQUE alphanumeric code in place of ...(example: ||WDTReid000||)
 * You can do it for name box, standard dialogue, choices, scrolling text (tag only the first
 * sentence of the scrolling text), change actor name, change actor nickname and change actor
 * profile. (NOTE: For the change Actor name/nick/profile, the plugin will Remember the changes
 * from this point onward). Now use the "Create Text Translation JSON" command and the plugin
 * will copy the codes in TextString.json, tagging what kind of RMMZ command uses it and ordering
 * it by map, event and event page! Use a program like Notepad++ or VScode to open it and translate
 * 
 * 
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 * And if you want a direct line with me, you can join my Discord:
 * https://discord.gg/gaa2E2pJ
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 * //////////////////////////////////////////////////
 * VERSION 1.2:
 * - Solved a compatibility bug with WinterDream Stats & Skills plugin when using custom classes
 * - The plugin will now scan the Troops.json to add the Battle Event lines into the TextString.json
 * - Fixed a regex bug when the plugin scans for the Transation Code
 * VERSION 1.1:
 * - Removed from this plugin the control over the language (Both from plugin commands and options menu). The language
 *   control is now moved over to WD_Core to coordinate all WinterDream plugins translations from a single source.
 * VERSION 1.0:
 * - Initial Release
 * //////////////////////////////////////////////////
 *
 */
/*~struct~languageSelection:
 * @param language
 * @text Language
 * @type select
 * @default English
 * @option 	Abkhazian
 * @option 	Afar
 * @option 	Afrikaans
 * @option 	Akan
 * @option 	Albanian
 * @option 	Amharic
 * @option 	Arabic
 * @option 	Aragonese
 * @option 	Armenian
 * @option 	Assamese
 * @option 	Avaric
 * @option 	Avestan
 * @option 	Aymara
 * @option 	Azerbaijani
 * @option 	Bambara
 * @option 	Bashkir
 * @option 	Basque
 * @option 	Belarusian
 * @option 	Bengali
 * @option 	Bislama
 * @option 	Bosnian
 * @option 	Breton
 * @option 	Bulgarian
 * @option 	Burmese
 * @option 	Catalan, Valencian
 * @option 	Chamorro
 * @option 	Chechen
 * @option 	Chichewa, Chewa, Nyanja
 * @option 	Chinese
 * @option 	Church Slavonic, Old Slavonic, Old Church Slavonic
 * @option 	Chuvash
 * @option 	Cornish
 * @option 	Corsican
 * @option 	Cree
 * @option 	Croatian
 * @option 	Czech
 * @option 	Danish
 * @option 	Divehi, Dhivehi, Maldivian
 * @option 	Dutch, Flemish
 * @option 	Dzongkha
 * @option 	English
 * @option 	Esperanto
 * @option 	Estonian
 * @option 	Ewe
 * @option 	Faroese
 * @option 	Fijian
 * @option 	Finnish
 * @option 	French
 * @option 	Western Frisian
 * @option 	Fulah
 * @option 	Gaelic, Scottish Gaelic
 * @option 	Galician
 * @option 	Ganda
 * @option 	Georgian
 * @option 	German
 * @option 	Greek, Modern (1453–)
 * @option 	Kalaallisut, Greenlandic
 * @option 	Guarani
 * @option 	Gujarati
 * @option 	Haitian, Haitian Creole
 * @option 	Hausa
 * @option 	Hebrew
 * @option 	Herero
 * @option 	Hindi
 * @option 	Hiri Motu
 * @option 	Hungarian
 * @option 	Icelandic
 * @option 	Ido
 * @option 	Igbo
 * @option 	Indonesian
 * @option 	Interlingua (International Auxiliary Language Association)
 * @option 	Interlingue, Occidental
 * @option 	Inuktitut
 * @option 	Inupiaq
 * @option 	Irish
 * @option 	Italian
 * @option 	Japanese
 * @option 	Javanese
 * @option 	Kannada
 * @option 	Kanuri
 * @option 	Kashmiri
 * @option 	Kazakh
 * @option 	Central Khmer
 * @option 	Kikuyu, Gikuyu
 * @option 	Kinyarwanda
 * @option 	Kirghiz, Kyrgyz
 * @option 	Komi
 * @option 	Kongo
 * @option 	Korean
 * @option 	Kuanyama, Kwanyama
 * @option 	Kurdish
 * @option 	Lao
 * @option 	Latin
 * @option 	Latvian
 * @option 	Limburgan, Limburger, Limburgish
 * @option 	Lingala
 * @option 	Lithuanian
 * @option 	Luba-Katanga
 * @option 	Luxembourgish, Letzeburgesch
 * @option 	Macedonian
 * @option 	Malagasy
 * @option 	Malay
 * @option 	Malayalam
 * @option 	Maltese
 * @option 	Manx
 * @option 	Maori
 * @option 	Marathi
 * @option 	Marshallese
 * @option 	Mongolian
 * @option 	Nauru
 * @option 	Navajo, Navaho
 * @option 	North Ndebele
 * @option 	South Ndebele
 * @option 	Ndonga
 * @option 	Nepali
 * @option 	Norwegian
 * @option 	Norwegian Bokmål
 * @option 	Norwegian Nynorsk
 * @option 	Occitan
 * @option 	Ojibwa
 * @option 	Oriya
 * @option 	Oromo
 * @option 	Ossetian, Ossetic
 * @option 	Pali
 * @option 	Pashto, Pushto
 * @option 	Persian
 * @option 	Polish
 * @option 	Portuguese
 * @option 	Punjabi, Panjabi
 * @option 	Quechua
 * @option 	Romanian, Moldavian, Moldovan
 * @option 	Romansh
 * @option 	Rundi
 * @option 	Russian
 * @option 	Northern Sami
 * @option 	Samoan
 * @option 	Sango
 * @option 	Sanskrit
 * @option 	Sardinian
 * @option 	Serbian
 * @option 	Shona
 * @option 	Sindhi
 * @option 	Sinhala, Sinhalese
 * @option 	Slovak
 * @option 	Slovenian
 * @option 	Somali
 * @option 	Southern Sotho
 * @option 	Spanish, Castilian
 * @option 	Sundanese
 * @option 	Swahili
 * @option 	Swati
 * @option 	Swedish
 * @option 	Tagalog
 * @option 	Tahitian
 * @option 	Tajik
 * @option 	Tamil
 * @option 	Tatar
 * @option 	Telugu
 * @option 	Thai
 * @option 	Tibetan
 * @option 	Tigrinya
 * @option 	Tonga (Tonga Islands)
 * @option 	Tsonga
 * @option 	Tswana
 * @option 	Turkish
 * @option 	Turkmen
 * @option 	Twi
 * @option 	Uighur, Uyghur
 * @option 	Ukrainian
 * @option 	Urdu
 * @option 	Uzbek
 * @option 	Venda
 * @option 	Vietnamese
 * @option 	Volapük
 * @option 	Walloon
 * @option 	Welsh
 * @option 	Wolof
 * @option 	Xhosa
 * @option 	Sichuan Yi, Nuosu
 * @option 	Yiddish
 * @option 	Yoruba
 * @option 	Zhuang, Chuang
 * @option 	Zulu
 */
/*~struct~mainTrans:
 * @param language
 * @text Translation Language
 * @desc Create the translations packages for System
 * @type struct<languageSelection>
 * @default {"language":"English"}
 * 
 * @param systemTranslation
 * @type struct<sysTrans>
 * @text System Text Translation
 * @desc Translate the System Text
 * @default {"gameTitle":"Your Game Title","currency":"RMMZ Dollars","combatMiss":"Miss","optionOn":"ON","optionOff":"OFF","optionLanguage":"Select Language:","level":"Level","levelA":"Lv","hp":"HP","hpA":"HP","mp":"MP","mpA":"MP","tp":"TP","tpA":"TP","exp":"EXP","expA":"EXP","fight":"Fight","escape":"Escape","attack":"Attack","guard":"Guard","item":"Item","skill":"Skill","equip":"Equip","status":"Status","formation":"Formation","save":"Save","gameEnd":"Game End","options":"Options","weapon":"Weapon","armor":"Armor","keyItem":"Key Item","equip2":"Equip","optimize":"Optimize","clear":"Clear","newGame":"New Game","continue_":"Continue","toTitle":"To Title","cancel":"Cancel","buy":"Buy","sell":"Sell","alwaysDash":"Always Dash","commandRemember":"Command Remember","touchUI":"Touch UI","bgmVolume":"BGM Volume","bgsVolume":"BGS Volume","meVolume":"ME Volume","seVolume":"SE Volume","possession":"Possession","expTotal":"Current %1","expNext":"To Next %1","saveMessage":"Which file would you like to save to?","loadMessage":"Which file would you like to load?","file":"File","autosave":"Autosave","partyName":"%1's Party","emerge":"%1 emerged!","preemptive":"%1 got the upper hand!","surprise":"%1 was surprised!","escapeStart":"%1 has started to escape!","escapeFailure":"However, it was unable to escape!","victory":"%1 was victorious!","defeat":"%1 was defeated.","obtainExp":"%1 %2 received!","obtainGold":"%1\\G found!","obtainItem":"%1 found!","levelUp":"%1 is now %2 %3!","obtainSkill":"%1 learned!","useItem":"%1 uses %2!","criticalToEnemy":"An excellent hit!!","criticalToActor":"A painful blow!!","actorDamage":"%1 took %2 damage!","actorRecovery":"%1 recovered %2 %3!","actorGain":"%1 gained %2 %3!","actorLoss":"%1 lost %2 %3!","actorDrain":"%1 was drained of %2 %3!","actorNoDamage":"%1 took no damage!","actorNoHit":"Miss! %1 took no damage!","enemyDamage":"%1 took %2 damage!","enemyRecovery":"%1 recovered %2 %3!","enemyGain":"%1 gained %2 %3!","enemyLoss":"%1 lost %2 %3!","enemyDrain":"%1 was drained of %2 %3!","enemyNoDamage":"%1 took no damage!","enemyNoHit":"Miss! %1 took no damage!","evasion":"%1 evaded the attack!","magicEvasion":"%1 nullified the magic!","magicReflection":"%1 reflected the magic!","counterAttack":"%1 made a counterattack!","substitute":"%1 protected %2!","buffAdd":"%1’s %2 went up!","debuffAdd":"%1’s %2 went down!","buffRemove":"%1’s %2 returned to normal!","actionFailure":"There was no effect on %1!"}
 * 
 * @param parametersTranslation
 * @type struct<paramTrans>
 * @text Parameters Translation
 * @desc Translate the Parameters
 * @default {"maxHP":"Max HP","maxMP":"Max MP","atk":"Attack","def":"Defense","matk":"M. Attack","mdef":"M. Defense","agi":"Agility","luk":"Luck","hit":"Hit","eva":"Evasion"}
 * 
 * @param elementsTranslation
 * @type struct<simpleField>[]
 * @text Elements Translation
 * @desc Elements translation (array must be the same length as original)
 * @default ["{\"trans\":\"Physical\"}","{\"trans\":\"Fire\"}","{\"trans\":\"Ice\"}","{\"trans\":\"Thunder\"}","{\"trans\":\"Water\"}","{\"trans\":\"Earth\"}","{\"trans\":\"Wind\"}","{\"trans\":\"Light\"}","{\"trans\":\"Darkness\"}"]
 * 
 * @param skillTypeTranslation
 * @type struct<simpleField>[]
 * @text Skill Type Translation
 * @desc Skill Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Magic\"}","{\"trans\":\"Special\"}"]
 * 
 * @param weaponTypeTranslation
 * @type struct<simpleField>[]
 * @text Weapon Type Translation
 * @desc Weapon Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Dagger\"}","{\"trans\":\"Sword\"}","{\"trans\":\"Flail\"}","{\"trans\":\"Axe\"}","{\"trans\":\"Whip\"}","{\"trans\":\"Staff\"}","{\"trans\":\"Bow\"}","{\"trans\":\"Crossbow\"}","{\"trans\":\"Gun\"}","{\"trans\":\"Claw\"}","{\"trans\":\"Glove\"}","{\"trans\":\"Spear\"}"]
 * 
 * @param armorTypeTranslation
 * @type struct<simpleField>[]
 * @text Armor Type Translation
 * @desc Armor Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"General Armor\"}","{\"trans\":\"Magic Armor\"}","{\"trans\":\"Light Armor\"}","{\"trans\":\"Heavy Armor\"}","{\"trans\":\"Small Shield\"}","{\"trans\":\"Large Shield\"}"]
 * 
 * @param equipTypeTranslation
 * @type struct<simpleField>[]
 * @text Equipment Type Translation
 * @desc Equipment Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Weapon\"}","{\"trans\":\"Shield\"}","{\"trans\":\"Head\"}","{\"trans\":\"Body\"}","{\"trans\":\"Accessory\"}"]
 * 
 */
/*~struct~sysTrans:
 * @param gameTitle
 * @text Game Title
 * @default Your Game Title
 * 
 * @param currency
 * @text Currency
 * @default RMMZ Dollars
 * 
 * @param combatMiss
 * @text Miss (Combat)
 * @default Miss
 * 
 * @param optionOn
 * @text Option ON
 * @default ON
 * 
 * @param optionOff
 * @text Option OFF
 * @default OFF
 * 
 * @param optionLanguage
 * @text Option Select Language
 * @default Select Language:
 * 
 * @param level
 * @text Level
 * @default Level
 * 
 * @param levelA
 * @text Level (Abbreviated)
 * @default Lv
 * 
 * @param hp
 * @text HP
 * @default HP
 * 
 * @param hpA
 * @text HP (Abbreviated)
 * @default HP
 * 
 * @param mp
 * @text MP
 * @default MP
 * 
 * @param mpA
 * @text MP (Abbreviated)
 * @default MP
 * 
 * @param tp
 * @text TP
 * @default TP
 * 
 * @param tpA
 * @text TP (Abbreviated)
 * @default TP
 * 
 * @param exp
 * @text EXP
 * @default EXP
 * 
 * @param expA
 * @text EXP (Abbreviated)
 * @default EXP
 * 
 * @param fight
 * @text Fight
 * @default Fight
 * 
 * @param escape
 * @text Escape
 * @default Escape
 * 
 * @param attack
 * @text Attack
 * @default Attack
 * 
 * @param guard
 * @text Guard
 * @default Guard
 * 
 * @param item
 * @text Item
 * @default Item
 * 
 * @param skill
 * @text Skill
 * @default Skill
 * 
 * @param equip
 * @text Equip (Menu)
 * @default Equip
 * 
 * @param status
 * @text Status
 * @default Status
 * 
 * @param formation
 * @text Formation
 * @default Formation
 * 
 * @param save
 * @text Save
 * @default Save
 * 
 * @param gameEnd
 * @text Game End
 * @default Game End
 * 
 * @param options
 * @text Options
 * @default Options
 * 
 * @param weapon
 * @text Weapon
 * @default Weapon
 * 
 * @param armor
 * @text Armor
 * @default Armor
 * 
 * @param keyItem
 * @text Key Item
 * @default Key Item
 * 
 * @param equip2
 * @text Equip (Inventory)
 * @default Equip
 * 
 * @param optimize
 * @text Optimize
 * @default Optimize
 * 
 * @param clear
 * @text Clear
 * @default Clear
 * 
 * @param newGame
 * @text New Game
 * @default New Game
 * 
 * @param continue_
 * @text Continue
 * @default Continue
 * 
 * @param toTitle
 * @text To Title
 * @default To Title
 * 
 * @param cancel
 * @text Cancel
 * @default Cancel
 * 
 * @param buy
 * @text Buy
 * @default Buy
 * 
 * @param sell
 * @text Sell
 * @default Sell
 * 
 * @param alwaysDash
 * @text Always Dash
 * @default Always Dash
 * 
 * @param commandRemember
 * @text Command Remember
 * @default Command Remember
 * 
 * @param touchUI
 * @text Touch UI
 * @default Touch UI
 * 
 * @param bgmVolume
 * @text BGM Volume
 * @default BGM Volume
 * 
 * @param bgsVolume
 * @text BGS Volume
 * @default BGS Volume
 * 
 * @param meVolume
 * @text ME Volume
 * @default ME Volume
 * 
 * @param seVolume
 * @text SE Volume
 * @default SE Volume
 * 
 * @param possession
 * @text Possession
 * @default Possession
 * 
 * @param expTotal
 * @text Exp Total
 * @default Current %1
 * 
 * @param expNext
 * @text Exp Next
 * @default To Next %1
 * 
 * @param saveMessage
 * @text Save Message
 * @default Which file would you like to save to?
 * 
 * @param loadMessage
 * @text Load Message
 * @default Which file would you like to load?
 * 
 * @param file
 * @text File
 * @default File
 * 
 * @param autosave
 * @text Autosave
 * @default Autosave
 * 
 * @param partyName
 * @text Party Name
 * @default %1's Party
 * 
 * @param emerge
 * @text Emerge
 * @default %1 emerged!
 * 
 * @param preemptive
 * @text Preemptive
 * @default %1 got the upper hand!
 * 
 * @param surprise
 * @text Surprise
 * @default %1 was surprised!
 * 
 * @param escapeStart
 * @text Escape Start
 * @default %1 has started to escape!
 * 
 * @param escapeFailure
 * @text Escape Failure
 * @default However, it was unable to escape!
 * 
 * @param victory
 * @text Victory
 * @default %1 was victorious!
 * 
 * @param defeat
 * @text Defeat
 * @default %1 was defeated.
 * 
 * @param obtainExp
 * @text Obtain Exp
 * @default %1 %2 received!
 * 
 * @param obtainGold
 * @text Obtain Gold
 * @default %1\G found!
 * 
 * @param obtainItem
 * @text Obtain Item
 * @default %1 found!
 * 
 * @param levelUp
 * @text Level Up
 * @default %1 is now %2 %3!
 * 
 * @param obtainSkill
 * @text Obtain Skill
 * @default %1 learned!
 * 
 * @param useItem
 * @text Use Item
 * @default %1 uses %2!
 * 
 * @param criticalToEnemy
 * @text Critical To Enemy
 * @default An excellent hit!!
 * 
 * @param criticalToActor
 * @text Critical To Actor
 * @default A painful blow!!
 * 
 * @param actorDamage
 * @text Actor Damage
 * @default %1 took %2 damage!
 * 
 * @param actorRecovery
 * @text Actor Recovery
 * @default %1 recovered %2 %3!
 * 
 * @param actorGain
 * @text Actor Gain
 * @default %1 gained %2 %3!
 * 
 * @param actorLoss
 * @text Actor Loss
 * @default %1 lost %2 %3!
 * 
 * @param actorDrain
 * @text Actor Drain
 * @default %1 was drained of %2 %3!
 * 
 * @param actorNoDamage
 * @text Actor No Damage
 * @default %1 took no damage!
 * 
 * @param actorNoHit
 * @text Actor No Hit
 * @default Miss! %1 took no damage!
 * 
 * @param enemyDamage
 * @text Enemy Damage
 * @default %1 took %2 damage!
 * 
 * @param enemyRecovery
 * @text Enemy Recovery
 * @default %1 recovered %2 %3!
 * 
 * @param enemyGain
 * @text Enemy Gain
 * @default %1 gained %2 %3!
 * 
 * @param enemyLoss
 * @text Enemy Loss
 * @default %1 lost %2 %3!
 * 
 * @param enemyDrain
 * @text Enemy Drain
 * @default %1 was drained of %2 %3!
 * 
 * @param enemyNoDamage
 * @text Enemy No Damage
 * @default %1 took no damage!
 * 
 * @param enemyNoHit
 * @text Enemy No Hit
 * @default Miss! %1 took no damage!
 * 
 * @param evasion
 * @text Evasion
 * @default %1 evaded the attack!
 * 
 * @param magicEvasion
 * @text Magic Evasion
 * @default %1 nullified the magic!
 * 
 * @param magicReflection
 * @text Magic Reflection
 * @default %1 reflected the magic!
 * 
 * @param counterAttack
 * @text Counter Attack
 * @default %1 made a counterattack!
 * 
 * @param substitute
 * @text Substitute
 * @default %1 protected %2!
 * 
 * @param buffAdd
 * @text Buff Add
 * @default %1’s %2 went up!
 * 
 * @param debuffAdd
 * @text Debuff Add
 * @default %1’s %2 went down!
 * 
 * @param buffRemove
 * @text Buff Remove
 * @default %1’s %2 returned to normal!
 * 
 * @param actionFailure
 * @text Action Failure
 * @default There was no effect on %1!
 */
/*~struct~paramTrans:
 * @param maxHP
 * @text Max HP
 * @default Max HP
 * 
 * @param maxMP
 * @text Max MP
 * @default Max MP
 * 
 * @param atk
 * @text Attack
 * @default Attack
 * 
 * @param def
 * @text Defense
 * @default Defense
 * 
 * @param matk
 * @text Magic Attack
 * @default M. Attack
 * 
 * @param mdef
 * @text Magic Defense
 * @default M. Defense
 * 
 * @param agi
 * @text Agility
 * @default Agility
 * 
 * @param luk
 * @text Luck
 * @default Luck
 * 
 * @param hit
 * @text Hit
 * @default Hit
 * 
 * @param eva
 * @text Evasion
 * @default Evasion
 */
/*~struct~simpleField:
 * @param trans
 * @text Translation
 * @default
 */
 
//Pushing Plugin JSON in DataManager
var $dataWDTransActors = null;
var $dataWDTransClasses = null;
var $dataWDTransEnemies = null;
var $dataWDTransItems = null;
var $dataWDTransArmors = null;
var $dataWDTransWeapons = null;
var $dataWDTransSkills = null;
var $dataWDTransStates = null;
var $dataWDTransMapInfos = null;
var $dataWDTransTextStrings = null;

DataManager._databaseFiles.push({name: '$dataWDTransActors', src: 'WD_Translation/Actors.json'});
DataManager._databaseFiles.push({name: '$dataWDTransClasses', src: 'WD_Translation/Classes.json'});
DataManager._databaseFiles.push({name: '$dataWDTransEnemies', src: 'WD_Translation/Enemies.json'});
DataManager._databaseFiles.push({name: '$dataWDTransItems', src: 'WD_Translation/Items.json'});
DataManager._databaseFiles.push({name: '$dataWDTransArmors', src: 'WD_Translation/Armors.json'});
DataManager._databaseFiles.push({name: '$dataWDTransWeapons', src: 'WD_Translation/Weapons.json'});
DataManager._databaseFiles.push({name: '$dataWDTransSkills', src: 'WD_Translation/Skills.json'});
DataManager._databaseFiles.push({name: '$dataWDTransStates', src: 'WD_Translation/States.json'});
DataManager._databaseFiles.push({name: '$dataWDTransMapInfos', src: 'WD_Translation/MapInfos.json'});
DataManager._databaseFiles.push({name: '$dataWDTransTextStrings', src: 'WD_Translation/TextStrings.json'});
DataManager._databaseFiles.push({name: '$dataWDTransSettings', src: 'WD_Translation/SavedProperties.json'});

!function(){class i{constructor(e=0){for(const a of M)this[a.language]=this.usefulTranslationData(e)}usefulTranslationData(e=0){let a=[null];switch(e){case 0:for(const n of $dataActors)null!==n&&a.push({name:n.name,nickname:n.nickname,profile:n.profile});break;case 1:for(const r of $dataClasses)null!==r&&a.push({name:r.name});break;case 2:for(const s of $dataEnemies)null!==s&&a.push({name:s.name});break;case 3:for(const o of $dataItems)null!==o&&a.push({name:o.name,description:o.description});break;case 4:for(const i of $dataArmors)null!==i&&a.push({name:i.name,description:i.description});break;case 5:for(const l of $dataWeapons)null!==l&&a.push({name:l.name,description:l.description});break;case 6:for(const u of $dataSkills)null!==u&&a.push({name:u.name,description:u.description,message1:u.message1,message2:u.message2});break;case 7:for(const c of $dataStates)null!==c&&a.push({name:c.name,message1:c.message1,message2:c.message2,message3:c.message3,message4:c.message4});break;case 8:var t=g();0<t.length&&(a=a.concat(t))}return a}}var e=PluginManager.parameters("WD_Translation");if(!window.WD_Interplugin_Core)throw new Error("WD_Translation: WD_Core is required and must be placed above WD_Translation.");var a=window.WD_Interplugin_Core.requireDefaultLanguage();const M=function(e){let a=JSON.parse(e);for(let e=0;e<a.length;e++)a[e]=JSON.parse(a[e]),a[e].systemTranslation=JSON.parse(a[e].systemTranslation),a[e].parametersTranslation=JSON.parse(a[e].parametersTranslation),a[e].parametersTranslation=[a[e].parametersTranslation.maxHP,a[e].parametersTranslation.maxMP,a[e].parametersTranslation.atk,a[e].parametersTranslation.def,a[e].parametersTranslation.matk,a[e].parametersTranslation.mdef,a[e].parametersTranslation.agi,a[e].parametersTranslation.luk,a[e].parametersTranslation.hit,a[e].parametersTranslation.eva],a[e].elementsTranslation=t(a[e].elementsTranslation),a[e].skillTypeTranslation=t(a[e].skillTypeTranslation),a[e].weaponTypeTranslation=t(a[e].weaponTypeTranslation),a[e].armorTypeTranslation=t(a[e].armorTypeTranslation),a[e].equipTypeTranslation=t(a[e].equipTypeTranslation);return function(e){const n=e;!function e(){if($dataSystem)for(const t of n){var a=t.language;if(t.elementsTranslation.length!==$dataSystem.elements.length)throw new Error("WD_Translation: Translation Elements Array doesn't match original Elements Array for language: "+a);if(t.skillTypeTranslation.length!==$dataSystem.skillTypes.length)throw new Error("WD_Translation: Translation Skill Types Array doesn't match original Skill Type Array for language: "+a);if(t.weaponTypeTranslation.length!==$dataSystem.weaponTypes.length)throw new Error("WD_Translation: Translation Weapons Array doesn't match original Weapons Array for language: "+a);if(t.armorTypeTranslation.length!==$dataSystem.armorTypes.length)throw new Error("WD_Translation: Translation Armors Array doesn't match original Armors Array for language: "+a);if(t.equipTypeTranslation.length!==$dataSystem.equipTypes.length)throw new Error("WD_Translation: Translation Equipment Array doesn't match original Equipment Array for language: "+a)}else requestAnimationFrame(e)}()}(a=function(e){for(const a of e)a.language=JSON.parse(a.language),a.language=a.language.language;return e}(a)),a;function t(e){var a=JSON.parse(e).map(e=>JSON.parse(e)),t=[""];for(let e=0;e<a.length;e++)t.push(a[e].trans);return t}}(e.mainTranslation),D={defaultLanguage:a,defaultHardcode:{defaultCombatMiss:e.defaultCombatMiss,defaultOptionOn:e.defaultOptionOn,defaultOptionOff:e.defaultOptionOff},isForced:!1,forcedLanguage:"",runningDefault:!0,currentLanguageData:null,originalDataFiles:[$dataActors,$dataClasses,$dataEnemies,$dataItems,$dataArmors,$dataWeapons,$dataSkills,$dataStates,$dataMapInfos]},h={wdStatSkill:!1};let y=[],S=!1;function n(e){null!=(a=$gameSystem.loadWdTranslationSettings())&&(D.defaultHardcode=a.defaultHardcode,y=a.actorsInGameChanges);var a={data:null,language:D.defaultLanguage},a=(D.currentLanguageData=window.WD_Interplugin_Core.forceLanguage(a,M,e),D.currentLanguageData.language===D.defaultLanguage?(D.runningDefault=!0,D.isForced=!1,D.forcedLanguage="",document.title=$dataSystem.gameTitle,r(0,void 0,!0),r(1,void 0,!0),r(2,void 0,!0),r(3,void 0,!0),r(4,void 0,!0),r(5,void 0,!0),r(6,void 0,!0),r(7,void 0,!0)):(D.isForced=!0,D.forcedLanguage=e,D.runningDefault=!1,document.title=D.currentLanguageData.systemTranslation.gameTitle,r(0,D.currentLanguageData.language,!1),r(1,D.currentLanguageData.language,!1),r(2,D.currentLanguageData.language,!1),r(3,D.currentLanguageData.language,!1),r(4,D.currentLanguageData.language,!1),r(5,D.currentLanguageData.language,!1),r(6,D.currentLanguageData.language,!1),r(7,D.currentLanguageData.language,!1)),m(),T(),JSON.stringify(D,null,4)),e=require("fs"),t=require("path"),n=t.dirname(process.mainModule.filename),n=(t=t.join(n,"data/WD_Translation/"))+"SavedProperties.json";e.existsSync(t)||e.mkdirSync(t),e.writeFileSync(n,a)}function r(e=0,a="English",t=!1){let n=null,r=null,s=null;switch(e){case 0:n=$dataActors,r=$dataWDTransActors.hasOwnProperty(a)?$dataWDTransActors[a]:D.originalDataFiles[e],s=0;break;case 1:n=$dataClasses,r=$dataWDTransClasses.hasOwnProperty(a)?$dataWDTransClasses[a]:D.originalDataFiles[e],s=1;break;case 2:n=$dataEnemies,r=$dataWDTransEnemies.hasOwnProperty(a)?$dataWDTransEnemies[a]:D.originalDataFiles[e],s=1;break;case 3:n=$dataItems,r=$dataWDTransItems.hasOwnProperty(a)?$dataWDTransItems[a]:D.originalDataFiles[e],s=2;break;case 4:n=$dataArmors,r=$dataWDTransArmors.hasOwnProperty(a)?$dataWDTransArmors[a]:D.originalDataFiles[e],s=2;break;case 5:n=$dataWeapons,r=$dataWDTransWeapons.hasOwnProperty(a)?$dataWDTransWeapons[a]:D.originalDataFiles[e],s=2;break;case 6:n=$dataSkills,r=$dataWDTransSkills.hasOwnProperty(a)?$dataWDTransSkills[a]:D.originalDataFiles[e],s=3;break;case 7:n=$dataStates,r=$dataWDTransStates.hasOwnProperty(a)?$dataWDTransStates[a]:D.originalDataFiles[e],s=4;break;case 8:n=$dataMapInfos,r=$dataWDTransMapInfos.hasOwnProperty(a)?$dataWDTransMapInfos[a]:D.originalDataFiles[e],s=1;break;default:throw new Error("WD_Translation: Error in translateDataJSON function! Unexpected mode argument: "+e)}t&&(r=D.originalDataFiles[e]),1===e&&S&&(i=window.WD_Interplugin_StatsAndSkills.pingWdTranslation(!0),h.wdStatSkill=i.isFlagged);var o={isActive:!1,maxI:-1};if(1===e&&h.wdStatSkill&&n.length!==r.length){var i=window.WD_Interplugin_StatsAndSkills.pingWdTranslation(!1);for(let e=0;e<n.length;e++)o["id"+e]=e,o.maxI=e;for(const m of i.data)o["id"+m.id]=m.reference,o.maxI=m.id>o.maxI?m.id:o.maxI;o.isActive=!0}switch(s){case 0:for(let e=1;e<n.length;e++)null!=n[e]&&null!=r[e]&&(n[e].name=r[e].name,n[e].nickname=r[e].nickname,n[e].profile=r[e].profile);break;case 1:if(1===e&&o.isActive)for(let e=1;e<n.length;e++){var l,u,c=n[e];c&&(l=o.hasOwnProperty("id"+e)?o["id"+e]:1,(u=r[l]||r[1])?c.name=u.name:console.warn("WD_Translation: Missing class source entry",{targetIndex:e,mappedIndex:l,targetEntry:c,sourceLength:r.length}))}else for(let e=1;e<n.length;e++)null!=n[e]&&null!=r[e]&&(n[e].name=r[e].name);break;case 2:for(let e=1;e<n.length;e++)null!=n[e]&&null!=r[e]&&(n[e].name=r[e].name,n[e].description=r[e].description);break;case 3:for(let e=1;e<n.length;e++)null!=n[e]&&null!=r[e]&&(n[e].name=r[e].name,n[e].description=r[e].description,n[e].message1=r[e].message1,n[e].message2=r[e].message2);break;case 4:for(let e=1;e<n.length;e++)null!=n[e]&&null!=r[e]&&(n[e].name=r[e].name,n[e].message1=r[e].message1,n[e].message2=r[e].message2,n[e].message3=r[e].message3,n[e].message4=r[e].message4);break;default:throw new Error("WD_Translation: Error in translateDataJSON function! Unexpected action argument: "+s)}if(0===e){var g={isDefault:t||D.runningDefault,language:t||D.runningDefault?D.defaultLanguage:D.currentLanguageData.language};if(0<y.length)for(const p of $dataActors)if(p){const f=p.id;var d=y.filter(e=>e.actorID===f);if(0<d.length)for(const T of d){let e="";switch(e=!g.isDefault&&T.data.hasOwnProperty(g.language)?T.data[g.language]:T.data.default,T.code){case 320:p.name=e;break;case 324:p.nickname=e;break;case 325:p.profile=e}}}}}function t(e,a){switch(e){case"basic":switch(a){case 0:return D.currentLanguageData.systemTranslation.level;case 1:return D.currentLanguageData.systemTranslation.levelA;case 2:return D.currentLanguageData.systemTranslation.hp;case 3:return D.currentLanguageData.systemTranslation.hpA;case 4:return D.currentLanguageData.systemTranslation.mp;case 5:return D.currentLanguageData.systemTranslation.mpA;case 6:return D.currentLanguageData.systemTranslation.tp;case 7:return D.currentLanguageData.systemTranslation.tpA;case 8:return D.currentLanguageData.systemTranslation.exp;case 9:return D.currentLanguageData.systemTranslation.expA;default:throw new Error("WD_Translation: Invalid param in TextManager method basic ("+a+")")}case"command":switch(a){case 0:return D.currentLanguageData.systemTranslation.fight;case 1:return D.currentLanguageData.systemTranslation.escape;case 2:return D.currentLanguageData.systemTranslation.attack;case 3:return D.currentLanguageData.systemTranslation.guard;case 4:return D.currentLanguageData.systemTranslation.item;case 5:return D.currentLanguageData.systemTranslation.skill;case 6:return D.currentLanguageData.systemTranslation.equip;case 7:return D.currentLanguageData.systemTranslation.status;case 8:return D.currentLanguageData.systemTranslation.formation;case 9:return D.currentLanguageData.systemTranslation.save;case 10:return D.currentLanguageData.systemTranslation.gameEnd;case 11:return D.currentLanguageData.systemTranslation.options;case 12:return D.currentLanguageData.systemTranslation.weapon;case 13:return D.currentLanguageData.systemTranslation.armor;case 14:return D.currentLanguageData.systemTranslation.keyItem;case 15:return D.currentLanguageData.systemTranslation.equip2;case 16:return D.currentLanguageData.systemTranslation.optimize;case 17:return D.currentLanguageData.systemTranslation.clear;case 18:return D.currentLanguageData.systemTranslation.newGame;case 19:return D.currentLanguageData.systemTranslation.continue_;case 21:return D.currentLanguageData.systemTranslation.toTitle;case 22:return D.currentLanguageData.systemTranslation.cancel;case 24:return D.currentLanguageData.systemTranslation.buy;case 25:return D.currentLanguageData.systemTranslation.sell;default:throw new Error("WD_Translation: Invalid param in TextManager method command ("+a+")")}case"message":switch(a){case"alwaysDash":return D.currentLanguageData.systemTranslation.alwaysDash;case"commandRemember":return D.currentLanguageData.systemTranslation.commandRemember;case"touchUI":return D.currentLanguageData.systemTranslation.touchUI;case"bgmVolume":return D.currentLanguageData.systemTranslation.bgmVolume;case"bgsVolume":return D.currentLanguageData.systemTranslation.bgsVolume;case"meVolume":return D.currentLanguageData.systemTranslation.meVolume;case"seVolume":return D.currentLanguageData.systemTranslation.seVolume;case"possession":return D.currentLanguageData.systemTranslation.possession;case"expTotal":return D.currentLanguageData.systemTranslation.expTotal;case"expNext":return D.currentLanguageData.systemTranslation.expNext;case"saveMessage":return D.currentLanguageData.systemTranslation.saveMessage;case"loadMessage":return D.currentLanguageData.systemTranslation.loadMessage;case"file":return D.currentLanguageData.systemTranslation.file;case"autosave":return D.currentLanguageData.systemTranslation.autosave;case"partyName":return D.currentLanguageData.systemTranslation.partyName;case"emerge":return D.currentLanguageData.systemTranslation.emerge;case"preemptive":return D.currentLanguageData.systemTranslation.preemptive;case"surprise":return D.currentLanguageData.systemTranslation.surprise;case"escapeStart":return D.currentLanguageData.systemTranslation.escapeStart;case"escapeFailure":return D.currentLanguageData.systemTranslation.escapeFailure;case"victory":return D.currentLanguageData.systemTranslation.victory;case"defeat":return D.currentLanguageData.systemTranslation.defeat;case"obtainExp":return D.currentLanguageData.systemTranslation.obtainExp;case"obtainGold":return D.currentLanguageData.systemTranslation.obtainGold;case"obtainItem":return D.currentLanguageData.systemTranslation.obtainItem;case"levelUp":return D.currentLanguageData.systemTranslation.levelUp;case"obtainSkill":return D.currentLanguageData.systemTranslation.obtainSkill;case"useItem":return D.currentLanguageData.systemTranslation.useItem;case"criticalToEnemy":return D.currentLanguageData.systemTranslation.criticalToEnemy;case"criticalToActor":return D.currentLanguageData.systemTranslation.criticalToActor;case"actorDamage":return D.currentLanguageData.systemTranslation.actorDamage;case"actorRecovery":return D.currentLanguageData.systemTranslation.actorRecovery;case"actorGain":return D.currentLanguageData.systemTranslation.actorGain;case"actorLoss":return D.currentLanguageData.systemTranslation.actorLoss;case"actorDrain":return D.currentLanguageData.systemTranslation.actorDrain;case"actorNoDamage":return D.currentLanguageData.systemTranslation.actorNoDamage;case"actorNoHit":return D.currentLanguageData.systemTranslation.actorNoHit;case"enemyDamage":return D.currentLanguageData.systemTranslation.enemyDamage;case"enemyRecovery":return D.currentLanguageData.systemTranslation.enemyRecovery;case"enemyGain":return D.currentLanguageData.systemTranslation.enemyGain;case"enemyLoss":return D.currentLanguageData.systemTranslation.enemyLoss;case"enemyDrain":return D.currentLanguageData.systemTranslation.enemyDrain;case"enemyNoDamage":return D.currentLanguageData.systemTranslation.enemyNoDamage;case"enemyNoHit":return D.currentLanguageData.systemTranslation.enemyNoHit;case"evasion":return D.currentLanguageData.systemTranslation.evasion;case"magicEvasion":return D.currentLanguageData.systemTranslation.magicEvasion;case"magicReflection":return D.currentLanguageData.systemTranslation.magicReflection;case"counterAttack":return D.currentLanguageData.systemTranslation.counterAttack;case"substitute":return D.currentLanguageData.systemTranslation.substitute;case"buffAdd":return D.currentLanguageData.systemTranslation.buffAdd;case"debuffAdd":return D.currentLanguageData.systemTranslation.debuffAdd;case"buffRemove":return D.currentLanguageData.systemTranslation.buffRemove;case"actionFailure":return D.currentLanguageData.systemTranslation.actionFailure;default:throw new Error("WD_Translation: Invalid param in TextManager method message ("+a+")")}default:throw new Error("WD_Translation: Invalid method in TextManager ("+e+")")}}function g(){var a=require("fs"),e=require("path"),t=e.dirname(process.mainModule.filename),n=e.join(t,"data/"),r=[];try{var s=a.readdirSync(n),o=s.filter(e=>e.includes("Map")&&!e.includes("MapInfos")),i=n+s.filter(e=>e.includes("MapInfos"))[0],l=a.readFileSync(i,{encoding:"utf8"}),u=JSON.parse(l);for(let e=0;e<o.length;e++){var c=n+o[e],g=a.readFileSync(c,{encoding:"utf8"}),d=JSON.parse(g),m=parseInt(function(e){let a=String(e);return a=(a=a.replace("Map","")).replace(".json","")}(o[e])),p=d.displayName,f=function(e,a){for(const t of a)if(null!==t&&t.id===e)return t.name;return""}(m,u);r.push({id:m,displayName:p,mapNameDoNotTranslate:f})}return r}catch(e){throw new Error("WD_Translation: Error loading map files! Error: "+e)}}function s(e){var a=require("fs"),t=require("path"),n=t.dirname(process.mainModule.filename),r=t.join(n,"data/"),n=t.join(r,"Troops.json");let s=[null];var o=[null];try{var i,l=r+a.readdirSync(r).filter(e=>e.includes("MapInfos"))[0],u=a.readFileSync(l,{encoding:"utf8"}),c=JSON.parse(u);a.existsSync(n)&&(i=a.readFileSync(n,{encoding:"utf8"}),s=JSON.parse(i));for(const $ of c)if(null!==$){let e="";var g=r+("Map"+(e=100<=$.id?$.id:10<=$.id?"0"+$.id:"00"+$.id)+".json"),d=a.readFileSync(g,{encoding:"utf8"});o.push(JSON.parse(d))}{var m=o;var p=e;var f=s;const x={code:"",line:0,lastCode:0},I=null===p?new Set:p;let c=[];for(let n=1;n<m.length;n++)for(let t=1;t<m[n].events.length;t++)if(null!==m[n].events[t])for(let a=0;a<m[n].events[t].pages.length;a++){x.line=0,x.code="";for(let e=0;e<m[n].events[t].pages[a].list.length;e++){var T=m[n].events[t].pages[a].list[e];if(101===T.code)x.line=0,x.code="",x.lastCode=0,5<=T.parameters.length&&T.parameters[4].includes("||WDT")&&C(T.parameters[4],n,t,a,T.code);else if(401===T.code)T.parameters[0].includes("||WDT")||0<x.line&&401===x.lastCode?C(T.parameters[0],n,t,a,T.code):(x.line=0,x.code="",x.lastCode=0);else if(102===T.code){x.line=0,x.code="",x.lastCode=0;for(const k of T.parameters[0])k.includes("||WDT")&&C(k,n,t,a,T.code)}else 402===T.code?(x.line=0,x.code="",x.lastCode=0,T.parameters[1].includes("||WDT")&&C(T.parameters[1],n,t,a,T.code)):405===T.code?T.parameters[0].includes("||WDT")||0<x.line&&405===x.lastCode?C(T.parameters[0],n,t,a,T.code):(x.line=0,x.code="",x.lastCode=0):320===T.code||324===T.code||325===T.code?(x.line=0,x.code="",x.lastCode=0,T.parameters[1].includes("||WDT")&&C(T.parameters[1],n,t,a,T.code)):(x.line=0,x.code="",x.lastCode=0)}}for(let a=0;a<$dataCommonEvents.length;a++)if($dataCommonEvents[a]){var D=""===$dataCommonEvents[a].name?"Common Event "+a:"Common Event "+a+": "+$dataCommonEvents[a].name,h=null,y=null;x.line=0,x.code="";for(let e=0;e<$dataCommonEvents[a].list.length;e++){var S=$dataCommonEvents[a].list[e];if(101===S.code)x.line=0,x.code="",x.lastCode=0,5<=S.parameters.length&&S.parameters[4].includes("||WDT")&&C(S.parameters[4],D,h,y,S.code);else if(401===S.code)S.parameters[0].includes("||WDT")||0<x.line&&401===x.lastCode?C(S.parameters[0],D,h,y,S.code):(x.line=0,x.code="",x.lastCode=0);else if(102===S.code){x.line=0,x.code="",x.lastCode=0;for(const _ of S.parameters[0])_.includes("||WDT")&&C(_,D,h,y,S.code)}else 402===S.code?(x.line=0,x.code="",x.lastCode=0,S.parameters[1].includes("||WDT")&&C(S.parameters[1],D,h,y,S.code)):405===S.code?S.parameters[0].includes("||WDT")||0<x.line&&405===x.lastCode?C(S.parameters[0],D,h,y,S.code):(x.line=0,x.code="",x.lastCode=0):320===S.code||324===S.code||325===S.code?(x.line=0,x.code="",x.lastCode=0,S.parameters[1].includes("||WDT")&&C(S.parameters[1],D,h,y,S.code)):(x.line=0,x.code="",x.lastCode=0)}}for(let e=1;e<f.length;e++){var v=f[e];if(v){var W=e;for(let a=0;a<v.pages.length;a++){x.line=0,x.code="",x.lastCode=0;var L=v.pages[a].list;for(let e=0;e<L.length;e++){var w=L[e];if(101===w.code)x.line=0,x.code="",x.lastCode=0,5<=w.parameters.length&&w.parameters[4].includes("||WDT")&&C(w.parameters[4],-1,W,a,w.code,!0);else if(401===w.code)w.parameters[0].includes("||WDT")||0<x.line&&401===x.lastCode?C(w.parameters[0],-1,W,a,w.code,!0):(x.line=0,x.code="",x.lastCode=0);else if(102===w.code){x.line=0,x.code="",x.lastCode=0;for(const b of w.parameters[0])b.includes("||WDT")&&C(b,-1,W,a,w.code,!0)}else 402===w.code?(x.line=0,x.code="",x.lastCode=0,w.parameters[1].includes("||WDT")&&C(w.parameters[1],-1,W,a,w.code,!0)):405===w.code?w.parameters[0].includes("||WDT")||0<x.line&&405===x.lastCode?C(w.parameters[0],-1,W,a,w.code,!0):(x.line=0,x.code="",x.lastCode=0):320===w.code||324===w.code||325===w.code?(x.line=0,x.code="",x.lastCode=0,w.parameters[1].includes("||WDT")&&C(w.parameters[1],-1,W,a,w.code,!0)):(x.line=0,x.code="",x.lastCode=0)}}}}function C(e,a,t,n,r,s=!1){var o=e.match(/\|\|WDT[a-zA-Z0-9]+\|\|/g);if(405===r)if(0<x.line){var i=s?"CombatEvent - MultiLine "+x.line:"MultiLine - Line "+x.line;c.push({code:x.code,textString:e,type:i,mapId:a,eventId:t,pageNumber:n,typeCode:r}),x.line++}else{if(null===o)throw new Error("WD_Translation: Found no match in the string: "+e+"! Check the ||WDT(code)|| tag");if(1<o.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");var i=o[0],l=e.replace(i,"");I.has(i)||(u=s?"CombatEvent - MultiLine Start":"MultiLine - Start Line",c.push({code:i,textString:l,type:u,mapId:a,eventId:t,pageNumber:n,typeCode:r}),I.add(i),x.code=i,x.lastCode=r,x.line++)}else if(401===r)if(0<x.line){l=s?"CombatEvent - Line "+x.line:"Dialogue - Line "+x.line;c.push({code:x.code,textString:e,type:l,mapId:a,eventId:t,pageNumber:n,typeCode:r}),x.line++}else{if(null===o)throw new Error("WD_Translation: Found no match in the string: "+e+"! Check the ||WDT(code)|| tag");if(1<o.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");var u=o[0],i=e.replace(u,"");I.has(u)||(l=s?"CombatEvent - Start Line":"Dialogue - Start Line",c.push({code:u,textString:i,type:l,mapId:a,eventId:t,pageNumber:n,typeCode:r}),I.add(u),x.code=u,x.lastCode=r,x.line++)}else{if(null===o)throw new Error("WD_Translation: Found no match in the string: "+e+"! Check the ||WDT(code)|| tag");if(1<o.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");i=o[0],l=e.replace(i,"");if(!I.has(i)){let e="";101===r?e=s?"CombatEvent - Name Box":"Name Box":401===r?e=s?"CombatEvent - Dialogue Box":"Dialogue Box":102===r||402===r?e=s?"CombatEvent - Choice Box":"Choice Box":320===r?e=s?"CombatEvent - Change Actor Name":"Change Actor Name":324===r?e=s?"CombatEvent - Change Actor Nickname":"Change Actor Nickname":325===r&&(e=s?"CombatEvent - Change Actor Profile":"Change Actor Profile"),c.push({code:i,textString:l,type:e,mapId:a,eventId:t,pageNumber:n,typeCode:r}),I.add(i)}}}(function(e){var a,t,n=new Map;for(const r of e)r&&r.code&&(a=String(r.textString??"").trim(),n.has(r.code)?((t=n.get(r.code)).textString!==a&&console.warn("WD_Translation: Same translation code found with different source texts:",r.code,"\nFirst text:",t.textString,"\nCurrent text:",a,"\nCurrent location:",{type:r.type,mapId:r.mapId,eventId:r.eventId,pageNumber:r.pageNumber,typeCode:r.typeCode}),t.entries.push(r)):n.set(r.code,{textString:a,entries:[r]}))})(c),function(e,a){if(a||0!==e.length){var t=a?{default:e}:$dataWDTransTextStrings;if(a)for(const o of M)t[o.language]=e;else{t.default=t.default.concat(e),t.default.sort((e,a)=>e.mapId!==a.mapId?e.mapId-a.mapId:e.eventId!==a.eventId?e.eventId-a.eventId:e.pageNumber-a.pageNumber);for(const i of M)t.hasOwnProperty(i.language)?(t[i.language]=t[i.language].concat(e),t[i.language].sort((e,a)=>e.mapId!==a.mapId?e.mapId-a.mapId:e.eventId!==a.eventId?e.eventId-a.eventId:e.pageNumber-a.pageNumber)):(t[i.language]=JSON.parse(JSON.stringify(t.default)),t[i.language]=t[i.language].concat(e),t[i.language].sort((e,a)=>e.mapId!==a.mapId?e.mapId-a.mapId:e.eventId!==a.eventId?e.eventId-a.eventId:e.pageNumber-a.pageNumber))}var a=JSON.stringify(t,null,4),n=require("fs"),r=require("path"),s=r.dirname(process.mainModule.filename),r=r.join(s,"data/WD_Translation/"),s=r+"TextStrings.json";n.existsSync(r)||n.mkdirSync(r),n.writeFileSync(s,a)}}(c,null===p);return}}catch(e){throw new Error("WD_Translation: Error loading map files! Error: "+e)}}function o(e,a){if(e){var t=e.match(/\|\|WDT[a-zA-Z0-9]+\|\|/g);if(null===t)return e;if(1<t.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");var n=t[0],t=D.runningDefault?"default":D.currentLanguageData.language,t=$dataWDTransTextStrings.hasOwnProperty(t)?$dataWDTransTextStrings[t]:$dataWDTransTextStrings.default,r={isFound:!1,text:""};if(t)for(const s of t)if(s.code===n&&s.typeCode===a){r.isFound=!0,r.text=s.textString;break}return r.isFound?r.text:e.replace(n,"")}}function l(a){var t=[],n=[];for(const e of a[0])t.push(o(e,102));for(let e=0;e<a.length;e++)0===e?n.push(t):n.push(a[e]);return n}function u(e,a,t,n){var r={isTranslating:!1,text:"",wdCode:null};let s=null;if(e){if(a){if(null===(s=e.match(/\|\|WDT[a-zA-Z0-9]+\|\|/g)))return r.text=e,r;if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");r.isTranslating=!0,r.wdCode=s[0]}var o=a?s[0]:n,n=D.runningDefault?"default":D.currentLanguageData.language,n=$dataWDTransTextStrings.hasOwnProperty(n)?$dataWDTransTextStrings[n]:$dataWDTransTextStrings.default,i={isFound:!1,text:""},l=a?["MultiLine - Start Line","CombatEvent - MultiLine Start"]:["MultiLine - Line "+t,"CombatEvent - MultiLine "+t];if(n)for(const u of n)if(u.code===o&&l.includes(u.type)){i.isFound=!0,i.text=u.textString;break}r.text=i.isFound?i.text:e.replace(o,"")}else r.text=void 0;return r}function c(e,a,t,n){var r={isTranslating:!1,text:"",wdCode:null};let s=null;if(e){if(a){if(null===(s=e.match(/\|\|WDT[a-zA-Z0-9]+\|\|/g)))return r.text=e,r;if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");r.isTranslating=!0,r.wdCode=s[0]}var o=a?s[0]:n,n=D.runningDefault?"default":D.currentLanguageData.language,n=$dataWDTransTextStrings.hasOwnProperty(n)?$dataWDTransTextStrings[n]:$dataWDTransTextStrings.default,i={isFound:!1,text:""},l=a?["Dialogue - Start Line","CombatEvent - Start Line"]:["Dialogue - Line "+t,"CombatEvent - Line "+t];if(n)for(const u of n)if(u.code===o&&l.includes(u.type)){i.isFound=!0,i.text=u.textString;break}r.text=i.isFound?i.text:e.replace(o,"")}else r.text=void 0;return r}function d(e,a,t){if(a){var n=a.match(/\|\|WDT[a-zA-Z0-9]+\|\|/g);if(null!==n){if(1<n.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");var r=n[0],s={};for(const u in $dataWDTransTextStrings){var o={isFound:!1,text:""};for(const c of $dataWDTransTextStrings[u])if(c.code===r&&c.typeCode===t){o.isFound=!0,o.text=c.textString;break}o.isFound&&(s[u]=o.text)}if(0<Object.keys(s).length){var i={actorID:e,code:t,data:s},l={isFound:!1,index:null};for(let e=0;e<y.length;e++)if(y[e].actorID===i.actorID&&y[e].code===i.code){l.isFound=!0,l.index=e;break}l.isFound&&y.splice(l.index,1),y.push(i),T()}}}}function m(){if($gameActors)for(const a of $gameActors._data){var e;a&&(e=a._actorId,a.setName($dataActors[e].name),a.setNickname($dataActors[e].nickname),a.setProfile($dataActors[e].profile))}}PluginManager.registerCommand("WD_Translation","createNewJSON",function(e){var e=parseInt(e.dataType),a=["Actors","Classes","Enemies","Items","Armors","Weapons","Skills","States","MapInfos"][e],e=new i(e),e=JSON.stringify(e,null,4),t=require("fs"),n=require("path"),r=n.dirname(process.mainModule.filename),n=n.join(r,"data/WD_Translation/"),r=n+a+".json";t.existsSync(n)||t.mkdirSync(n),t.writeFileSync(r,e)}),PluginManager.registerCommand("WD_Translation","createAllNewJSON",function(){var a=["Actors","Classes","Enemies","Items","Armors","Weapons","Skills","States","MapInfos"];for(let e=0;e<=8;e++){var t=e,n=a[t],t=new i(t),t=JSON.stringify(t,null,4),r=require("fs"),s=require("path"),o=s.dirname(process.mainModule.filename),s=s.join(o,"data/WD_Translation/"),o=s+n+".json";r.existsSync(s)||r.mkdirSync(s),r.writeFileSync(o,t)}}),PluginManager.registerCommand("WD_Translation","createTextCodeTranslations",function(){s(null)}),PluginManager.registerCommand("WD_Translation","updateTextCodeTranslations",function(){if(!$dataWDTransTextStrings.hasOwnProperty("default"))throw new Error("WD_Translation: Unable to find current data in TextStrings.json, please make sure to have created it with Create Text Translation JSON command before updating");var e=new Set;for(const a of $dataWDTransTextStrings.default)e.has(a.code)||e.add(a.code);s(e)}),PluginManager.registerCommand("WD_Translation","forceLanguage",function(e){e=JSON.parse(e.forceLanguage).language;window.WD_Interplugin_Core.legacyTranslationForceLanguage(e)});var p=PluginManager._scripts,f={coreFound:!1,coreIndex:-1,thisIndex:-1,stSkFound:!1,stSkIndex:-1};for(let e=0;e<p.length;e++)"WD_Core"===p[e]&&(f.coreFound=!0,f.coreIndex=e),"WD_Translation"===p[e]&&(f.thisIndex=e),"WD_StatsAndSkills"===p[e]&&(S=!0,f.stSkFound=!0,f.stSkIndex=e);if(!f.coreFound)throw new Error("WD_Translation: The plugin WD_Core has not been found! WD_Core is needed to run this plugin, please dowload on Itch or Ko-fi for free (see help file)");if(f.thisIndex<f.coreIndex)throw new Error("WD_Translation: The plugin WD_Core is loaded after this plugin, please move the plugin WD_Core ABOVE this plugin in the Rpg Maker Plugin Manager");if(!window.WD_Interplugin_Core.requiredCoreVersion({major:1,minor:3,hotfix:0}))throw new Error("WD_Translation: WinterDream Core 1.3.0 or higher is required, please update to the last version");if(f.stSkFound&&f.thisIndex<f.stSkIndex)throw new Error("WD_Translation: The plugin WD_StatsAndSkills is loaded after this plugin, please move the plugin WD_StatsAndSkills ABOVE this plugin in the Rpg Maker Plugin Manager");function T(){$gameSystem.saveWdTranslationSettings()}!function e(){var a,t;DataManager.isDatabaseLoaded()&&StorageManager.forageKeysUpdated()&&$dataWDTransActors&&$dataWDTransArmors&&$dataWDTransClasses&&$dataWDTransEnemies&&$dataWDTransItems&&$dataWDTransMapInfos&&$dataWDTransSkills&&$dataWDTransStates&&$dataWDTransWeapons&&$dataActors&&$dataArmors&&$dataClasses&&$dataEnemies&&$dataItems&&$dataMapInfos&&$dataSkills&&$dataStates&&$dataSystem&&$dataWeapons&&$gameSystem&&$dataWDTransTextStrings&&$dataWDTransSettings?(D.originalDataFiles=JSON.parse(JSON.stringify([$dataActors,$dataClasses,$dataEnemies,$dataItems,$dataArmors,$dataWeapons,$dataSkills,$dataStates,$dataMapInfos])),(t=window.WD_Interplugin_Core)&&W((t=t.requireCurrentLanguage()).isForced,t.language),function(){var e=require("fs"),a=(t=require("path")).dirname(process.mainModule.filename),t=t.join(a,"data/WD_Translation/SavedProperties.json"),a=e.readFileSync(t,{encoding:"utf8"}),n=JSON.parse(a);for(const r in D)if(!n.hasOwnProperty(r))return;for(const s in D)D[s]=n[s]}(),a=(t=WD_Interplugin_Core.requireCurrentLanguage()).isForced,t=t.language,(D.isForced=a)?D.forcedLanguage=t:D.forcedLanguage=null,t===D.defaultLanguage?D.runningDefault=!0:D.runningDefault=!1,n(t)):requestAnimationFrame(e)}(),Game_System.prototype.saveWdTranslationSettings=function(){var e={defaultHardcode:JSON.parse(JSON.stringify(D.defaultHardcode)),actorsInGameChanges:JSON.parse(JSON.stringify(y))};this._wdTranslationSavefile=e},Game_System.prototype.loadWdTranslationSettings=function(){return this._wdTranslationSavefile||null},Scene_Title.prototype.drawGameTitle=function(){var e=Graphics.height/4,a=Graphics.width-40,t=(D.runningDefault?$dataSystem:D.currentLanguageData.systemTranslation).gameTitle,n=this._gameTitleSprite.bitmap;n.fontFace=$gameSystem.mainFontFace(),n.outlineColor="black",n.outlineWidth=8,n.fontSize=72,n.drawText(t,20,e,a,48,"center")},TextManager.basic=function(e){return D.runningDefault?$dataSystem.terms.basic[e]||"":t("basic",e)},TextManager.command=function(e){return D.runningDefault?$dataSystem.terms.commands[e]||"":t("command",e)},TextManager.message=function(e){return D.runningDefault?$dataSystem.terms.messages[e]||"":t("message",e)},TextManager.param=function(e){return D.runningDefault?$dataSystem.terms.params[e]||"":D.currentLanguageData.parametersTranslation[e]},Window_StatusBase.prototype.actorSlotName=function(e,a){e=e.equipSlots();return(D.runningDefault?$dataSystem.equipTypes:D.currentLanguageData.equipTypeTranslation)[e[a]]},Window_SkillType.prototype.makeCommandList=function(){if(this._actor)for(const a of this._actor.skillTypes()){var e=(D.runningDefault?$dataSystem.skillTypes:D.currentLanguageData.skillTypeTranslation)[a];this.addCommand(e,"skill",!0,a)}},Window_ActorCommand.prototype.addSkillCommands=function(){for(const a of this._actor.skillTypes()){var e=(D.runningDefault?$dataSystem.skillTypes:D.currentLanguageData.skillTypeTranslation)[a];this.addCommand(e,"skill",!0,a)}},Sprite_Damage.prototype.createMiss=function(){var e=this.fontSize(),a=Math.floor(3*e),t=this.createChildSprite(a,e),n=D.runningDefault?D.defaultHardcode.defaultCombatMiss:D.currentLanguageData.systemTranslation.combatMiss;t.bitmap.drawText(n,0,0,a,e,"center"),t.dy=0},Object.defineProperty(TextManager,"currencyUnit",{get:function(){return D.runningDefault?$dataSystem.currencyUnit:D.currentLanguageData.systemTranslation.currency},configurable:!0}),Game_Interpreter.prototype.command101=function(e){let a=0,t=!1,n=null;if($gameMessage.isBusy())return!1;for($gameMessage.setFaceImage(e[0],e[1]),$gameMessage.setBackground(e[2]),$gameMessage.setPositionType(e[3]),$gameMessage.setSpeakerName(o(e[4],101));401===this.nextEventCode();){this._index++;let e="";var r;0===a?(r=c(this.currentCommand().parameters[0],!0,0,null),t=r.isTranslating,e=r.text,n=r.wdCode):e=0<a&&t?c(this.currentCommand().parameters[0],!1,a,n).text:this.currentCommand().parameters[0],$gameMessage.add(e),a++}switch(this.nextEventCode()){case 102:this._index++;var s=l(this.currentCommand().parameters);this.setupChoices(s);break;case 103:this._index++,this.setupNumInput(this.currentCommand().parameters);break;case 104:this._index++,this.setupItemChoice(this.currentCommand().parameters)}return this.setWaitMode("message"),!0},Game_Interpreter.prototype.command102=function(e){return!$gameMessage.isBusy()&&(e=l(e),this.setupChoices(e),this.setWaitMode("message"),!0)},Game_Interpreter.prototype.command105=function(e){let a=0,t=!1,n=null;if($gameMessage.isBusy())return!1;for($gameMessage.setScroll(e[0],e[1]);405===this.nextEventCode();){this._index++;let e="";var r;0===a?(r=u(this.currentCommand().parameters[0],!0,0,null),t=r.isTranslating,e=r.text,n=r.wdCode):e=0<a&&t?u(this.currentCommand().parameters[0],!1,a,n).text:this.currentCommand().parameters[0],$gameMessage.add(e),a++}return this.setWaitMode("message"),!0},Game_Interpreter.prototype.command320=function(e){var a=o(e[1],320),e=(d(e[0],e[1],320),$gameActors.actor(e[0]));return e&&e.setName(a),!0},Game_Interpreter.prototype.command324=function(e){var a=o(e[1],324),e=(d(e[0],e[1],324),$gameActors.actor(e[0]));return e&&e.setNickname(a),!0},Game_Interpreter.prototype.command325=function(e){var a=o(e[1],325),e=(d(e[0],e[1],325),$gameActors.actor(e[0]));return e&&e.setProfile(a),!0},Window_Options.prototype.booleanStatusText=function(e){var a=D.runningDefault?D.defaultHardcode.defaultOptionOn:D.currentLanguageData.systemTranslation.optionOn,t=D.runningDefault?D.defaultHardcode.defaultOptionOff:D.currentLanguageData.systemTranslation.optionOff;return e?a:t},Window_MapName.prototype.refresh=function(){var e;this.contents.clear(),this.getMapNameTrans()&&(e=this.innerWidth,this.drawBackground(0,0,e,this.lineHeight()),this.drawText(this.getMapNameTrans(),0,0,e,"center"))},Window_MapName.prototype.getMapNameTrans=function(){if(!D.runningDefault&&$dataWDTransMapInfos.hasOwnProperty(D.currentLanguageData.language)){var e=$dataWDTransMapInfos[D.currentLanguageData.language],a=$gameMap._mapId;for(const t of e)if(null!==t&&t.id===a)return t.displayName}return $gameMap.displayName()};const v=DataManager.loadGame;function W(e,a){D.isForced=e,D.forcedLanguage=e?a:null,a===D.defaultLanguage?D.runningDefault=!0:D.runningDefault=!1,n(a)}DataManager.loadGame=function(e){return v.call(this,e).then(e=>(m(),e))},window.WD_Interplugin_Multilanguage={returnLanguageSettings:function(){var e={isForced:D.isForced,forcedLanguage:D.forcedLanguage};return e},importCoreDirectives:W}}();