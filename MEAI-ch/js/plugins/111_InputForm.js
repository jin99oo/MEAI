//=============================================================================
// InputForm.js
// PUBLIC DOMAIN
// ----------------------------------------------------------------------------
// 2017/09/03 iOSで「決定」ボタンを押せないバグを修正＆裏のゲーム画面のクリックを無効に
// 2018/12/06 入力欄の大きさを画面サイズに追従＆iPhoneで画面がズレるバグ修正＆文字サイズ設定＆初期値設定
// 2020/08/22 RPGツクールMZに対応
//=============================================================================

/*:
 * @target MZ
 * @plugindesc 名称字符输入系统（修正版）
 * @author １１１, くらむぼん
 *
 *
 * @help
 确认名称输入脚本：
 $gameActors.actor(1).setName($gameVariables.value(3));
 
 
 * 显示字符输入表单，让用户输入字符。
 * 与事件命令“进程名称输入”不同，
 * 使用熟悉的键盘输入和轻拂输入。
 * 您还可以输入免费字符，包括汉字。
 * 
 * ---制备---
 * 将111_InputForm.css放在游戏文件夹的 CSS 文件夹中（如果您没有）。
 * 顺便说一下，您可以通过调整此文件来更改输入表单的设计和宽度。
 * 如果你不知道怎么搞砸，搜索“CSS写作”等！
 * 
 * 如何在---RPG制造商MZ中使用它---
 * 插件命令可用于显示输入字段。
 * 至少使用“输入字段的X位置”和“输入字段的Y位置”调整显示位置，
 * 如果将变量设置为“输入结果赋值”，它将起作用。
 * 如有必要，请尝试调整其他参数。
 * 
 * ---如何在RPG Maker MV中使用它---
 * ◆ 插件命令：InputForm x=350;y=200;v=11;max=5;
  类似*的东西。 在此示例中，它显示在 x350 和 y200 位置，结果保存在变量编号 11 中。
 *最大字符数为5（最大字符数可以省略以使其不受限制）
 *
 * 如果要超时，请添加 if_s=3;
 * 如果“开关3已打开”，则可以强制退出
 * 在并行事件中，让我们创建一个事件来打开开关 3
 *（滨麻利点1）此时，在强制终止的那一刻
 * 请注意，文本安全地存储在结果变量中。
 *
 * 在完成键入之前不要加载下一个事件命令
 *（滨利点 2）直到加载下一个事件命令
 * 注意不要用其他并行进程覆盖生成的变量，因为会有短暂的暂停。
 *
 *
 * 功能添加：
 * 输入表单 （...）btn_x=100;btn_y=100;
 * 允许您微调“确定”按钮的位置。
 * 值相对于文本框，默认为 btn_x=0;btn_y=50;。
 *
 * （2018/12/06追加）
 * 输入字段和决定按钮的比例现在会扩展和收缩以匹配屏幕的比例。
 *
 * Inputform （中略）font_size=30;
 * 更改输入字段/决策按钮的字体大小。
 * 如果未指定font_size，则 font_size=24。
 *
 * Inputform （中略）placeholder=文章;
 * で「文章」の内容を最初から入力欄に表示しておくことができます。
 * デフォルトネームを設定しておく場合などにご利用ください。
 * なお、placeholder=$;と指定すると変数vに入っている内容が表示されます。
 *
 *许可证：
 *如何使用此插件没有限制。 随心所欲。
 *
 * @command show
 * @text 处理字符输入
 * @desc
 *
 * @arg target_x
 * @type number
 * @text 输入字段中的 X 位置
 *
 * @arg target_y
 * @type number
 * @text 输入字段中的 Y 位置
 *
 * @arg variables_id
 * @type variable
 * @text 替换输入结果
 *
 * @arg max_count
 * @type number
 * @text 最大文字数
 *
 * @arg if_switch_id
 * @type switch
 * @text  打开时强制退出输入
 *
 * @arg button_x
 * @type number
 * @min -10000
 * @default 0
 * @text 按钮的相对 x 位置
 *
 * @arg button_y
 * @type number
 * @min -10000
 * @default 50
 * @text 按钮的相对 Y 位置
 *
 * @arg unit_font_size
 * @type number
 * @default 24
 * @text 字体大小
 *
 * @arg placeholder
 * @type string
 * @text 输入字段的初始值
*/
(function() {
    function stopPropagation(event) {
        event.stopPropagation();
    }

    // css追加
    (function(){
        var css = document.createElement('link');
        css.rel = "stylesheet";
        css.type = 'text/css';
        css.href = './css/111_InputForm.css';
        var b_top = document.getElementsByTagName('head')[0];
        b_top.appendChild(css);
    })();
    // キー入力不可にする為に
    Input.form_mode = false;
    var _Input_onKeyDown = Input._onKeyDown;
    Input._onKeyDown = function(event) {
        if(Input.form_mode)return;
        _Input_onKeyDown.call(this , event)
    };
    var _Input_onKeyUp = Input._onKeyUp;
    Input._onKeyUp = function(event) {
        if(Input.form_mode)return;
        _Input_onKeyUp.call(this , event)
    };
    // 入力終わるまで次のイベントコマンド読み込まない
    var _Game_Interpreter_updateWaitMode =
            Game_Interpreter.prototype.updateWaitMode;
    Game_Interpreter.prototype.updateWaitMode = function(){
        if(this._waitMode == 'input_form')return true;
        return _Game_Interpreter_updateWaitMode.call(this);
    }

    HTMLElement.prototype.postionAdjust = function(screen_postion , target_postion, unitFontSize){
        this.style.left = screen_postion[0] + target_postion[0] * Graphics._realScale + "px";
        this.style.top  = screen_postion[1] + target_postion[1] * Graphics._realScale + "px";
        this.style.fontSize = unitFontSize * Graphics._realScale + "px";
        this.style.maxWidth = 'calc(100% - ' + this.style.left + ')';
        this.style.maxHeight = 'calc(100% - ' + this.style.top + ')';
    };
    // 引数のx=350;y=200;みたいなのを可能にする
    var argHash = function(text , arg_names){
        var _args = new Array(arg_names.length);
        var ary = text.split(";");
        ary.forEach(function(str){
            var s_ary = str.split("=");
            var prop = s_ary[0].toLowerCase();
            var value = s_ary[1];
            _args[arg_names.indexOf(prop)] = value;
        });
        return _args;
    }
    //=============================================================================
    // Game_Interpreter - register plugin commands
    //=============================================================================
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'InputForm'){
            var _ary = argHash(args[0] , ["x" , "y" , "v" , "max" , "if_s", "btn_x", "btn_y", "font_size", "placeholder"]);
            var target_x = +_ary[0];
            var target_y = +_ary[1];
            var variables_id = +_ary[2];
            var max_count = _ary[3] || null;
            var if_switch_id = Number(_ary[4]) || null;
            var button_x = +_ary[5] || 0;
            var button_y = _ary[6] === '' || isNaN(_ary[6]) ? 50 : +_ary[6];
            var unit_font_size = _ary[7] === '' || isNaN(_ary[7]) ? 24 : +_ary[7];
            var placeholder = _ary[8];
            this._inputForm(target_x, target_y, variables_id, max_count, if_switch_id, button_x, button_y, unit_font_size, placeholder);
        }
    };

    if (PluginManager.registerCommand) {
        PluginManager.registerCommand("111_InputForm", "show", function(args) {
            var { target_x, target_y, variables_id, max_count, if_switch_id, button_x, button_y, unit_font_size, placeholder } = args;
            this._inputForm(+target_x, +target_y, +variables_id, +max_count, +if_switch_id, +button_x, +button_y, +unit_font_size, placeholder);
        });
    }

    Game_Interpreter.prototype._inputForm = function(target_x, target_y, variables_id, max_count, if_switch_id, button_x, button_y, unit_font_size, placeholder) {
            var interpreter = this;
            var gui = {
                input : null ,
                submit : null ,
                is_pc : true ,
                init : function(){
                    this.is_pc = Utils.isNwjs();
                    this.create();
                    this.input.focus();
                    this.screenAdjust();
                } ,
                create : function(){
                    // 入力フォーム
                    this.input = document.createElement('input');
                    this.input.setAttribute('id', '_111_input');
                    if(max_count)this.input.setAttribute('maxlength', max_count);

                    if (placeholder === '$') {
                        placeholder = $gameVariables.value(variables_id);
                    }
                    this.input.setAttribute('value', placeholder || '');
                    document.body.appendChild(this.input);
                    // 送信ボタン
                    this.submit = document.createElement('input');
                    this.submit.setAttribute('type', 'submit');
                    this.submit.setAttribute('id', '_111_submit');
                    this.submit.setAttribute('value', '決定');
                    document.body.appendChild(this.submit);
                } ,
                success : function(){
                    $gameVariables.setValue(variables_id , this.input.value);
                    this.end();
                } ,
                cancel : function(){
                    $gameVariables.setValue(variables_id , this.input.value);
                    this.end();
                } ,
                start : function(){
                    interpreter.setWaitMode('input_form');
                    Input.clear();
                    Input.form_mode = true;
                    // SceneManager._scene.stop();
                } ,
                end : function(){
                    this.input.remove(); // document.body.removeChild(this.input);
                    this.submit.remove();
                    window.removeEventListener("resize", resizeEvent, false);
                    interpreter.setWaitMode('');
                    Input.form_mode = false;
                    clearInterval(_event);
                    // SceneManager._scene.start();
                } ,
                screenAdjust : function(){ // canvasの左上を基準にした位置に合わせる
                    var screen_x , screen_y;
                    var _canvas = document.getElementById('UpperCanvas') || document.getElementById('gameCanvas');
                    var rect = _canvas.getBoundingClientRect();
                    screen_x = rect.left;
                    screen_y = rect.top;
                    this.input.postionAdjust([screen_x,screen_y] , [target_x,target_y], unit_font_size);
                    this.submit.postionAdjust([screen_x,screen_y] , [target_x + button_x,target_y + button_y], unit_font_size);
                }
            }
            //
            gui.init();
            // 送信するイベントgui.input.onkeydown = function(e){
            gui.input.addEventListener("keydown" ,function(e){
                if(e.keyCode === 13){ // 決定キーで送信
                    Input.clear();
                    gui.success();
                    // 親へのイベント伝播を止める（documentのkeydownが反応しないように）
                    e.stopPropagation();
                }
            });
            gui.input.addEventListener("mousedown", stopPropagation); // 裏のゲーム画面のクリック暴発を防ぐ
            gui.input.addEventListener("touchstart", stopPropagation); // iOSでclickイベント取れない対策
            gui.submit.addEventListener("mousedown", stopPropagation); // 裏のゲーム画面のクリック暴発を防ぐ
            gui.submit.addEventListener("touchstart", stopPropagation); // iOSでclickイベント取れない対策
            gui.submit.addEventListener("click" ,function(){ // 送信ボタンクリック
                gui.success();
                return false;
            });
            // キャンセルするイベント
            if (if_switch_id) {
                var _event = setInterval(function(){
                    if($gameSwitches.value(if_switch_id)){
                        // clearInterval(_event);
                        gui.cancel();
                    }
                }, 1);
            }

            // webではウィンドー大きさ変わる度に%求め直すイベントもいる
            //if(! gui.is_pc){
                var resizeEvent = gui.screenAdjust.bind(gui);
                window.addEventListener("resize", resizeEvent, false);
            //}
            //
            gui.start();
    };
})();
