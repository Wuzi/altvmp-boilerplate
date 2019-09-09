/* eslint-disable */
declare namespace hashes {
  enum Weapon {
    AntiqueCavalryDagger = 24601201,
    BaseballBat = 2508868239,
    BrokenBottle = 4192643659,
    Crowbar = 2227010557,
    Fist = 2725352035,
    Flashlight = 2343591895,
    GolfClub = 1141786504,
    Hammer = 1317494643,
    Hatchet = 4191993645,
    BrassKnuckles = 3638508604,
    Knife = 2578778090,
    Machete = 3713923289,
    Switchblade = 3756226112,
    Nightstick = 1737195953,
    PipeWrench = 419712736,
    BattleAxe = 3441901897,
    PoolCue = 2484171525,
    StoneHatchet = 940833800,
    Pistol = 453432689,
    PistolMkII = 3219281620,
    CombatPistol = 1593441988,
    APPistol = 584646201,
    StunGun = 911657153,
    Pistol50 = 2578377531,
    SNSPistol = 3218215474,
    SNSPistolMkII = 2285322324,
    HeavyPistol = 3523564046,
    VintagePistol = 137902532,
    FlareGun = 1198879012,
    MarksmanPistol = 3696079510,
    HeavyRevolver = 3249783761,
    HeavyRevolverMkII = 3415619887,
    DoubleActionRevolver = 25487034,
    UpnAtomizer = 2939590305,
    MicroSMG = 324215364,
    SMG = 736523883,
    SMGMkII = 2024373456,
    AssaultSMG = 4024951519,
    CombatPDW = 171789620,
    MachinePistol = 3675956304,
    MiniSMG = 3173288789,
    UnholyHellbringer = 1198256469,
    PumpShotgun = 487013001,
    PumpShotgunMkII = 1432025498,
    SawedOffShotgun = 2017895192,
    AssaultShotgun = 3800352039,
    BullpupShotgun = 2640438543,
    Musket = 2828843422,
    HeavyShotgun = 984333226,
    DoubleBarrelShotgun = 401952761,
    SweeperShotgun = 317205821,
    AssaultRifle = 3220176749,
    AussaultRifleMkII = 961495388,
    CarbineRifle = 2210333304,
    CarbineRifleMkII = 4208062921,
    AdvancedRifle = 2937143193,
    SpecialCarbine = 3231910285,
    SpecialCarbineMkII = 2526821735,
    BullpupRifle = 2132975508,
    BullpupRifleMkII = 2228681469,
    CompactRifle = 1649403952,
    MG = 2634544996,
    CombatMG = 2144741730,
    CombatMGMkII = 3686625920,
    GusenbergSweeper = 1627465347,
    SniperRifle = 100416529,
    HeavySniper = 205991906,
    HeavySniperMkII = 177293209,
    MarksmanRifle = 3342088282,
    MarksmanRifleMkII = 1785463520,
    RPG = 2982836145,
    GrenadeLauncher = 2726580491,
    GrenadeLauncherSmoke = 13056645,
    Minigun = 1119849093,
    FireworkLauncher = 2138347493,
    Railgun = 1834241177,
    HomingLauncher = 1672152130,
    CompactGrenadeLauncher = 125959,
    Widowmaker = 3056410471,
    Grenade = 2481070269,
    BZGas = 2694266206,
    MolotovCocktail = 4256991824,
    StickyBomb = 1233104067,
    ProximityMines = 615608432,
    Snowballs = 741814745,
    PipeBombs = 2874559379,
    Baseball = 126349499,
    TearGas = 3125143736,
    Flare = 600439132,
    JerryCan = 314298409,
    Parachute = 1940617049,
    FireExtinguisher = 1532858877
  }
}

declare namespace altmath
{
  class vec3 {
    x: number;
    y: number;
    z: number;
  }
}

type Integer = number;
type Int32 = Integer;
type Uint32 = Integer;
type Primitive = undefined|null;
type Value = any;
type int = Integer;
type float = number;
type Vector3Native = altmath.vec3;
type Vector3NativePtr = Vector3Native; // To be corrected
type charPtr = string; // To be corrected
type _BoolPtr = boolean; // To be corrected
type intPtr = number; // To be corrected
type floatPtr = float; // To be corrected


declare module 'alt' {
  export class Entity extends WorldObject {
    id: Integer;
    model: Integer;
    rot: Record<string, any>;

    getSyncedMeta(key: string): Value;
  }

  export class WorldObject extends BaseObject {
    dimension: Integer;
    pos: Record<string, any>;

  }

  export class BaseObject {
    type: Integer;

    getMeta(key: string): Value;
    setMeta(key: string, p1: any): void;
  }

  export class Player extends Entity {
    name: string;
    scriptID: Integer;
    vehicle: Vehicle|Primitive;

    addWeaponComponent(weaponHash: number, componentHash: number): void;
    getCurrentWeapon(): number;
    getWeaponTintIndex(weaponHash: number): number;
    giveWeapon(weaponHash: number, ammoCount: number): void;
    removeAllWeapons(): void;
    removeWeapon(weaponHash: number): boolean;
    removeWeaponComponent(weaponHash: number, componentHash: number): void;
    setCurrentWeapon(weaponHash: number): void;
    setWeaponTintIndex(weaponHash: number, tintIndex: number): void;
    weaponHasComponent(weaponHash: number, componentHash: number): boolean;
  }

  export class Vehicle extends Entity {
    gear: Integer;
    rpm: number;
    scriptID: Integer;
    speed: number;

  }

  export class WebView extends BaseObject {
    isVisible: boolean;
    url: string;

    constructor(url: string, modelHash: Integer, targetTexture: string);
    destroy(): void;
    emit(evName: string, ...args: any[]): void;
    execJS(p0: string): void;
    focus(): void;
    on(evName: string, p1Fn: Function): void;
    unfocus(): void;
  }

  export class Blip {
    alpha: Int32;
    asMissionCreator: boolean;
    bright: boolean;
    category: Int32;
    color: Int32;
    crewIndicatorVisible: boolean;
    flashInterval: Int32;
    flashTimer: Int32;
    flashes: boolean;
    flashesAlternate: boolean;
    friendIndicatorVisible: boolean;
    friendly: boolean;
    gxtName: string;
    headingIndicatorVisible: boolean;
    highDetail: boolean;
    name: string;
    number: Int32;
    outlineIndicatorVisible: boolean;
    position: Array<any>;
    priority: Int32;
    pulse: boolean;
    rotation: number;
    route: boolean;
    routeColor: Uint32;
    scale: number;
    secondaryColor: Uint32;
    shortRange: boolean;
    showCone: boolean;
    shrinked: boolean;
    sprite: Int32;
    tickVisible: boolean;

    fade(duration: Uint32, p1: Uint32): void;
    remove(): void;
  }

  export class AreaBlip extends Blip {

    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  export class RadiusBlip extends Blip {

    constructor(x: number, y: number, z: number, radius: number);
  }

  export class PointBlip extends Blip {

    constructor(x: number, y: number, z: number);
  }

  var cursorPos: Record<string, any>;

  /**
      Getter:
      type: 'variable',
      name: 'players',
      readOnly: true,
      description: 'Returns an array of players'
      returns: {
        dataType: 'array',
        elementsDataType: 'Player'
      }
      */
  var players: Array<any>;

  /**
      Getter:
      type: 'variable',
      name: 'vehicles',
      readOnly: true,
      description: 'Returns an array of vehicles'
      returns: {
        dataType: 'array',
        elementsDataType: 'Vehicle'
      }
      */
  var vehicles: Array<any>;


  /**
      type: 'function',
      name: 'addGxtText',
      description: 'Adds GXT text',
      parameters: [
        {
          name: 'key',
          dataType: 'string',
          description: 'Key of the GXT text'
        },
        {
          name: 'text',
          dataType: 'string',
          description: 'Text'
        },
      ]
      */
  export function addGxtText(key: string, textValue: string): void;

  /**
      type: 'function',
      name: 'beginScaleformMovieMethodMinimap',
      description: 'Works like GRAPHICS::_BEGIN_SCALEFORM_MOVIE_METHOD_HUD_COMPONENT native',
      parameters: [
        {
          name: 'method',
          dataType: 'string',
          description: 'Method name'
        }
      ]
      */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

  /**
      type: 'function',
      name: 'clearInterval',
      description: 'Cancels a timed, repeating action which was previously established by a call to setInterval (MDN)',
      parameters: [
        {
          name: 'intervalID',
          dataType: 'int',
          description: 'The identifier of the repeated action you want to cancel'
        }
      ]
      */
  /**
      type: 'function',
      name: 'clearTimeout',
      description: 'Cancels a timeout previously established by calling setTimeout (MDN)',
      parameters: [
        {
          name: 'timeoutID',
          dataType: 'int',
          description: 'The identifier of the timeout you want to cancel'
        }
      ]
      */
  export function clearInterval(p0: number|Uint32): void;

  /**
      type: 'function',
      name: 'clearInterval',
      description: 'Cancels a timed, repeating action which was previously established by a call to setInterval (MDN)',
      parameters: [
        {
          name: 'intervalID',
          dataType: 'int',
          description: 'The identifier of the repeated action you want to cancel'
        }
      ]
      */
  /**
      type: 'function',
      name: 'clearTimeout',
      description: 'Cancels a timeout previously established by calling setTimeout (MDN)',
      parameters: [
        {
          name: 'timeoutID',
          dataType: 'int',
          description: 'The identifier of the timeout you want to cancel'
        }
      ]
      */
  export function clearTimeout(p0: number|Uint32): void;

  /**
      type: 'function',
      name: 'disableVoiceActivation',
      description: 'Disables Voice Activation',
      */
  export function disableVoiceActivation(): void;

  /**
      type: 'function',
      name: 'disableVoiceInput',
      description: 'Disables Voice Input',
      */
  export function disableVoiceInput(): boolean;

  /**
      type: 'function',
      name: 'disableVoiceTest',
      description: 'Disables Voice Test',
      */
  export function disableVoiceTest(): boolean;

  /**
      type: 'function',
      name: 'getDiscordInfo',
      description: 'Returns information about user from Discord',
      returns: {
        dataType: 'object',
        description: 'Discord Information Object',
        properties: {
          id: {
            dataType: 'int',
            description: "User's Snowflake ID"
          },
          name: {
            dataType: 'string',
            description: "User's name"
          },
          descriminator: {
            dataType: 'string',
            description: "User's Discriminator"
          },
          avatar: {
            dataType: 'string',
            description: "User's avatar URL"
          }
        }
      }
      */
  export function discordInfo(): Record<string, any>|Primitive;

  /**
       * Emit a client script event
       * */
  export function emit(name: string, ...args: any[]): void;

  /**
      type: 'function',
      name: 'emitServer',
      description: 'Emit event to server',
      parameters: [
        {
          name: 'eventName',
          dataType: 'string',
          description: 'Name of the event'
        },
        {
          name: 'args',
          spread: true,
          optional: true,
          dataType: 'object'
        }
      ]
      */
  export function emitServer(name: string, ...args: any[]): void;

  /**
      type: 'function',
      name: 'enableVoiceActivation',
      description: 'Enables Voice Activation',
      parameters: [
        {
          name: 'activateOn',
          dataType: 'double',
          description: ''
        },
        {
          name: 'activationTime',
          dataType: 'int',
          description: ''
        }
      ]
      */
  export function enableVoiceActivation(activateOn: number, activationTime: Integer): void;

  /**
      type: 'function',
      name: 'enableVoiceInput',
      description: 'Enables Voice Input',
      */
  export function enableVoiceInput(): boolean;

  /**
      type: 'function',
      name: 'enableVoiceTest',
      description: 'Enables Voice Test',
      */
  export function enableVoiceTest(): boolean;

  /**
      type: 'function',
      name: 'gameControlsEnabled',
      description: 'Returns a bool if is game controls enabled',
      returns: {
        dataType: 'bool',
        description: 'If is game controls enabled'
      }
      */
  export function gameControlsEnabled(): boolean;

  /**
      type: 'function',
      name: 'getGxtText',
      description: 'Gets a GXT text',
      parameters: [
        {
          name: 'key',
          dataType: 'string',
          description: 'Key of the GXT text'
        }
      ],
      returns: {
        dataType: 'string',
        description: 'Text of GTX text'
      }
      */
  export function getGxtText(key: string): string;

  /**
      type: 'function',
      name: 'getLicenseHash',
      description: 'Returns license hash',
      returns: {
        dataType: 'string',
        description: 'License hash'
      }
      */
  export function getLicenseHash(): string;

  /**
      type: 'function',
      name: 'getLocalPlayer',
      description: 'Returns a local player',
      returns: {
        dataType: 'Player',
        description: 'Local Player object'
      }
      */
  export function getLocalPlayer(): Player;

  /**
      type: 'function',
      name: 'getMicLevel',
      description: 'Returns microphone level',
      returns: {
        dataType: 'double',
        description: 'Microphone Level'
      }
      */
  export function getMicLevel(): number;
  export function getMsPerGameMinute(): Integer;

  //Voice functions
  /**
      type: 'function',
      name: 'initVoice',
      description: 'Initializes voice system',
      */
  export function initVoice(): boolean;

  /**
      type: 'function',
      name: 'isInSandbox',
      description: 'Toggles camera freeze state',
      returns: [
        {
          dataType: 'bool',
          description: 'If is in sandbox'
        }
      ]
      */
  export function isInSandbox(): boolean;

  /**
      type: 'function',
      name: 'isTextureExistInArchetype',
      description: 'Checks if target texture exists in archetype',
      parameters: [
        {
          name: 'model',
          dataType: 'int',
          description: 'Model Hash'
        },
        {
          name: 'textureName',
          dataType: 'string',
          description: 'Target texture name'
        }
      ]
      */
  export function isTextureExistInArchetype(modelHash: Integer, modelName: string): boolean;

  /**
      type: 'function',
      name: 'loadModel',
      description: 'Loads the model',
      parameters: [
        {
          name: 'model',
          dataType: 'int',
          description: 'Model Hash'
        }
      ]
      */
  export function loadModel(modelHash: Integer): void;

  /**
      type: 'function',
      name: 'log',
      description: 'Log a message',
      parameters: [
        {
          name: 'args',
          spread: true,
          dataType: 'object'
        }
      ]
      */
  export function log(...val: any[]): void;

  /**
      type: 'function',
      name: 'logError',
      description: 'Log a error message',
      parameters: [
        {
          name: 'args',
          spread: true,
          dataType: 'object'
        }
      ]
      */
  export function logError(...val: any[]): void;

  /**
      type: 'function',
      name: 'logWarning',
      description: 'Log a warning message',
      parameters: [
        {
          name: 'args',
          spread: true,
          dataType: 'object'
        }
      ]
      */
  export function logWarning(...val: any[]): void;

  /**
      type: 'function',
      name: 'nextTick',
      description: 'Executes code on next tick',
      parameters: [
        {
          name: 'function',
          dataType: 'function',
          description: 'A function to be executed on next tick'
        }
      ]
      */
  export function nextTick(p0Fn: Function): void;

  /**
      type: 'function',
      name: 'on',
      description: 'Event handler function for events sent from system or other resource',
      parameters: [
        {
          name: 'eventName',
          dataType: 'string',
          description: 'Name of the event'
        },
        {
          name: 'callback',
          dataType: 'function',
          description: 'Callback function',
          arguments: [
            {
              name: 'args',
              spread: true,
              dataType: 'object'
            }
          ]
        }
      ]
      */
  export function on(evName: string, p1Fn: Function): void;

  /**
      type: 'function',
      name: 'onServer',
      description: 'Event handler function for events sent by server',
      parameters: [
        {
          name: 'eventName',
          dataType: 'string',
          description: 'Name of the event'
        },
        {
          name: 'callback',
          dataType: 'function',
          description: 'Callback function',
          arguments: [
            {
              name: 'args',
              spread: true,
              dataType: 'object'
            }
          ]
        }
      ]
      */
  export function onServer(evName: string, p1Fn: Function): void;

  /**
      type: 'function',
      name: 'removeGxtText',
      description: 'Removes a GXT text',
      parameters: [
        {
          name: 'key',
          dataType: 'string',
          description: 'Key of the GXT text'
        }
      ]
      */
  export function removeGxtText(key: string): void;

  /**
      type: 'function',
      name: 'removeIpl',
      description: 'Removes the IPL file',
      parameters: [
        {
          name: 'iplName',
          dataType: 'string',
          description: 'Name of IPL'
        }
      ]
      */
  export function removeIpl(iplName: string): void;

  /**
      type: 'function',
      name: 'requestIpl',
      description: 'Requests the IPL file',
      parameters: [
        {
          name: 'iplName',
          dataType: 'string',
          description: 'Name of IPL'
        }
      ]
      */
  export function requestIpl(iplName: string): void;

  /**
      type: 'function',
      name: 'setCamFrozen',
      description: 'Toggles camera freeze state',
      parameters: [
        {
          name: 'state',
          dataType: 'bool',
          description: '`true` for freeze camera, `false` to unfreeze camera'
        }
      ]
      */
  export function setCamFrozen(state: boolean): void;

  /**
      type: 'function',
      name: 'setInterval',
      description: 'Repeatedly calls a function, with a fixed time delay between each call (MDN)',
      parameters: [
        {
          name: 'function',
          dataType: 'function',
          description: 'A function to be executed every delay milliseconds'
        },
        {
          name: 'delay',
          dataType: 'int',
          description: 'The time, in milliseconds, the timer should delay in between executions of the specified function or code'
        }
      ],
      returns: {
        dataType: 'int',
        description: 'Non-zero value which identifies the timer created by the call to setInterval this value can be passed to clearInterval to cancel the timeout'
      }
      */
  export function setInterval(idFn: Function, id: number|Uint32): Integer;

  /**
      type: 'function',
      name: 'setMicGain',
      description: 'Sets Microphone Gain',
      parameters: [
        {
          name: 'micGain',
          dataType: 'double',
          description: 'Gain'
        }
      ]
      */
  export function setMicGain(micGain: number): void;

  /**
      type: 'function',
      name: 'setModel',
      description: 'Set model for local player',
      parameters: [
        {
          name: 'modelName',
          dataType: 'string',
          description: 'Name of Model'
        }
      ]
      */
  export function setModel(modelName: string): void;

  /**
      type: 'function',
      name: 'setMsPerGameMinute',
      description: 'Set milliseconds count in game minute',
      parameters: [
        {
          name: 'msCount',
          dataType: 'int',
          description: 'Milliseconds in game minute'
        }
      ]
      */
  export function setMsPerGameMinute(ms: Integer): void;

  /**
      type: 'function',
      name: 'setTimeout',
      description: 'Sets a timer which executes a function once the timer expires (MDN)',
      parameters: [
        {
          name: 'function',
          dataType: 'function',
          description: 'A function to be executed after the timer expires'
        },
        {
          name: 'delay',
          dataType: 'int',
          description: 'The time, in milliseconds, the timer should wait before the specified function is executed'
        }
      ],
      returns: {
        dataType: 'int',
        description: 'Positive integer value which identifies the timer created by the call to setTimeout this value can be passed to clearTimeout to cancel the timeout'
      }
      */
  export function setTimeout(idFn: Function, id: number|Uint32): Integer;

  /**
      type: 'function',
      name: 'showCursor',
      description: 'Toggles a cursor visibility',
      parameters: [
        {
          name: 'state',
          dataType: 'bool',
          description: '`true` for show cursor, `false` to hide cursor'
        }
      ]
      */
  export function showCursor(p0: boolean): void;

  /**
      type: 'function',
      name: 'toggleGameControls',
      description: 'Toggles a game controls',
      parameters: [
        {
          name: 'state',
          dataType: 'bool',
          description: '`true` for enable controls, `false` to disable controls'
        }
      ]
      */
  export function toggleGameControls(state: boolean): void;

  /**
      type: 'function',
      name: 'wait',
      description: 'Waits in script',
      parameters: [
        {
          name: 'waitTime',
          dataType: 'int',
          description: 'Time in milliseconds'
        }
      ]
      */
  export function wait(waitTime: Integer): void;
}

declare module 'natives' {

  export function _0x0032A6DBA562C518(): void;
  export function _0x01095C95CD46B624(p0: int): boolean;
  export function _0x011883F41211432A(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function _0x0150B6FF25A9E2E5(): void;
  export function _0x01708E8DD3FF8C65(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): int;
  export function _0x017568A8182D98A6(p0: int): int;
  export function _0x01ABCE5E7CBDA196(): int;
  export function _0x01BB4D577D38BD9E(p0: int, p1: float): void;
  export function _0x0218BA067D249DEA(): void;
  export function _0x0225778816FDC28C(p0: float): void;
  export function _0x02369D5C8A51FDCF(p0: boolean): void;
  export function _0x02398B627547189C(p0: int, p1: boolean): void;
  export function _0x024A60DEB0EA69F0(p0: int, p1: int, p2: float, p3: int): boolean;
  export function _0x02A8BEC6FD9AF660(p0: intPtr, p1: int): [boolean, intPtr];
  export function _0x02AC28F3A01FA04A(p0: float): int;
  export function _0x02ADA21EA2F6918F(): int;
  export function _0x02DEAAC8F8EA7FE7(p0: charPtr): [void, charPtr];
  export function _0x02E93C796ABD3A97(p0: boolean): void;
  export function _0x031ACB6ABA18C729(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function _0x03300B57FCAC6DDB(p0: boolean): void;
  export function _0x0378C08504160D0D(p0: int): boolean;
  export function _0x03C27E13B42A0E82(p0: int, p1: float, p2: boolean, p3: boolean): void;
  export function _0x03EA03AF85A85CB7(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: int): boolean;
  export function _0x03F1A106BDA7DD3E(): void;
  export function _0x03FC694AE06C5A20(): void;
  export function _0x044DBAD7A7FA2BE5(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function _0x04655F9D075D0AE5(p0: boolean): void;
  export function _0x047CBED6F6F8B63C(): void;
  export function _0x052991E59076E4E4(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x06087579E7AA85A9(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float): boolean;
  export function _0x061CB768363D6424(p0: int, p1: boolean): void;
  export function _0x0626A247D2405330(): boolean;
  export function _0x062D5EAD4DA2FA6A(): void;
  export function _0x063AE2B2CC273588(p0: int, p1: boolean): void;
  export function _0x06462A961E94B67C(): void;
  export function _0x06582AFF74894C75(p0: int, p1: boolean): void;
  export function _0x06A320535F5F0248(p0: int): void;
  export function _0x06A3524161C502BA(p0: intPtr): [void, intPtr];
  export function _0x06C0023BED16DD6B(p0: int, p1: boolean): void;
  export function _0x06EE9048FD080382(p0: boolean): void;
  export function _0x06F761EA47C1D3ED(p0: boolean): void;
  export function _0x075F1D57402C93BA(): int;
  export function _0x07C313F94746702C(p0: int): int;
  export function _0x07C61676E5BB52CD(p0: int): int;
  export function _0x07DD29D5E22763F1(p0: intPtr): [boolean, intPtr];
  export function _0x07FB139B592FA687(p0: float, p1: float, p2: float, p3: float): boolean;
  export function _0x0811381EF5062FEC(p0: int): void;
  export function _0x0923DBF87DFF735E(p0: float, p1: float, p2: float): void;
  export function _0x098760C7461724CD(): void;
  export function _0x09C0403ED9A751C2(p0: int): boolean;
  export function _0x0A123435A26C36CD(): void;
  export function _0x0A436B8643716D14(): void;
  export function _0x0A46AF8A78DC5E0A(): void;
  export function _0x0A60017F841A54F2(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x0A6A279F3AA4FD70(p0: int, p1: boolean): void;
  export function _0x0A9F2A468B328E74(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x0ABC54DE641DC0FC(p0: intPtr): [int, intPtr];
  export function _0x0AD9710CEE2F590F(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): int;
  export function _0x0AD9E8F87FF7C16F(p0: int, p1: boolean): void;
  export function _0x0AE73D8DF3A762B2(p0: boolean): void;
  export function _0x0AFCE529F69B21FF(): int;
  export function _0x0B203B4AFDE53A4F(p0: intPtr, p1: intPtr, p2: boolean): [int, intPtr, intPtr];
  export function _0x0B40ED49D7D6FF84(): void;
  export function _0x0B568201DD99F0EB(p0: boolean): void;
  export function _0x0B919E1FB47CC4E0(p0: float): void;
  export function _0x0BC3144DEB678666(p0: int): boolean;
  export function _0x0BCA1D2C47B0D269(p0: int, p1: int, p2: float): void;
  export function _0x0BF3B3BD47D79C08(p0: int, p1: int): void;
  export function _0x0C0C4E81E1AC60A0(): int;
  export function _0x0C15B0E443B2349D(): int;
  export function _0x0C1F7D49C39D2289(): int;
  export function _0x0C5A80A9E096D529(p0: int, p1: charPtr, p2: int, p3: int, p4: int, p5: int): [boolean, charPtr];
  export function _0x0C978FDA19692C2C(p0: boolean, p1: boolean): void;
  export function _0x0CD9AB83489430EA(p0: boolean): int;
  export function _0x0CDDA42F9E360CA6(p0: int, p1: boolean): void;
  export function _0x0CF54F20DE43879C(p0: int): void;
  export function _0x0D01D20616FC73FB(p0: int, p1: int): void;
  export function _0x0D6CA79EEEBD8CA3(): int;
  export function _0x0D77A82DC2D0DA59(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function _0x0DBD5D7E3C5BEC3B(): int;
  export function _0x0E4299C549F0D1F1(p0: boolean): void;
  export function _0x0EDE326D47CD0F3E(p0: int, p1: int): boolean;
  export function _0x0F3B4D4E43177236(p0: int, p1: boolean): void;
  export function _0x0F70731BACCFBB96(): boolean;
  export function _0x0F73393BAC7E6730(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function _0x0FB82563989CF4FB(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x0FDE9DBFC0A6BC65(p0: intPtr): [void, intPtr];
  export function _0x0FF2862B61A58AF9(p0: boolean): void;
  export function _0x10655FAB9915623D(p0: int, p1: int): void;
  export function _0x1072F115DAB0717E(p0: boolean, p1: boolean): void;
  export function _0x108BE26959A9D9BB(p0: boolean): void;
  export function _0x1093408B4B9D1146(p0: int, p1: float): void;
  export function _0x109697E2FFBAC8A1(): boolean;
  export function _0x10BD227A753B0D84(): int;
  export function _0x110F526AB784111F(p0: int, p1: float): void;
  export function _0x1121BFA1A1A522A8(): int;
  export function _0x113E6E3E50E286B0(p0: int): void;
  export function _0x1153FA02A659051C(): void;
  export function _0x116FB94DC4B79F17(p0: charPtr): [void, charPtr];
  export function _0x1171A97A3D3981B6(p0: intPtr, p1: intPtr, p2: int, p3: int): [boolean, intPtr, intPtr];
  export function _0x1185A8087587322C(p0: boolean): void;
  export function _0x11B56FBBF7224868(p0: charPtr): [void, charPtr];
  export function _0x11D1E53A726891FE(p0: int): boolean;
  export function _0x11FA5D3479C7DD47(p0: int): void;
  export function _0x11FF1C80276097ED(p0: charPtr, p1: int, p2: int): [void, charPtr];
  export function _0x120364DE2845DAF8(p0: intPtr, p1: int): [int, intPtr];
  export function _0x1216E0BFA72CC703(p0: int, p1: int): void;
  export function _0x121FB4DDDC2D5291(p0: int, p1: int, p2: int, p3: float): void;
  export function _0x12561FCBB62D5B9C(p0: int): void;
  export function _0x1280804F7CFD2D6C(p0: int): void;
  export function _0x129466ED55140F8D(p0: int, p1: boolean): void;
  export function _0x12995F2E53FFA601(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int, p9: int, p10: int, p11: int): void;
  export function _0x12B6281B6C6706C0(p0: boolean): int;
  export function _0x12DED8CA53D47EA5(p0: float): void;
  export function _0x1327E2FE9746BAEE(p0: int): boolean;
  export function _0x13518FF1C6B28938(p0: int): boolean;
  export function _0x135F9B7B7ADD2185(p0: intPtr): [boolean, intPtr];
  export function _0x13B350B8AD0EEE10(): void;
  export function _0x13C4B962653A5280(): int;
  export function _0x140E6A44870A11CE(): void;
  export function _0x14590DDBEDB1EC85(p0: int): boolean;
  export function _0x14621BB1DF14E2B2(): void;
  export function _0x14832BF2ABA53FC5(): int;
  export function _0x14922ED3E38761F0(): int;
  export function _0x149AEE66F0CB3A99(p0: float, p1: float): void;
  export function _0x14C9FDCC41F81F63(p0: boolean): void;
  export function _0x14D29BB12D47F68C(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function _0x14E0B2D1AD1044E0(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0x14FC5833464340A8(): void;
  export function _0x152D90E4C1B4738A(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function _0x158EC424F35EC469(p0: charPtr, p1: boolean, p2: charPtr): [boolean, charPtr, charPtr];
  export function _0x15E33297C3E8DC60(p0: int): void;
  export function _0x15E69E2802C24B8D(p0: float): void;
  export function _0x15FF52B809DB2353(p0: int): boolean;
  export function _0x1600FD8CF72EBC12(p0: float): void;
  export function _0x160AA1B32F6139B8(p0: int): int;
  export function _0x1612C45F9E3E0D44(): void;
  export function _0x162C23CA83ED0A62(p0: int): boolean;
  export function _0x162F9D995753DC19(): float;
  export function _0x163F8B586BC95F2A(p0: int, p1: float, p2: int, p3: float, p4: float, p5: float, p6: Vector3NativePtr, p7: int): [int, Vector3NativePtr];
  export function _0x1654F24A88A8E3FE(p0: charPtr): [void, charPtr];
  export function _0x1670F8D05056F257(p0: int): int;
  export function _0x16A304E6CB2BFAB9(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x16B5E274BDE402F8(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float): void;
  export function _0x16DA8172459434AA(): int;
  export function _0x16F46FB18C8009E4(p0: int, p1: int, p2: int, p3: int, p4: int): int;
  export function _0x171DF6A0C07FB3DC(p0: int, p1: int): int;
  export function _0x17440AA15D1D3739(): void;
  export function _0x1761DC5D8471CBAA(p0: int, p1: int, p2: int): boolean;
  export function _0x17AD8C9706BDD88A(p0: int): void;
  export function _0x17DF68D720AA77F8(p0: int): boolean;
  export function _0x17E0198B3882C2CB(): void;
  export function _0x17FCA7199A530203(): int;
  export function _0x182F266C2D9E2BEB(p0: int, p1: float): void;
  export function _0x18EB48CFC41F2EA0(p0: int, p1: float): void;
  export function _0x190428512B240692(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
  export function _0x192547247864DFDD(p0: int, p1: boolean): void;
  export function _0x19853B5B17D77BCA(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x1989C6E6F67E76A8(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0x19AF7ED9B9D23058(): void;
  export function _0x19BFED045C647C49(p0: int): boolean;
  export function _0x19CAFA3C87F7C2FF(): int;
  export function _0x1A092BB0C3808B96(p0: int, p1: boolean): void;
  export function _0x1A330D297AAC6BC1(p0: int, p1: int): void;
  export function _0x1A78AD3D8240536F(p0: int, p1: boolean): void;
  export function _0x1A8E2C8B9CF4549C(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function _0x1AA8A837D2169D94(p0: int, p1: boolean): void;
  export function _0x1ACCFBA3D8DAB2EE(p0: int, p1: int): int;
  export function _0x1AD5B71586B94820(p0: int, p1: intPtr, p2: int): [boolean, intPtr];
  export function _0x1B0B4AEED5B9B41C(p0: float): void;
  export function _0x1B2366C3F2A5C8DF(): int;
  export function _0x1B857666604B1A74(p0: boolean): void;
  export function _0x1BB299305C3E8C13(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x1BBC135A4D25EDDE(p0: boolean): void;
  export function _0x1C073274E065C6D2(p0: int, p1: boolean): void;
  export function _0x1C4FC5752BCD8E48(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float): void;
  export function _0x1CAE5D2E3F9A07F0(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function _0x1CBA05AE7BD7EE05(p0: float): void;
  export function _0x1D4446A62D35B0D0(p0: int, p1: int): int;
  export function _0x1D4DC17C38FEAFF0(): int;
  export function _0x1D610EB0FEA716D9(p0: int): boolean;
  export function _0x1D97D1E3A70A649F(p0: int, p1: boolean): void;
  export function _0x1DD2139A9A20DCE8(): boolean;
  export function _0x1DE0F5F50D723CAA(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0x1E77FA7A62EE6C4C(p0: int): int;
  export function _0x1E9057A74FD73E23(): void;
  export function _0x1E98817B311AE98A(p0: int): int;
  export function _0x1EAC5F91BCBC5073(p0: boolean): void;
  export function _0x1EAE0A6E978894A2(p0: int, p1: boolean): void;
  export function _0x1EAE6DD17B7A5EFA(p0: int): void;
  export function _0x1EE7D8DF4425F053(p0: int): void;
  export function _0x1F1E9682483697C7(p0: int, p1: int): boolean;
  export function _0x1F2300CB7FA7B7F6(): int;
  export function _0x1F2E4E06DEA8992B(p0: int, p1: boolean): void;
  export function _0x1F3F018BC3AFA77C(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int): int;
  export function _0x1F9FB66F3A3842D2(p0: int, p1: boolean): void;
  export function _0x1FC289A0C3FF470F(p0: boolean): int;
  export function _0x1FF6BF9A63E5757F(): void;
  export function _0x2016C603D6B8987C(p0: int, p1: boolean): void;
  export function _0x206BC5DC9D1AC70A(p0: int, p1: boolean): void;
  export function _0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
  export function _0x208784099002BC30(p0: charPtr, p1: int): [void, charPtr];
  export function _0x20C6C7E4EB082A7F(p0: boolean): void;
  export function _0x20FE7FDFEEAD38C0(): void;
  export function _0x2107A3773771186D(): int;
  export function _0x21115BCD6E44656A(p0: int, p1: boolean): void;
  export function _0x211C4EF450086857(): void;
  export function _0x214CD562A939246A(): boolean;
  export function _0x21973BBF8D17EDFA(p0: int, p1: int): void;
  export function _0x21C235BC64831E5A(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean): Vector3Native;
  export function _0x21D04D7BC538C146(p0: int): boolean;
  export function _0x21E253A7F8DA5DFB(p0: charPtr): [void, charPtr];
  export function _0x2201C576FACAEBE8(p0: int, p1: charPtr, p2: int): [void, charPtr];
  export function _0x2208438012482A1A(p0: int, p1: boolean, p2: boolean): void;
  export function _0x225798743970412B(p0: intPtr): [boolean, intPtr];
  export function _0x228E5C6AD4D74BFD(p0: boolean): void;
  export function _0x22A249A53034450A(p0: boolean): void;
  export function _0x22DA66936E0FFF37(p0: int): boolean;
  export function _0x2302C0264EA58D31(): void;
  export function _0x2311DD7159F00582(p0: int, p1: boolean): void;
  export function _0x23227DF0B2115469(): void;
  export function _0x237D5336A9A54108(p0: int): boolean;
  export function _0x23B59D8912F94246(): void;
  export function _0x23BA6B0C2AD7B0D3(p0: boolean): void;
  export function _0x23F09EADC01449D6(p0: boolean): boolean;
  export function _0x241FCA5B1AA14F75(): boolean;
  export function _0x2432784ACA090DA4(p0: int): boolean;
  export function _0x24409FC4C55CB22D(p0: int): int;
  export function _0x247ACBC4ABBC9D1C(p0: boolean): void;
  export function _0x2485D34E50A22E84(p0: float, p1: float, p2: float): void;
  export function _0x24A49BEAF468DC90(p0: int, p1: intPtr, p2: int, p3: int, p4: int): [boolean, intPtr];
  export function _0x24E4E51FC16305F9(): int;
  export function _0x25361A96E0F7E419(p0: int, p1: int, p2: int, p3: int): int;
  export function _0x25367DE49D64CF16(p0: int, p1: boolean): void;
  export function _0x25615540D894B814(p0: int, p1: boolean): void;
  export function _0x2587A48BC88DFADF(p0: boolean): void;
  export function _0x25B99872D588A101(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): int;
  export function _0x25D990F8E0E3F13C(): void;
  export function _0x25F87B30C382FCA7(): void;
  export function _0x25FC3E33A31AD0C9(p0: boolean): void;
  export function _0x260EE4FDBDF4DB01(p0: int): float;
  export function _0x261E97AD7BCF3D40(p0: boolean): void;
  export function _0x2632482FD6B9AB87(): void;
  export function _0x265635150FB0D82E(): void;
  export function _0x267C78C60E806B9A(p0: int, p1: boolean): void;
  export function _0x26903D9CD1175F2C(p0: int, p1: int): int;
  export function _0x26AF0E8E30BD2A2C(p0: int): boolean;
  export function _0x26D7399B9587FE89(p0: int): void;
  export function _0x26F07DD83A5F7F98(): int;
  export function _0x2708FC083123F9FF(): void;
  export function _0x271017B9BA825366(p0: int, p1: boolean): void;
  export function _0x271401846BD26E92(p0: boolean, p1: boolean): void;
  export function _0x271C9D3ACA5D6409(p0: int): boolean;
  export function _0x2735233A786B1BEF(p0: int, p1: float): void;
  export function _0x274A1519DFC1094F(p0: intPtr, p1: boolean, p2: intPtr): [boolean, intPtr, intPtr];
  export function _0x279D50DE5652D935(p0: int, p1: boolean): void;
  export function _0x27B926779DEB502D(p0: int, p1: boolean): boolean;
  export function _0x27CB772218215325(): void;
  export function _0x27CFB1B1E078CB2D(): void;
  export function _0x27E32866E9A5C416(p0: float): void;
  export function _0x27FEB5254759CDE3(p0: charPtr, p1: boolean): [boolean, charPtr];
  export function _0x2801D0012266DF07(p0: int): void;
  export function _0x280C7E3AC7F56E90(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function _0x283B6062A2C01E9B(): void;
  export function _0x287F1F75D2803595(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x288DF530C92DAD6F(p0: int, p1: float): void;
  export function _0x293220DA1B46CEBC(p0: float, p1: float, p2: boolean): void;
  export function _0x299EF3C576773506(): int;
  export function _0x29C24BFBED8AB8FB(p0: float, p1: float): float;
  export function _0x2A2173E46DAECD12(p0: int, p1: int): void;
  export function _0x2A25ADC48F87841F(): int;
  export function _0x2A2A52824DB96700(p0: intPtr): [void, intPtr];
  export function _0x2A56C06EBEF2B0D9(p0: charPtr, p1: int, p2: int): [void, charPtr];
  export function _0x2A7776C709904AB0(p0: int): int;
  export function _0x2A893980E96B659A(p0: boolean): boolean;
  export function _0x2A8F319B392E7B3F(p0: int, p1: float): void;
  export function _0x2AED6301F67007D5(p0: int): void;
  export function _0x2B51EDBEFC301339(p0: int, p1: charPtr): [boolean, charPtr];
  export function _0x2B5AA717A181FB4C(p0: int, p1: boolean): void;
  export function _0x2B5E102E4A42F2BF(): int;
  export function _0x2B626A0150E4D449(): int;
  export function _0x2B6747FAA9DB9D6B(p0: int, p1: boolean): int;
  export function _0x2B694AFCF64E6994(p0: int, p1: boolean): void;
  export function _0x2B69F5074C894811(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x2BE4BC731D039D5A(p0: int, p1: boolean): void;
  export function _0x2BF66D2E7414F686(): int;
  export function _0x2BF72AD5B41AA739(): void;
  export function _0x2C2E3DC128F44309(p0: int, p1: boolean): void;
  export function _0x2C328AF17210F009(p0: float): void;
  export function _0x2C42340F916C5930(p0: int): int;
  export function _0x2C4A1590ABF43E8B(p0: int, p1: boolean): void;
  export function _0x2C8CBFE1EA5FC631(p0: int): int;
  export function _0x2C96CDB04FCA358E(p0: float): void;
  export function _0x2CC848A861D01493(): int;
  export function _0x2D4259F1FEB81DA9(p0: float, p1: float, p2: float, p3: float): int;
  export function _0x2D5DC831176D0114(p0: int): boolean;
  export function _0x2DF9038C90AD5264(p0: float, p1: float, p2: float, p3: float, p4: float, p5: int, p6: float, p7: int): void;
  export function _0x2E0BF682CC778D49(p0: int): boolean;
  export function _0x2E22FEFA0100275E(): boolean;
  export function _0x2E65248609523599(p0: int, p1: int, p2: int): void;
  export function _0x2E89990DDFF670C3(p0: int, p1: int): int;
  export function _0x2EAC52B4019E2782(): int;
  export function _0x2ED61456317B8178(): void;
  export function _0x2F057596F2BD0061(): int;
  export function _0x2F09F7976C512404(p0: float, p1: float, p2: float, p3: float): boolean;
  export function _0x2F137B508DE238F2(p0: boolean): void;
  export function _0x2F3C3D9F50681DE4(p0: int, p1: boolean): void;
  export function _0x2F7CEB6520288061(p0: boolean): void;
  export function _0x2F7F2B26DD3F18EE(p0: float, p1: float): void;
  export function _0x2FC5650B0271CB57(): int;
  export function _0x3001BEF2FECA3680(): boolean;
  export function _0x302C91AB2D477F7E(): void;
  export function _0x3044240D2E0FA842(): boolean;
  export function _0x3054F114121C21EA(p0: int): boolean;
  export function _0x308F96458B7087CC(p0: intPtr, p1: int, p2: int, p3: int, p4: intPtr, p5: boolean): [int, intPtr, intPtr];
  export function _0x30A6614C1F7799B8(p0: int, p1: float, p2: int): void;
  export function _0x30ED88D5E0C56A37(p0: int): boolean;
  export function _0x31125FD509D9043F(p0: intPtr): [void, intPtr];
  export function _0x311438A071DD9B1A(p0: int, p1: int, p2: int): void;
  export function _0x3117D84EFA60F77B(p0: float): void;
  export function _0x312342E1A4874F3F(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean): void;
  export function _0x3133B907D8B32053(p0: int, p1: int): float;
  export function _0x31727907B2C43C55(p0: float): void;
  export function _0x317EBA71D7543F52(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0x318516E02DE3ECE2(p0: float): void;
  export function _0x3195F8DD0D531052(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0x31F924B53EADDF65(p0: boolean): void;
  export function _0x3270F67EED31FBC1(p0: int, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr];
  export function _0x32C7A7E8C43A1F80(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): int;
  export function _0x32DD916F3F7C9672(p0: int): int;
  export function _0x33506883545AC0DF(p0: int, p1: boolean): void;
  export function _0x336511A34F2E5185(p0: float, p1: float): float;
  export function _0x336B3D200AB007CB(p0: int, p1: float, p2: float, p3: float, p4: float): int;
  export function _0x33D47E85B476ABCD(p0: _BoolPtr): [boolean, _BoolPtr];
  export function _0x33E3C6C6F2F0B506(p0: int, p1: float, p2: float, p3: float): void;
  export function _0x33EE12743CCD6343(p0: int, p1: int, p2: int): int;
  export function _0x341DE7ED1D2A1BFD(p0: int, p1: int, p2: int): boolean;
  export function _0x3441CAD2F2231923(p0: int, p1: boolean): void;
  export function _0x346EF3ECAAAB149E(): void;
  export function _0x34770B9CE0E03B91(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x3599D741C9AC6310(p0: float, p1: float, p2: float, p3: float): float;
  export function _0x359AF31A4B52F5ED(): int;
  export function _0x35E0654F4BAD7971(p0: boolean): void;
  export function _0x35EDD5B2E3FF01C0(): void;
  export function _0x35F0B98A8387274D(): int;
  export function _0x35FB78DC42B7BD21(): int;
  export function _0x36391F397731595D(p0: int): int;
  export function _0x36492C2F0D134C56(p0: int): int;
  export function _0x3669F1B198DCAA4F(): void;
  export function _0x367EF5E2F439B4C6(p0: int): void;
  export function _0x36B77BB84687C318(p0: int, p1: int): int;
  export function _0x36C1451A88A09630(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function _0x36C6984C3ED0C911(p0: int): void;
  export function _0x36CCB9BE67B970FD(p0: int, p1: boolean): void;
  export function _0x36F1B38855F2A8DF(p0: int): void;
  export function _0x36F6626459D91457(p0: float): void;
  export function _0x372EF6699146A1E4(p0: int, p1: int, p2: float, p3: int): boolean;
  export function _0x374706271354CB18(p0: int, p1: int, p2: float): void;
  export function _0x37A4494483B9F5C9(): int;
  export function _0x37DEB0AA183FB6D8(): void;
  export function _0x38491439B6BA7F7D(p0: int, p1: int): float;
  export function _0x38BAAA5DD4C9D19F(p0: int): void;
  export function _0x38D28DA81E4E9BF9(p0: int): boolean;
  export function _0x397BAA01068BAA96(): int;
  export function _0x39917E1B4CB0F911(p0: boolean): void;
  export function _0x39D55A620FCB6A3A(p0: int, p1: int, p2: int, p3: int): int;
  export function _0x3A17A27D75C74887(): int;
  export function _0x3A3D5568AF297CD5(p0: int): boolean;
  export function _0x3A48AB4445D499BE(): boolean;
  export function _0x3B39236746714134(p0: int): int;
  export function _0x3BAB9A4E4F2FF5C7(): int;
  export function _0x3BBBD13E5041A79E(): int;
  export function _0x3C5C1E2C2FF814B1(p0: boolean): void;
  export function _0x3C67506996001F5E(): int;
  export function _0x3C891A251567DFCE(p0: intPtr): [int, intPtr];
  export function _0x3CA6050692BC61B0(p0: boolean): void;
  export function _0x3D3D15AF7BCAAF83(p0: int, p1: boolean, p2: boolean): void;
  export function _0x3D3D8B3BE5A83D35(): int;
  export function _0x3D42B92563939375(p0: charPtr): [boolean, charPtr];
  export function _0x3D9ACB1EB139E702(): int;
  export function _0x3DBF2DF0AEB7D289(p0: int): boolean;
  export function _0x3DDA37128DD1ACA8(p0: boolean): void;
  export function _0x3DEC726C25A11BAC(p0: int): boolean;
  export function _0x3E38E28A1D80DDF6(p0: int): boolean;
  export function _0x3E802F11FBE27674(p0: int): boolean;
  export function _0x3ED1438C1F5C6612(p0: int): void;
  export function _0x3F52E880AAF6C8CA(p0: boolean): void;
  export function _0x3F5CC444DCAAA8F2(p0: int, p1: int, p2: boolean): void;
  export function _0x3F9990BF5F22759C(p0: intPtr): [boolean, intPtr];
  export function _0x3FA36981311FA4FF(p0: int, p1: boolean): void;
  export function _0x4008EDF7D6E48175(p0: boolean): void;
  export function _0x402F9ED62087E898(): void;
  export function _0x405591EC8FD9096D(p0: float): void;
  export function _0x405DC2AEF6AF95B9(p0: int): void;
  export function _0x407091CF6037118E(p0: int): void;
  export function _0x40AEFD1A244741F2(p0: boolean): void;
  export function _0x40F7E66472DF3E5C(p0: int, p1: int): int;
  export function _0x41350B4FC28E3941(p0: boolean): void;
  export function _0x4167EFE0527D706E(): boolean;
  export function _0x418DC16FAE452C1C(p0: int): boolean;
  export function _0x419594E137637120(p0: boolean, p1: int, p2: boolean): void;
  export function _0x41FAA8FB2ECE8720(p0: boolean): void;
  export function _0x422D396F80A96547(): boolean;
  export function _0x422F32CC7E56ABAD(p0: int): boolean;
  export function _0x4237E822315D8BA9(): boolean;
  export function _0x425AECF167663F48(p0: int, p1: boolean): void;
  export function _0x4282E08174868BE3(): int;
  export function _0x428BACCDF5E26EAD(p0: int, p1: boolean): void;
  export function _0x42A4BEB35D372407(p0: int): int;
  export function _0x437138B6A830166A(): void;
  export function _0x43D1680C6D19A8E9(): void;
  export function _0x43FA0DFC5DF87815(p0: int, p1: boolean): void;
  export function _0x444C4525ECE0A4B9(): void;
  export function _0x44A0BDC559B35F6E(): int;
  export function _0x44ACA259D67651DB(p0: intPtr, p1: int): [void, intPtr];
  export function _0x451294E859ECC018(p0: int): boolean;
  export function _0x459FD2C8D0AB78BC(): int;
  export function _0x45A83257ED02D9BC(): void;
  export function _0x45E816772E93A9DB(): int;
  export function _0x46326E13DA4E0546(p0: intPtr): [void, intPtr];
  export function _0x4645DE9980999E93(p0: charPtr, p1: charPtr, p2: charPtr, p3: charPtr, p4: charPtr): [boolean, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function _0x46494A2475701343(p0: float, p1: float, p2: float, p3: float, p4: int, p5: boolean): boolean;
  export function _0x4668D80430D6C299(p0: int): void;
  export function _0x4669B3ED80F24B4E(p0: int): int;
  export function _0x466DA42C89865553(p0: float): void;
  export function _0x4683149ED1DDE7A1(p0: charPtr): [boolean, charPtr];
  export function _0x469F2ECDEC046337(p0: boolean): void;
  export function _0x46B05BCAE43856B0(p0: int, p1: int): boolean;
  export function _0x46D1A61A21F566FC(p0: float): void;
  export function _0x472397322E92A856(): void;
  export function _0x4737980E8A283806(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x4750FC27570311EC(): int;
  export function _0x4759CC730F947C81(): void;
  export function _0x4811BBAC21C5FCD5(p0: int): void;
  export function _0x48621C9FCA3EBD28(p0: boolean): void;
  export function _0x4862437A486F91B0(p0: charPtr, p1: intPtr, p2: intPtr, p3: boolean): [boolean, charPtr, intPtr, intPtr];
  export function _0x487912FD248EFDDF(p0: int, p1: float): boolean;
  export function _0x48ADC8A773564670(): void;
  export function _0x48F069265A0E4BEC(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function _0x49482F9FCD825AAA(p0: int): void;
  export function _0x49E50BDB8BA4DAB2(p0: int, p1: boolean): void;
  export function _0x4A0C7C9BB10ABB36(p0: boolean): void;
  export function _0x4A2D4E8BF4265B0F(p0: int): boolean;
  export function _0x4A39DB43E47CF3AA(p0: int): void;
  export function _0x4A7D6E727F941747(p0: intPtr): [int, intPtr];
  export function _0x4A9923385BDB9DAD(): boolean;
  export function _0x4AF92ACD3141D96C(): void;
  export function _0x4B5CFC83122DF602(): void;
  export function _0x4BA92A18502BCA61(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: int): boolean;
  export function _0x4BC2854478F3A749(p0: int): int;
  export function _0x4C2330E61D3DEB56(p0: int): int;
  export function _0x4C61B39930D045DA(p0: int): boolean;
  export function _0x4C61C75BEE8184C2(p0: charPtr, p1: int, p2: int): [void, charPtr];
  export function _0x4C89FE2BDEB3F169(): int;
  export function _0x4CEBC1ED31E8925E(p0: charPtr): [boolean, charPtr];
  export function _0x4D02279C83BE69FE(): int;
  export function _0x4D89D607CB3DD1D2(p0: int, p1: boolean): void;
  export function _0x4D953DF78EBF8158(): void;
  export function _0x4D9D109F63FEE1D4(p0: int, p1: boolean): void;
  export function _0x4DCDF92BF64236CD(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function _0x4DF7CFFF471A7FB1(p0: int): boolean;
  export function _0x4DFDD9EB705F8140(p0: _BoolPtr): [boolean, _BoolPtr];
  export function _0x4E3CD0EF8A489541(): int;
  export function _0x4E404A9361F75BB2(p0: charPtr, p1: charPtr, p2: boolean): [void, charPtr, charPtr];
  export function _0x4E52E752C76E7E7A(p0: int): void;
  export function _0x4E548C0D7AE39FF9(p0: int, p1: int): int;
  export function _0x4E74E62E0A97E901(p0: int, p1: boolean): void;
  export function _0x4F8A26A890FD62FB(p0: int, p1: int): float;
  export function _0x4FEF53183C3C6414(): int;
  export function _0x500873A45724C863(p0: int, p1: int): void;
  export function _0x5009DFD741329729(p0: charPtr, p1: int): [void, charPtr];
  export function _0x503F5920162365B2(p0: int, p1: float, p2: float, p3: float): void;
  export function _0x5068F488DDB54DD8(): int;
  export function _0x5096FD9CCB49056D(p0: charPtr): [void, charPtr];
  export function _0x50F457823CE6EB5F(p0: int, p1: int, p2: int, p3: int): int;
  export function _0x511F1A683387C7E2(p0: int): int;
  export function _0x51BB2D88D31A914B(p0: int, p1: boolean): void;
  export function _0x51DB102F4A3BA5E0(p0: boolean): void;
  export function _0x524FF0AEFF9C3973(p0: int): void;
  export function _0x52818819057F2B40(p0: int): boolean;
  export function _0x52D59AB61DDC05DD(p0: int, p1: boolean): void;
  export function _0x5324A0E3E4CE3570(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0x53AFD64C6758F2F9(): int;
  export function _0x53F4892D18EC90A4(p0: float): void;
  export function _0x5407B7288D0478B7(p0: int): int;
  export function _0x54318C915D27E4CE(p0: int, p1: boolean): void;
  export function _0x544810ED9DB6BBE6(): boolean;
  export function _0x54B0F614960F4A5F(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): int;
  export function _0x54E22EA2C1956A8D(p0: float): void;
  export function _0x54F157E0336A3822(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function _0x5501B7A5CDB79D37(p0: int): void;
  export function _0x551DF99658DB6EE8(p0: float, p1: float, p2: float): int;
  export function _0x55384438FC55AD8E(p0: int): void;
  export function _0x5539C3EBF104A53A(p0: boolean): void;
  export function _0x56105E599CAB0EFA(p0: intPtr): [int, intPtr];
  export function _0x567384DFA67029E6(): int;
  export function _0x5688585E6D563CD8(p0: int): void;
  export function _0x56B94C6D7127DFBA(p0: int, p1: float, p2: boolean): void;
  export function _0x56C8B608CFD49854(): void;
  export function _0x56EB5E94318D3FB6(p0: int, p1: boolean): void;
  export function _0x5702B917B99DB1CD(p0: int): void;
  export function _0x570389D1C3DE3C6B(p0: int): void;
  export function _0x571FEB383F629926(p0: int, p1: boolean): void;
  export function _0x576594E8D64375E2(p0: int, p1: boolean): void;
  export function _0x57D760D55F54E071(p0: boolean): void;
  export function _0x583049884A2EEE3C(): void;
  export function _0x583DF8E3D4AFBD98(): int;
  export function _0x5845066D8A1EA7F7(p0: int, p1: float, p2: float, p3: float, p4: int): void;
  export function _0x584770794D758C18(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x589F80B325CC82C5(p0: float, p1: float, p2: float, p3: int, p4: intPtr): [boolean, intPtr];
  export function _0x58A651CD201D89AD(p0: int): int;
  export function _0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;
  export function _0x58C21165F6545892(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function _0x58CC181719256197(p0: int, p1: int, p2: int): int;
  export function _0x59328EB08C5CEB2B(): int;
  export function _0x593570C289A77688(): int;
  export function _0x593FEAE1F73392D4(): int;
  export function _0x59424BD75174C9B1(): void;
  export function _0x595F028698072DD9(p0: int, p1: int, p2: boolean): boolean;
  export function _0x597F8DBA9B206FC7(): int;
  export function _0x59B9A7AF4C95133C(): int;
  export function _0x59DF79317F85A7E0(): int;
  export function _0x59E7B488451F4D3A(p0: int, p1: float): void;
  export function _0x5A0A3D1A186A5508(): int;
  export function _0x5A34CD9C3C5BEC44(p0: int): boolean;
  export function _0x5A43C76F7FC7BA5F(): void;
  export function _0x5A556B229A169402(): boolean;
  export function _0x5A6AA44FF8E931E6(): boolean;
  export function _0x5A6FFA2433E2F14C(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int): boolean;
  export function _0x5A7F62FDA59759BD(): void;
  export function _0x5AA3BEFA29F03AD4(): int;
  export function _0x5AAB586FFEC0FD96(p0: int): void;
  export function _0x5AD3932DAEB1E5D3(): void;
  export function _0x5AE17C6B0134B7F1(): int;
  export function _0x5B0316762AFD4A64(): int;
  export function _0x5B1F2E327B6B6FE1(): int;
  export function _0x5B48A06DD0E792A5(): int;
  export function _0x5B50ABB1FE3746F4(): boolean;
  export function _0x5B6010B3CBC29095(p0: int, p1: boolean): void;
  export function _0x5B73C77D9EB66E24(p0: boolean): void;
  export function _0x5B84D09CEC5209C5(p0: int, p1: int): float;
  export function _0x5B8ED3DB018927B1(p0: int): void;
  export function _0x5BD5F255321C4AAF(p0: int): int;
  export function _0x5BFF36D6ED83E0AE(): Vector3Native;
  export function _0x5C3B791D580E0BC2(p0: int, p1: float): void;
  export function _0x5C41E6BABC9E2112(p0: int): void;
  export function _0x5C48A1D6E3B33179(p0: int): boolean;
  export function _0x5C497525F803486B(): void;
  export function _0x5C4EBFFA98BDB41C(p0: int): int;
  export function _0x5C707A667DF8B9FA(p0: boolean, p1: int): void;
  export function _0x5CAE833B0EE0C500(p0: int): boolean;
  export function _0x5CE62918F8D703C7(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int, p9: int, p10: int, p11: int): void;
  export function _0x5D10B3795F3FC886(): boolean;
  export function _0x5D517B27CF6ECD04(p0: int): void;
  export function _0x5D5CAFF661DDF6FC(p0: int, p1: intPtr): [void, intPtr];
  export function _0x5D7B620DAE436138(p0: float): void;
  export function _0x5DA3A8DE8CB6226F(p0: int): void;
  export function _0x5DB8010EE71FDEF2(p0: int): boolean;
  export function _0x5DC40A8869C22141(p0: boolean, p1: int): void;
  export function _0x5DC577201723960A(): boolean;
  export function _0x5DEBD9C4DC995692(): void;
  export function _0x5E0165278F6339EE(p0: int): int;
  export function _0x5E24341A7F92A74B(): int;
  export function _0x5E3AA4CA2B6FB0EE(p0: int): void;
  export function _0x5E569EC46EC21CAE(p0: int, p1: boolean): void;
  export function _0x5E657EF1099EDD65(p0: int): boolean;
  export function _0x5E9DAF5A20F15908(p0: float): void;
  export function _0x5EA784D197556507(): int;
  export function _0x5EAD2BF6484852E4(): boolean;
  export function _0x5EDEF0CF8C1DAB3C(): boolean;
  export function _0x5F0F3F56635809EF(p0: float): void;
  export function _0x5F2013F8BC24EE69(p0: int): void;
  export function _0x5F35F6732C3FBBA0(p0: int): float;
  export function _0x5FBD7095FE7AE57F(p0: int, p1: floatPtr): [boolean, floatPtr];
  export function _0x5FC472C501CCADB3(p0: int): boolean;
  export function _0x600048C60D5C2C51(p0: int): void;
  export function _0x600F8CB31C7AAB6E(p0: int): void;
  export function _0x606E4D3E3CCCF3EB(): int;
  export function _0x6070104B699B2EF4(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): int;
  export function _0x60734CC207C9833C(p0: boolean): void;
  export function _0x609278246A29CA34(p0: int, p1: int, p2: int): void;
  export function _0x60E892BA4F5BDCA4(): void;
  export function _0x60EDD13EB3AC1FF3(): int;
  export function _0x615D3925E87A3B26(p0: int): void;
  export function _0x616093EC6B139DD9(p0: int, p1: int, p2: boolean): void;
  export function _0x61631F5DF50D1C34(p0: boolean): void;
  export function _0x61767F73EACEED21(p0: int): boolean;
  export function _0x61A885D3F7CFEE9A(): void;
  export function _0x61F95E5BB3E0A8C6(p0: int): void;
  export function _0x6216B116083A7CB4(p0: float): void;
  export function _0x621C6E4729388E41(p0: int): boolean;
  export function _0x629526ABA383BCAA(): void;
  export function _0x62A0296C1BB1CEB3(): int;
  export function _0x62CA17B74C435651(p0: int): boolean;
  export function _0x62E849B7EB28E770(p0: boolean): void;
  export function _0x62ECFCFDEE7885D6(): void;
  export function _0x631DC5DFF4B110E3(p0: int): boolean;
  export function _0x632B2940C67F4EA9(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0x634148744F385576(p0: int): boolean;
  export function _0x639431E895B9AA57(p0: int, p1: int, p2: boolean, p3: boolean, p4: boolean): boolean;
  export function _0x63B406D7884BFA95(): int;
  export function _0x63EB2B972A218CAC(): void;
  export function _0x643ED62D5EA3BEBD(): void;
  export function _0x644546EC5287471B(): boolean;
  export function _0x6483C25849031C4F(p0: int, p1: int, p2: int, p3: intPtr): [void, intPtr];
  export function _0x648E7A5434AF7969(p0: charPtr, p1: intPtr, p2: boolean, p3: intPtr, p4: intPtr, p5: intPtr, p6: charPtr): [boolean, charPtr, intPtr, intPtr, intPtr, intPtr, charPtr];
  export function _0x649C97D52332341A(p0: int): void;
  export function _0x64F62AFB081E260D(): void;
  export function _0x6512765E3BE78C50(): int;
  export function _0x65499865FCA6E5EC(p0: int): float;
  export function _0x6585D955A68452A5(p0: int): int;
  export function _0x65D2EBB47E1CEC21(p0: boolean): void;
  export function _0x65FAEE425DE637B0(p0: int): boolean;
  export function _0x661B5C8654ADD825(p0: int, p1: boolean): void;
  export function _0x662635855957C411(p0: int): int;
  export function _0x6636C535F6CC2725(p0: int): float;
  export function _0x6647C5F6F5792496(p0: int, p1: boolean): void;
  export function _0x66680A92700F43DF(p0: int): boolean;
  export function _0x66972397E0757E7A(p0: int, p1: int, p2: int): void;
  export function _0x66979ACF5102FD2F(p0: int, p1: float): void;
  export function _0x66A49D021870FE88(): void;
  export function _0x66B59CFFD78467AF(): int;
  export function _0x66E7CB63C97B7D20(): int;
  export function _0x66F010A4B031A331(p0: intPtr): [void, intPtr];
  export function _0x673ED815D6E323B7(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: int): boolean;
  export function _0x675721C9F644D161(): void;
  export function _0x678BB03C1A3BD51E(p0: int, p1: int, p2: int, p3: intPtr, p4: intPtr): [boolean, intPtr, intPtr];
  export function _0x67A5589628E0CFF6(): boolean;
  export function _0x67EEDEA1B9BAFD94(): void;
  export function _0x67F6413D3220E18D(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int): int;
  export function _0x67FC09BC554A75E5(): int;
  export function _0x68103E2247887242(): void;
  export function _0x684A41975F077262(): boolean;
  export function _0x6856EC3D35C81EA4(): int;
  export function _0x685D5561680D088B(p0: int, p1: float): void;
  export function _0x68772DB2B2526F9F(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function _0x687C0B594907D2E8(p0: int): void;
  export function _0x690A61A6D13583F6(p0: int): boolean;
  export function _0x692D58DF40657E8C(p0: int, p1: int, p2: int, p3: intPtr, p4: int, p5: boolean): [boolean, intPtr];
  export function _0x692D808C34A82143(p0: charPtr, p1: float, p2: charPtr): [boolean, charPtr, charPtr];
  export function _0x699E4A5C8C893A18(p0: int, p1: charPtr, p2: intPtr): [boolean, charPtr, intPtr];
  export function _0x69FE6DC87BD2A5E9(p0: int): void;
  export function _0x6A12D88881435DCA(): void;
  export function _0x6A5D89D7769A40D8(p0: boolean): void;
  export function _0x6A98C2ECF57FA5D4(p0: int, p1: int): void;
  export function _0x6ADAABD3068C5235(): int;
  export function _0x6AFD2CD753FEEF83(p0: charPtr): [boolean, charPtr];
  export function _0x6B0E6172C9A4D902(p0: boolean): void;
  export function _0x6B1DE27EE78E6A19(p0: int): void;
  export function _0x6BFB12CE158E3DD4(p0: int): boolean;
  export function _0x6BFF5F84102DF80A(p0: int): void;
  export function _0x6C34F1208B8923FD(p0: int): int;
  export function _0x6CC86E78358D5119(): void;
  export function _0x6CD79468A1E595C6(p0: int): boolean;
  export function _0x6D4CB481FAC835E8(p0: int, p1: int, p2: intPtr, p3: int): [boolean, intPtr];
  export function _0x6D6840CEE8845831(p0: charPtr): [void, charPtr];
  export function _0x6D6AF961B72728AE(p0: int): void;
  export function _0x6D8EAC07506291FB(p0: int, p1: float): void;
  export function _0x6D955F6A9E0295B1(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function _0x6DD8F5AA635EB4B2(p0: float, p1: float, p2: floatPtr, p3: floatPtr): [void, floatPtr, floatPtr];
  export function _0x6DDBF9DFFC4AC080(p0: boolean): void;
  export function _0x6DEE77AFF8C21BD1(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function _0x6E04F06094C87047(): int;
  export function _0x6E91B04E08773030(p0: charPtr): [void, charPtr];
  export function _0x6EBFB22D646FFC18(p0: int, p1: boolean): void;
  export function _0x6EF54AB721DC6242(): void;
  export function _0x6F1554B0CC2089FA(p0: boolean): void;
  export function _0x6F2135B6129620C1(p0: boolean): void;
  export function _0x6F259F82D873B8B8(): boolean;
  export function _0x6F361B8889A792A3(): void;
  export function _0x6F44CBF56D79FAC0(p0: int, p1: int): int;
  export function _0x6F697A66CE78674E(p0: int, p1: boolean): void;
  export function _0x6F72CD94F7B5B68C(): int;
  export function _0x6F7794F28C6B2535(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function _0x6FB7BB3607D27FA2(): int;
  export function _0x6FDDAD856E36988A(p0: int, p1: boolean): void;
  export function _0x6FDDF453C0C756EC(): boolean;
  export function _0x700569DBA175A77C(p0: int): int;
  export function _0x701FDA1E82076BA4(): void;
  export function _0x702BC4D605522539(p0: int): void;
  export function _0x703CC7F60CBB2B57(p0: int): void;
  export function _0x703F12425ECA8BF5(p0: int): int;
  export function _0x705A276EBFF3133D(): boolean;
  export function _0x70894BD0915C5BCA(p0: float): int;
  export function _0x708BDD8CD795B043(): intPtr;
  export function _0x70B8EC8FC108A634(p0: boolean, p1: int): void;
  export function _0x70EA8DA57840F9BE(p0: int): boolean;
  export function _0x715135F4B82AC90D(p0: int): void;
  export function _0x717E4D1F2048376D(p0: int): charPtr;
  export function _0x71862B1D855F32E1(p0: intPtr, p1: int, p2: int, p3: int): [void, intPtr];
  export function _0x71B008056E5692D6(): void;
  export function _0x71B74D2AE19338D0(p0: int): boolean;
  export function _0x71BDB63DBAF8DA59(p0: int): void;
  export function _0x71E7B2E657449AAD(): int;
  export function _0x722F5D28B61C5EA8(p0: int): int;
  export function _0x723C1CE13FBFDB67(p0: int, p1: int): void;
  export function _0x728C4CC7920CD102(p0: int): int;
  export function _0x72C1056D678BB7D8(p0: int): void;
  export function _0x72D0706CD6CCDB58(): void;
  export function _0x72D918C99BCACC54(p0: int): boolean;
  export function _0x72DD432F3CDFC0EE(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function _0x72DE52178C291CB5(): int;
  export function _0x733ADF241531E5C2(p0: charPtr, p1: float): [void, charPtr];
  export function _0x733C87D4CE22BEA2(p0: int): void;
  export function _0x7350823473013C02(p0: int): boolean;
  export function _0x741A3D8380319A81(): void;
  export function _0x742B58F723233ED9(p0: int): int;
  export function _0x74698374C45701D2(): int;
  export function _0x74BD83EA840F6BC9(): boolean;
  export function _0x74C180030FDE4B69(p0: boolean): void;
  export function _0x74DE2E8739086740(): void;
  export function _0x74FB3E29E6D10FA9(): boolean;
  export function _0x7543BB439F63792B(p0: intPtr, p1: int): [boolean, intPtr];
  export function _0x75773E11BA459E90(p0: int, p1: boolean): void;
  export function _0x759299C5BB31D2A9(p0: int, p1: int): int;
  export function _0x759650634F07B6B4(p0: int): boolean;
  export function _0x75A16C3DA34F1245(p0: int, p1: boolean): void;
  export function _0x75BA1CB3B7D40CAF(p0: int, p1: boolean): void;
  export function _0x75D3691713C3B05A(): void;
  export function _0x762DB2D380B48D04(p0: int): void;
  export function _0x7669F9E39DC17063(): void;
  export function _0x7679CC1BCEBE3D4C(p0: int, p1: float, p2: float): void;
  export function _0x769951E2455E2EB5(): int;
  export function _0x76BF03FADBF154F5(): intPtr;
  export function _0x774BD811F656A122(p0: charPtr, p1: boolean): [void, charPtr];
  export function _0x77758139EC9B66C7(p0: boolean): void;
  export function _0x7792424AA0EAC32E(): void;
  export function _0x77F16B447824DA6C(p0: int): void;
  export function _0x7808619F31FF22DB(): int;
  export function _0x781DE8FA214E87D2(p0: int, p1: charPtr): [void, charPtr];
  export function _0x78321BEA235FD8CD(p0: int, p1: boolean): boolean;
  export function _0x784002A632822099(p0: int): boolean;
  export function _0x784BA7E0ECEB4178(p0: int, p1: float, p2: float, p3: float): void;
  export function _0x78857FC65CADB909(p0: boolean): void;
  export function _0x788E7FD431BD67F1(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function _0x78C0D93253149435(): int;
  export function _0x78C4E9961DB3EB5B(p0: int, p1: int): void;
  export function _0x78E8E3A640178255(p0: int): void;
  export function _0x793FF272D5B365F4(): int;
  export function _0x796A877E459B99EA(p0: int, p1: float, p2: float, p3: float): void;
  export function _0x79AB33F0FBFAC40C(p0: int): void;
  export function _0x79DF7E806202CE01(p0: int, p1: int): void;
  export function _0x7A42B2E236E71415(): void;
  export function _0x7AC24EAB6D74118D(p0: boolean): boolean;
  export function _0x7AC752103856FB20(p0: boolean): void;
  export function _0x7AE0589093A2E088(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): int;
  export function _0x7B21E0BB01E8224A(p0: int): void;
  export function _0x7B226C785A52A0A9(): int;
  export function _0x7BF1A54AE67AC070(p0: int, p1: int, p2: int): void;
  export function _0x7C0043FDFF6436BC(p0: int): void;
  export function _0x7C9C0B1EEB1F9072(p0: float): void;
  export function _0x7CD934010E115C2C(p0: int): intPtr;
  export function _0x7CDC8C3B89F661B3(p0: int, p1: int): void;
  export function _0x7D395EA61622E116(p0: boolean): void;
  export function _0x7D41E9D2D17C5B2D(p0: int): int;
  export function _0x7D6F9A3EF26136A0(p0: int, p1: boolean, p2: boolean): void;
  export function _0x7D7A2E43E74E2EB8(p0: int): void;
  export function _0x7DB53B37A2F211A0(): int;
  export function _0x7E17BE53E1AAABAF(p0: intPtr, p1: intPtr, p2: intPtr): [void, intPtr, intPtr, intPtr];
  export function _0x7E2BD3EF6C205F09(p0: charPtr, p1: boolean): [void, charPtr];
  export function _0x7E6946F68A38B74F(p0: int): boolean;
  export function _0x7EC6F9A478A6A512(): void;
  export function _0x7F2C4CDF2E82DF4C(p0: int): boolean;
  export function _0x7F2F4F13AC5257EF(p0: int): boolean;
  export function _0x7F8F6405F4777AF6(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean): float;
  export function _0x7F96F23FA9B73327(p0: int): void;
  export function _0x7FA5D82B8F58EC06(): boolean;
  export function _0x7FCC39C46C3C03BD(p0: int): boolean;
  export function _0x7FD2990AF016795E(p0: intPtr, p1: intPtr, p2: int, p3: int, p4: int): [int, intPtr, intPtr];
  export function _0x80054D7FCC70EEC6(p0: int): void;
  export function _0x806058BBDC136E06(): void;
  export function _0x8098C8D6597AAE18(p0: int): int;
  export function _0x80C2FD58D720C801(p0: int, p1: int, p2: boolean): charPtr;
  export function _0x80EC114669DAEFF4(): float;
  export function _0x80FE4F3AB4E1B62A(): void;
  export function _0x8147FFF6A718E1AD(p0: int): int;
  export function _0x817B86108EB94E51(p0: boolean, p1: intPtr, p2: intPtr, p3: intPtr, p4: intPtr, p5: intPtr, p6: intPtr, p7: intPtr, p8: intPtr): [void, intPtr, intPtr, intPtr, intPtr, intPtr, intPtr, intPtr, intPtr];
  export function _0x81CBAE94390F9F89(): void;
  export function _0x82377B65E943F72D(p0: int): boolean;
  export function _0x8269816F6CFD40F8(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function _0x8290252FFF36ACB5(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x82CEDC33687E1F50(p0: boolean): void;
  export function _0x82EBB79E258FA2B7(p0: int, p1: int): void;
  export function _0x83A169EABCDB10A2(p0: int, p1: int): void;
  export function _0x83B8201ED82A9A2D(p0: int, p1: int, p2: int, p3: float): void;
  export function _0x83BCCE3224735F05(p0: charPtr): [boolean, charPtr];
  export function _0x83F28CE49FBBFFBA(p0: int, p1: int, p2: boolean): boolean;
  export function _0x83FE8D7229593017(): void;
  export function _0x8416FE4E4629D7D7(p0: charPtr): [boolean, charPtr];
  export function _0x84698AB38D0C6636(p0: int): boolean;
  export function _0x84DE3B5FB3E666F0(p0: intPtr): [boolean, intPtr];
  export function _0x851CD923176EBA7C(): void;
  export function _0x85535ACF97FC0969(p0: int): int;
  export function _0x855BC38818F6F684(): boolean;
  export function _0x85A0EF54A500882C(p0: intPtr): [boolean, intPtr];
  export function _0x85B6C850546FDDE2(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: int): boolean;
  export function _0x869DAACBBE9FA006(): int;
  export function _0x86E0660E4F5C956D(): void;
  export function _0x876928DDDFCCC9CD(): int;
  export function _0x87E0052F08BD64E6(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x87E5C46C187FE0AE(p0: int, p1: int): int;
  export function _0x8817605C2BA76200(): void;
  export function _0x883D79C4071E18B3(): int;
  export function _0x88578F6EC36B4A3A(p0: int, p1: int): int;
  export function _0x886913BBEACA68C1(p0: intPtr): [int, intPtr];
  export function _0x88B588B41FF7868E(): int;
  export function _0x88BC673CA9E0AE99(p0: int, p1: boolean): void;
  export function _0x88E32DB8C1A4AA4B(p0: int, p1: float): void;
  export function _0x88EAEC617CD26926(p0: int, p1: boolean): void;
  export function _0x89023FBBF9200E9F(): int;
  export function _0x89215EC747DF244A(p0: float, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int): int;
  export function _0x892B6AB8F33606F5(p0: int, p1: int): void;
  export function _0x8951EB9C6906D3C8(): void;
  export function _0x89D630CF5EA96D23(p0: int, p1: int): boolean;
  export function _0x8A694D7A68F8DC38(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function _0x8AA464D4E0F6ACCD(): int;
  export function _0x8AA9180DE2FEDD45(p0: int, p1: boolean): void;
  export function _0x8ABE8608576D9CE3(p0: float, p1: float, p2: float, p3: float): float;
  export function _0x8B0C2964BA471961(): int;
  export function _0x8BBACBF51DA047A8(p0: int): void;
  export function _0x8BD6C6DEA20E82C6(p0: int): int;
  export function _0x8BF907833BE275DE(p0: float, p1: float): void;
  export function _0x8C4F3BF23B6237DB(p0: int, p1: boolean, p2: boolean): int;
  export function _0x8C8D2739BA44AF0F(p0: int): boolean;
  export function _0x8CC469AB4D349B7C(p0: int, p1: charPtr, p2: intPtr): [boolean, charPtr, intPtr];
  export function _0x8CDE909A0370BB3A(p0: boolean): void;
  export function _0x8D30F648014A92B5(): boolean;
  export function _0x8D74E26F54B4E5C3(p0: charPtr): [void, charPtr];
  export function _0x8D9DF6ECA8768583(p0: int): void;
  export function _0x8E2A065ABDAE6994(): void;
  export function _0x8EC74CEB042E7CFF(p0: int): void;
  export function _0x8EF5573A1F801A5C(p0: int, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr];
  export function _0x8EFCCF6EC66D85E4(p0: intPtr, p1: intPtr, p2: intPtr, p3: boolean, p4: boolean): [int, intPtr, intPtr, intPtr];
  export function _0x8F08017F9D7C47BD(p0: int, p1: intPtr, p2: int): [boolean, intPtr];
  export function _0x8F5EA1C01D65A100(p0: int): boolean;
  export function _0x8F719973E1445BA2(p0: int, p1: boolean): void;
  export function _0x8FA9C42FC5D7C64B(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean): void;
  export function _0x8FD89A6240813FD0(p0: int, p1: boolean, p2: boolean): void;
  export function _0x900086F371220B6F(p0: boolean, p1: int, p2: int): void;
  export function _0x9007A2F21DC108D4(p0: int, p1: float): void;
  export function _0x9049FE339D5F6F6F(): int;
  export function _0x90A6526CF0381030(p0: int, p1: intPtr, p2: int, p3: int): [boolean, intPtr];
  export function _0x90A78ECAA4E78453(): int;
  export function _0x90D0622866E80445(p0: int, p1: charPtr): [void, charPtr];
  export function _0x9135584D09A3437E(): int;
  export function _0x918C7B2D2FF3928B(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): int;
  export function _0x919B3C98ED8292F9(p0: int): boolean;
  export function _0x91A0BD635321F145(p0: int, p1: boolean): void;
  export function _0x91B87C55093DE351(): int;
  export function _0x91D6DD290888CBAB(): boolean;
  export function _0x91EF6EE6419E5B97(p0: boolean): void;
  export function _0x920D853F3E17F1DA(p0: int, p1: int): void;
  export function _0x9237E334F6E43156(p0: int): int;
  export function _0x9245E81072704B8A(p0: boolean): void;
  export function _0x92523B76657A517D(p0: int, p1: float): int;
  export function _0x92790862E36C2ADA(): void;
  export function _0x92AEFB5F6E294023(p0: int, p1: boolean, p2: boolean): void;
  export function _0x92CCC17A7A2285DA(): void;
  export function _0x92DA6E70EF249BD1(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function _0x930DE22F07B1CCE3(p0: int): int;
  export function _0x933BBEEB8C61B5F4(): int;
  export function _0x941E5306BCD7C2C7(): int;
  export function _0x94538037EE44F5CF(p0: boolean): void;
  export function _0x9465E683B12D3F6B(): void;
  export function _0x9489659372A81585(): int;
  export function _0x949F397A288B28B3(p0: float): void;
  export function _0x94A8394D150B013A(): int;
  export function _0x94F12ABF9C79E339(p0: int): int;
  export function _0x952F06BEECD775CC(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x953563CE563143AF(p0: int): int;
  export function _0x95A7DABDDBB78AE7(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function _0x95CF53B3D687F9FA(p0: int): void;
  export function _0x9614B71F8ADB982B(): int;
  export function _0x966DD84FB6A46017(): void;
  export function _0x967278682CB6967A(p0: int, p1: int, p2: int, p3: int): void;
  export function _0x9737A37136F07E75(p0: int, p1: boolean): void;
  export function _0x973D76AA760A6CB6(p0: boolean): void;
  export function _0x975D66A0BC17064C(p0: int): void;
  export function _0x97E7E2C04245115B(p0: int): void;
  export function _0x98215325A695E78A(p0: boolean): void;
  export function _0x98E2BC1CA26287C3(): void;
  export function _0x98EDF76A7271E4F2(): void;
  export function _0x9911F4A24485F653(p0: boolean): void;
  export function _0x993CBE59D350D225(p0: int): boolean;
  export function _0x996DD1E1E02F1008(): int;
  export function _0x99AC7F0D8B9C893D(p0: float): void;
  export function _0x99AD4CCCB128CBC9(p0: int): void;
  export function _0x99CAD8E7AFDB60FA(p0: int, p1: float, p2: float): void;
  export function _0x9A62EC95AE10E011(): int;
  export function _0x9A75585FB2E54FAD(p0: float, p1: float, p2: float, p3: float): void;
  export function _0x9A77DFD295E29B09(p0: int, p1: boolean): void;
  export function _0x9AC92EED5E4793AB(): void;
  export function _0x9B079E5221D984D3(p0: boolean): void;
  export function _0x9B2BD3773123EA2F(p0: int, p1: boolean): void;
  export function _0x9B4BD21D69B1E609(): void;
  export function _0x9B6E70C5CEEF4EEB(p0: int): int;
  export function _0x9BA001CB45CBF627(p0: int, p1: float, p2: boolean, p3: boolean): void;
  export function _0x9BDDC73CC6A115D4(p0: int, p1: boolean, p2: boolean): void;
  export function _0x9BECD4B9FEF3F8A6(p0: int, p1: boolean): void;
  export function _0x9BF438815F5D96EA(p0: int, p1: int, p2: intPtr, p3: int, p4: int, p5: int): [boolean, intPtr];
  export function _0x9C6A6C19B6C0C496(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0x9CB0BFA7A9342C3D(p0: int, p1: boolean): boolean;
  export function _0x9CFDD90B2B844BF7(p0: float, p1: float, p2: float, p3: float, p4: float): void;
  export function _0x9D3AF56E94C9AE98(p0: int, p1: float): void;
  export function _0x9D728C1E12BF5518(p0: int): int;
  export function _0x9D7AFCBF21C51712(p0: boolean): void;
  export function _0x9D8D44ADBBA61EF2(p0: boolean): void;
  export function _0x9DBA107B4937F809(p0: int, p1: charPtr): [void, charPtr];
  export function _0x9E30E91FB03A2CAF(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function _0x9E4CFFF989258472(): void;
  export function _0x9E6542F0CE8E70A3(p0: boolean): void;
  export function _0x9E778248D6685FE0(p0: charPtr): [void, charPtr];
  export function _0x9EDD76E87D5D51BA(p0: int): void;
  export function _0x9F3F689B814F2599(p0: int, p1: boolean): void;
  export function _0x9F5E6BB6B34540DA(p0: float): void;
  export function _0x9F6E2821885CAEE2(p0: int, p1: int, p2: int, p3: intPtr, p4: intPtr): [boolean, intPtr, intPtr];
  export function _0x9FEDF86898F100E9(): int;
  export function _0xA01BC64DD4BFBBAC(p0: int, p1: int): int;
  export function _0xA049A5BE0F04F2F8(): boolean;
  export function _0xA071E0ED98F91286(p0: int, p1: int): void;
  export function _0xA08FE5E49BDC39DD(p0: int, p1: float, p2: boolean): void;
  export function _0xA097AB275061FB21(): int;
  export function _0xA09F896CE912481F(p0: boolean): int;
  export function _0xA0CEFCEA390AAB9B(p0: int): void;
  export function _0xA0F93D5465B3094D(p0: intPtr): [boolean, intPtr];
  export function _0xA0FA4EC6A05DA44E(): int;
  export function _0xA0FE76168A189DDB(): int;
  export function _0xA134777FF7F33331(p0: int, p1: intPtr): [boolean, intPtr];
  export function _0xA13C11E1B5C06BFC(): void;
  export function _0xA13E93403F26C812(p0: int): int;
  export function _0xA17BAD153B51547E(p0: int, p1: float): void;
  export function _0xA1C996C2A744262E(p0: intPtr): [boolean, intPtr];
  export function _0xA1E5E0204A6FCC70(): void;
  export function _0xA213B11DFF526300(): int;
  export function _0xA21C118553BBDF02(p0: int): void;
  export function _0xA238192F33110615(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0xA2767257A320FC82(p0: int, p1: boolean): void;
  export function _0xA277800A9EAE340E(): int;
  export function _0xA2C1F5E92AFE49ED(): void;
  export function _0xA2CCBE62CD4C91A4(p0: intPtr): [void, intPtr];
  export function _0xA2E9C1AB8A92E8CD(p0: boolean): void;
  export function _0xA2F952104FC6DD4B(p0: int): boolean;
  export function _0xA31FD15197B192BD(): int;
  export function _0xA356990E161C9E65(p0: boolean): void;
  export function _0xA3A9299C4F2ADB98(p0: int): void;
  export function _0xA3F3564A5B3646C0(p0: int): boolean;
  export function _0xA41BCD7213805AAC(p0: boolean): void;
  export function _0xA44FF770DFBC5DAE(): void;
  export function _0xA4664972A9B8F8BA(p0: int): int;
  export function _0xA46B73FAA3460AE1(p0: boolean): void;
  export function _0xA4819F5E23E2FFAD(): int;
  export function _0xA4822F1CF23F4810(p0: Vector3NativePtr, p1: int, p2: Vector3NativePtr, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int): [boolean, Vector3NativePtr, Vector3NativePtr];
  export function _0xA48931185F0536FE(): int;
  export function _0xA4A0065E39C9F25C(p0: int, p1: int, p2: int, p3: int): int;
  export function _0xA4DEDE28B1814289(): void;
  export function _0xA51C4B86B71652AE(p0: boolean): void;
  export function _0xA52D5247A4227E14(p0: int): void;
  export function _0xA5342D390CDA41D6(p0: int, p1: boolean): void;
  export function _0xA586FBEB32A53DBB(): int;
  export function _0xA5C80D8E768A9E66(p0: intPtr): [boolean, intPtr];
  export function _0xA5EFC3E847D60507(p0: charPtr, p1: charPtr, p2: charPtr, p3: charPtr, p4: boolean): [boolean, charPtr, charPtr, charPtr, charPtr];
  export function _0xA5F377B175A699C5(p0: int): void;
  export function _0xA635C11B8C44AFC2(): int;
  export function _0xA6385DEB180F319F(p0: int, p1: int, p2: float): void;
  export function _0xA660FAF550EB37E5(p0: int, p1: boolean): void;
  export function _0xA67C35C56EB1BD9D(): boolean;
  export function _0xA68D3D229F4F3B06(p0: charPtr): [void, charPtr];
  export function _0xA699957E60D80214(p0: int): boolean;
  export function _0xA69AC4ADE82B57A4(p0: int): boolean;
  export function _0xA72835064DD63E4C(): int;
  export function _0xA735353C77334EA0(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function _0xA736CF7FB7C5BFF4(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0xA74802FB8D0B7814(p0: charPtr, p1: float): [void, charPtr];
  export function _0xA76359FC80B2438E(p0: float): void;
  export function _0xA7862BC5ED1DFD7E(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0xA78B8FA58200DA56(p0: int): void;
  export function _0xA7A1127490312C36(p0: float): void;
  export function _0xA7DCDF4DED40A8F4(p0: int, p1: boolean): void;
  export function _0xA7E30DE9272B6D49(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function _0xA7FFBA498E4AAF67(p0: int, p1: charPtr): [boolean, charPtr];
  export function _0xA80AE305E0A3044F(p0: int, p1: boolean): void;
  export function _0xA8434F1DFF41D6E7(p0: float): void;
  export function _0xA85A21582451E951(p0: int, p1: boolean): void;
  export function _0xA8733668D1047B51(p0: int): void;
  export function _0xA8ACB6459542A8C8(): int;
  export function _0xA8FDB297A8D25FBA(): void;
  export function _0xA905192A6781C41B(p0: float, p1: float, p2: float): void;
  export function _0xA9240A96C74CCA13(p0: int): boolean;
  export function _0xA9B61A329BFDCBEA(p0: int, p1: boolean): void;
  export function _0xA9CBFD40B3FA3010(): boolean;
  export function _0xA9F9C2E0FDE11CBB(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function _0xAA19F5572C38B564(p0: intPtr): [int, intPtr];
  export function _0xAA76052DDA9BFC3E(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function _0xAAA553E7DD28A457(p0: boolean): void;
  export function _0xAAA6A3698A69E048(p0: int): int;
  export function _0xAB04325045427AAE(p0: int, p1: boolean): void;
  export function _0xAB13A5565480B6D9(p0: int, p1: charPtr): [int, charPtr];
  export function _0xABB2FA71C83A1B72(): int;
  export function _0xAC2890471901861C(p0: float): void;
  export function _0xAD2D28A1AFDFF131(p0: int, p1: float): void;
  export function _0xAD5FDF34B81BFE79(): void;
  export function _0xAD6875BBC0FC899C(p0: int): void;
  export function _0xAD73CE5A09E42D12(p0: int): int;
  export function _0xADB57E5B663CCA8B(p0: int, p1: floatPtr, p2: floatPtr): [void, floatPtr, floatPtr];
  export function _0xADDD1C754E2E2914(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int, p9: int): void;
  export function _0xADED7F5748ACAFE6(): void;
  export function _0xAE51BC858F32BA66(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function _0xAEAB987727C5A8A4(p0: int): boolean;
  export function _0xAEEF48CDF5B6CE7C(p0: int, p1: int): boolean;
  export function _0xAF12610C644A35C9(p0: charPtr, p1: boolean): [void, charPtr];
  export function _0xAF348AFCB575A441(p0: charPtr): [void, charPtr];
  export function _0xAF42195A42C63BBA(): int;
  export function _0xAF66DCEE6609B148(): void;
  export function _0xAFC976FD0580C7B3(p0: int, p1: boolean): void;
  export function _0xAFF4710E2A0A6C12(p0: int): void;
  export function _0xB055A34527CB8FD7(p0: int, p1: boolean): void;
  export function _0xB07D3185E11657A5(p0: int): boolean;
  export function _0xB088E9A47AE6EDD5(p0: int, p1: boolean): void;
  export function _0xB08B85D860E7BA3C(p0: int, p1: int, p2: int): void;
  export function _0xB094BC1DB4018240(p0: int, p1: int, p2: float, p3: float): void;
  export function _0xB0C56BD3D808D863(p0: boolean): void;
  export function _0xB11D94BC55F41932(p0: charPtr): [void, charPtr];
  export function _0xB129E447A2EDA4BF(p0: int, p1: boolean): void;
  export function _0xB13E88E655E5A3BC(): void;
  export function _0xB1577667C3708F9B(): void;
  export function _0xB1B6216CA2E7B55E(p0: int, p1: boolean, p2: boolean): void;
  export function _0xB1BB03742917A5D6(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: int, p7: int, p8: int): void;
  export function _0xB1D2BB1E1631F5B1(): boolean;
  export function _0xB264C4D2F2B0A78B(p0: int): void;
  export function _0xB28B1FE5BFADD7F5(p0: int, p1: boolean): void;
  export function _0xB2A592B04648A9CB(): int;
  export function _0xB2AFF10216DEFA2F(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: float, p9: int): void;
  export function _0xB2D0BDE54F0E8E5A(p0: int, p1: boolean): void;
  export function _0xB2EBE8CBC58B90E9(): int;
  export function _0xB309EBEA797E001F(p0: int): int;
  export function _0xB335F761606DB47C(p0: intPtr, p1: intPtr, p2: int, p3: boolean): [boolean, intPtr, intPtr];
  export function _0xB37E4E6A2388CA7B(): int;
  export function _0xB3C641F3630BF6DA(p0: float): void;
  export function _0xB3CD58CCA6CDA852(): void;
  export function _0xB3DA2606774A8E2D(): int;
  export function _0xB3E6360DDE733E82(p0: float): void;
  export function _0xB4271092CA7EDF48(p0: int): int;
  export function _0xB45EFF719D8427A6(p0: float): void;
  export function _0xB475F27C6A994D65(): void;
  export function _0xB4BBFD9CD8B3922B(p0: charPtr): [void, charPtr];
  export function _0xB4C8D77C80C0421E(p0: int, p1: float): int;
  export function _0xB4F47213DF45A64C(p0: int, p1: charPtr): [boolean, charPtr];
  export function _0xB50EB4CCB29704AC(p0: int): void;
  export function _0xB51B9AB9EF81868C(p0: boolean): void;
  export function _0xB542DE8C3D1CB210(p0: boolean): void;
  export function _0xB56BBBCC2955D9CB(): boolean;
  export function _0xB57A49545BA53CE7(p0: intPtr): [boolean, intPtr];
  export function _0xB5D3453C98456528(): int;
  export function _0xB606E6CC59664972(p0: int): void;
  export function _0xB6871B0555B02996(p0: intPtr, p1: intPtr, p2: int, p3: intPtr, p4: intPtr, p5: int): [int, intPtr, intPtr, intPtr, intPtr];
  export function _0xB695E2CD0A2DA9EE(): void;
  export function _0xB743F735C03D7810(p0: int, p1: int): void;
  export function _0xB746D20B17F2A229(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function _0xB782F8238512BAD5(p0: int, p1: intPtr): [void, intPtr];
  export function _0xB7ED70C49521A61D(p0: int): void;
  export function _0xB8721407EE9C3FF6(p0: int, p1: int, p2: int): void;
  export function _0xB885852C39CC265D(): void;
  export function _0xB8B52E498014F5B0(p0: int): boolean;
  export function _0xB8F87EAD7533B176(p0: float): void;
  export function _0xB9854DFDE0D833D6(p0: float): void;
  export function _0xB99C4E4D9499DF29(p0: boolean): void;
  export function _0xB9CF1F793A9F1BF1(): boolean;
  export function _0xBA3D65906822BED5(p0: boolean, p1: boolean, p2: float, p3: float, p4: float, p5: float): void;
  export function _0xBA4B8D83BDC75551(p0: int): void;
  export function _0xBA63D9FE45412247(p0: int, p1: boolean): boolean;
  export function _0xBA751764F0821256(): void;
  export function _0xBA8D65C1C65702E5(p0: boolean): void;
  export function _0xBA96394A0EECFA65(): void;
  export function _0xBA9775570DB788CF(): int;
  export function _0xBAE4F9B97CD43B30(p0: boolean): void;
  export function _0xBAF6BABF9E7CCC13(p0: int, p1: intPtr): [int, intPtr];
  export function _0xBB0527EC6341496D(): int;
  export function _0xBB90E12CAC1DAB25(p0: float): void;
  export function _0xBBB45C3CF5C8AA85(): int;
  export function _0xBBDF066252829606(p0: int, p1: boolean): void;
  export function _0xBBF327DED94E4DEB(p0: charPtr): [void, charPtr];
  export function _0xBC0753C9CA14B506(p0: int, p1: int, p2: boolean): boolean;
  export function _0xBC0CE682D4D05650(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: int, p8: int, p9: int, p10: int, p11: int, p12: int, p13: int): void;
  export function _0xBC1CC91205EC8D6E(): boolean;
  export function _0xBC3CCA5844452B06(p0: float): void;
  export function _0xBC9490CA15AEA8FB(p0: int): void;
  export function _0xBC9823AB80A3DCAC(): int;
  export function _0xBCE595371A5FBAAF(p0: int, p1: boolean): void;
  export function _0xBCEDB009461DA156(): int;
  export function _0xBD0BE0BFC927EAC1(): void;
  export function _0xBD545D44CCE70597(): boolean;
  export function _0xBD605B8E0E18B3BB(): void;
  export function _0xBDB6F89C729CF388(): int;
  export function _0xBDEB86F4D5809204(p0: float): void;
  export function _0xBE197EAA669238F4(p0: int, p1: int, p2: int, p3: int): int;
  export function _0xBE5C1255A1830FF5(p0: int, p1: boolean): void;
  export function _0xBEB2D9A1D9A8F55A(p0: int, p1: int, p2: int, p3: int): void;
  export function _0xBEB3D46BB7F043C0(p0: int): void;
  export function _0xBED8CA5FF5E04113(p0: float, p1: float, p2: float, p3: float): void;
  export function _0xBED9F5693F34ED17(p0: int, p1: int, p2: floatPtr): [boolean, floatPtr];
  export function _0xBEF34B1D9624D5DD(p0: boolean): void;
  export function _0xBF09786A7FCAB582(p0: int): int;
  export function _0xBF4DC1784BE94DFA(p0: int, p1: boolean, p2: int): void;
  export function _0xBF4F34A85CA2970C(): void;
  export function _0xBF59707B3E5ED531(p0: charPtr): [void, charPtr];
  export function _0xBF72910D0F26F025(): int;
  export function _0xBFA0A56A817C6C7D(p0: boolean): void;
  export function _0xC0416B061F2B7E5E(p0: boolean): void;
  export function _0xC098810437312FFF(p0: int): int;
  export function _0xC0D2AF00BCC234CA(): int;
  export function _0xC0E0D686DDFC6EAE(): int;
  export function _0xC141B8917E0017EC(): void;
  export function _0xC15907D667F7CFB2(p0: int, p1: boolean): void;
  export function _0xC17AD0E5752BECDA(p0: int): int;
  export function _0xC1F6EBF9A3D55538(p0: int, p1: int): void;
  export function _0xC1F981A6F74F0C23(p0: int, p1: boolean): void;
  export function _0xC22912B1D85F26B1(p0: int, p1: intPtr, p2: Vector3NativePtr): [boolean, intPtr, Vector3NativePtr];
  export function _0xC265DF9FB44A9FBD(p0: int): boolean;
  export function _0xC2EAE3FB8CDBED31(p0: charPtr, p1: charPtr, p2: charPtr, p3: float): [void, charPtr, charPtr, charPtr];
  export function _0xC2EE020F5FB4DB53(p0: int): void;
  export function _0xC32EA7A2F6CA7557(): int;
  export function _0xC3376F42B1FACCC6(p0: int): void;
  export function _0xC35A6D07C93802B2(): void;
  export function _0xC361AA040D6637A8(p0: int, p1: boolean): void;
  export function _0xC38DC1E90D22547C(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0xC3C221ADDDE31A11(p0: float): void;
  export function _0xC3EAD29AB273ECE8(p0: float): void;
  export function _0xC4278F70131BAA6D(p0: int, p1: boolean): void;
  export function _0xC42DD763159F3461(): int;
  export function _0xC45C27EF50F36ADC(p0: int, p1: boolean): void;
  export function _0xC485E07E4F0B7958(p0: int, p1: boolean, p2: boolean, p3: boolean): void;
  export function _0xC505036A35AFD01B(p0: boolean): void;
  export function _0xC50CE861B55EAB8B(p0: int, p1: boolean): void;
  export function _0xC54A08C85AE4D410(p0: float): void;
  export function _0xC55854C7D7274882(): void;
  export function _0xC55A0B40FFB1ED23(): int;
  export function _0xC56FBF2F228E1DAC(p0: int, p1: int, p2: int): int;
  export function _0xC571D0E77D8BBC29(): int;
  export function _0xC594B315EDF2D4AF(p0: int): void;
  export function _0xC5BE134EC7BA96A0(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function _0xC6033D32241F6FB5(p0: int, p1: boolean): void;
  export function _0xC61B86C9F61EB404(p0: boolean): void;
  export function _0xC6372ECD45D73BCD(p0: boolean): void;
  export function _0xC64DED7EF0D2FE37(p0: intPtr): [int, intPtr];
  export function _0xC65AB383CD91DF98(): void;
  export function _0xC6E0E2616A7576BB(): int;
  export function _0xC70DDCE56D0D3A99(): int;
  export function _0xC7397A83F7A2A462(p0: intPtr, p1: int, p2: boolean, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0xC78E239AC5B2DDB9(p0: boolean, p1: int, p2: int): void;
  export function _0xC79196DCB36F6121(p0: int): void;
  export function _0xC79AE21974B01FB2(): void;
  export function _0xC7ABAC5DE675EE3B(): int;
  export function _0xC7BE335216B5EC7C(): int;
  export function _0xC7DB36C24634F52B(): void;
  export function _0xC7E7181C09F33B69(p0: boolean): void;
  export function _0xC7F29CA00F46350E(p0: boolean): void;
  export function _0xC8391C309684595A(): void;
  export function _0xC84527E235FCA219(p0: charPtr, p1: boolean, p2: charPtr, p3: intPtr, p4: intPtr, p5: charPtr, p6: boolean): [boolean, charPtr, charPtr, intPtr, intPtr, charPtr];
  export function _0xC847B43F369AC0B5(): void;
  export function _0xC87E740D9F3872CC(): int;
  export function _0xC8B1B2425604CDD0(): boolean;
  export function _0xC8B5C4A79CC18B94(p0: int): void;
  export function _0xC8E1071177A23BE5(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0xC8EDE9BDBCCBA6D4(p0: intPtr, p1: float, p2: float, p3: float): [void, intPtr];
  export function _0xC8F3AAF93D0600BF(p0: charPtr, p1: int, p2: charPtr, p3: int): [int, charPtr, charPtr];
  export function _0xC91C6C55199308CA(p0: int, p1: float, p2: float, p3: float): void;
  export function _0xC92717EF615B6704(p0: float): void;
  export function _0xC9A763D8FE87436A(p0: int): void;
  export function _0xC9B18B4619F48F7B(p0: float): void;
  export function _0xC9B43A33D09CADA7(p0: int): void;
  export function _0xCA4AE345A153D573(p0: boolean): void;
  export function _0xCA575C391FEA25CC(p0: int): void;
  export function _0xCA6B2F7CE32AB653(p0: int, p1: intPtr, p2: int): [boolean, intPtr];
  export function _0xCA94551B50B4932C(p0: int): int;
  export function _0xCA9D2AA3E326D720(): boolean;
  export function _0xCAC57395B151135F(p0: int, p1: boolean): void;
  export function _0xCAC66558B944DA67(p0: charPtr, p1: boolean): [void, charPtr];
  export function _0xCADA5A0D0702381E(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function _0xCAE55F48D3D7875C(p0: int): void;
  export function _0xCB00196B31C39EB1(p0: int, p1: int, p2: int, p3: int): void;
  export function _0xCB0360EFEFB2580D(p0: int): void;
  export function _0xCB215C4B56A7FAE7(p0: boolean): int;
  export function _0xCB82A0BF0E3E3265(p0: int): int;
  export function _0xCB968B53FC7F916D(p0: int, p1: boolean, p2: int, p3: int): void;
  export function _0xCC3FDDED67BCFC63(): void;
  export function _0xCC6E963682533882(p0: int): void;
  export function _0xCC9682B8951C5229(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function _0xCCA4318E1AB03F1F(p0: intPtr): [boolean, intPtr];
  export function _0xCCD078C2665D2973(p0: boolean): void;
  export function _0xCD018C591F94CB43(p0: int, p1: boolean): void;
  export function _0xCD71A4ECAB22709E(p0: int): void;
  export function _0xCDCA26E80FAECB8F(): void;
  export function _0xCE5AA445ABA8DEE0(p0: intPtr): [int, intPtr];
  export function _0xCED08CBE8EBB97C7(p0: float, p1: float): void;
  export function _0xCEDA60A74219D064(p0: int, p1: boolean): void;
  export function _0xCEF214315D276FD1(p0: boolean): void;
  export function _0xCF1182F682F65307(p0: int, p1: int): void;
  export function _0xCF61D4B4702EE9EB(): int;
  export function _0xCFD115B373C0DF63(p0: int, p1: intPtr): [void, intPtr];
  export function _0xCFD778E7904C255E(p0: int): void;
  export function _0xCFEB46DCD7D8D5EB(p0: boolean): void;
  export function _0xCFEB8AF24FC1D0BB(p0: boolean): void;
  export function _0xD0082607100D7193(): float;
  export function _0xD00D76A7DFC9D852(p0: intPtr): [void, intPtr];
  export function _0xD01005D2BA2EB778(p0: charPtr): [void, charPtr];
  export function _0xD05D1A6C74DA3498(p0: intPtr, p1: boolean, p2: intPtr): [boolean, intPtr, intPtr];
  export function _0xD0A484CB2F829FBE(): int;
  export function _0xD0BC1C6FB18EE154(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function _0xD0EE05FE193646EA(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0xD10282B6E3751BA0(): int;
  export function _0xD1032E482629049E(p0: boolean): void;
  export function _0xD10F442036302D50(p0: int, p1: int, p2: int): void;
  export function _0xD1871251F3B5ACD7(p0: int): boolean;
  export function _0xD1B0F412F109EA5D(p0: int, p1: int): void;
  export function _0xD1C55B110E4DF534(p0: int): void;
  export function _0xD1C7CB175E012964(p0: int): boolean;
  export function _0xD1F8363DFAD03848(p0: float): void;
  export function _0xD2049635DEB9C375(): void;
  export function _0xD2209BE128B5418C(p0: charPtr): [void, charPtr];
  export function _0xD2300034310557E4(p0: int, p1: int): void;
  export function _0xD261BA3E7E998072(p0: int, p1: float): void;
  export function _0xD2936CAB8B58FCBD(p0: int, p1: boolean, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: float): void;
  export function _0xD2B315B6689D537D(p0: int, p1: boolean): void;
  export function _0xD2B32BE3FC1626C6(): void;
  export function _0xD2CC78CD3D0B50F9(p0: int, p1: boolean): void;
  export function _0xD2DCCD8E16E20997(p0: int): void;
  export function _0xD302E99EDF0449CF(p0: int): int;
  export function _0xD313DE83394AF134(): int;
  export function _0xD33DAA36272177C4(p0: int): void;
  export function _0xD38C4A6D047C019D(): int;
  export function _0xD39B3FFF8FFDD5BF(p0: int): int;
  export function _0xD39D13C9FEBF0511(p0: boolean): void;
  export function _0xD3A10FC7FD8D98CD(): boolean;
  export function _0xD3A6A0EF48823A8C(): int;
  export function _0xD3D15555431AB793(): boolean;
  export function _0xD4438C0564490E63(): void;
  export function _0xD4793DFF3AF2ABCD(): void;
  export function _0xD4C4642CB7F50B5D(p0: int): boolean;
  export function _0xD53ACDBEF24A46E8(): int;
  export function _0xD57AAAE0E2214D11(): void;
  export function _0xD5A4B59980401588(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0xD642319C54AADEB6(): int;
  export function _0xD66C9E72B3CC4982(p0: intPtr, p1: int): [int, intPtr];
  export function _0xD68A5FF8A3A89874(p0: int, p1: int, p2: int, p3: int): void;
  export function _0xD69411AA0CEBF9E9(p0: int, p1: int, p2: int, p3: int): void;
  export function _0xD6ADE981781FCA09(p0: float): void;
  export function _0xD7021272EB0A451E(p0: charPtr): [void, charPtr];
  export function _0xD79185689F8FD5DF(p0: boolean): void;
  export function _0xD7D0B00177485411(p0: int, p1: float): void;
  export function _0xD7D22F5592AED8BA(p0: int): int;
  export function _0xD801CC02177FA3F1(): void;
  export function _0xD8122C407663B995(): int;
  export function _0xD8C3BE3EE94CAF2D(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function _0xD8E694757BCEA8E9(): void;
  export function _0xD9454B5752C857DC(): void;
  export function _0xD9B71952F78A2640(p0: int, p1: boolean): void;
  export function _0xD9F692D349249528(): void;
  export function _0xDA024BDBD600F44A(p0: intPtr): [void, intPtr];
  export function _0xDAC073C7901F9E15(p0: int): void;
  export function _0xDAF87174BE7454FF(p0: int): boolean;
  export function _0xDB34E8D56FC13B08(p0: int, p1: boolean, p2: boolean): void;
  export function _0xDB41D07A45A6D4B7(p0: int): int;
  export function _0xDB90C6CCA48940F1(p0: boolean): void;
  export function _0xDBAA5EC848BA2D46(p0: int, p1: int): void;
  export function _0xDBC631F109350B8C(p0: int, p1: boolean): void;
  export function _0xDC459CFA0CCE245B(p0: boolean): void;
  export function _0xDC64D2C53493ED12(p0: int): void;
  export function _0xDC6F8601FAF2E893(p0: int, p1: boolean): void;
  export function _0xDC9274A7EF6B2867(): int;
  export function _0xDC9DA9E8789F5246(): void;
  export function _0xDCCA191DF9980FD7(p0: int): boolean;
  export function _0xDCFB5D4DB8BF367E(p0: int, p1: boolean): void;
  export function _0xDD2238F57B977751(p0: int): boolean;
  export function _0xDD2620B7B9D16FF1(p0: int, p1: float): boolean;
  export function _0xDD6BCF9E94425DF9(): void;
  export function _0xDD79DF9F4D26E1C9(): void;
  export function _0xDDC635D5B3262C56(p0: charPtr): [void, charPtr];
  export function _0xDE03620F8703A9DF(): int;
  export function _0xDE45D1A1EF45EE61(p0: int, p1: boolean): void;
  export function _0xDE81239437E8C5A8(): void;
  export function _0xDEA36202FC3382DF(p0: boolean): void;
  export function _0xDEAAF77EB3687E97(p0: int, p1: intPtr): [int, intPtr];
  export function _0xDEB2B99A1AF1A2A6(p0: int): int;
  export function _0xDF4B952F7D381B95(): int;
  export function _0xDF649C4E9AFDD788(): charPtr;
  export function _0xDF7E3EEB29642C38(p0: int, p1: Vector3NativePtr, p2: Vector3NativePtr): [void, Vector3NativePtr, Vector3NativePtr];
  export function _0xDF97CDD4FC08FD34(p0: int): boolean;
  export function _0xDFA80CB25D0A19B3(): int;
  export function _0xDFFCEF48E511DB48(p0: int, p1: boolean): void;
  export function _0xE0130B41D3CF4574(): float;
  export function _0xE01903C47C7AC89E(): void;
  export function _0xE058175F8EAFE79A(p0: boolean): void;
  export function _0xE05DD0E9707003A3(p0: int, p1: boolean): void;
  export function _0xE0A6138401BCB837(): int;
  export function _0xE111A7C0D200CBC5(p0: int, p1: float): void;
  export function _0xE12ABE5E3A389A6C(p0: int, p1: boolean): void;
  export function _0xE16142B94664DEFD(p0: int, p1: boolean): void;
  export function _0xE1615EC03B3BB4FD(): boolean;
  export function _0xE1C8709406F2C41C(): void;
  export function _0xE1CA84EBF72E691D(p0: int, p1: int, p2: intPtr, p3: intPtr, p4: intPtr): [void, intPtr, intPtr, intPtr];
  export function _0xE1CD1E48E025E661(): void;
  export function _0xE266ED23311F24D4(p0: int, p1: intPtr, p2: intPtr, p3: float, p4: float, p5: boolean): [void, intPtr, intPtr];
  export function _0xE2892E7E55D7073A(p0: float): void;
  export function _0xE301BD63E9E13CF0(p0: int, p1: int): void;
  export function _0xE30524E1871F481D(p0: int): void;
  export function _0xE33FFA906CE74880(p0: int, p1: int): boolean;
  export function _0xE36A98D8AB3D3C66(p0: boolean): void;
  export function _0xE3B05614DCE1D014(p0: int): int;
  export function _0xE3D969D2785FFB5E(): void;
  export function _0xE3E2C1B4C59DBC77(p0: int): void;
  export function _0xE3EBAAE484798530(p0: int, p1: boolean): void;
  export function _0xE43A13C9E4CCCBCF(p0: int, p1: boolean): void;
  export function _0xE44A982368A4AF23(p0: int, p1: int): void;
  export function _0xE4723DB6E736CCFF(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: boolean): void;
  export function _0xE496A53BA5F50A56(p0: int): int;
  export function _0xE4DCEC7FD5B739A5(p0: int): void;
  export function _0xE4E6DD5566D28C82(): void;
  export function _0xE532EC1A63231B4F(p0: int, p1: int): void;
  export function _0xE5810AC70602F2F5(p0: int, p1: float): void;
  export function _0xE59343E9E96529E7(): int;
  export function _0xE620FD3512A04F18(p0: float): void;
  export function _0xE63D7C6EECECB66B(p0: boolean): void;
  export function _0xE64A3CA08DFA37A9(p0: int): boolean;
  export function _0xE66C690248F11150(p0: int, p1: int): void;
  export function _0xE67C6DFD386EA5E7(p0: boolean): void;
  export function _0xE6869BECDD8F2403(p0: int, p1: boolean): void;
  export function _0xE6B0E8CFC3633BF0(p0: int): int;
  export function _0xE6C0C80B8C867537(p0: boolean): void;
  export function _0xE6CA85E7259CE16B(p0: int): void;
  export function _0xE6DE0561D9232A64(): void;
  export function _0xE6F13851780394DA(p0: int, p1: float): void;
  export function _0xE73364DB90778FFA(): boolean;
  export function _0xE791DF1F73ED2C8B(p0: int): int;
  export function _0xE7E4C198B0185900(p0: int, p1: int, p2: boolean): void;
  export function _0xE842A9398079BD82(p0: int, p1: float): void;
  export function _0xE851E480B814D4BA(p0: int, p1: boolean): void;
  export function _0xE861D0B05C7662B8(p0: int, p1: int, p2: intPtr): [void, intPtr];
  export function _0xE8A169E666CBC541(): int;
  export function _0xE8B9C0EC9E183F35(): boolean;
  export function _0xE95B0C7D5BA3B96B(p0: int): boolean;
  export function _0xE95C8A1875A02CA4(p0: int, p1: int, p2: int): void;
  export function _0xE9B99B6853181409(): void;
  export function _0xE9EA16D6E54CDCA4(p0: int, p1: int): int;
  export function _0xEA14EEF5B7CD2C30(): int;
  export function _0xEA2F2061875EED90(): int;
  export function _0xEA9960D07DADCF10(p0: int): int;
  export function _0xEAF0FA793D05C592(): int;
  export function _0xEB078CA2B5E82ADD(p0: int, p1: int): void;
  export function _0xEB2104E905C6F2E9(): int;
  export function _0xEB2D525B57F42B40(): void;
  export function _0xEB3DAC2C86001E5E(): boolean;
  export function _0xEB6F1A9B5510A5D2(p0: int, p1: boolean): void;
  export function _0xEBB376779A760AA8(): int;
  export function _0xEBCAB9E5048434F4(): boolean;
  export function _0xEBD0EDBA5BE957CF(p0: int): boolean;
  export function _0xEBD3205A207939ED(p0: intPtr): [void, intPtr];
  export function _0xEBEFC2E77084F599(p0: int, p1: charPtr, p2: boolean): [void, charPtr];
  export function _0xEBF8284D8CADEB53(): void;
  export function _0xEBFA8D50ADDC54C4(p0: int): boolean;
  export function _0xEC4B4B3B9908052A(p0: int, p1: float): void;
  export function _0xEC52C631A1831C03(p0: int): void;
  export function _0xEC6935EBE0847B90(p0: int, p1: int, p2: int, p3: int): int;
  export function _0xEC72C258667BE5EA(p0: int): int;
  export function _0xEC9264727EEC0F28(): void;
  export function _0xECB41AC6AB754401(): boolean;
  export function _0xECF128344E9FF9F1(p0: boolean): void;
  export function _0xED3C76ADFA6D07C4(p0: int): void;
  export function _0xED6D8E27A43B8CDE(p0: int): boolean;
  export function _0xED8286F71A819BAA(p0: int, p1: float): void;
  export function _0xEDF7F927136C224B(): int;
  export function _0xEE066C7006C49C0A(p0: int, p1: int, p2: intPtr): [void, intPtr];
  export function _0xEE4C0E6DBC6F2C6F(): void;
  export function _0xEE778F8C7E1142E2(p0: int): int;
  export function _0xEEBFC7A7EFDC35B4(p0: int): int;
  export function _0xEEED8FAFEC331A70(p0: int, p1: int, p2: int, p3: int): int;
  export function _0xEF0912DDF7C4CB4B(): boolean;
  export function _0xEF398BEEE4EF45F9(p0: boolean): void;
  export function _0xEF39EE20C537E98C(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function _0xEF7D17BC6C85264C(): boolean;
  export function _0xEFABC7722293DA7C(): void;
  export function _0xEFB55E7C25D3B3BE(): void;
  export function _0xF033419D1B81FAE8(p0: int): int;
  export function _0xF03755696450470C(): void;
  export function _0xF06EBB91A81E09E3(p0: boolean): void;
  export function _0xF083835B70BA9BFE(): void;
  export function _0xF086AD9354FAC3A3(p0: int): void;
  export function _0xF0DAEF2F545BEE25(p0: int): boolean;
  export function _0xF0E4BA16D1DB546C(p0: int, p1: int, p2: int): void;
  export function _0xF0EED5A6BC7B237A(p0: int, p1: int, p2: int): boolean;
  export function _0xF0F2103EFAF8CBA7(p0: int, p1: float): Vector3Native;
  export function _0xF10B44FD479D69F3(p0: int, p1: int): boolean;
  export function _0xF13FE2A80C05C561(): int;
  export function _0xF154B8D1775B2DEC(p0: boolean): void;
  export function _0xF1A1803D3476F215(p0: int): void;
  export function _0xF1A6C18B35BCADE6(p0: boolean): void;
  export function _0xF1AE5DCDBFCA2721(p0: intPtr, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function _0xF1B84178F8674195(p0: int): void;
  export function _0xF1C03A5352243A30(p0: int): void;
  export function _0xF1CEA8A4198D8E9A(p0: charPtr): [boolean, charPtr];
  export function _0xF1E22DC13F5EEBAD(p0: float): void;
  export function _0xF1EEA2DDA9FFA69D(p0: int): void;
  export function _0xF1F8157B8C3F171C(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function _0xF22CA0FD74B80E7A(p0: int): boolean;
  export function _0xF2385935BFFD4D92(p0: int): boolean;
  export function _0xF239400E16C23E08(p0: int, p1: int): void;
  export function _0xF25E02CB9C5818F8(): void;
  export function _0xF284AC67940C6812(): int;
  export function _0xF2BEBCDFAFDAA19E(p0: boolean): void;
  export function _0xF2CA003F167E21D2(): int;
  export function _0xF2E07819EF1A5289(): boolean;
  export function _0xF2E1A7133DD356A6(p0: int, p1: boolean): void;
  export function _0xF2EAC213D5EA0623(): int;
  export function _0xF2F6A2FA49278625(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: intPtr, p10: intPtr, p11: intPtr, p12: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0xF3365489E0DD50F9(p0: int, p1: boolean): void;
  export function _0xF3FBE2D50A6A8C28(p0: int, p1: boolean): int;
  export function _0xF41B5D290C99A3D6(p0: int): boolean;
  export function _0xF434A10BA01C37D0(p0: boolean): void;
  export function _0xF445DE8DA80A1792(): int;
  export function _0xF44A5456AC3F4F97(p0: int): void;
  export function _0xF45352426FF3A4F0(p0: intPtr, p1: int, p2: intPtr): [void, intPtr, intPtr];
  export function _0xF46A1E03E8755980(p0: boolean): void;
  export function _0xF488C566413B4232(p0: int, p1: float): void;
  export function _0xF49ABC20D8552257(p0: int): void;
  export function _0xF4A0DADB70F57FA6(): void;
  export function _0xF4C8CF9E353AFECA(p0: charPtr, p1: float): [void, charPtr];
  export function _0xF4D8E7AC2A27758C(p0: int): int;
  export function _0xF4FF020A08BC8863(p0: int, p1: int): void;
  export function _0xF51D36185993515D(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function _0xF53E48461B71EECB(p0: int): boolean;
  export function _0xF55E4046F6F831DC(p0: int, p1: float): void;
  export function _0xF56DFB7B61BE7276(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: intPtr): [boolean, intPtr];
  export function _0xF5846EDB26A98A24(p0: int, p1: boolean): void;
  export function _0xF5BB8DAC426A52C0(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0xF5BED327CEA362B1(p0: boolean): int;
  export function _0xF60165E1D2C5370B(p0: int, p1: intPtr, p2: intPtr): [boolean, intPtr, intPtr];
  export function _0xF6792800AC95350D(p0: int): void;
  export function _0xF6BAAAF762E1BF40(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function _0xF751B16FB32ABC1D(p0: float): void;
  export function _0xF78B803082D4386F(p0: float): void;
  export function _0xF78F94D60248C737(p0: int, p1: boolean): boolean;
  export function _0xF79F9DEF0AADE61A(p0: int): void;
  export function _0xF7B79A50B905A30D(p0: float, p1: float, p2: float, p3: float): boolean;
  export function _0xF7F203E31F96F6A1(p0: int, p1: boolean): boolean;
  export function _0xF8155A7F03DDFC8E(p0: int): void;
  export function _0xF854439EFBB3B583(): void;
  export function _0xF87D9F2301F7D206(p0: int): void;
  export function _0xF8BDBF3D573049A1(p0: float): void;
  export function _0xF8C54A461C3E11DC(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function _0xF8CC1EBE0B62E29F(p0: int): boolean;
  export function _0xF8EBCCC96ADB9FB7(p0: int, p1: float, p2: boolean): void;
  export function _0xF92099527DB8E2A7(p0: int, p1: int): void;
  export function _0xF98DDE0A8ED09323(p0: boolean): void;
  export function _0xF98E4B3E56AFC7B1(p0: int, p1: float): void;
  export function _0xF9ACF4A08098EA25(p0: int, p1: boolean): void;
  export function _0xF9B83B77929D8863(): boolean;
  export function _0xF9C1681347C8BD15(p0: int): void;
  export function _0xF9E1CCAE8BA4C281(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function _0xFA1E0E893D915215(p0: boolean): void;
  export function _0xFA2888E3833C8E96(): void;
  export function _0xFAA457EF263E8763(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function _0xFAE628F1E9ADB239(p0: int, p1: int, p2: int): void;
  export function _0xFAF2A78061FD9EF4(p0: int, p1: float, p2: float, p3: float): void;
  export function _0xFB00CA71DA386228(): void;
  export function _0xFB199266061F820A(): int;
  export function _0xFB1F9381E80FA13F(p0: int, p1: intPtr): [int, intPtr];
  export function _0xFB680D403909DC70(p0: int, p1: int): void;
  export function _0xFB8F2A6F3DF08CBE(): void;
  export function _0xFBC5E768C7A77A6A(): int;
  export function _0xFBE20329593DEC9D(p0: int, p1: int, p2: int, p3: int): void;
  export function _0xFC18DB55AE19E046(p0: boolean): void;
  export function _0xFC859E2374407556(): boolean;
  export function _0xFCCAE5B92A830878(p0: int): boolean;
  export function _0xFCF37A457CB96DC0(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function _0xFD3151CD37EA2245(p0: int): void;
  export function _0xFD75DABC0957BF33(p0: boolean): void;
  export function _0xFD8B834A8BA05048(): int;
  export function _0xFDB423997FA30340(): void;
  export function _0xFDD85225B2DEA55E(): void;
  export function _0xFDEC055AB549E328(): void;
  export function _0xFE07FF6495D52E2A(p0: int, p1: int, p2: int, p3: int): int;
  export function _0xFE26117A5841B2FF(p0: int, p1: int): int;
  export function _0xFE4C1D0D3B9CC17E(p0: int, p1: int): boolean;
  export function _0xFEC9A3B1820F3331(p0: int): boolean;
  export function _0xFEE4A5459472A9F8(): void;
  export function _0xFF266D1D0EB1195D(): void;
  export function _0xFF300C7649724A0B(p0: int, p1: boolean): void;
  export function _0xFF4803BC019852D9(p0: float, p1: int): void;
  export function _0xFF56381874F82086(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function _0xFF8F3A92B75ED67A(): int;
  export function _0xFFE1E5B792D92B34(): int;
  export function _0xFFEE8FA29AB9A18E(p0: int): void;
  export function abortTextChat(): void;
  export function absf(p0: float): float;
  export function absi(p0: int): int;
  export function acos(p0: float): float;
  export function activateDamageTrackerOnNetworkId(p0: int, p1: boolean): void;
  export function activateFrontendMenu(p0: int, p1: boolean, p2: int): void;
  export function activatePhysics(p0: int): void;
  export function activateRockstarEditor(): void;
  export function addAmmoToPed(p0: int, p1: int, p2: int): void;
  export function addArmourToPed(p0: int, p1: int): void;
  export function addBlipForArea(p0: float, p1: float, p2: float, p3: float, p4: float): int;
  export function addBlipForCoord(p0: float, p1: float, p2: float): int;
  export function addBlipForEntity(p0: int): int;
  export function addBlipForPickup(p0: int): int;
  export function addBlipForRadius(p0: float, p1: float, p2: float, p3: float): int;
  export function addCamSplineNode(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int): void;
  export function addClanDecalToVehicle(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: int, p14: int): boolean;
  export function addCoverBlockingArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;
  export function addCoverPoint(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: int, p6: boolean, p7: boolean): int;
  export function addCurrentRise(p0: float, p1: float, p2: float, p3: float, p4: float): int;
  export function addDecal(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: float, p14: float, p15: float, p16: float, p17: boolean, p18: boolean, p19: boolean): int;
  export function addDoorToSystem(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean, p6: boolean, p7: boolean): void;
  export function addEntityIcon(p0: int, p1: charPtr): [int, charPtr];
  export function addExplosion(p0: float, p1: float, p2: float, p3: int, p4: float, p5: boolean, p6: boolean, p7: float): void;
  export function addExplosionWithUserVfx(p0: float, p1: float, p2: float, p3: int, p4: int, p5: float, p6: boolean, p7: boolean, p8: float): void;
  export function addFrontendMenuContext(p0: int): void;
  export function addHospitalRestart(p0: float, p1: float, p2: float, p3: float, p4: int): int;
  export function addLineToConversation(p0: int, p1: charPtr, p2: charPtr, p3: int, p4: int, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: int, p10: boolean, p11: boolean, p12: boolean): [void, charPtr, charPtr];
  export function addNavmeshBlockingObject(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: int): int;
  export function addNavmeshRequiredRegion(p0: float, p1: float, p2: float): void;
  export function addNextMessageToPreviousBriefs(p0: boolean): void;
  export function addOwnedExplosion(p0: int, p1: float, p2: float, p3: float, p4: int, p5: float, p6: boolean, p7: boolean, p8: float): void;
  export function addPatrolRouteLink(p0: int, p1: int): void;
  export function addPatrolRouteNode(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int): [void, charPtr];
  export function addPedToConversation(p0: int, p1: int, p2: charPtr): [void, charPtr];
  export function addPetrolDecal(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): int;
  export function addPickupToInteriorRoomByName(p0: int, p1: charPtr): [void, charPtr];
  export function addPoliceRestart(p0: float, p1: float, p2: float, p3: float, p4: int): int;
  export function addRelationshipGroup(p0: charPtr, p1: intPtr): [int, charPtr, intPtr];
  export function addRope(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: float, p9: float, p10: float, p11: boolean, p12: boolean, p13: boolean, p14: float, p15: boolean, p16: intPtr): [int, intPtr];
  export function addScaleformMovieMethodParameterBool(p0: boolean): void;
  export function addScaleformMovieMethodParameterButtonName(p0: charPtr): [void, charPtr];
  export function addScaleformMovieMethodParameterFloat(p0: float): void;
  export function addScaleformMovieMethodParameterInt(p0: int): void;
  export function addScaleformMovieMethodParameterString(p0: charPtr): [void, charPtr];
  export function addScenarioBlockingArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean, p8: boolean, p9: boolean): int;
  export function addScriptToRandomPed(p0: charPtr, p1: int, p2: float, p3: float): [void, charPtr];
  export function addShockingEventAtPosition(p0: int, p1: float, p2: float, p3: float, p4: float): int;
  export function addShockingEventForEntity(p0: int, p1: int, p2: float): int;
  export function addSpeedZoneForCoord(p0: float, p1: float, p2: float, p3: float, p4: float, p5: boolean): int;
  export function addStuntJump(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: float, p14: float, p15: int, p16: int): int;
  export function addStuntJumpAngled(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: float, p14: float, p15: float, p16: float, p17: int, p18: int): int;
  export function addTextComponentAppTitle(p0: charPtr, p1: int): [void, charPtr];
  export function addTextComponentFloat(p0: float, p1: int): void;
  export function addTextComponentFormattedInteger(p0: int, p1: boolean): void;
  export function addTextComponentInteger(p0: int): void;
  export function addTextComponentScaleform(p0: charPtr): [void, charPtr];
  export function addTextComponentSubstringBlipName(p0: int): void;
  export function addTextComponentSubstringPlayerName(p0: charPtr): [void, charPtr];
  export function addTextComponentSubstringTextLabel(p0: charPtr): [void, charPtr];
  export function addTextComponentSubstringTextLabelHashKey(p0: int): void;
  export function addTextComponentSubstringTime(p0: int, p1: int): void;
  export function addTextComponentSubstringWebsite(p0: charPtr): [void, charPtr];
  export function addToClockTime(p0: int, p1: int, p2: int): void;
  export function addToItemset(p0: int, p1: int): boolean;
  export function addTrevorRandomModifier(p0: int): boolean;
  export function addVehicleStuckCheckWithWarp(p0: int, p1: float, p2: int, p3: boolean, p4: boolean, p5: boolean, p6: int): void;
  export function addVehicleSubtaskAttackCoord(p0: int, p1: float, p2: float, p3: float): void;
  export function addVehicleSubtaskAttackPed(p0: int, p1: int): void;
  export function addVehicleUpsidedownCheck(p0: int): void;
  export function advanceClockTimeTo(p0: int, p1: int, p2: int): void;
  export function animateGameplayCamZoom(p0: float, p1: float): void;
  export function animatedShakeCam(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: float): [void, charPtr, charPtr, charPtr];
  export function appDataValid(): int;
  export function appGetFloat(p0: charPtr): [float, charPtr];
  export function appGetInt(p0: int): intPtr;
  export function appGetString(p0: charPtr): [charPtr, charPtr];
  export function applyDamageToPed(p0: int, p1: int, p2: boolean): void;
  export function applyForceToEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: boolean, p10: boolean, p11: boolean, p12: boolean, p13: boolean): void;
  export function applyForceToEntityCenterOfMass(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;
  export function applyImpulseToCloth(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function applyPedBlood(p0: int, p1: int, p2: float, p3: float, p4: float, p5: charPtr): [void, charPtr];
  export function applyPedBloodByZone(p0: int, p1: int, p2: float, p3: float, p4: intPtr): [void, intPtr];
  export function applyPedBloodDamageByZone(p0: int, p1: int, p2: float, p3: float, p4: int): void;
  export function applyPedBloodSpecific(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float, p8: intPtr): [void, intPtr];
  export function applyPedDamageDecal(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: boolean, p9: charPtr): [void, charPtr];
  export function applyPedDamagePack(p0: int, p1: charPtr, p2: float, p3: float): [void, charPtr];
  export function areAllNavmeshRegionsLoaded(): boolean;
  export function areAllVehicleWindowsIntact(p0: int): boolean;
  export function areAnyVehicleSeatsFree(p0: int): boolean;
  export function areCoordsCollidingWithExterior(p0: float, p1: float, p2: float): boolean;
  export function arePlayerFlashingStarsAboutToDrop(p0: int): boolean;
  export function arePlayerStarsGreyedOut(p0: int): boolean;
  export function arePropellersUndamaged(p0: int): boolean;
  export function areStringsEqual(p0: charPtr, p1: charPtr): [boolean, charPtr, charPtr];
  export function areVehicleWingsIntact(p0: int): boolean;
  export function arrayValueAddBoolean(p0: intPtr, p1: boolean): [void, intPtr];
  export function arrayValueAddFloat(p0: intPtr, p1: float): [void, intPtr];
  export function arrayValueAddInteger(p0: intPtr, p1: int): [void, intPtr];
  export function arrayValueAddObject(p0: intPtr): [intPtr, intPtr];
  export function arrayValueAddString(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function arrayValueAddVector3(p0: intPtr, p1: float, p2: float, p3: float): [void, intPtr];
  export function arrayValueGetBoolean(p0: intPtr, p1: int): [boolean, intPtr];
  export function arrayValueGetFloat(p0: intPtr, p1: int): [float, intPtr];
  export function arrayValueGetInteger(p0: intPtr, p1: int): [int, intPtr];
  export function arrayValueGetObject(p0: intPtr, p1: int): [intPtr, intPtr];
  export function arrayValueGetSize(p0: intPtr): [int, intPtr];
  export function arrayValueGetString(p0: intPtr, p1: int): [charPtr, intPtr];
  export function arrayValueGetType(p0: intPtr, p1: int): [int, intPtr];
  export function arrayValueGetVector3(p0: intPtr, p1: int): [Vector3Native, intPtr];
  export function asin(p0: float): float;
  export function assistedMovementCloseRoute(): void;
  export function assistedMovementFlushRoute(): void;
  export function assistedMovementIsRouteLoaded(p0: charPtr): [boolean, charPtr];
  export function assistedMovementOverrideLoadDistanceThisFrame(p0: float): void;
  export function assistedMovementRemoveRoute(p0: charPtr): [void, charPtr];
  export function assistedMovementRequestRoute(p0: charPtr): [void, charPtr];
  export function assistedMovementSetRouteProperties(p0: charPtr, p1: int): [void, charPtr];
  export function atan(p0: float): float;
  export function atan2(p0: float, p1: float): float;
  export function attachCamToEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean): void;
  export function attachCamToPedBone(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: boolean): void;
  export function attachEntitiesToRope(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: boolean, p11: boolean, p12: charPtr, p13: charPtr): [void, charPtr, charPtr];
  export function attachEntityToEntity(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean, p11: boolean, p12: boolean, p13: int, p14: boolean): void;
  export function attachEntityToEntityPhysically(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: float, p14: boolean, p15: boolean, p16: boolean, p17: boolean, p18: int): void;
  export function attachPortablePickupToPed(p0: int, p1: int): void;
  export function attachRopeToEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean): void;
  export function attachSynchronizedSceneToEntity(p0: int, p1: int, p2: int): void;
  export function attachTvAudioToEntity(p0: int): void;
  export function attachVehicleToCargobob(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float): void;
  export function attachVehicleToTowTruck(p0: int, p1: int, p2: boolean, p3: float, p4: float, p5: float): void;
  export function attachVehicleToTrailer(p0: int, p1: int, p2: float): void;
  export function audioIsScriptedMusicPlaying(): boolean;
  export function badSportPlayerLeftDetected(p0: intPtr, p1: int, p2: int): [boolean, intPtr];
  export function beginEnumeratingThreads(): void;
  export function beginReplayStats(p0: int, p1: int): void;
  export function beginScaleformMovieMethod(p0: int, p1: charPtr): [boolean, charPtr];
  export function beginScaleformMovieMethodHudComponent(p0: int, p1: charPtr): [boolean, charPtr];
  export function beginScaleformMovieMethodN(p0: charPtr): [boolean, charPtr];
  export function beginScaleformMovieMethodV(p0: charPtr): [boolean, charPtr];
  export function beginSrl(): void;
  export function beginTextCommandBusyString(p0: charPtr): [void, charPtr];
  export function beginTextCommandClearPrint(p0: charPtr): [void, charPtr];
  export function beginTextCommandDisplayHelp(p0: charPtr): [void, charPtr];
  export function beginTextCommandDisplayText(p0: charPtr): [void, charPtr];
  export function beginTextCommandIsMessageDisplayed(p0: charPtr): [void, charPtr];
  export function beginTextCommandIsThisHelpMessageBeingDisplayed(p0: charPtr): [void, charPtr];
  export function beginTextCommandLineCount(p0: charPtr): [void, charPtr];
  export function beginTextCommandObjective(p0: charPtr): [void, charPtr];
  export function beginTextCommandPrint(p0: charPtr): [void, charPtr];
  export function beginTextCommandScaleformString(p0: charPtr): [void, charPtr];
  export function beginTextCommandSetBlipName(p0: charPtr): [void, charPtr];
  export function beginTextCommandTimer(p0: charPtr): [void, charPtr];
  export function beginTextCommandWidth(p0: charPtr): [void, charPtr];
  export function blipSiren(p0: int): void;
  export function blockDecisionMakerEvent(p0: int, p1: int): void;
  export function blockWeaponWheelThisFrame(): void;
  export function breakEntityGlass(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: int, p10: boolean): void;
  export function calculateTravelDistanceBetweenPoints(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): float;
  export function callScaleformMovieFunctionFloatParams(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float): [void, charPtr];
  export function callScaleformMovieFunctionMixedParams(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: charPtr, p8: charPtr, p9: charPtr, p10: charPtr, p11: charPtr): [void, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function callScaleformMovieFunctionStringParams(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: charPtr, p5: charPtr, p6: charPtr): [void, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function callScaleformMovieMethod(p0: int, p1: charPtr): [void, charPtr];
  export function canCreateRandomBikeRider(): boolean;
  export function canCreateRandomCops(): boolean;
  export function canCreateRandomDriver(): boolean;
  export function canCreateRandomPed(p0: boolean): boolean;
  export function canKnockPedOffVehicle(p0: int): boolean;
  export function canPedHearPlayer(p0: int, p1: int): boolean;
  export function canPedInCombatSeeTarget(p0: int, p1: int): boolean;
  export function canPedRagdoll(p0: int): boolean;
  export function canPedSeePed(p0: int, p1: int): boolean;
  export function canPedSpeak(p0: int, p1: charPtr, p2: boolean): [boolean, charPtr];
  export function canPhoneBeSeenOnScreen(): boolean;
  export function canPlayOnline(): boolean;
  export function canPlayerStartMission(p0: int): boolean;
  export function canRegisterMissionEntities(p0: int, p1: int, p2: int, p3: int): boolean;
  export function canRegisterMissionObjects(p0: int): boolean;
  export function canRegisterMissionPeds(p0: int): boolean;
  export function canRegisterMissionVehicles(p0: int): boolean;
  export function canSetEnterStateForRegisteredEntity(p0: charPtr, p1: int): [boolean, charPtr];
  export function canSetExitStateForCamera(p0: boolean): boolean;
  export function canSetExitStateForRegisteredEntity(p0: charPtr, p1: int): [boolean, charPtr];
  export function canShuffleSeat(p0: int, p1: int): boolean;
  export function canUseWeaponOnParachute(p0: int): boolean;
  export function cancelMusicEvent(p0: charPtr): [boolean, charPtr];
  export function cancelStuntJump(): void;
  export function capInterior(p0: int, p1: boolean): void;
  export function cellCamActivate(p0: boolean, p1: boolean): void;
  export function cellCamIsCharVisibleNoFaceCheck(p0: int): boolean;
  export function centerPlayerOnRadarThisFrame(): void;
  export function changePlayerPed(p0: intPtr, p1: int, p2: boolean, p3: boolean): [void, intPtr];
  export function clampGameplayCamPitch(p0: float, p1: float): int;
  export function clampGameplayCamYaw(p0: float, p1: float): int;
  export function cleanItemset(p0: int): void;
  export function clearAdditionalText(p0: int, p1: boolean): void;
  export function clearAllBrokenGlass(): void;
  export function clearAllHelpMessages(): void;
  export function clearAllPedProps(p0: int): void;
  export function clearAmbientZoneListState(p0: intPtr, p1: boolean): [void, intPtr];
  export function clearAmbientZoneState(p0: charPtr, p1: boolean): [void, charPtr];
  export function clearAngledAreaOfVehicles(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean): void;
  export function clearArea(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
  export function clearAreaOfCops(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function clearAreaOfEverything(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
  export function clearAreaOfObjects(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function clearAreaOfPeds(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function clearAreaOfProjectiles(p0: float, p1: float, p2: float, p3: float, p4: boolean): void;
  export function clearAreaOfVehicles(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;
  export function clearBit(p0: intPtr, p1: int): [void, intPtr];
  export function clearBrief(): void;
  export function clearCloudHat(): void;
  export function clearDecisionMakerEventResponse(p0: int, p1: int): void;
  export function clearDrawOrigin(): void;
  export function clearDrivebyTaskUnderneathDrivingTask(p0: int): void;
  export function clearEntityLastDamageEntity(p0: int): int;
  export function clearEntityLastWeaponDamage(p0: int): void;
  export function clearFacialIdleAnimOverride(p0: int): void;
  export function clearFloatingHelp(p0: int, p1: boolean): void;
  export function clearFocus(): void;
  export function clearGpsFlags(): void;
  export function clearGpsPlayerWaypoint(): void;
  export function clearGpsRaceTrack(): void;
  export function clearHdArea(): void;
  export function clearHelp(p0: boolean): void;
  export function clearNotificationsPos(p0: float): void;
  export function clearOverrideWeather(): void;
  export function clearPedAlternateMovementAnim(p0: int, p1: int, p2: float): void;
  export function clearPedAlternateWalkAnim(p0: int, p1: float): void;
  export function clearPedBloodDamage(p0: int): void;
  export function clearPedBloodDamageByZone(p0: int, p1: int): void;
  export function clearPedDamageDecalByZone(p0: int, p1: int, p2: charPtr): [void, charPtr];
  export function clearPedDecorations(p0: int): void;
  export function clearPedDriveByClipsetOverride(p0: int): void;
  export function clearPedFacialDecorations(p0: int): void;
  export function clearPedInPauseMenu(): void;
  export function clearPedLastDamageBone(p0: int): void;
  export function clearPedLastWeaponDamage(p0: int): void;
  export function clearPedNonCreationArea(): void;
  export function clearPedProp(p0: int, p1: int): void;
  export function clearPedSecondaryTask(p0: int): void;
  export function clearPedTasks(p0: int): void;
  export function clearPedTasksImmediately(p0: int): void;
  export function clearPedWetness(p0: int): void;
  export function clearPlayerHasDamagedAtLeastOneNonAnimalPed(p0: int): void;
  export function clearPlayerHasDamagedAtLeastOnePed(p0: int): void;
  export function clearPlayerParachuteModelOverride(p0: int): void;
  export function clearPlayerParachutePackModelOverride(p0: int): void;
  export function clearPlayerParachuteVariationOverride(p0: int): void;
  export function clearPlayerWantedLevel(p0: int): void;
  export function clearPopscheduleOverrideVehicleModel(p0: int): void;
  export function clearPrints(): void;
  export function clearRelationshipBetweenGroups(p0: int, p1: int, p2: int): void;
  export function clearReminderMessage(): void;
  export function clearReplayStats(): void;
  export function clearRoomForEntity(p0: int): void;
  export function clearSequenceTask(p0: intPtr): [int, intPtr];
  export function clearSmallPrints(): void;
  export function clearThisPrint(p0: charPtr): [void, charPtr];
  export function clearTimecycleModifier(): void;
  export function clearVehicleCustomPrimaryColour(p0: int): int;
  export function clearVehicleCustomSecondaryColour(p0: int): int;
  export function clearWeatherTypePersist(): void;
  export function clonePed(p0: int, p1: float, p2: boolean, p3: boolean): int;
  export function clonePedToTarget(p0: int, p1: int): void;
  export function closeBombBayDoors(p0: int): void;
  export function closePatrolRoute(): void;
  export function closeSequenceTask(p0: int): int;
  export function compareStrings(p0: charPtr, p1: charPtr, p2: boolean, p3: int): [int, charPtr, charPtr];
  export function controlLandingGear(p0: int, p1: int): void;
  export function controlMountedWeapon(p0: int): boolean;
  export function createAmbientPickup(p0: int, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: boolean, p8: boolean): int;
  export function createCam(p0: charPtr, p1: boolean): [int, charPtr];
  export function createCamWithParams(p0: charPtr, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: int): [int, charPtr];
  export function createCamera(p0: int, p1: boolean): int;
  export function createCameraWithParams(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: int): int;
  export function createCheckpoint(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: int, p10: int, p11: int, p12: int): int;
  export function createCinematicShot(p0: int, p1: int, p2: int, p3: int): void;
  export function createForcedObject(p0: float, p1: float, p2: float, p3: int, p4: int, p5: boolean): void;
  export function createGroup(p0: int): int;
  export function createIncident(p0: int, p1: float, p2: float, p3: float, p4: int, p5: float, p6: intPtr): [boolean, intPtr];
  export function createIncidentWithEntity(p0: int, p1: int, p2: int, p3: float, p4: intPtr): [boolean, intPtr];
  export function createItemset(p0: int): int;
  export function createLightningThunder(): void;
  export function createMissionTrain(p0: int, p1: float, p2: float, p3: float, p4: boolean): int;
  export function createMobilePhone(p0: int): void;
  export function createModelHide(p0: float, p1: float, p2: float, p3: float, p4: int, p5: boolean): void;
  export function createModelHideExcludingScriptObjects(p0: float, p1: float, p2: float, p3: float, p4: int, p5: boolean): void;
  export function createModelSwap(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: boolean): void;
  export function createMoneyPickups(p0: float, p1: float, p2: float, p3: int, p4: int, p5: int): void;
  export function createMpGamerTag(p0: int, p1: charPtr, p2: boolean, p3: boolean, p4: charPtr, p5: int): [int, charPtr, charPtr];
  export function createNewScriptedConversation(): void;
  export function createNmMessage(p0: boolean, p1: int): void;
  export function createObject(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean): int;
  export function createObjectNoOffset(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean): int;
  export function createPatrolRoute(): void;
  export function createPed(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): int;
  export function createPedInsideVehicle(p0: int, p1: int, p2: int, p3: int, p4: boolean, p5: boolean): int;
  export function createPickUpRopeForCargobob(p0: int, p1: int): void;
  export function createPickup(p0: int, p1: float, p2: float, p3: float, p4: int, p5: int, p6: boolean, p7: int): int;
  export function createPickupRotate(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int, p10: boolean, p11: int): int;
  export function createPortablePickup(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int): int;
  export function createPortablePickup2(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int): int;
  export function createRandomPed(p0: float, p1: float, p2: float): int;
  export function createRandomPedAsDriver(p0: int, p1: boolean): int;
  export function createScriptVehicleGenerator(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int, p10: int, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: int): int;
  export function createSynchronizedScene(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): int;
  export function createSynchronizedScene2(p0: float, p1: float, p2: float, p3: float, p4: int): int;
  export function createTrackedPoint(): int;
  export function createVehicle(p0: int, p1: float, p2: float, p3: float, p4: float, p5: boolean, p6: boolean): int;
  export function createWeaponObject(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean, p6: float, p7: int): int;
  export function customMenuCoordinates(p0: float): void;
  export function datafileCreate(): void;
  export function datafileDelete(): void;
  export function datafileGetFileDict(): charPtr;
  export function datafileIsSavePending(): boolean;
  export function decorExistOn(p0: int, p1: charPtr): [boolean, charPtr];
  export function decorGetBool(p0: int, p1: charPtr): [boolean, charPtr];
  export function decorGetFloat(p0: int, p1: charPtr): [float, charPtr];
  export function decorGetInt(p0: int, p1: charPtr): [int, charPtr];
  export function decorIsRegisteredAsType(p0: charPtr, p1: int): [boolean, charPtr];
  export function decorRegister(p0: charPtr, p1: int): [void, charPtr];
  export function decorRegisterLock(): void;
  export function decorRemove(p0: int, p1: charPtr): [boolean, charPtr];
  export function decorSetBool(p0: int, p1: charPtr, p2: boolean): [boolean, charPtr];
  export function decorSetFloat(p0: int, p1: charPtr, p2: float): [boolean, charPtr];
  export function decorSetInt(p0: int, p1: charPtr, p2: int): [boolean, charPtr];
  export function decorSetTime(p0: int, p1: charPtr, p2: int): [boolean, charPtr];
  export function deleteAllTrains(): void;
  export function deleteCheckpoint(p0: int): void;
  export function deleteChildRope(p0: int): int;
  export function deleteEntity(p0: intPtr): [void, intPtr];
  export function deleteIncident(p0: int): void;
  export function deleteMissionTrain(p0: intPtr): [void, intPtr];
  export function deleteObject(p0: intPtr): [void, intPtr];
  export function deletePatrolRoute(p0: charPtr): [void, charPtr];
  export function deletePed(p0: intPtr): [void, intPtr];
  export function deleteRope(p0: intPtr): [void, intPtr];
  export function deleteScriptVehicleGenerator(p0: int): void;
  export function deleteStuntJump(p0: int): void;
  export function deleteVehicle(p0: intPtr): [void, intPtr];
  export function destroyAllCams(p0: boolean): void;
  export function destroyCam(p0: int, p1: boolean): void;
  export function destroyItemset(p0: int): void;
  export function destroyMobilePhone(): void;
  export function destroyPlayerInPauseMenu(): int;
  export function destroyTrackedPoint(p0: int): void;
  export function detachCam(p0: int): void;
  export function detachEntity(p0: int, p1: boolean, p2: boolean): void;
  export function detachPortablePickupFromPed(p0: int): void;
  export function detachRopeFromEntity(p0: int, p1: int): void;
  export function detachSynchronizedScene(p0: int): void;
  export function detachVehicleFromAnyCargobob(p0: int): boolean;
  export function detachVehicleFromAnyTowTruck(p0: int): boolean;
  export function detachVehicleFromCargobob(p0: int, p1: int): void;
  export function detachVehicleFromTowTruck(p0: int, p1: int): void;
  export function detachVehicleFromTrailer(p0: int): void;
  export function detachVehicleWindscreen(p0: int): void;
  export function disableAimCamThisUpdate(): void;
  export function disableAllControlActions(p0: int): void;
  export function disableAutomaticRespawn(p0: boolean): void;
  export function disableBlipNameForVar(): int;
  export function disableControlAction(p0: int, p1: int, p2: boolean): void;
  export function disableFirstPersonCamThisFrame(): void;
  export function disableFrontendThisFrame(): void;
  export function disableHospitalRestart(p0: int, p1: boolean): void;
  export function disableInputGroup(p0: int): void;
  export function disableInterior(p0: int, p1: boolean): void;
  export function disableInteriorProp(p0: int, p1: charPtr): [void, charPtr];
  export function disableNavmeshInArea(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function disablePedPainAudio(p0: int, p1: boolean): void;
  export function disablePhoneThisFrame(p0: boolean): void;
  export function disablePlaneAileron(p0: int, p1: boolean, p2: boolean): void;
  export function disablePlayerFiring(p0: int, p1: boolean): void;
  export function disablePlayerVehicleRewards(p0: int): void;
  export function disablePoliceReports(): void;
  export function disablePoliceRestart(p0: int, p1: boolean): void;
  export function disableRadarThisFrame(): void;
  export function disableScriptBrainSet(p0: int): void;
  export function disableStuntJumpSet(p0: int): void;
  export function disableVehicleDistantlights(p0: boolean): void;
  export function disableVehicleFirstPersonCamThisFrame(): void;
  export function disableVehicleImpactExplosionActivation(p0: int, p1: boolean): void;
  export function disableVehicleWeapon(p0: boolean, p1: int, p2: int, p3: int): void;
  export function displayAmmoThisFrame(p0: boolean): void;
  export function displayAreaName(p0: boolean): void;
  export function displayCash(p0: boolean): void;
  export function displayDistantVehicles(p0: boolean): void;
  export function displayHelpTextThisFrame(p0: charPtr, p1: boolean): [void, charPtr];
  export function displayHud(p0: boolean): void;
  export function displayJobReport(): void;
  export function displayOnscreenKeyboard(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: charPtr, p5: charPtr, p6: charPtr, p7: int): [void, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function displayOnscreenKeyboard2(p0: int, p1: charPtr, p2: intPtr, p3: charPtr, p4: charPtr, p5: charPtr, p6: charPtr, p7: charPtr, p8: charPtr, p9: charPtr, p10: charPtr, p11: int): [void, charPtr, intPtr, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function displayRadar(p0: boolean): int;
  export function displaySniperScopeThisFrame(): void;
  export function displaySystemSigninUi(p0: boolean): void;
  export function disposeSynchronizedScene(p0: int): void;
  export function doAutoSave(): void;
  export function doScreenFadeIn(p0: int): void;
  export function doScreenFadeOut(p0: int): void;
  export function doesAnimDictExist(p0: charPtr): [boolean, charPtr];
  export function doesBlipExist(p0: int): boolean;
  export function doesCamExist(p0: int): boolean;
  export function doesCargobobHavePickUpRope(p0: int): boolean;
  export function doesCargobobHavePickupMagnet(p0: int): boolean;
  export function doesCutsceneEntityExist(p0: charPtr, p1: int): [boolean, charPtr];
  export function doesDesObjectExist(p0: int): boolean;
  export function doesDoorExist(p0: int): boolean;
  export function doesEntityBelongToThisScript(p0: int, p1: boolean): boolean;
  export function doesEntityExist(p0: int): boolean;
  export function doesEntityHaveDrawable(p0: int): boolean;
  export function doesEntityHavePhysics(p0: int): boolean;
  export function doesExtraExist(p0: int, p1: int): boolean;
  export function doesGroupExist(p0: int): boolean;
  export function doesNavmeshBlockingObjectExist(p0: int): boolean;
  export function doesObjectOfTypeExistAtCoords(p0: float, p1: float, p2: float, p3: float, p4: int, p5: boolean): boolean;
  export function doesParticleFxLoopedExist(p0: int): boolean;
  export function doesPedHaveAiBlip(p0: int): boolean;
  export function doesPickupExist(p0: int): boolean;
  export function doesPickupObjectExist(p0: int): boolean;
  export function doesRopeExist(p0: intPtr): [boolean, intPtr];
  export function doesScenarioExistInArea(p0: float, p1: float, p2: float, p3: float, p4: boolean): boolean;
  export function doesScenarioGroupExist(p0: charPtr): [boolean, charPtr];
  export function doesScenarioOfTypeExistInArea(p0: float, p1: float, p2: float, p3: intPtr, p4: float, p5: boolean): [boolean, intPtr];
  export function doesScriptExist(p0: charPtr): [boolean, charPtr];
  export function doesScriptVehicleGeneratorExist(p0: int): boolean;
  export function doesScriptWithNameHashExist(p0: int): boolean;
  export function doesScriptedCoverPointExistAtCoords(p0: float, p1: float, p2: float): boolean;
  export function doesTextBlockExist(p0: charPtr): [boolean, charPtr];
  export function doesTextLabelExist(p0: charPtr): [boolean, charPtr];
  export function doesVehicleExistWithDecorator(p0: charPtr): [boolean, charPtr];
  export function doesVehicleHaveDecal(p0: int, p1: int): boolean;
  export function doesVehicleHaveRoof(p0: int): boolean;
  export function doesVehicleHaveStuckVehicleCheck(p0: int): boolean;
  export function doesVehicleHaveWeapons(p0: int): boolean;
  export function doesWeaponTakeWeaponComponent(p0: int, p1: int): boolean;
  export function doorControl(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: float, p6: float, p7: float): void;
  export function downloadCheck(): void;
  export function drawBox(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int): void;
  export function drawDebugBox(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int): void;
  export function drawDebugCross(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: int): void;
  export function drawDebugLine(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int): void;
  export function drawDebugLineWithTwoColours(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int, p10: int, p11: int, p12: int, p13: int): void;
  export function drawDebugSphere(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: int): void;
  export function drawDebugText(p0: charPtr, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: int): [void, charPtr];
  export function drawDebugText2d(p0: charPtr, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: int): [void, charPtr];
  export function drawLightWithRange(p0: float, p1: float, p2: float, p3: int, p4: int, p5: int, p6: float, p7: float): void;
  export function drawLightWithRangeAndShadow(p0: float, p1: float, p2: float, p3: int, p4: int, p5: int, p6: float, p7: float, p8: float): void;
  export function drawLine(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: int): void;
  export function drawMarker(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: int, p14: int, p15: int, p16: int, p17: boolean, p18: boolean, p19: int, p20: boolean, p21: charPtr, p22: charPtr, p23: boolean): [void, charPtr, charPtr];
  export function drawNotification(p0: boolean, p1: boolean): int;
  export function drawNotification2(p0: boolean, p1: boolean): int;
  export function drawNotification3(p0: boolean, p1: boolean): int;
  export function drawNotification4(p0: boolean, p1: boolean): int;
  export function drawNotificationApartmentInvite(p0: boolean, p1: boolean, p2: intPtr, p3: int, p4: boolean, p5: boolean, p6: int, p7: int, p8: int, p9: int): [int, intPtr];
  export function drawNotificationAward(p0: charPtr, p1: charPtr, p2: int, p3: int, p4: charPtr): [int, charPtr, charPtr, charPtr];
  export function drawNotificationClanInvite(p0: boolean, p1: boolean, p2: intPtr, p3: int, p4: boolean, p5: boolean, p6: int, p7: charPtr, p8: int, p9: int, p10: int): [int, intPtr, charPtr];
  export function drawNotificationWithButton(p0: int, p1: charPtr, p2: charPtr): [int, charPtr, charPtr];
  export function drawNotificationWithIcon(p0: int, p1: int, p2: charPtr): [int, charPtr];
  export function drawPoly(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: int, p10: int, p11: int, p12: int): void;
  export function drawRect(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int, p7: int): void;
  export function drawScaleformMovie(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: int, p7: int, p8: int, p9: int): void;
  export function drawScaleformMovie3d(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: int): void;
  export function drawScaleformMovie3dNonAdditive(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: int): void;
  export function drawScaleformMovieFullscreen(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function drawScaleformMovieFullscreenMasked(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function drawShowroom(p0: charPtr, p1: int, p2: int, p3: float, p4: float, p5: float): [boolean, charPtr];
  export function drawSpotLight(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: float, p10: float, p11: float, p12: float, p13: float): void;
  export function drawSpotLightWithShadow(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: float, p10: float, p11: float, p12: float, p13: float, p14: int): void;
  export function drawSprite(p0: charPtr, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int, p10: int): [void, charPtr, charPtr];
  export function drawTvChannel(p0: float, p1: float, p2: float, p3: float, p4: float, p5: int, p6: int, p7: int, p8: int): void;
  export function dynamicMixerRelatedFn(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function ejectJb700Roof(p0: int, p1: float, p2: float, p3: float): void;
  export function enableAlienBloodVfx(p0: boolean): void;
  export function enableAllControlActions(p0: int): void;
  export function enableClownBloodVfx(p0: boolean): void;
  export function enableControlAction(p0: int, p1: int, p2: boolean): void;
  export function enableCrosshairThisFrame(): void;
  export function enableDeathbloodSeethrough(p0: boolean): void;
  export function enableDispatchService(p0: int, p1: boolean): void;
  export function enableInteriorProp(p0: int, p1: charPtr): [void, charPtr];
  export function enableLaserSightRendering(p0: boolean): void;
  export function enableMovieSubtitles(p0: boolean): void;
  export function enableObjectLod(p0: int, p1: boolean): void;
  export function enableScriptBrainSet(p0: int): void;
  export function enableSpecialAbility(p0: int, p1: boolean): void;
  export function enableStuntJumpSet(p0: int): void;
  export function enableTennisMode(p0: int, p1: boolean, p2: boolean): void;
  export function endReplayStats(): void;
  export function endScaleformMovieMethod(): void;
  export function endScaleformMovieMethodReturn(): int;
  export function endSrl(): void;
  export function endTextCommandBusyString(p0: int): void;
  export function endTextCommandClearPrint(): void;
  export function endTextCommandDisplayHelp(p0: int, p1: boolean, p2: boolean, p3: int): void;
  export function endTextCommandDisplayText(p0: float, p1: float): void;
  export function endTextCommandGetWidth(p0: boolean): float;
  export function endTextCommandIsMessageDisplayed(): boolean;
  export function endTextCommandIsThisHelpMessageBeingDisplayed(p0: int): boolean;
  export function endTextCommandObjective(p0: boolean): void;
  export function endTextCommandPrint(p0: int, p1: boolean): void;
  export function endTextCommandScaleformString(): void;
  export function endTextCommandScaleformString2(): void;
  export function endTextCommandSetBlipName(p0: int): void;
  export function endTextCommandTimer(p0: boolean): void;
  export function entityDescriptionText(p0: int): void;
  export function expandWorldLimits(p0: float, p1: float, p2: float): void;
  export function explodePedHead(p0: int, p1: int): void;
  export function explodeProjectiles(p0: int, p1: int, p2: boolean): void;
  export function explodeVehicle(p0: int, p1: boolean, p2: boolean): void;
  export function explodeVehicleInCutscene(p0: int, p1: boolean): void;
  export function facebookDoUnkCheck(): boolean;
  export function facebookIsAvailable(): boolean;
  export function facebookIsSendingData(): boolean;
  export function facebookSetCreateCharacterComplete(): boolean;
  export function facebookSetHeistComplete(p0: charPtr, p1: int, p2: int): [boolean, charPtr];
  export function facebookSetMilestoneComplete(p0: int): boolean;
  export function fadeDecalsInRange(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function fadeOutLocalPlayer(p0: boolean): void;
  export function filloutPmPlayerList(p0: intPtr, p1: int, p2: int): [boolean, intPtr];
  export function filloutPmPlayerListWithNames(p0: intPtr, p1: intPtr, p2: int, p3: int): [boolean, intPtr, intPtr];
  export function findAnimEventPhase(p0: charPtr, p1: charPtr, p2: charPtr, p3: intPtr, p4: intPtr): [boolean, charPtr, charPtr, charPtr, intPtr, intPtr];
  export function findRadioStationIndex(p0: int): int;
  export function findSpawnPointInDirection(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: Vector3NativePtr): [boolean, Vector3NativePtr];
  export function fixVehicleWindow(p0: int, p1: int): int;
  export function flashAbilityBar(p0: boolean): void;
  export function flashMinimapDisplay(): void;
  export function flashWantedDisplay(p0: boolean): int;
  export function forceAmbientSiren(p0: boolean): void;
  export function forceCleanup(p0: int): void;
  export function forceCleanupForAllThreadsWithThisName(p0: charPtr, p1: int): [void, charPtr];
  export function forceCleanupForThreadWithThisId(p0: int, p1: int): void;
  export function forceEntityAiAndAnimationUpdate(p0: int): void;
  export function forcePedMotionState(p0: int, p1: int, p2: boolean, p3: boolean, p4: boolean): boolean;
  export function forcePedToOpenParachute(p0: int): void;
  export function forceRoomForEntity(p0: int, p1: int, p2: int): void;
  export function forceSocialClubUpdate(): void;
  export function forceVehicleEngineAudio(p0: int, p1: charPtr): [void, charPtr];
  export function formatFocusHeading(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int): int;
  export function freezeEntityPosition(p0: int, p1: boolean): void;
  export function freezePedCameraRotation(p0: int): void;
  export function freezeRadioStation(p0: charPtr): [void, charPtr];
  export function generateDirectionsToCoord(p0: float, p1: float, p2: float, p3: boolean, p4: floatPtr, p5: floatPtr, p6: floatPtr): [int, floatPtr, floatPtr, floatPtr];
  export function getAchievementProgression(p0: int): int;
  export function getActiveScreenResolution(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function getActiveVehicleMissionType(p0: int): int;
  export function getActiveWebsiteId(): int;
  export function getAiBlip(p0: int): int;
  export function getAllocatedStackSize(): int;
  export function getAmmoInClip(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function getAmmoInPedWeapon(p0: int, p1: int): int;
  export function getAngleBetween2dVectors(p0: float, p1: float, p2: float, p3: float): float;
  export function getAnimDuration(p0: charPtr, p1: charPtr): [float, charPtr, charPtr];
  export function getAnimInitialOffsetPosition(p0: charPtr, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: int): [Vector3Native, charPtr, charPtr];
  export function getAnimInitialOffsetRotation(p0: charPtr, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: int): [Vector3Native, charPtr, charPtr];
  export function getAspectRatio(p0: boolean): float;
  export function getAudibleMusicTrackTextId(): int;
  export function getBenchmarkTime(): float;
  export function getBestPedWeapon(p0: int, p1: boolean): int;
  export function getBitsInRange(p0: int, p1: int, p2: int): int;
  export function getBlipAlpha(p0: int): int;
  export function getBlipColour(p0: int): int;
  export function getBlipCoords(p0: int): Vector3Native;
  export function getBlipFromEntity(p0: int): int;
  export function getBlipHudColour(p0: int): int;
  export function getBlipInfoIdCoord(p0: int): Vector3Native;
  export function getBlipInfoIdDisplay(p0: int): int;
  export function getBlipInfoIdEntityIndex(p0: int): int;
  export function getBlipInfoIdIterator(): int;
  export function getBlipInfoIdPickupIndex(p0: int): int;
  export function getBlipInfoIdType(p0: int): int;
  export function getBlipSprite(p0: int): int;
  export function getBoatAnchor(p0: int): boolean;
  export function getCamAnimCurrentPhase(p0: int): float;
  export function getCamCoord(p0: int): Vector3Native;
  export function getCamFarClip(p0: int): float;
  export function getCamFarDof(p0: int): float;
  export function getCamFov(p0: int): float;
  export function getCamNearClip(p0: int): float;
  export function getCamRot(p0: int, p1: int): Vector3Native;
  export function getCamSplineNodeIndex(p0: int): int;
  export function getCamSplineNodePhase(p0: int): float;
  export function getCamSplinePhase(p0: int): float;
  export function getCargobobHookPosition(p0: int): Vector3Native;
  export function getCauseOfMostRecentForceCleanup(): int;
  export function getCgoffset(p0: int): Vector3Native;
  export function getClipSetForScriptedGunTask(p0: int): charPtr;
  export function getClockDayOfMonth(): int;
  export function getClockDayOfWeek(): int;
  export function getClockHours(): int;
  export function getClockMinutes(): int;
  export function getClockMonth(): int;
  export function getClockSeconds(): int;
  export function getClockYear(): int;
  export function getClosestFirePos(p0: Vector3NativePtr, p1: float, p2: float, p3: float): [boolean, Vector3NativePtr];
  export function getClosestMajorVehicleNode(p0: float, p1: float, p2: float, p3: Vector3NativePtr, p4: float, p5: int): [boolean, Vector3NativePtr];
  export function getClosestObjectOfType(p0: float, p1: float, p2: float, p3: float, p4: int, p5: boolean, p6: boolean, p7: boolean): int;
  export function getClosestPed(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: intPtr, p7: boolean, p8: boolean, p9: int): [boolean, intPtr];
  export function getClosestRoad(p0: float, p1: float, p2: float, p3: float, p4: int, p5: Vector3NativePtr, p6: Vector3NativePtr, p7: intPtr, p8: intPtr, p9: floatPtr, p10: boolean): [int, Vector3NativePtr, Vector3NativePtr, intPtr, intPtr, floatPtr];
  export function getClosestVehicle(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int): int;
  export function getClosestVehicleNode(p0: float, p1: float, p2: float, p3: Vector3NativePtr, p4: int, p5: float, p6: float): [boolean, Vector3NativePtr];
  export function getClosestVehicleNodeWithHeading(p0: float, p1: float, p2: float, p3: Vector3NativePtr, p4: floatPtr, p5: int, p6: float, p7: int): [boolean, Vector3NativePtr, floatPtr];
  export function getCloudHatOpacity(): float;
  export function getCollisionNormalOfLastHitForEntity(p0: int): Vector3Native;
  export function getCombatFloat(p0: int, p1: int): float;
  export function getContentCategory(p0: int): int;
  export function getContentDescriptionHash(p0: int): int;
  export function getContentFileVersion(p0: int, p1: int): int;
  export function getContentId(p0: int): charPtr;
  export function getControlInstructionalButton(p0: int, p1: int, p2: int): charPtr;
  export function getControlNormal(p0: int, p1: int): float;
  export function getControlValue(p0: int, p1: int): int;
  export function getConvertibleRoofState(p0: int): int;
  export function getCurrentFrontendMenu(): int;
  export function getCurrentIntensity(): float;
  export function getCurrentLanguageId(): int;
  export function getCurrentNotification(): int;
  export function getCurrentPedVehicleWeapon(p0: int, p1: intPtr): [boolean, intPtr];
  export function getCurrentPedWeapon(p0: int, p1: intPtr, p2: boolean): [boolean, intPtr];
  export function getCurrentPedWeaponEntityIndex(p0: int): int;
  export function getCurrentPlaybackForVehicle(p0: int): int;
  export function getCurrentScriptedConversationLine(): int;
  export function getCurrentWebsiteId(): int;
  export function getCutsceneSectionPlaying(): int;
  export function getCutsceneTime(): int;
  export function getCutsceneTotalDuration(): int;
  export function getDateAndTimeFromUnixEpoch(p0: int, p1: intPtr): [void, intPtr];
  export function getDeadPedPickupCoords(p0: int, p1: float, p2: float): Vector3Native;
  export function getDecalWashLevel(p0: int): float;
  export function getDefaultScriptRendertargetRenderId(): int;
  export function getDesObject(p0: float, p1: float, p2: float, p3: float, p4: charPtr): [int, charPtr];
  export function getDesObjectState(p0: int): int;
  export function getDisabledControlNormal(p0: int, p1: int): float;
  export function getDisplayNameFromVehicleModel(p0: int): charPtr;
  export function getDistanceBetweenCoords(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean): float;
  export function getDlcVehicleData(p0: int, p1: intPtr): [boolean, intPtr];
  export function getDlcVehicleFlags(p0: int): int;
  export function getDlcVehicleModel(p0: int): int;
  export function getDlcWeaponComponentData(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function getDlcWeaponData(p0: int, p1: intPtr): [boolean, intPtr];
  export function getEntityAlpha(p0: int): int;
  export function getEntityAnimCurrentTime(p0: int, p1: charPtr, p2: charPtr): [float, charPtr, charPtr];
  export function getEntityAnimTotalTime(p0: int, p1: charPtr, p2: charPtr): [float, charPtr, charPtr];
  export function getEntityAttachedTo(p0: int): int;
  export function getEntityAttachedToTowTruck(p0: int): int;
  export function getEntityBoneIndexByName(p0: int, p1: charPtr): [int, charPtr];
  export function getEntityCollisonDisabled(p0: int): boolean;
  export function getEntityCoords(p0: int, p1: boolean): Vector3Native;
  export function getEntityForwardVector(p0: int): Vector3Native;
  export function getEntityForwardX(p0: int): float;
  export function getEntityForwardY(p0: int): float;
  export function getEntityHeading(p0: int): float;
  export function getEntityHealth(p0: int): int;
  export function getEntityHeight(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean): float;
  export function getEntityHeightAboveGround(p0: int): float;
  export function getEntityIndexOfCutsceneEntity(p0: charPtr, p1: int): [int, charPtr];
  export function getEntityIndexOfRegisteredEntity(p0: charPtr, p1: int): [int, charPtr];
  export function getEntityLodDist(p0: int): int;
  export function getEntityMatrix(p0: int, p1: Vector3NativePtr, p2: Vector3NativePtr, p3: Vector3NativePtr, p4: Vector3NativePtr): [void, Vector3NativePtr, Vector3NativePtr, Vector3NativePtr, Vector3NativePtr];
  export function getEntityMaxHealth(p0: int): int;
  export function getEntityModel(p0: int): int;
  export function getEntityPhysicsHeading(p0: int): float;
  export function getEntityPitch(p0: int): float;
  export function getEntityPlayerIsFreeAimingAt(p0: int, p1: intPtr): [boolean, intPtr];
  export function getEntityPopulationType(p0: int): int;
  export function getEntityQuaternion(p0: int, p1: floatPtr, p2: floatPtr, p3: floatPtr, p4: floatPtr): [void, floatPtr, floatPtr, floatPtr, floatPtr];
  export function getEntityRoll(p0: int): float;
  export function getEntityRotation(p0: int, p1: int): Vector3Native;
  export function getEntityRotationVelocity(p0: int): Vector3Native;
  export function getEntityScript(p0: int, p1: intPtr): [charPtr, intPtr];
  export function getEntitySpeed(p0: int): float;
  export function getEntitySpeedVector(p0: int, p1: boolean): Vector3Native;
  export function getEntitySubmergedLevel(p0: int): float;
  export function getEntityType(p0: int): int;
  export function getEntityUprightValue(p0: int): float;
  export function getEntityVelocity(p0: int): Vector3Native;
  export function getEventAtIndex(p0: int, p1: int): int;
  export function getEventData(p0: int, p1: int, p2: intPtr, p3: int): [boolean, intPtr];
  export function getEventExists(p0: int, p1: int): boolean;
  export function getFakeWantedLevel(): int;
  export function getFirstBlipInfoId(p0: int): int;
  export function getFirstParentIdForPedType(p0: int): int;
  export function getFollowPedCamViewMode(): int;
  export function getFollowPedCamZoomLevel(): int;
  export function getFollowVehicleCamViewMode(): int;
  export function getFollowVehicleCamZoomLevel(): int;
  export function getForcedComponent(p0: int, p1: int, p2: intPtr, p3: intPtr, p4: intPtr): [void, intPtr, intPtr, intPtr];
  export function getFrameCount(): int;
  export function getFrameTime(): float;
  export function getFreeStackSlotsCount(p0: int): int;
  export function getGameTimer(): int;
  export function getGameplayCamCoord(): Vector3Native;
  export function getGameplayCamCoords(): Vector3Native;
  export function getGameplayCamFarClip(): float;
  export function getGameplayCamFarDof(): float;
  export function getGameplayCamFov(): float;
  export function getGameplayCamNearDof(): float;
  export function getGameplayCamRelativeHeading(): float;
  export function getGameplayCamRelativePitch(): float;
  export function getGameplayCamRot(p0: int): Vector3Native;
  export function getGameplayCamZoom(): float;
  export function getGlobalCharBuffer(): charPtr;
  export function getGroundZCoordWithOffsets(p0: float, p1: float, p2: float, p3: floatPtr, p4: Vector3NativePtr): [boolean, floatPtr, Vector3NativePtr];
  export function getGroundZFor3dCoord(p0: float, p1: float, p2: float, p3: floatPtr, p4: boolean): [boolean, floatPtr];
  export function getGroupSize(p0: int, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function getHairColor(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getHashKey(p0: charPtr): [int, charPtr];
  export function getHashNameForComponent(p0: int, p1: int, p2: int, p3: int): int;
  export function getHashNameForProp(p0: int, p1: int, p2: int, p3: int): int;
  export function getHashOfMapAreaAtCoords(p0: float, p1: float, p2: float): int;
  export function getHashOfThisScriptName(): int;
  export function getHeadingFromVector2d(p0: float, p1: float): float;
  export function getHeliEngineHealth(p0: int): float;
  export function getHeliMainRotorHealth(p0: int): float;
  export function getHeliTailRotorHealth(p0: int): float;
  export function getHudColour(p0: int, p1: intPtr, p2: intPtr, p3: intPtr, p4: intPtr): [void, intPtr, intPtr, intPtr, intPtr];
  export function getHudComponentPosition(p0: int): Vector3Native;
  export function getIdOfNextThreadInEnumeration(): int;
  export function getIdOfThisThread(): int;
  export function getIdealPlayerSwitchType(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): int;
  export function getIndexOfCurrentLevel(): int;
  export function getIndexedItemInItemset(p0: int, p1: int): int;
  export function getInteriorAtCoords(p0: float, p1: float, p2: float): int;
  export function getInteriorAtCoordsWithType(p0: float, p1: float, p2: float, p3: charPtr): [int, charPtr];
  export function getInteriorFromCollision(p0: float, p1: float, p2: float): int;
  export function getInteriorFromEntity(p0: int): int;
  export function getInteriorGroupId(p0: int): int;
  export function getIsHidef(): boolean;
  export function getIsLeftVehicleHeadlightDamaged(p0: int): boolean;
  export function getIsLoadingScreenActive(): boolean;
  export function getIsMultiplayerBrief(p0: boolean): void;
  export function getIsPedGadgetEquipped(p0: int, p1: int): boolean;
  export function getIsProjectileTypeInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: Vector3NativePtr, p8: boolean): [boolean, Vector3NativePtr];
  export function getIsRightVehicleHeadlightDamaged(p0: int): boolean;
  export function getIsSlowRoadFlag(p0: int): boolean;
  export function getIsTaskActive(p0: int, p1: int): boolean;
  export function getIsVehicleEngineRunning(p0: int): boolean;
  export function getIsVehiclePrimaryColourCustom(p0: int): boolean;
  export function getIsVehicleSecondaryColourCustom(p0: int): boolean;
  export function getIsWaypointRecordingLoaded(p0: charPtr): [boolean, charPtr];
  export function getIsWidescreen(): boolean;
  export function getItemsetSize(p0: int): int;
  export function getJackTarget(p0: int): int;
  export function getKeyForEntityInRoom(p0: int): int;
  export function getLabelText(p0: charPtr): [charPtr, charPtr];
  export function getLandingGearState(p0: int): int;
  export function getLastDrivenVehicle(): int;
  export function getLastMaterialHitByEntity(p0: int): int;
  export function getLastPedInVehicleSeat(p0: int, p1: int): int;
  export function getLengthOfLiteralString(p0: charPtr): [int, charPtr];
  export function getLengthOfString(p0: charPtr): [int, charPtr];
  export function getLengthOfStringWithThisTextLabel(p0: charPtr): [int, charPtr];
  export function getLipstickColor(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getLiveryName(p0: int, p1: int): charPtr;
  export function getLocalPlayerAimState(): int;
  export function getLocalTime(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr, p4: intPtr, p5: intPtr): [void, intPtr, intPtr, intPtr, intPtr, intPtr, intPtr];
  export function getLockonRangeOfCurrentPedWeapon(p0: int): float;
  export function getMainPlayerBlipId(): int;
  export function getMaxAmmo(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function getMaxAmmoInClip(p0: int, p1: int, p2: boolean): int;
  export function getMaxRangeOfCurrentPedWeapon(p0: int): float;
  export function getMaxWantedLevel(): int;
  export function getMaximumNumberOfPhotos(): int;
  export function getMaximumNumberOfPhotos2(): int;
  export function getMeleeTargetForPed(p0: int): int;
  export function getMillisecondsPerGameMinute(): int;
  export function getMissionFlag(): boolean;
  export function getMobilePhonePosition(p0: Vector3NativePtr): [void, Vector3NativePtr];
  export function getMobilePhoneRenderId(p0: intPtr): [void, intPtr];
  export function getMobilePhoneRotation(p0: Vector3NativePtr, p1: int): [void, Vector3NativePtr];
  export function getModSlotName(p0: int, p1: int): charPtr;
  export function getModTextLabel(p0: int, p1: int, p2: int): charPtr;
  export function getModelDimensions(p0: int, p1: Vector3NativePtr, p2: Vector3NativePtr): [void, Vector3NativePtr, Vector3NativePtr];
  export function getMount(p0: int): int;
  export function getMusicPlaytime(): int;
  export function getNameOfThread(p0: int): charPtr;
  export function getNameOfZone(p0: float, p1: float, p2: float): charPtr;
  export function getNamedRendertargetRenderId(p0: charPtr): [int, charPtr];
  export function getNavmeshRouteDistanceRemaining(p0: int, p1: floatPtr, p2: _BoolPtr): [int, floatPtr, _BoolPtr];
  export function getNavmeshRouteResult(p0: int): int;
  export function getNearestPlayerToEntity(p0: int): int;
  export function getNearestPlayerToEntityOnTeam(p0: int, p1: int): int;
  export function getNetworkIdFromSoundId(p0: int): int;
  export function getNetworkTime(): int;
  export function getNextBlipInfoId(p0: int): int;
  export function getNextWeatherTypeHashName(): int;
  export function getNgstatBoolHash(p0: int, p1: boolean, p2: boolean, p3: int, p4: charPtr): [int, charPtr];
  export function getNgstatIntHash(p0: int, p1: boolean, p2: boolean, p3: int, p4: charPtr): [int, charPtr];
  export function getNoLoadingScreen(): boolean;
  export function getNthClosestVehicleNode(p0: float, p1: float, p2: float, p3: int, p4: Vector3NativePtr, p5: boolean, p6: float, p7: float): [boolean, Vector3NativePtr];
  export function getNthClosestVehicleNodeFavourDirection(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: Vector3NativePtr, p8: floatPtr, p9: int, p10: int, p11: int): [boolean, Vector3NativePtr, floatPtr];
  export function getNthClosestVehicleNodeId(p0: float, p1: float, p2: float, p3: int, p4: int, p5: float, p6: float): int;
  export function getNthClosestVehicleNodeIdWithHeading(p0: float, p1: float, p2: float, p3: int, p4: Vector3NativePtr, p5: float, p6: int, p7: float, p8: float): [int, Vector3NativePtr];
  export function getNthClosestVehicleNodeWithHeading(p0: float, p1: float, p2: float, p3: int, p4: Vector3NativePtr, p5: floatPtr, p6: intPtr, p7: int, p8: float, p9: float): [boolean, Vector3NativePtr, floatPtr, intPtr];
  export function getNumDecorations(p0: int): int;
  export function getNumDlcVehicles(): int;
  export function getNumDlcWeaponComponents(p0: int): int;
  export function getNumDlcWeapons(): int;
  export function getNumForcedComponents(p0: int): int;
  export function getNumHairColors(): int;
  export function getNumHeadOverlayValues(p0: int): int;
  export function getNumMakeupColors(): int;
  export function getNumMembershipDesc(): int;
  export function getNumModColors(p0: int, p1: boolean): int;
  export function getNumModKits(p0: int): int;
  export function getNumParentPedsOfType(p0: int): int;
  export function getNumPropsFromOutfit(p0: int, p1: int, p2: int, p3: boolean, p4: int, p5: int): int;
  export function getNumReservedMissionObjects(p0: boolean): int;
  export function getNumReservedMissionPeds(p0: boolean): int;
  export function getNumReservedMissionVehicles(p0: boolean): int;
  export function getNumVehicleMods(p0: int, p1: int): int;
  export function getNumVehicleWindowTints(): int;
  export function getNumberOfActiveBlips(): int;
  export function getNumberOfDispatchedUnitsForPlayer(p0: int): int;
  export function getNumberOfEvents(p0: int): int;
  export function getNumberOfFiresInRange(p0: float, p1: float, p2: float, p3: float): int;
  export function getNumberOfInstancesOfScriptWithNameHash(p0: int): int;
  export function getNumberOfPassengerVoiceVariations(p0: int): int;
  export function getNumberOfPedDrawableVariations(p0: int, p1: int): int;
  export function getNumberOfPedPropDrawableVariations(p0: int, p1: int): int;
  export function getNumberOfPedPropTextureVariations(p0: int, p1: int, p2: int): int;
  export function getNumberOfPedTextureVariations(p0: int, p1: int, p2: int): int;
  export function getNumberOfPhotos(): int;
  export function getNumberOfPlayers(): int;
  export function getNumberOfStreamingRequests(): int;
  export function getNumberOfVehicleColours(p0: int): int;
  export function getNumberOfVehicleNumberPlates(): int;
  export function getObjectFragmentDamageHealth(p0: int, p1: boolean): float;
  export function getObjectIndexFromEntityIndex(p0: int): int;
  export function getObjectOffsetFromCoords(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): Vector3Native;
  export function getOffsetFromEntityGivenWorldCoords(p0: int, p1: float, p2: float, p3: float): Vector3Native;
  export function getOffsetFromEntityInWorldCoords(p0: int, p1: float, p2: float, p3: float): Vector3Native;
  export function getOffsetFromInteriorInWorldCoords(p0: int, p1: float, p2: float, p3: float): Vector3Native;
  export function getOnlineVersion(): charPtr;
  export function getOnscreenKeyboardResult(): charPtr;
  export function getPauseMenuState(): int;
  export function getPedAccuracy(p0: int): int;
  export function getPedAlertness(p0: int): int;
  export function getPedAmmoByType(p0: int, p1: int): int;
  export function getPedAmmoTypeFromWeapon(p0: int, p1: int): int;
  export function getPedArmour(p0: int): int;
  export function getPedAsGroupLeader(p0: int): int;
  export function getPedAsGroupMember(p0: int, p1: int): int;
  export function getPedBoneCoords(p0: int, p1: int, p2: float, p3: float, p4: float): Vector3Native;
  export function getPedBoneIndex(p0: int, p1: int): int;
  export function getPedCauseOfDeath(p0: int): int;
  export function getPedCombatMovement(p0: int): int;
  export function getPedCombatRange(p0: int): int;
  export function getPedConfigFlag(p0: int, p1: int, p2: boolean): boolean;
  export function getPedDecorationsState(p0: int): int;
  export function getPedDefensiveAreaPosition(p0: int, p1: boolean): Vector3Native;
  export function getPedDesiredMoveBlendRatio(p0: int): float;
  export function getPedDrawableVariation(p0: int, p1: int): int;
  export function getPedEnveffScale(p0: int): float;
  export function getPedExtractedDisplacement(p0: int, p1: boolean): Vector3Native;
  export function getPedFloodInvincibility(p0: int, p1: boolean): void;
  export function getPedGroupIndex(p0: int): int;
  export function getPedHeadBlendData(p0: int, p1: intPtr): [boolean, intPtr];
  export function getPedHeadOverlayValue(p0: int, p1: int): int;
  export function getPedInVehicleSeat(p0: int, p1: int): int;
  export function getPedIndexFromEntityIndex(p0: int): int;
  export function getPedInsideExplosionArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float): int;
  export function getPedLastDamageBone(p0: int, p1: intPtr): [boolean, intPtr];
  export function getPedLastWeaponImpactCoord(p0: int, p1: Vector3NativePtr): [boolean, Vector3NativePtr];
  export function getPedMaxHealth(p0: int): int;
  export function getPedMoney(p0: int): int;
  export function getPedNearbyPeds(p0: int, p1: intPtr, p2: int): [int, intPtr];
  export function getPedNearbyVehicles(p0: int, p1: intPtr): [int, intPtr];
  export function getPedPaletteVariation(p0: int, p1: int): int;
  export function getPedParachuteLandingType(p0: int): int;
  export function getPedParachuteState(p0: int): int;
  export function getPedParachuteTintIndex(p0: int, p1: intPtr): [void, intPtr];
  export function getPedPropIndex(p0: int, p1: int): int;
  export function getPedPropTextureIndex(p0: int, p1: int): int;
  export function getPedRagdollBoneIndex(p0: int, p1: int): int;
  export function getPedRelationshipGroupDefaultHash(p0: int): int;
  export function getPedRelationshipGroupHash(p0: int): int;
  export function getPedResetFlag(p0: int, p1: int): boolean;
  export function getPedSourceOfDeath(p0: int): int;
  export function getPedStealthMovement(p0: int): boolean;
  export function getPedTextureVariation(p0: int, p1: int): int;
  export function getPedType(p0: int): int;
  export function getPedUsingVehicleDoor(p0: int, p1: int): int;
  export function getPedWaypointDistance(p0: int): float;
  export function getPedWaypointProgress(p0: int): int;
  export function getPedWeaponTintIndex(p0: int, p1: int): int;
  export function getPedWeapontypeInSlot(p0: int, p1: int): int;
  export function getPedheadshotTxdString(p0: int): charPtr;
  export function getPedsJacker(p0: int): int;
  export function getPhoneGestureAnimCurrentTime(p0: int): float;
  export function getPhoneGestureAnimTotalTime(p0: int): float;
  export function getPickupCoords(p0: int): Vector3Native;
  export function getPickupHash(p0: int): int;
  export function getPickupObject(p0: int): int;
  export function getPlayerAdvancedModifierPrivileges(p0: int): charPtr;
  export function getPlayerCurrentStealthNoise(p0: int): float;
  export function getPlayerGroup(p0: int): int;
  export function getPlayerHasReserveParachute(p0: int): boolean;
  export function getPlayerHeadsetSoundAlternate(p0: charPtr, p1: float): [void, charPtr];
  export function getPlayerIndex(): int;
  export function getPlayerInvincible(p0: int): boolean;
  export function getPlayerMaxArmour(p0: int): int;
  export function getPlayerName(p0: int): charPtr;
  export function getPlayerParachutePackTintIndex(p0: int, p1: intPtr): [void, intPtr];
  export function getPlayerParachuteSmokeTrailColor(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getPlayerParachuteTintIndex(p0: int, p1: intPtr): [void, intPtr];
  export function getPlayerPed(p0: int): int;
  export function getPlayerPedIsFollowing(p0: int): int;
  export function getPlayerPedScriptIndex(p0: int): int;
  export function getPlayerRadioStationGenre(): int;
  export function getPlayerRadioStationIndex(): int;
  export function getPlayerRadioStationName(): charPtr;
  export function getPlayerReserveParachuteTintIndex(p0: int, p1: intPtr): [void, intPtr];
  export function getPlayerRgbColour(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getPlayerShortSwitchState(): int;
  export function getPlayerSprintStaminaRemaining(p0: int): float;
  export function getPlayerSprintTimeRemaining(p0: int): float;
  export function getPlayerSwitchState(): int;
  export function getPlayerSwitchType(): int;
  export function getPlayerTargetEntity(p0: int, p1: intPtr): [boolean, intPtr];
  export function getPlayerTeam(p0: int): int;
  export function getPlayerUnderwaterTimeRemaining(p0: int): float;
  export function getPlayerWantedCentrePosition(p0: int): Vector3Native;
  export function getPlayerWantedLevel(p0: int): int;
  export function getPlayersLastVehicle(): int;
  export function getPositionInRecording(p0: int): float;
  export function getPositionOfVehicleRecordingAtTime(p0: int, p1: float, p2: charPtr): [Vector3Native, charPtr];
  export function getPosixTime(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr, p4: intPtr, p5: intPtr): int;
  export function getPrevWeatherTypeHashName(): int;
  export function getProfileSetting(p0: int): int;
  export function getProjectileNearPed(p0: int, p1: int, p2: float, p3: Vector3NativePtr, p4: intPtr, p5: boolean): [boolean, Vector3NativePtr, intPtr];
  export function getProjectileNearPedCoords(p0: int, p1: int, p2: float, p3: Vector3NativePtr, p4: boolean): [boolean, Vector3NativePtr];
  export function getPropFromOutfit(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function getPstatBoolHash(p0: int, p1: boolean, p2: boolean, p3: int): int;
  export function getPstatIntHash(p0: int, p1: boolean, p2: boolean, p3: int): int;
  export function getRadioStationName(p0: int): charPtr;
  export function getRainLevel(): float;
  export function getRandomEventFlag(): int;
  export function getRandomFloatInRange(p0: float, p1: float): float;
  export function getRandomIntInRange(p0: int, p1: int): int;
  export function getRandomPedAtCoord(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): int;
  export function getRandomVehicleBackBumperInSphere(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int): int;
  export function getRandomVehicleFrontBumperInSphere(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: int): int;
  export function getRandomVehicleInSphere(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int): int;
  export function getRandomVehicleModelInMemory(p0: boolean, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function getRandomVehicleNode(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: Vector3NativePtr, p8: intPtr): [boolean, Vector3NativePtr, intPtr];
  export function getRelationshipBetweenGroups(p0: int, p1: int): int;
  export function getRelationshipBetweenPeds(p0: int, p1: int): int;
  export function getRenderingCam(): int;
  export function getReplayFreeCamMaxRange(): float;
  export function getRoomKeyFromEntity(p0: int): int;
  export function getRoomKeyFromGameplayCam(): int;
  export function getRootContentId(p0: int): charPtr;
  export function getRopeLastVertexCoord(p0: int): int;
  export function getRopeLength(p0: int): float;
  export function getRopeVertexCoord(p0: int, p1: int): int;
  export function getRopeVertexCount(p0: int): int;
  export function getRotationOfVehicleRecordingAtTime(p0: int, p1: float, p2: intPtr): [int, intPtr];
  export function getSafeCoordForPed(p0: float, p1: float, p2: float, p3: boolean, p4: Vector3NativePtr, p5: int): [boolean, Vector3NativePtr];
  export function getSafePickupCoords(p0: float, p1: float, p2: float, p3: int, p4: int): Vector3Native;
  export function getSafeZoneSize(): float;
  export function getScaleformMovieFunctionReturnBool(p0: int): boolean;
  export function getScaleformMovieFunctionReturnInt(p0: int): int;
  export function getScreenCoordFromWorldCoord(p0: float, p1: float, p2: float, p3: floatPtr, p4: floatPtr): [boolean, floatPtr, floatPtr];
  export function getScreenEffectIsActive(p0: charPtr): [boolean, charPtr];
  export function getScreenResolution(p0: intPtr, p1: intPtr): [void, intPtr, intPtr];
  export function getScriptTaskStatus(p0: int, p1: int): int;
  export function getScriptedCoverPointCoords(p0: int): Vector3Native;
  export function getSeatPedIsTryingToEnter(p0: int): int;
  export function getSelectedPedWeapon(p0: int): int;
  export function getSequenceProgress(p0: int): int;
  export function getShapeTestResult(p0: int, p1: _BoolPtr, p2: Vector3NativePtr, p3: Vector3NativePtr, p4: intPtr): [int, _BoolPtr, Vector3NativePtr, Vector3NativePtr, intPtr];
  export function getShapeTestResultEx(p0: int, p1: _BoolPtr, p2: Vector3NativePtr, p3: Vector3NativePtr, p4: intPtr, p5: intPtr): [int, _BoolPtr, Vector3NativePtr, Vector3NativePtr, intPtr, intPtr];
  export function getShopPedComponent(p0: int, p1: intPtr): [void, intPtr];
  export function getShopPedOutfit(p0: int, p1: intPtr): [void, intPtr];
  export function getShopPedOutfitLocate(p0: int): int;
  export function getShopPedQueryComponent(p0: int, p1: intPtr): [void, intPtr];
  export function getShopPedQueryOutfit(p0: int, p1: intPtr): [void, intPtr];
  export function getShopPedQueryProp(p0: int, p1: intPtr): [void, intPtr];
  export function getShowPedInPauseMenu(): boolean;
  export function getSnowLevel(): float;
  export function getSocialclubNickname(): charPtr;
  export function getSoundId(): int;
  export function getSoundIdFromNetworkId(p0: int): int;
  export function getStateOfClosestDoorOfType(p0: int, p1: float, p2: float, p3: float, p4: _BoolPtr, p5: floatPtr): [void, _BoolPtr, floatPtr];
  export function getStreamPlayTime(): int;
  export function getStreetNameAtCoord(p0: float, p1: float, p2: float, p3: intPtr, p4: intPtr): [void, intPtr, intPtr];
  export function getStreetNameFromHashKey(p0: int): charPtr;
  export function getSupportsGpsRouteFlag(p0: int): boolean;
  export function getSynchronizedScenePhase(p0: int): float;
  export function getSynchronizedSceneRate(p0: int): float;
  export function getTattooZone(p0: int, p1: int): int;
  export function getTextScaleHeight(p0: float, p1: int): float;
  export function getTextScreenLineCount(p0: float, p1: float): int;
  export function getTextSubstring(p0: charPtr, p1: int, p2: int): [charPtr, charPtr];
  export function getTextSubstringSafe(p0: charPtr, p1: int, p2: int, p3: int): [charPtr, charPtr];
  export function getTextSubstringSlice(p0: charPtr, p1: int, p2: int): [charPtr, charPtr];
  export function getTextureResolution(p0: charPtr, p1: charPtr): [Vector3Native, charPtr, charPtr];
  export function getThisScriptName(): charPtr;
  export function getTimeAsString(p0: int): charPtr;
  export function getTimeDifference(p0: int, p1: int): int;
  export function getTimeOffset(p0: int, p1: int): int;
  export function getTimePositionInRecording(p0: int): float;
  export function getTimeSinceLastArrest(): int;
  export function getTimeSinceLastDeath(): int;
  export function getTimeSincePlayerDroveAgainstTraffic(p0: int): int;
  export function getTimeSincePlayerDroveOnPavement(p0: int): int;
  export function getTimeSincePlayerHitPed(p0: int): int;
  export function getTimeSincePlayerHitVehicle(p0: int): int;
  export function getTimecycleModifierIndex(): int;
  export function getTotalDurationOfVehicleRecording(p0: int, p1: int): int;
  export function getTotalDurationOfVehicleRecordingId(p0: int): float;
  export function getTotalScInboxIds(): int;
  export function getTrainCarriage(p0: int, p1: int): int;
  export function getTunablesContentModifierId(p0: int): int;
  export function getTupstatBoolHash(p0: int, p1: boolean, p2: boolean, p3: int): int;
  export function getTupstatIntHash(p0: int, p1: boolean, p2: boolean, p3: int): int;
  export function getTvChannel(): int;
  export function getTvVolume(): float;
  export function getUserLanguageId(): int;
  export function getUtcTime(p0: intPtr, p1: intPtr, p2: intPtr, p3: intPtr, p4: intPtr, p5: intPtr): [void, intPtr, intPtr, intPtr, intPtr, intPtr, intPtr];
  export function getVariantComponent(p0: int, p1: int, p2: intPtr, p3: intPtr, p4: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleAcceleration(p0: int): float;
  export function getVehicleAttachedToCargobob(p0: int): int;
  export function getVehicleAttachedToEntity(p0: int): int;
  export function getVehicleBodyHealth(p0: int): float;
  export function getVehicleBodyHealth2(p0: int): float;
  export function getVehicleCauseOfDestruction(p0: int): int;
  export function getVehicleClass(p0: int): int;
  export function getVehicleClassFromName(p0: int): int;
  export function getVehicleClassMaxAcceleration(p0: int): float;
  export function getVehicleClassMaxAgility(p0: int): float;
  export function getVehicleClassMaxBraking(p0: int): float;
  export function getVehicleClassMaxSpeed(p0: int): float;
  export function getVehicleClassMaxTraction(p0: int): float;
  export function getVehicleColor(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleColourCombination(p0: int): int;
  export function getVehicleColours(p0: int, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function getVehicleCustomPrimaryColour(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleCustomSecondaryColour(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleDefaultHorn(p0: int): int;
  export function getVehicleDeformationAtPos(p0: int, p1: float, p2: float, p3: float): Vector3Native;
  export function getVehicleDirtLevel(p0: int): float;
  export function getVehicleDoorAngleRatio(p0: int, p1: int): float;
  export function getVehicleDoorLockStatus(p0: int): int;
  export function getVehicleDoorsLockedForPlayer(p0: int, p1: int): boolean;
  export function getVehicleEngineHealth(p0: int): float;
  export function getVehicleEnveffScale(p0: int): float;
  export function getVehicleExtraColours(p0: int, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function getVehicleHornHash(p0: int): int;
  export function getVehicleIndexFromEntityIndex(p0: int): int;
  export function getVehicleLayoutHash(p0: int): int;
  export function getVehicleLightsState(p0: int, p1: _BoolPtr, p2: _BoolPtr): [boolean, _BoolPtr, _BoolPtr];
  export function getVehicleLivery(p0: int): int;
  export function getVehicleLiveryCount(p0: int): int;
  export function getVehicleMaxBraking(p0: int): float;
  export function getVehicleMaxNumberOfPassengers(p0: int): int;
  export function getVehicleMaxSpeed(p0: int): float;
  export function getVehicleMaxTraction(p0: int): float;
  export function getVehicleMod(p0: int, p1: int): int;
  export function getVehicleModColor1(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleModColor1Name(p0: int, p1: boolean): charPtr;
  export function getVehicleModColor2(p0: int, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function getVehicleModColor2Name(p0: int): charPtr;
  export function getVehicleModData(p0: int, p1: int, p2: int): int;
  export function getVehicleModKit(p0: int): int;
  export function getVehicleModKitType(p0: int): int;
  export function getVehicleModModifierValue(p0: int, p1: int, p2: int): float;
  export function getVehicleModVariation(p0: int, p1: int): boolean;
  export function getVehicleModelAcceleration(p0: int): float;
  export function getVehicleModelDownForce(p0: int): float;
  export function getVehicleModelHandBrake(p0: int): float;
  export function getVehicleModelMaxBraking(p0: int): float;
  export function getVehicleModelMaxKnots(p0: int): float;
  export function getVehicleModelMaxSpeed(p0: int): float;
  export function getVehicleModelMaxTraction(p0: int): float;
  export function getVehicleModelMoveResistance(p0: int): float;
  export function getVehicleModelNumberOfSeats(p0: int): int;
  export function getVehicleNeonLightsColour(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleNodePosition(p0: int, p1: Vector3NativePtr): [void, Vector3NativePtr];
  export function getVehicleNodeProperties(p0: float, p1: float, p2: float, p3: intPtr, p4: intPtr): [boolean, intPtr, intPtr];
  export function getVehicleNumberOfPassengers(p0: int): int;
  export function getVehicleNumberPlateText(p0: int): charPtr;
  export function getVehicleNumberPlateTextIndex(p0: int): int;
  export function getVehicleOwner(p0: int, p1: intPtr): [boolean, intPtr];
  export function getVehiclePedIsIn(p0: int, p1: boolean): int;
  export function getVehiclePedIsTryingToEnter(p0: int): int;
  export function getVehiclePedIsUsing(p0: int): int;
  export function getVehiclePetrolTankHealth(p0: int): float;
  export function getVehiclePlateType(p0: int): int;
  export function getVehicleRecordingId(p0: int, p1: charPtr): [int, charPtr];
  export function getVehicleSuspensionHeight(p0: int): float;
  export function getVehicleTrailerVehicle(p0: int, p1: intPtr): [boolean, intPtr];
  export function getVehicleTyreSmokeColor(p0: int, p1: intPtr, p2: intPtr, p3: intPtr): [void, intPtr, intPtr, intPtr];
  export function getVehicleTyresCanBurst(p0: int): boolean;
  export function getVehicleWaypointProgress(p0: int): int;
  export function getVehicleWaypointTargetPoint(p0: int): int;
  export function getVehicleWheelType(p0: int): int;
  export function getVehicleWindowTint(p0: int): int;
  export function getWantedLevelRadius(p0: int): int;
  export function getWantedLevelThreshold(p0: int): int;
  export function getWaterHeight(p0: float, p1: float, p2: float, p3: floatPtr): [boolean, floatPtr];
  export function getWaterHeightNoWaves(p0: float, p1: float, p2: float, p3: floatPtr): [boolean, floatPtr];
  export function getWaypointDistanceAlongRoute(p0: charPtr, p1: int): [float, charPtr];
  export function getWeaponClipSize(p0: int): int;
  export function getWeaponComponentHudStats(p0: int, p1: intPtr): [boolean, intPtr];
  export function getWeaponComponentTypeModel(p0: int): int;
  export function getWeaponDamageType(p0: int): int;
  export function getWeaponHashFromPickup(p0: int): int;
  export function getWeaponHudStats(p0: int, p1: intPtr): [boolean, intPtr];
  export function getWeaponObjectFromPed(p0: int, p1: boolean): int;
  export function getWeaponObjectTintIndex(p0: int): int;
  export function getWeaponTintCount(p0: int): int;
  export function getWeapontypeGroup(p0: int): int;
  export function getWeapontypeModel(p0: int): int;
  export function getWeapontypeSlot(p0: int): int;
  export function getWeatherTypeTransition(p0: intPtr, p1: intPtr, p2: floatPtr): [void, intPtr, intPtr, floatPtr];
  export function getWindDirection(): Vector3Native;
  export function getWindSpeed(): float;
  export function getWorldPositionOfEntityBone(p0: int, p1: int): Vector3Native;
  export function getZoneAtCoords(p0: float, p1: float, p2: float): int;
  export function getZoneFromNameId(p0: charPtr): [int, charPtr];
  export function getZonePopschedule(p0: int): int;
  export function getZoneScumminess(p0: int): int;
  export function giveAchievementToPlayer(p0: int): int;
  export function giveDelayedWeaponToPed(p0: int, p1: int, p2: int, p3: boolean): void;
  export function givePedHelmet(p0: int, p1: boolean, p2: int, p3: int): void;
  export function givePedNmMessage(p0: int): void;
  export function givePedToPauseMenu(p0: int, p1: int): void;
  export function givePlayerRagdollControl(p0: int, p1: boolean): void;
  export function giveWeaponComponentToPed(p0: int, p1: int, p2: int): void;
  export function giveWeaponComponentToWeaponObject(p0: int, p1: int): void;
  export function giveWeaponObjectToPed(p0: int, p1: int): void;
  export function giveWeaponToPed(p0: int, p1: int, p2: int, p3: boolean, p4: boolean): void;
  export function hasAchievementBeenPassed(p0: int): boolean;
  export function hasActionModeAssetLoaded(p0: charPtr): [boolean, charPtr];
  export function hasAdditionalTextLoaded(p0: int): boolean;
  export function hasAnimDictLoaded(p0: charPtr): [boolean, charPtr];
  export function hasAnimEventFired(p0: int, p1: int): boolean;
  export function hasAnimSetLoaded(p0: charPtr): [boolean, charPtr];
  export function hasBgScriptBeenDownloaded(): boolean;
  export function hasBulletImpactedInArea(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean): boolean;
  export function hasBulletImpactedInBox(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): boolean;
  export function hasButtonCombinationJustBeenEntered(p0: int, p1: int): boolean;
  export function hasCheatStringJustBeenEntered(p0: int): boolean;
  export function hasClipSetLoaded(p0: charPtr): [boolean, charPtr];
  export function hasClosestObjectOfTypeBeenBroken(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int): boolean;
  export function hasCollisionForModelLoaded(p0: int): boolean;
  export function hasCollisionLoadedAroundEntity(p0: int): boolean;
  export function hasCutsceneFinished(): boolean;
  export function hasCutsceneLoaded(): boolean;
  export function hasEntityAnimFinished(p0: int, p1: charPtr, p2: charPtr, p3: int): [boolean, charPtr, charPtr];
  export function hasEntityBeenDamagedByAnyObject(p0: int): boolean;
  export function hasEntityBeenDamagedByAnyPed(p0: int): boolean;
  export function hasEntityBeenDamagedByAnyVehicle(p0: int): boolean;
  export function hasEntityBeenDamagedByEntity(p0: int, p1: int, p2: boolean): boolean;
  export function hasEntityBeenDamagedByWeapon(p0: int, p1: int, p2: int): boolean;
  export function hasEntityClearLosToEntity(p0: int, p1: int, p2: int): boolean;
  export function hasEntityClearLosToEntityInFront(p0: int, p1: int): boolean;
  export function hasEntityCollidedWithAnything(p0: int): boolean;
  export function hasForceCleanupOccurred(p0: int): boolean;
  export function hasHudScaleformLoaded(p0: int): boolean;
  export function hasModelLoaded(p0: int): boolean;
  export function hasMpGamerTag(): boolean;
  export function hasMpGamerTag2(p0: int): boolean;
  export function hasNamedPtfxAssetLoaded(p0: charPtr): [boolean, charPtr];
  export function hasNamedScaleformMovieLoaded(p0: charPtr): [boolean, charPtr];
  export function hasNetworkTimeStarted(): boolean;
  export function hasObjectBeenBroken(p0: int): boolean;
  export function hasPedBeenDamagedByWeapon(p0: int, p1: int, p2: int): boolean;
  export function hasPedGotWeapon(p0: int, p1: int, p2: boolean): boolean;
  export function hasPedGotWeaponComponent(p0: int, p1: int, p2: int): boolean;
  export function hasPedHeadBlendFinished(p0: int): boolean;
  export function hasPedReceivedEvent(p0: int, p1: int): boolean;
  export function hasPickupBeenCollected(p0: int): boolean;
  export function hasPlayerBeenSpottedInStolenVehicle(p0: int): boolean;
  export function hasPlayerDamagedAtLeastOneNonAnimalPed(p0: int): boolean;
  export function hasPlayerDamagedAtLeastOnePed(p0: int): boolean;
  export function hasPlayerLeftTheWorld(p0: int): boolean;
  export function hasPlayerTeleportFinished(p0: int): boolean;
  export function hasPreloadModsFinished(p0: int): boolean;
  export function hasPtfxAssetLoaded(): boolean;
  export function hasScaleformContainerMovieLoadedIntoParent(p0: int): boolean;
  export function hasScaleformMovieLoaded(p0: int): boolean;
  export function hasScriptLoaded(p0: charPtr): [boolean, charPtr];
  export function hasScriptWithNameHashLoaded(p0: int): boolean;
  export function hasSoundFinished(p0: int): boolean;
  export function hasStealthModeAssetLoaded(p0: charPtr): [boolean, charPtr];
  export function hasStreamedTextureDictLoaded(p0: charPtr): [boolean, charPtr];
  export function hasThisAdditionalTextLoaded(p0: charPtr, p1: int): [boolean, charPtr];
  export function hasThisCutsceneLoaded(p0: charPtr): [boolean, charPtr];
  export function hasTunablesBeenDownloaded(): boolean;
  export function hasVehicleAssetLoaded(p0: int): boolean;
  export function hasVehicleGotProjectileAttached(p0: int, p1: int, p2: int, p3: int): boolean;
  export function hasVehicleRecordingBeenLoaded(p0: int, p1: intPtr): [boolean, intPtr];
  export function hasWeaponAssetLoaded(p0: int): boolean;
  export function hasWeaponGotWeaponComponent(p0: int, p1: int): boolean;
  export function hideHelpTextThisFrame(): void;
  export function hideHudAndRadarThisFrame(): void;
  export function hideHudComponentThisFrame(p0: int): void;
  export function hideLoadingOnFadeThisFrame(): void;
  export function hideMapObjectThisFrame(p0: int): void;
  export function hideNumberOnBlip(p0: int): void;
  export function hidePedBloodDamageByZone(p0: int, p1: int, p2: boolean): void;
  export function hidePedWeaponForScriptedCutscene(p0: int, p1: boolean): void;
  export function hideScriptedHudComponentThisFrame(p0: int): void;
  export function hideSpecialAbilityLockonOperation(p0: int, p1: boolean): void;
  export function highlightPlacementCoords(p0: float, p1: float, p2: float, p3: int): void;
  export function hintAmbientAudioBank(p0: int, p1: int): int;
  export function hintScriptAudioBank(p0: int, p1: int): int;
  export function ignoreNextRestart(p0: boolean): void;
  export function initShopPedComponent(p0: intPtr): [void, intPtr];
  export function initShopPedProp(p0: intPtr): [void, intPtr];
  export function intToParticipantindex(p0: int): int;
  export function intToPlayerindex(p0: int): int;
  export function interruptConversation(p0: int, p1: intPtr, p2: intPtr): [void, intPtr, intPtr];
  export function isAiBlipAlwaysShown(p0: int, p1: boolean): void;
  export function isAimCamActive(): boolean;
  export function isAlarmPlaying(p0: charPtr): [boolean, charPtr];
  export function isAmbientSpeechDisabled(p0: int): boolean;
  export function isAmbientSpeechPlaying(p0: int): boolean;
  export function isAmbientZoneEnabled(p0: charPtr): [boolean, charPtr];
  export function isAnEntity(p0: int): boolean;
  export function isAnyObjectNearPoint(p0: float, p1: float, p2: float, p3: float, p4: boolean): boolean;
  export function isAnyPassengerRappelling(p0: int): boolean;
  export function isAnyPedNearPoint(p0: float, p1: float, p2: float, p3: float): boolean;
  export function isAnyPedShootingInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): boolean;
  export function isAnySpeechPlaying(p0: int): boolean;
  export function isAnyVehicleNearPoint(p0: float, p1: float, p2: float, p3: float): boolean;
  export function isAreaOccupied(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: int, p12: boolean): boolean;
  export function isAudioSceneActive(p0: charPtr): [boolean, charPtr];
  export function isAussieVersion(): boolean;
  export function isAutoSaveInProgress(): boolean;
  export function isBigVehicle(p0: int): boolean;
  export function isBitSet(p0: int, p1: int): boolean;
  export function isBlipFlashing(p0: int): boolean;
  export function isBlipOnMinimap(p0: int): boolean;
  export function isBlipShortRange(p0: int): boolean;
  export function isBulletInAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean): boolean;
  export function isBulletInArea(p0: float, p1: float, p2: float, p3: float, p4: boolean): boolean;
  export function isBulletInBox(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean): boolean;
  export function isCamActive(p0: int): boolean;
  export function isCamInterpolating(p0: int): boolean;
  export function isCamPlayingAnim(p0: int, p1: charPtr, p2: charPtr): [boolean, charPtr, charPtr];
  export function isCamRendering(p0: int): boolean;
  export function isCamShaking(p0: int): boolean;
  export function isCamSplinePaused(p0: int): boolean;
  export function isCinematicCamRendering(): boolean;
  export function isCinematicCamShaking(): boolean;
  export function isCinematicShotActive(p0: int): boolean;
  export function isControlEnabled(p0: int, p1: int): boolean;
  export function isControlJustPressed(p0: int, p1: int): boolean;
  export function isControlJustReleased(p0: int, p1: int): boolean;
  export function isControlPressed(p0: int, p1: int): boolean;
  export function isControlReleased(p0: int, p1: int): boolean;
  export function isConversationPedDead(p0: int): boolean;
  export function isCopPedInArea3d(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): boolean;
  export function isCopVehicleInArea3d(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): boolean;
  export function isCutsceneActive(): boolean;
  export function isCutscenePlaying(): boolean;
  export function isDamageTrackerActiveOnNetworkId(p0: int): boolean;
  export function isDecalAlive(p0: int): boolean;
  export function isDisabledControlJustPressed(p0: int, p1: int): boolean;
  export function isDisabledControlJustReleased(p0: int, p1: int): boolean;
  export function isDisabledControlPressed(p0: int, p1: int): boolean;
  export function isDlcDataEmpty(p0: intPtr): [boolean, intPtr];
  export function isDlcPresent(p0: int): boolean;
  export function isDlcVehicleMod(p0: int): boolean;
  export function isDoorClosed(p0: int): boolean;
  export function isDrivebyTaskUnderneathDrivingTask(p0: int): boolean;
  export function isDurangoVersion(): boolean;
  export function isEntityAMissionEntity(p0: int): boolean;
  export function isEntityAPed(p0: int): boolean;
  export function isEntityAVehicle(p0: int): boolean;
  export function isEntityAnObject(p0: int): boolean;
  export function isEntityAtCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: boolean, p9: int): boolean;
  export function isEntityAtEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean, p6: boolean, p7: int): boolean;
  export function isEntityAttached(p0: int): boolean;
  export function isEntityAttachedToAnyObject(p0: int): boolean;
  export function isEntityAttachedToAnyPed(p0: int): boolean;
  export function isEntityAttachedToAnyVehicle(p0: int): boolean;
  export function isEntityAttachedToEntity(p0: int, p1: int): boolean;
  export function isEntityDead(p0: int): boolean;
  export function isEntityFocus(p0: int): boolean;
  export function isEntityInAir(p0: int): boolean;
  export function isEntityInAngledArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: boolean, p10: int): boolean;
  export function isEntityInArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: boolean, p9: int): boolean;
  export function isEntityInWater(p0: int): boolean;
  export function isEntityInZone(p0: int, p1: charPtr): [boolean, charPtr];
  export function isEntityOccluded(p0: int): boolean;
  export function isEntityOnFire(p0: int): boolean;
  export function isEntityOnScreen(p0: int): boolean;
  export function isEntityPlayingAnim(p0: int, p1: charPtr, p2: charPtr, p3: int): [boolean, charPtr, charPtr];
  export function isEntityStatic(p0: int): boolean;
  export function isEntityTouchingEntity(p0: int, p1: int): boolean;
  export function isEntityTouchingModel(p0: int, p1: int): boolean;
  export function isEntityUpright(p0: int, p1: float): boolean;
  export function isEntityUpsidedown(p0: int): boolean;
  export function isEntityVisible(p0: int): boolean;
  export function isEntityVisibleToScript(p0: int): boolean;
  export function isEntityWaitingForWorldCollision(p0: int): boolean;
  export function isExplosionInAngledArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float): boolean;
  export function isExplosionInArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): boolean;
  export function isExplosionInSphere(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function isFirstPersonAimCamActive(): boolean;
  export function isFollowPedCamActive(): boolean;
  export function isFollowVehicleCamActive(): boolean;
  export function isFrontendFading(): boolean;
  export function isGameInControlOfMusic(): boolean;
  export function isGameplayCamLookingBehind(): boolean;
  export function isGameplayCamRendering(): boolean;
  export function isGameplayCamShaking(): boolean;
  export function isGameplayHintActive(): boolean;
  export function isGarageEmpty(p0: int, p1: boolean, p2: int): boolean;
  export function isHeliPartBroken(p0: int, p1: boolean, p2: boolean, p3: boolean): boolean;
  export function isHelpMessageBeingDisplayed(): boolean;
  export function isHelpMessageFadingOut(): boolean;
  export function isHelpMessageOnScreen(): boolean;
  export function isHornActive(p0: int): boolean;
  export function isHudComponentActive(p0: int): boolean;
  export function isHudHidden(): boolean;
  export function isHudPreferenceSwitchedOn(): boolean;
  export function isInItemset(p0: int, p1: int): boolean;
  export function isInLoadingScreen(p0: boolean): void;
  export function isInVehicleCamDisabled(): boolean;
  export function isIncidentValid(p0: int): boolean;
  export function isInputDisabled(p0: int): boolean;
  export function isInputJustDisabled(p0: int): boolean;
  export function isInteriorCapped(p0: int): boolean;
  export function isInteriorDisabled(p0: int): boolean;
  export function isInteriorPropEnabled(p0: int, p1: charPtr): [boolean, charPtr];
  export function isInteriorReady(p0: int): boolean;
  export function isInteriorRenderingDisabled(): boolean;
  export function isInteriorScene(): boolean;
  export function isIplActive(p0: charPtr): [boolean, charPtr];
  export function isItemsetValid(p0: int): boolean;
  export function isLoadingPromptBeingDisplayed(): charPtr;
  export function isLookInverted(): boolean;
  export function isMemoryCardInUse(): boolean;
  export function isMessageBeingDisplayed(): boolean;
  export function isMinigameInProgress(): boolean;
  export function isMinimapAreaRevealed(p0: float, p1: float, p2: float): boolean;
  export function isMissionCompletePlaying(): boolean;
  export function isMissionCreatorBlip(p0: int): boolean;
  export function isMobilePhoneCallOngoing(): boolean;
  export function isMobilePhoneRadioActive(): boolean;
  export function isModelAVehicle(p0: int): boolean;
  export function isModelInCdimage(p0: int): boolean;
  export function isModelValid(p0: int): boolean;
  export function isMountedWeaponTaskUnderneathDrivingTask(p0: int): boolean;
  export function isMoveBlendRatioRunning(p0: int): boolean;
  export function isMoveBlendRatioSprinting(p0: int): boolean;
  export function isMoveBlendRatioStill(p0: int): boolean;
  export function isMoveBlendRatioWalking(p0: int): boolean;
  export function isMpGamerTagActive(p0: int): boolean;
  export function isNamedRendertargetLinked(p0: int): boolean;
  export function isNamedRendertargetRegistered(p0: charPtr): [boolean, charPtr];
  export function isNavmeshLoadedInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): boolean;
  export function isNetworkLoadingScene(): boolean;
  export function isNetworkVehicleBeenDamagedByAnyObject(p0: float, p1: float, p2: float): boolean;
  export function isNewLoadSceneActive(): boolean;
  export function isNewLoadSceneLoaded(): boolean;
  export function isNextWeatherType(p0: charPtr): [boolean, charPtr];
  export function isNightvisionActive(): boolean;
  export function isObjectNearPoint(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function isObjectVisible(p0: int): boolean;
  export function isObjectWithinBrainActivationRange(p0: int): boolean;
  export function isOrbisVersion(): boolean;
  export function isParticleFxDelayedBlink(): float;
  export function isPauseMenuActive(): boolean;
  export function isPauseMenuRestarting(): boolean;
  export function isPcVersion(): boolean;
  export function isPedAPlayer(p0: int): boolean;
  export function isPedActiveInScenario(p0: int): boolean;
  export function isPedAimingFromCover(p0: int): boolean;
  export function isPedArmed(p0: int, p1: int): boolean;
  export function isPedBeingArrested(p0: int): boolean;
  export function isPedBeingJacked(p0: int): boolean;
  export function isPedBeingStealthKilled(p0: int): boolean;
  export function isPedBeingStunned(p0: int, p1: int): boolean;
  export function isPedBlushColorValid(p0: int): boolean;
  export function isPedClimbing(p0: int): boolean;
  export function isPedComponentVariationValid(p0: int, p1: int, p2: int, p3: int): boolean;
  export function isPedCuffed(p0: int): boolean;
  export function isPedCurrentWeaponSilenced(p0: int): boolean;
  export function isPedDeadOrDying(p0: int, p1: boolean): boolean;
  export function isPedDiving(p0: int): boolean;
  export function isPedDoingDriveby(p0: int): boolean;
  export function isPedDucking(p0: int): boolean;
  export function isPedEvasiveDiving(p0: int, p1: intPtr): [boolean, intPtr];
  export function isPedFacingPed(p0: int, p1: int, p2: float): boolean;
  export function isPedFalling(p0: int): boolean;
  export function isPedFatallyInjured(p0: int): boolean;
  export function isPedFleeing(p0: int): boolean;
  export function isPedGettingIntoAVehicle(p0: int): boolean;
  export function isPedGettingUp(p0: int): boolean;
  export function isPedGoingIntoCover(p0: int): boolean;
  export function isPedGroupMember(p0: int, p1: int): boolean;
  export function isPedHairColorValid(p0: int): boolean;
  export function isPedHangingOnToVehicle(p0: int): boolean;
  export function isPedHeadtrackingEntity(p0: int, p1: int): boolean;
  export function isPedHeadtrackingPed(p0: int, p1: int): boolean;
  export function isPedHuman(p0: int): boolean;
  export function isPedHurt(p0: int): boolean;
  export function isPedInAnyBoat(p0: int): boolean;
  export function isPedInAnyHeli(p0: int): boolean;
  export function isPedInAnyPlane(p0: int): boolean;
  export function isPedInAnyPoliceVehicle(p0: int): boolean;
  export function isPedInAnySub(p0: int): boolean;
  export function isPedInAnyTaxi(p0: int): boolean;
  export function isPedInAnyTrain(p0: int): boolean;
  export function isPedInAnyVehicle(p0: int, p1: boolean): boolean;
  export function isPedInCombat(p0: int, p1: int): boolean;
  export function isPedInCover(p0: int, p1: boolean): boolean;
  export function isPedInCoverFacingLeft(p0: int): boolean;
  export function isPedInCurrentConversation(p0: int): boolean;
  export function isPedInFlyingVehicle(p0: int): boolean;
  export function isPedInGroup(p0: int): boolean;
  export function isPedInMeleeCombat(p0: int): boolean;
  export function isPedInModel(p0: int, p1: int): boolean;
  export function isPedInParachuteFreeFall(p0: int): boolean;
  export function isPedInVehicle(p0: int, p1: int, p2: boolean): boolean;
  export function isPedInWrithe(p0: int): boolean;
  export function isPedInjured(p0: int): boolean;
  export function isPedJacking(p0: int): boolean;
  export function isPedJumping(p0: int): boolean;
  export function isPedJumpingOutOfVehicle(p0: int): boolean;
  export function isPedLipstickColorValid(p0: int): boolean;
  export function isPedMale(p0: int): boolean;
  export function isPedModel(p0: int, p1: int): boolean;
  export function isPedOnAnyBike(p0: int): boolean;
  export function isPedOnFoot(p0: int): boolean;
  export function isPedOnMount(p0: int): boolean;
  export function isPedOnSpecificVehicle(p0: int, p1: int): boolean;
  export function isPedOnVehicle(p0: int): boolean;
  export function isPedPerformingStealthKill(p0: int): boolean;
  export function isPedPlantingBomb(p0: int): boolean;
  export function isPedProne(p0: int): boolean;
  export function isPedPropValid(p0: int, p1: int, p2: int, p3: int): boolean;
  export function isPedRagdoll(p0: int): boolean;
  export function isPedReloading(p0: int): boolean;
  export function isPedRespondingToEvent(p0: int, p1: int): boolean;
  export function isPedRingtonePlaying(p0: int): boolean;
  export function isPedRunning(p0: int): boolean;
  export function isPedRunningArrestTask(p0: int): boolean;
  export function isPedRunningMobilePhoneTask(p0: int): boolean;
  export function isPedRunningRagdollTask(p0: int): boolean;
  export function isPedShooting(p0: int): boolean;
  export function isPedShootingInArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: boolean): boolean;
  export function isPedSittingInAnyVehicle(p0: int): boolean;
  export function isPedSittingInVehicle(p0: int, p1: int): boolean;
  export function isPedSprinting(p0: int): boolean;
  export function isPedStandingInCover(p0: int): boolean;
  export function isPedStill(p0: int): boolean;
  export function isPedStopped(p0: int): boolean;
  export function isPedStrafing(p0: int): boolean;
  export function isPedSwimming(p0: int): boolean;
  export function isPedSwimmingUnderWater(p0: int): boolean;
  export function isPedTracked(p0: int): boolean;
  export function isPedTryingToEnterALockedVehicle(p0: int): boolean;
  export function isPedUsingActionMode(p0: int): boolean;
  export function isPedUsingAnyScenario(p0: int): boolean;
  export function isPedUsingScenario(p0: int, p1: charPtr): [boolean, charPtr];
  export function isPedVaulting(p0: int): boolean;
  export function isPedWalking(p0: int): boolean;
  export function isPedWeaponComponentActive(p0: int, p1: int, p2: int): boolean;
  export function isPedWeaponReadyToShoot(p0: int): boolean;
  export function isPedWearingHelmet(p0: int): boolean;
  export function isPedheadshotReady(p0: int): boolean;
  export function isPedheadshotValid(p0: int): boolean;
  export function isPickupWithinRadius(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function isPlaybackGoingOnForVehicle(p0: int): boolean;
  export function isPlaybackUsingAiGoingOnForVehicle(p0: int): boolean;
  export function isPlayerBeingArrested(p0: int, p1: boolean): boolean;
  export function isPlayerCamControlDisabled(): boolean;
  export function isPlayerClimbing(p0: int): boolean;
  export function isPlayerControlOn(p0: int): boolean;
  export function isPlayerDead(p0: int): boolean;
  export function isPlayerFreeAiming(p0: int): boolean;
  export function isPlayerFreeAimingAtEntity(p0: int, p1: int): boolean;
  export function isPlayerFreeForAmbientTask(p0: int): int;
  export function isPlayerInCutscene(p0: int): boolean;
  export function isPlayerLoggingInNp(): boolean;
  export function isPlayerOnline(): boolean;
  export function isPlayerPlaying(p0: int): boolean;
  export function isPlayerPressingHorn(p0: int): boolean;
  export function isPlayerReadyForCutscene(p0: int): boolean;
  export function isPlayerRidingTrain(p0: int): boolean;
  export function isPlayerScriptControlOn(p0: int): boolean;
  export function isPlayerSwitchInProgress(): boolean;
  export function isPlayerTargettingAnything(p0: int): boolean;
  export function isPlayerTargettingEntity(p0: int, p1: int): boolean;
  export function isPlayerTeleportActive(): boolean;
  export function isPlayerVehicleRadioEnabled(): boolean;
  export function isPlayerWantedLevelGreater(p0: int, p1: int): boolean;
  export function isPlayingPhoneGestureAnim(p0: int): boolean;
  export function isPointInAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: boolean, p11: boolean): boolean;
  export function isPointObscuredByAMissionEntity(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): boolean;
  export function isPointOnRoad(p0: float, p1: float, p2: float, p3: int): boolean;
  export function isPositionOccupied(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: int, p10: boolean): boolean;
  export function isPrevWeatherType(p0: charPtr): [boolean, charPtr];
  export function isProjectileInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean): boolean;
  export function isProjectileTypeInAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: boolean): boolean;
  export function isProjectileTypeInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: boolean): boolean;
  export function isProjectileTypeInRadius(p0: float, p1: float, p2: float, p3: int, p4: float, p5: boolean): boolean;
  export function isPs3Version(): boolean;
  export function isRadarEnabled(): boolean;
  export function isRadarHidden(): boolean;
  export function isRadarPreferenceSwitchedOn(): boolean;
  export function isRadioRetuning(): boolean;
  export function isRecording(): boolean;
  export function isRockstarBanned(): boolean;
  export function isScInboxValid(p0: int): boolean;
  export function isScenarioGroupEnabled(p0: charPtr): [boolean, charPtr];
  export function isScenarioOccupied(p0: float, p1: float, p2: float, p3: float, p4: boolean): boolean;
  export function isScenarioTypeEnabled(p0: charPtr): [boolean, charPtr];
  export function isScreenFadedIn(): boolean;
  export function isScreenFadedOut(): boolean;
  export function isScreenFadingIn(): boolean;
  export function isScreenFadingOut(): boolean;
  export function isScriptGlobalShaking(): boolean;
  export function isScriptedConversationLoaded(): boolean;
  export function isScriptedConversationOngoing(): boolean;
  export function isScriptedHudComponentActive(p0: int): boolean;
  export function isScriptedScenarioPedUsingConditionalAnim(p0: int, p1: charPtr, p2: charPtr): [boolean, charPtr, charPtr];
  export function isScriptedSpeechPlaying(p0: int): boolean;
  export function isSeethroughActive(): boolean;
  export function isShockingEventInSphere(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function isSniperBulletInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): boolean;
  export function isSniperInverted(): boolean;
  export function isSocialClubActive(): boolean;
  export function isSocialclubBanned(): boolean;
  export function isSpecialAbilityActive(p0: int): int;
  export function isSpecialAbilityEnabled(p0: int): boolean;
  export function isSpecialAbilityMeterFull(p0: int): boolean;
  export function isSpecialAbilityUnlocked(p0: int): boolean;
  export function isSphereVisible(p0: float, p1: float, p2: float, p3: float): boolean;
  export function isSphereVisibleToAnotherMachine(p0: float, p1: float, p2: float, p3: float): boolean;
  export function isSphereVisibleToPlayer(p0: int, p1: float, p2: float, p3: float, p4: float): boolean;
  export function isSrlLoaded(): boolean;
  export function isStreamPlaying(): boolean;
  export function isStreamingAdditionalText(p0: int): boolean;
  export function isStringNull(p0: charPtr): [boolean, charPtr];
  export function isStringNullOrEmpty(p0: charPtr): [boolean, charPtr];
  export function isStuntJumpInProgress(): boolean;
  export function isStuntJumpMessageShowing(): boolean;
  export function isSubtitlePreferenceSwitchedOn(): boolean;
  export function isSynchronizedSceneLooped(p0: int): boolean;
  export function isSynchronizedSceneRunning(p0: int): boolean;
  export function isSystemUiBeingDisplayed(): boolean;
  export function isTaskMoveScriptedActive(p0: int): boolean;
  export function isTaxiLightOn(p0: int): boolean;
  export function isTennisMode(p0: int): boolean;
  export function isTextChatActive(): boolean;
  export function isThisAMinigameScript(): boolean;
  export function isThisModelABicycle(p0: int): boolean;
  export function isThisModelABike(p0: int): boolean;
  export function isThisModelABoat(p0: int): boolean;
  export function isThisModelACar(p0: int): boolean;
  export function isThisModelAHeli(p0: int): boolean;
  export function isThisModelAJetski(p0: int): boolean;
  export function isThisModelAPlane(p0: int): boolean;
  export function isThisModelAQuadbike(p0: int): boolean;
  export function isThisModelATrain(p0: int): boolean;
  export function isThreadActive(p0: int): boolean;
  export function isTimeEqualTo(p0: int, p1: int): boolean;
  export function isTimeLessThan(p0: int, p1: int): boolean;
  export function isTimeMoreThan(p0: int, p1: int): boolean;
  export function isToggleModOn(p0: int, p1: int): boolean;
  export function isTrackedPedVisible(p0: int): boolean;
  export function isTrackedPointVisible(p0: int): boolean;
  export function isUiLoadingMultiplayer(): boolean;
  export function isValidInterior(p0: int): boolean;
  export function isVehicleAConvertible(p0: int, p1: boolean): boolean;
  export function isVehicleAlarmActivated(p0: int): boolean;
  export function isVehicleAttachedToCargobob(p0: int, p1: int): boolean;
  export function isVehicleAttachedToTowTruck(p0: int, p1: int): boolean;
  export function isVehicleAttachedToTrailer(p0: int): boolean;
  export function isVehicleBumperBrokenOff(p0: int, p1: boolean): boolean;
  export function isVehicleDamaged(p0: int): boolean;
  export function isVehicleDoorDamaged(p0: int, p1: int): boolean;
  export function isVehicleDoorFullyOpen(p0: int, p1: int): int;
  export function isVehicleDriveable(p0: int, p1: boolean): boolean;
  export function isVehicleExtraTurnedOn(p0: int, p1: int): boolean;
  export function isVehicleHighDetail(p0: int): boolean;
  export function isVehicleInBurnout(p0: int): boolean;
  export function isVehicleInGarageArea(p0: charPtr, p1: int): [boolean, charPtr];
  export function isVehicleModLoadDone(p0: int): boolean;
  export function isVehicleModel(p0: int, p1: int): boolean;
  export function isVehicleNeonLightEnabled(p0: int, p1: int): boolean;
  export function isVehicleNodeIdValid(p0: int): boolean;
  export function isVehicleOnAllWheels(p0: int): boolean;
  export function isVehicleRadioLoud(p0: int): boolean;
  export function isVehicleSearchlightOn(p0: int): boolean;
  export function isVehicleSeatFree(p0: int, p1: int): boolean;
  export function isVehicleShopResprayAllowed(p0: int): boolean;
  export function isVehicleSirenOn(p0: int): boolean;
  export function isVehicleSirenSoundOn(p0: int): boolean;
  export function isVehicleStolen(p0: int): boolean;
  export function isVehicleStopped(p0: int): boolean;
  export function isVehicleStoppedAtTrafficLights(p0: int): boolean;
  export function isVehicleStuckOnRoof(p0: int): boolean;
  export function isVehicleStuckTimerUp(p0: int, p1: int, p2: int): boolean;
  export function isVehicleTyreBurst(p0: int, p1: int, p2: boolean): int;
  export function isVehicleVisible(p0: int): boolean;
  export function isVehicleWindowIntact(p0: int, p1: int): boolean;
  export function isWarningMessageActive(): boolean;
  export function isWaypointActive(): boolean;
  export function isWaypointPlaybackGoingOnForPed(p0: int): boolean;
  export function isWaypointPlaybackGoingOnForVehicle(p0: int): boolean;
  export function isWeaponValid(p0: int): boolean;
  export function isWorldPointWithinBrainActivationRange(): boolean;
  export function isXbox360Version(): boolean;
  export function jitterVehicle(p0: int, p1: boolean, p2: float, p3: float, p4: float): void;
  export function keyHudColour(p0: boolean, p1: int): void;
  export function knockOffPedProp(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
  export function knockPedOffVehicle(p0: int): void;
  export function leaderboards2ReadByHandle(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function leaderboards2ReadByRadius(p0: intPtr, p1: int, p2: intPtr): [boolean, intPtr, intPtr];
  export function leaderboards2ReadByRank(p0: intPtr, p1: int, p2: int): [boolean, intPtr];
  export function leaderboards2ReadByRow(p0: intPtr, p1: intPtr, p2: int, p3: intPtr, p4: int, p5: intPtr, p6: int): [boolean, intPtr, intPtr, intPtr, intPtr];
  export function leaderboards2ReadByScoreFloat(p0: intPtr, p1: float, p2: int): [boolean, intPtr];
  export function leaderboards2ReadByScoreInt(p0: intPtr, p1: int, p2: int): [boolean, intPtr];
  export function leaderboards2ReadFriendsByRow(p0: intPtr, p1: intPtr, p2: int, p3: boolean, p4: int, p5: int): [boolean, intPtr, intPtr];
  export function leaderboards2WriteData(p0: intPtr): [boolean, intPtr];
  export function leaderboards2WriteDataEx(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function leaderboardsCacheDataRow(p0: intPtr): [boolean, intPtr];
  export function leaderboardsClearCacheData(): void;
  export function leaderboardsDeaths(p0: int, p1: float): void;
  export function leaderboardsGetCacheDataRow(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function leaderboardsGetCacheExists(p0: int): boolean;
  export function leaderboardsGetCacheTime(p0: int): int;
  export function leaderboardsGetColumnId(p0: int, p1: int, p2: int): int;
  export function leaderboardsGetColumnType(p0: int, p1: int, p2: int): int;
  export function leaderboardsGetNumberOfColumns(p0: int, p1: int): int;
  export function leaderboardsReadClear(p0: int, p1: int, p2: int): int;
  export function leaderboardsReadClearAll(): int;
  export function leaderboardsReadPending(p0: int, p1: int, p2: int): boolean;
  export function leaderboardsReadSuccessful(p0: int, p1: int, p2: int): boolean;
  export function linkNamedRendertarget(p0: int): void;
  export function loadAllObjectsNow(): void;
  export function loadInterior(p0: int): void;
  export function loadMissionCreatorData(): void;
  export function loadMovieMeshSet(p0: charPtr): [int, charPtr];
  export function loadMpDlcMaps(): void;
  export function loadRopeData(p0: int, p1: charPtr): [int, charPtr];
  export function loadScene(p0: float, p1: float, p2: float): void;
  export function loadSpDlcMaps(): void;
  export function loadStream(p0: charPtr, p1: charPtr): [boolean, charPtr, charPtr];
  export function loadStreamWithStartOffset(p0: charPtr, p1: int, p2: charPtr): [boolean, charPtr, charPtr];
  export function loadTvChannel(p0: int): boolean;
  export function loadTvChannelSequence(p0: int, p1: charPtr, p2: boolean): [void, charPtr];
  export function loadUgcFile(p0: charPtr): [boolean, charPtr];
  export function lockMinimapAngle(p0: int): void;
  export function lockMinimapPosition(p0: float, p1: float): void;
  export function logDebugInfo(p0: charPtr): [void, charPtr];
  export function lowerConvertibleRoof(p0: int, p1: boolean): void;
  export function makePedReload(p0: int): boolean;
  export function markObjectForDeletion(p0: int): void;
  export function maxRadioStationIndex(): int;
  export function modifyWater(p0: float, p1: float, p2: float, p3: float): void;
  export function moveFinger(p0: int): void;
  export function moveVehicleDecals(p0: int, p1: int): void;
  export function netToEnt(p0: int): int;
  export function netToObj(p0: int): int;
  export function netToPed(p0: int): int;
  export function netToVeh(p0: int): int;
  export function networkAcceptPresenceInvite(p0: int): boolean;
  export function networkAccessTunableBool(p0: charPtr, p1: charPtr): [boolean, charPtr, charPtr];
  export function networkAccessTunableBoolHash(p0: int, p1: int): boolean;
  export function networkAccessTunableBoolHashFailVal(p0: int, p1: int, p2: boolean): boolean;
  export function networkAccessTunableFloat(p0: charPtr, p1: charPtr, p2: floatPtr): [boolean, charPtr, charPtr, floatPtr];
  export function networkAccessTunableFloatHash(p0: int, p1: int, p2: floatPtr): [boolean, floatPtr];
  export function networkAccessTunableInt(p0: charPtr, p1: charPtr, p2: intPtr): [boolean, charPtr, charPtr, intPtr];
  export function networkAccessTunableIntHash(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function networkActionFollowInvite(): int;
  export function networkAddEntityAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): int;
  export function networkAddEntityArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): int;
  export function networkAddEntityToSynchronisedScene(p0: int, p1: int, p2: charPtr, p3: charPtr, p4: float, p5: float, p6: int): [void, charPtr, charPtr];
  export function networkAddFollowers(p0: intPtr, p1: int): [void, intPtr];
  export function networkAddFriend(p0: intPtr, p1: charPtr): [boolean, intPtr, charPtr];
  export function networkAddPedToSynchronisedScene(p0: int, p1: int, p2: charPtr, p3: charPtr, p4: float, p5: float, p6: int, p7: int, p8: float, p9: int): [void, charPtr, charPtr];
  export function networkAmIBlockedByGamer(p0: intPtr): [boolean, intPtr];
  export function networkAmIBlockedByPlayer(p0: int): boolean;
  export function networkAmIMutedByGamer(p0: intPtr): [boolean, intPtr];
  export function networkAmIMutedByPlayer(p0: int): boolean;
  export function networkAnalPurple777(p0: int): boolean;
  export function networkApplyTransitionParameter(p0: int, p1: int): void;
  export function networkAreHandlesTheSame(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function networkAreRosAvailable(): boolean;
  export function networkAreTransitionDetailsValid(p0: int): boolean;
  export function networkAttachSynchronisedSceneToEntity(p0: int, p1: int, p2: int): void;
  export function networkBail(): void;
  export function networkBailTransition(): void;
  export function networkBlockInvites(p0: boolean): void;
  export function networkBlockInvites2(p0: boolean): void;
  export function networkBlockKickedPlayers(p0: boolean): void;
  export function networkCanAccessMultiplayer(p0: intPtr): [boolean, intPtr];
  export function networkCanBail(): boolean;
  export function networkCanCommunicateWithGamer(p0: intPtr): [boolean, intPtr];
  export function networkCanEnterMultiplayer(): boolean;
  export function networkCanNetworkIdBeSeen(p0: int): boolean;
  export function networkCanSessionEnd(): boolean;
  export function networkCanSetWaypoint(): boolean;
  export function networkChangeTransitionSlots(p0: int, p1: int): void;
  export function networkChatMute(p0: boolean): void;
  export function networkCheckDataManagerForHandle(p0: intPtr): [boolean, intPtr];
  export function networkClanAnimation(p0: charPtr, p1: charPtr): [boolean, charPtr, charPtr];
  export function networkClanDownloadMembership(p0: intPtr): [boolean, intPtr];
  export function networkClanDownloadMembershipPending(p0: intPtr): [boolean, intPtr];
  export function networkClanGetMembership(p0: intPtr, p1: intPtr, p2: int): [boolean, intPtr, intPtr];
  export function networkClanGetMembershipCount(p0: intPtr): [int, intPtr];
  export function networkClanGetMembershipDesc(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkClanGetMembershipValid(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkClanJoin(p0: int): boolean;
  export function networkClanPlayerGetDesc(p0: intPtr, p1: int, p2: intPtr): [boolean, intPtr, intPtr];
  export function networkClanPlayerIsActive(p0: intPtr): [boolean, intPtr];
  export function networkClanRemoteMembershipsAreInCache(p0: intPtr): [boolean, intPtr];
  export function networkClearClockTimeOverride(): void;
  export function networkClearFollowInvite(): int;
  export function networkClearFollowers(): void;
  export function networkClearFoundGamers(): void;
  export function networkClearPropertyId(): void;
  export function networkClearTransitionCreatorHandle(): void;
  export function networkClearVoiceChannel(): void;
  export function networkCloseTransitionMatchmaking(): void;
  export function networkConvertSynchronisedSceneToSynchronizedScene(p0: int): int;
  export function networkCopyPedBlendData(p0: int, p1: int): boolean;
  export function networkCreateSynchronisedScene(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: float): int;
  export function networkDisableInvincibleFlashing(p0: int, p1: boolean): void;
  export function networkDoTransitionQuickmatch(p0: int, p1: int, p2: int, p3: int): boolean;
  export function networkDoTransitionQuickmatchAsync(p0: int, p1: int, p2: int, p3: int): boolean;
  export function networkDoTransitionQuickmatchWithGroup(p0: int, p1: int, p2: int, p3: int, p4: intPtr, p5: int): [boolean, intPtr];
  export function networkDoTransitionToFreemode(p0: intPtr, p1: int, p2: boolean, p3: int, p4: boolean): [boolean, intPtr];
  export function networkDoTransitionToGame(p0: boolean, p1: int): boolean;
  export function networkDoTransitionToNewFreemode(p0: intPtr, p1: intPtr, p2: int, p3: boolean, p4: boolean, p5: boolean): [boolean, intPtr, intPtr];
  export function networkDoTransitionToNewGame(p0: boolean, p1: int, p2: boolean): boolean;
  export function networkDoesEntityExistWithNetworkId(p0: int): boolean;
  export function networkDoesNetworkIdExist(p0: int): boolean;
  export function networkDoesTunableExist(p0: charPtr, p1: charPtr): [boolean, charPtr, charPtr];
  export function networkDoesTunableExistHash(p0: int, p1: int): boolean;
  export function networkEnableMotionDrugged(): int;
  export function networkEndTutorialSession(): void;
  export function networkExplodeVehicle(p0: int, p1: boolean, p2: boolean, p3: boolean): int;
  export function networkFadeInEntity(p0: int, p1: boolean): void;
  export function networkFadeOutEntity(p0: int, p1: boolean, p2: boolean): void;
  export function networkFindMatchedGamers(p0: int, p1: float, p2: float, p3: float): boolean;
  export function networkForceLocalUseOfSyncedSceneCamera(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function networkGamerHasHeadset(p0: intPtr): [boolean, intPtr];
  export function networkGamertagFromHandlePending(): boolean;
  export function networkGamertagFromHandleStart(p0: intPtr): [boolean, intPtr];
  export function networkGamertagFromHandleSucceeded(): boolean;
  export function networkGetActivityPlayerNum(p0: boolean): int;
  export function networkGetBackgroundLoadingRecipients(p0: int, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr];
  export function networkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: intPtr): [boolean, intPtr];
  export function networkGetDesroyerOfEntity(p0: int, p1: int, p2: intPtr): [boolean, intPtr];
  export function networkGetDestroyerOfNetworkId(p0: int, p1: intPtr): [int, intPtr];
  export function networkGetEntityFromNetworkId(p0: int): int;
  export function networkGetEntityIsLocal(p0: int): boolean;
  export function networkGetEntityIsNetworked(p0: int): boolean;
  export function networkGetEntityKillerOfPlayer(p0: int, p1: intPtr): [int, intPtr];
  export function networkGetFoundGamer(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkGetFriendCount(): int;
  export function networkGetFriendName(p0: int): charPtr;
  export function networkGetFriendNameFromIndex(p0: int): charPtr;
  export function networkGetGamertagFromHandle(p0: intPtr): [charPtr, intPtr];
  export function networkGetHostOfScript(p0: charPtr, p1: int, p2: int): [int, charPtr];
  export function networkGetHostOfThisScript(): int;
  export function networkGetLocalHandle(p0: intPtr, p1: int): [void, intPtr];
  export function networkGetMaxFriends(): int;
  export function networkGetNetworkIdFromEntity(p0: int): int;
  export function networkGetNumConnectedPlayers(): int;
  export function networkGetNumFoundGamers(): int;
  export function networkGetNumParticipants(): int;
  export function networkGetNumParticipantsHost(): int;
  export function networkGetNumPresenceInvites(): int;
  export function networkGetNumScriptParticipants(p0: intPtr, p1: int, p2: int): [int, intPtr];
  export function networkGetParticipantIndex(p0: int): int;
  export function networkGetPlayerCrewEmblemTxdName(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function networkGetPlayerFromGamerHandle(p0: intPtr): [int, intPtr];
  export function networkGetPlayerIndex(p0: int): int;
  export function networkGetPlayerIndexFromPed(p0: int): int;
  export function networkGetPlayerLoudness(p0: int): float;
  export function networkGetPlayerPedFromIndex(): int;
  export function networkGetPresenceInviteHandle(p0: int, p1: intPtr): [boolean, intPtr];
  export function networkGetPresenceInviteId(p0: int): int;
  export function networkGetPresenceInviteInviter(p0: int): int;
  export function networkGetPresenceInviteSessionId(p0: int): int;
  export function networkGetPrimaryClanDataCancel(): void;
  export function networkGetPrimaryClanDataClear(): int;
  export function networkGetPrimaryClanDataNew(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function networkGetPrimaryClanDataPending(): int;
  export function networkGetPrimaryClanDataStart(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkGetPrimaryClanDataSuccess(): int;
  export function networkGetRandomInt(): int;
  export function networkGetRandomIntInRange(p0: int, p1: int): int;
  export function networkGetRespawnResult(p0: int, p1: Vector3NativePtr, p2: floatPtr): [void, Vector3NativePtr, floatPtr];
  export function networkGetScriptStatus(): int;
  export function networkGetServerTime(p0: intPtr, p1: intPtr, p2: intPtr): [void, intPtr, intPtr, intPtr];
  export function networkGetTalkerProximity(): int;
  export function networkGetThisScriptIsNetworkScript(): boolean;
  export function networkGetTimeoutTime(): int;
  export function networkGetTransitionHost(p0: intPtr): [boolean, intPtr];
  export function networkGetTransitionMembers(p0: intPtr, p1: int): [int, intPtr];
  export function networkHandleFromFriend(p0: int, p1: intPtr, p2: int): [void, intPtr];
  export function networkHandleFromMemberId(p0: charPtr, p1: intPtr, p2: int): [void, charPtr, intPtr];
  export function networkHandleFromPlayer(p0: int, p1: intPtr, p2: int): [void, intPtr];
  export function networkHandleFromUserId(p0: charPtr, p1: intPtr, p2: int): [void, charPtr, intPtr];
  export function networkHasControlOfDoor(p0: int): boolean;
  export function networkHasControlOfEntity(p0: int): boolean;
  export function networkHasControlOfNetworkId(p0: int): boolean;
  export function networkHasControlOfPavementStats(p0: int): boolean;
  export function networkHasControlOfPickup(p0: int): boolean;
  export function networkHasFollowInvite(): boolean;
  export function networkHasHeadset(): boolean;
  export function networkHasInvitedGamer(p0: intPtr): [boolean, intPtr];
  export function networkHasInvitedGamerToTransition(p0: intPtr): [boolean, intPtr];
  export function networkHasPendingInvite(): boolean;
  export function networkHasPlayerStartedTransition(p0: int): boolean;
  export function networkHasRestrictedProfile(): boolean;
  export function networkHashFromGamerHandle(p0: intPtr): [int, intPtr];
  export function networkHashFromPlayerHandle(p0: int): int;
  export function networkHaveOnlinePrivileges(): boolean;
  export function networkHostTransition(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): int;
  export function networkInviteGamers(p0: intPtr, p1: int, p2: intPtr, p3: intPtr): [boolean, intPtr, intPtr, intPtr];
  export function networkInviteGamersToTransition(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkIsActivitySession(): boolean;
  export function networkIsActivitySpectator(): int;
  export function networkIsActivitySpectatorFromHandle(p0: intPtr): [boolean, intPtr];
  export function networkIsAddingFriend(): boolean;
  export function networkIsCableConnected(): boolean;
  export function networkIsChattingInPlatformParty(p0: intPtr): [boolean, intPtr];
  export function networkIsClanMembershipFinishedDownloading(): boolean;
  export function networkIsClockTimeOverridden(): boolean;
  export function networkIsCloudAvailable(): boolean;
  export function networkIsFindingGamers(): boolean;
  export function networkIsFriend(p0: intPtr): [boolean, intPtr];
  export function networkIsFriendInMultiplayer(p0: charPtr): [boolean, charPtr];
  export function networkIsFriendInSameTitle(p0: charPtr): [boolean, charPtr];
  export function networkIsFriendIndexOnline(p0: int): boolean;
  export function networkIsFriendOnline(p0: charPtr): [boolean, charPtr];
  export function networkIsFriendOnline2(p0: intPtr): [boolean, intPtr];
  export function networkIsGameInProgress(): boolean;
  export function networkIsGamerBlockedByMe(p0: intPtr): [boolean, intPtr];
  export function networkIsGamerInMySession(p0: intPtr): [boolean, intPtr];
  export function networkIsGamerMutedByMe(p0: intPtr): [boolean, intPtr];
  export function networkIsGamerTalking(p0: intPtr): [boolean, intPtr];
  export function networkIsHandleValid(p0: intPtr, p1: int): [boolean, intPtr];
  export function networkIsHost(): boolean;
  export function networkIsHostOfThisScript(): boolean;
  export function networkIsInMpCutscene(): boolean;
  export function networkIsInSession(): boolean;
  export function networkIsInSpectatorMode(): boolean;
  export function networkIsInTransition(): boolean;
  export function networkIsInTutorialSession(): int;
  export function networkIsInactiveProfile(p0: intPtr): [boolean, intPtr];
  export function networkIsLocalPlayerInvincible(): boolean;
  export function networkIsMultiplayerDisabled(): boolean;
  export function networkIsParticipantActive(p0: int): boolean;
  export function networkIsPendingFriend(p0: int): boolean;
  export function networkIsPlayerAParticipant(p0: int): boolean;
  export function networkIsPlayerActive(p0: int): boolean;
  export function networkIsPlayerAnimationDrawingSynchronized(): void;
  export function networkIsPlayerBlockedByMe(p0: int): boolean;
  export function networkIsPlayerConnected(p0: int): boolean;
  export function networkIsPlayerEqualToIndex(p0: int, p1: int): boolean;
  export function networkIsPlayerInMpCutscene(p0: int): boolean;
  export function networkIsPlayerInScript(p0: int, p1: int, p2: int): boolean;
  export function networkIsPlayerMutedByMe(p0: int): boolean;
  export function networkIsPlayerTalking(p0: int): boolean;
  export function networkIsPsnAvailable(): boolean;
  export function networkIsScriptActive(p0: charPtr, p1: int, p2: boolean, p3: int): [boolean, charPtr];
  export function networkIsSessionActive(): boolean;
  export function networkIsSessionBusy(): boolean;
  export function networkIsSessionStarted(): boolean;
  export function networkIsSignedIn(): boolean;
  export function networkIsSignedOnline(): boolean;
  export function networkIsTextChatActive(): boolean;
  export function networkIsThisScriptMarked(p0: int, p1: boolean, p2: int): boolean;
  export function networkIsTransitionBusy(): int;
  export function networkIsTransitionHost(): int;
  export function networkIsTransitionHostFromHandle(p0: intPtr): [boolean, intPtr];
  export function networkIsTransitionMatchmaking(): int;
  export function networkIsTransitionStarted(): boolean;
  export function networkIsTransitionToGame(): int;
  export function networkJoinGroupActivity(): int;
  export function networkJoinTransition(p0: int): boolean;
  export function networkLaunchTransition(): int;
  export function networkLeaveTransition(): int;
  export function networkMarkTransitionGamerAsFullyJoined(p0: intPtr): [boolean, intPtr];
  export function networkMemberIdFromGamerHandle(p0: intPtr): [charPtr, intPtr];
  export function networkOpenTransitionMatchmaking(): void;
  export function networkOverrideChatRestrictions(p0: int, p1: boolean): void;
  export function networkOverrideClockTime(p0: int, p1: int, p2: int): void;
  export function networkOverrideReceiveRestrictions(p0: int, p1: boolean): void;
  export function networkOverrideSendRestrictions(p0: int, p1: boolean): void;
  export function networkOverrideTransitionChat(p0: boolean): void;
  export function networkPlayerGetName(p0: int): charPtr;
  export function networkPlayerGetUserid(p0: int, p1: charPtr): [charPtr, charPtr];
  export function networkPlayerHasHeadset(p0: int): boolean;
  export function networkPlayerIdToInt(): int;
  export function networkPlayerIsBadsport(): boolean;
  export function networkPlayerIsCheater(): boolean;
  export function networkPlayerIsInClan(): boolean;
  export function networkPlayerIsRockstarDev(p0: int): boolean;
  export function networkPlayerIsUnk(): boolean;
  export function networkPlayerSomething(p0: int): boolean;
  export function networkRegisterEntityAsNetworked(p0: int): void;
  export function networkRegisterHostBroadcastVariables(p0: intPtr, p1: int): [void, intPtr];
  export function networkRegisterPlayerBroadcastVariables(p0: intPtr, p1: int): [void, intPtr];
  export function networkRemoveAllTransitionInvite(): void;
  export function networkRemoveEntityArea(p0: int): boolean;
  export function networkRemovePresenceInvite(p0: int): boolean;
  export function networkRemoveTransitionInvite(p0: intPtr): [void, intPtr];
  export function networkRequestCloudBackgroundScripts(): boolean;
  export function networkRequestCloudTunables(): void;
  export function networkRequestControlOfDoor(p0: int): boolean;
  export function networkRequestControlOfEntity(p0: int): boolean;
  export function networkRequestControlOfNetworkId(p0: int): boolean;
  export function networkResetBodyTracker(): void;
  export function networkRespawnCoords(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean): void;
  export function networkRespawnPlayer(p0: int, p1: boolean): void;
  export function networkResurrectLocalPlayer(p0: float, p1: float, p2: float, p3: float, p4: boolean, p5: boolean): void;
  export function networkSctvSlots(p0: int): void;
  export function networkSendPresenceInvite(p0: intPtr, p1: intPtr, p2: int, p3: int): [boolean, intPtr, intPtr];
  export function networkSendPresenceTransitionInvite(p0: intPtr, p1: intPtr, p2: int, p3: int): [boolean, intPtr, intPtr];
  export function networkSendTextMessage(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function networkSendTransitionGamerInstruction(p0: intPtr, p1: charPtr, p2: int, p3: int, p4: boolean): [boolean, intPtr, charPtr];
  export function networkSessionActivityQuickmatch(p0: int, p1: int, p2: int, p3: int): boolean;
  export function networkSessionBlockJoinRequests(p0: boolean): void;
  export function networkSessionCancelInvite(): void;
  export function networkSessionChangeSlots(p0: int, p1: boolean): void;
  export function networkSessionCrewMatchmaking(p0: int, p1: int, p2: int, p3: int, p4: boolean): boolean;
  export function networkSessionEnd(p0: boolean, p1: boolean): boolean;
  export function networkSessionEnter(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): int;
  export function networkSessionForceCancelInvite(): void;
  export function networkSessionFriendMatchmaking(p0: int, p1: int, p2: int, p3: boolean): boolean;
  export function networkSessionGetInviter(p0: intPtr): [void, intPtr];
  export function networkSessionGetUnk(p0: int): int;
  export function networkSessionHost(p0: int, p1: int, p2: boolean): boolean;
  export function networkSessionHostClosed(p0: int, p1: int): boolean;
  export function networkSessionHostFriendsOnly(p0: int, p1: int): boolean;
  export function networkSessionHostSinglePlayer(p0: int): void;
  export function networkSessionHosted(p0: boolean): void;
  export function networkSessionIsClosedCrew(): boolean;
  export function networkSessionIsClosedFriends(): boolean;
  export function networkSessionIsPlayerVotedToKick(p0: int): boolean;
  export function networkSessionIsPrivate(): boolean;
  export function networkSessionIsSolo(): boolean;
  export function networkSessionIsVisible(): boolean;
  export function networkSessionKickPlayer(p0: int): void;
  export function networkSessionLeaveSinglePlayer(): void;
  export function networkSessionMarkVisible(p0: boolean): void;
  export function networkSessionSetMaxPlayers(p0: int, p1: int): void;
  export function networkSessionVoiceHost(): void;
  export function networkSessionVoiceLeave(): void;
  export function networkSessionWasInvited(): boolean;
  export function networkSetActivitySpectator(p0: boolean): void;
  export function networkSetActivitySpectatorMax(p0: int): void;
  export function networkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: intPtr): [boolean, intPtr];
  export function networkSetEntityCanBlend(p0: int, p1: boolean): void;
  export function networkSetEntityInvisibleToNetwork(p0: int, p1: boolean): void;
  export function networkSetFriendlyFireOption(p0: boolean): void;
  export function networkSetGamerInvitedToTransition(p0: intPtr): [void, intPtr];
  export function networkSetInMpCutscene(p0: boolean, p1: boolean): void;
  export function networkSetInSpectatorMode(p0: boolean, p1: int): void;
  export function networkSetKeepFocuspoint(p0: boolean, p1: int): void;
  export function networkSetLocalPlayerInvincibleTime(p0: int): void;
  export function networkSetMissionFinished(): void;
  export function networkSetNetworkIdDynamic(p0: int, p1: boolean): void;
  export function networkSetOverrideSpectatorMode(p0: boolean): void;
  export function networkSetPropertyId(p0: int): void;
  export function networkSetRichPresence(p0: int, p1: int, p2: int, p3: int): void;
  export function networkSetRichPresence2(p0: int, p1: charPtr): [void, charPtr];
  export function networkSetScriptIsSafeForNetworkGame(): void;
  export function networkSetTalkerProximity(p0: float): void;
  export function networkSetTeamOnlyChat(p0: boolean): void;
  export function networkSetThisScriptIsNetworkScript(p0: int, p1: boolean, p2: int): void;
  export function networkSetTransitionActivityId(p0: int): void;
  export function networkSetTransitionCreatorHandle(p0: intPtr): [void, intPtr];
  export function networkSetVoiceActive(p0: boolean): void;
  export function networkSetVoiceChannel(p0: int): void;
  export function networkShowProfileUi(p0: intPtr): [void, intPtr];
  export function networkStartSynchronisedScene(p0: int): void;
  export function networkStopSynchronisedScene(p0: int): void;
  export function networkSuppressInvite(p0: boolean): void;
  export function networkUnregisterNetworkedEntity(p0: int): void;
  export function networkUpdateLoadScene(): Vector3NativePtr;
  export function networkUpdatePlayerScars(): void;
  export function networkVoiceConnectToPlayer(p0: intPtr): [void, intPtr];
  export function networkXAffectsGamers(p0: int): boolean;
  export function newLoadSceneStart(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int): boolean;
  export function newLoadSceneStartSphere(p0: float, p1: float, p2: float, p3: float, p4: int): boolean;
  export function newLoadSceneStop(): void;
  export function nullify(p0: intPtr, p1: int): [boolean, intPtr];
  export function objToNet(p0: int): int;
  export function objectDecalToggle(p0: int): void;
  export function objectValueAddArray(p0: intPtr, p1: charPtr): [intPtr, intPtr, charPtr];
  export function objectValueAddBoolean(p0: intPtr, p1: charPtr, p2: boolean): [void, intPtr, charPtr];
  export function objectValueAddFloat(p0: intPtr, p1: charPtr, p2: float): [void, intPtr, charPtr];
  export function objectValueAddInteger(p0: intPtr, p1: charPtr, p2: int): [void, intPtr, charPtr];
  export function objectValueAddObject(p0: intPtr, p1: charPtr): [intPtr, intPtr, charPtr];
  export function objectValueAddString(p0: intPtr, p1: charPtr, p2: charPtr): [void, intPtr, charPtr, charPtr];
  export function objectValueAddVector3(p0: intPtr, p1: charPtr, p2: float, p3: float, p4: float): [void, intPtr, charPtr];
  export function objectValueGetArray(p0: intPtr, p1: charPtr): [intPtr, intPtr, charPtr];
  export function objectValueGetBoolean(p0: intPtr, p1: charPtr): [boolean, intPtr, charPtr];
  export function objectValueGetFloat(p0: intPtr, p1: charPtr): [float, intPtr, charPtr];
  export function objectValueGetInteger(p0: intPtr, p1: charPtr): [int, intPtr, charPtr];
  export function objectValueGetObject(p0: intPtr, p1: charPtr): [intPtr, intPtr, charPtr];
  export function objectValueGetString(p0: intPtr, p1: charPtr): [charPtr, intPtr, charPtr];
  export function objectValueGetType(p0: intPtr, p1: charPtr): [int, intPtr, charPtr];
  export function objectValueGetVector3(p0: intPtr, p1: charPtr): [Vector3Native, intPtr, charPtr];
  export function openBombBayDoors(p0: int): void;
  export function openPatrolRoute(p0: charPtr): [void, charPtr];
  export function openSequenceTask(p0: intPtr): [int, intPtr];
  export function overrideCamSplineMotionBlur(p0: int, p1: int, p2: float, p3: float): void;
  export function overrideCamSplineVelocity(p0: int, p1: int, p2: float, p3: float): void;
  export function overrideDecalTexture(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function overridePopscheduleVehicleModel(p0: int, p1: int): void;
  export function overrideSaveHouse(p0: boolean, p1: float, p2: float, p3: float, p4: float, p5: boolean, p6: float, p7: float): boolean;
  export function overrideTrevorRage(p0: charPtr): [void, charPtr];
  export function overrideUnderwaterStream(p0: intPtr, p1: boolean): [void, intPtr];
  export function overrideVehHorn(p0: int, p1: boolean, p2: int): void;
  export function participantId(): int;
  export function participantIdToInt(): int;
  export function pauseClock(p0: boolean): void;
  export function pausePlaybackRecordedVehicle(p0: int): void;
  export function pauseScriptedConversation(p0: boolean): void;
  export function pedHasUseScenarioTask(p0: int): boolean;
  export function pedSkipNextReloading(p0: int): boolean;
  export function pedToNet(p0: int): int;
  export function pinRopeVertex(p0: int, p1: int, p2: float, p3: float, p4: float): void;
  export function placeObjectOnGroundProperly(p0: int): boolean;
  export function playAmbientSpeech1(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function playAmbientSpeech2(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function playAmbientSpeechAtCoords(p0: charPtr, p1: charPtr, p2: float, p3: float, p4: float, p5: charPtr): [void, charPtr, charPtr, charPtr];
  export function playAmbientSpeechWithVoice(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: boolean): [void, charPtr, charPtr, charPtr];
  export function playAnimOnRunningScenario(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function playCamAnim(p0: int, p1: charPtr, p2: charPtr, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: int): [boolean, charPtr, charPtr];
  export function playEndCreditsMusic(p0: boolean): void;
  export function playEntityAnim(p0: int, p1: charPtr, p2: charPtr, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: float, p8: int): [boolean, charPtr, charPtr];
  export function playEntityScriptedAnim(p0: int, p1: intPtr, p2: intPtr, p3: intPtr, p4: float, p5: float): [void, intPtr, intPtr, intPtr];
  export function playFacialAnim(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function playMissionCompleteAudio(p0: charPtr): [void, charPtr];
  export function playPain(p0: int, p1: int, p2: int): void;
  export function playPedRingtone(p0: charPtr, p1: int, p2: boolean): [void, charPtr];
  export function playPoliceReport(p0: charPtr, p1: float): [int, charPtr];
  export function playSound(p0: int, p1: charPtr, p2: charPtr, p3: boolean, p4: int, p5: boolean): [void, charPtr, charPtr];
  export function playSoundFromCoord(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: charPtr, p6: boolean, p7: int, p8: boolean): [void, charPtr, charPtr];
  export function playSoundFromEntity(p0: int, p1: charPtr, p2: int, p3: charPtr, p4: boolean, p5: int): [void, charPtr, charPtr];
  export function playSoundFrontend(p0: int, p1: charPtr, p2: charPtr, p3: boolean): [void, charPtr, charPtr];
  export function playStreamFromObject(p0: int): void;
  export function playStreamFromPed(p0: int): void;
  export function playStreamFromVehicle(p0: int): void;
  export function playStreamFrontend(): void;
  export function playSynchronizedAudioEvent(p0: int): boolean;
  export function playSynchronizedCamAnim(p0: int, p1: int, p2: charPtr, p3: charPtr): [boolean, charPtr, charPtr];
  export function playSynchronizedEntityAnim(p0: int, p1: int, p2: charPtr, p3: charPtr, p4: float, p5: float, p6: int, p7: float): [boolean, charPtr, charPtr];
  export function playSynchronizedMapEntityAnim(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: intPtr, p7: intPtr, p8: float, p9: float, p10: int, p11: float): [boolean, intPtr, intPtr];
  export function playVehicleDoorCloseSound(p0: int, p1: int): void;
  export function playVehicleDoorOpenSound(p0: int, p1: int): void;
  export function playerAttachVirtualBound(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float): void;
  export function playerDetachVirtualBound(): void;
  export function playerId(): int;
  export function playerPedId(): int;
  export function playstatsAmbientMissionCrateCreated(p0: float, p1: float, p2: float): void;
  export function playstatsAwardXp(p0: int, p1: int, p2: int): void;
  export function playstatsCheatApplied(p0: charPtr): [void, charPtr];
  export function playstatsClothChange(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function playstatsFriendActivity(p0: int, p1: int): void;
  export function playstatsMatchStarted(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int): void;
  export function playstatsMissionCheckpoint(p0: intPtr, p1: int, p2: int, p3: int): [void, intPtr];
  export function playstatsMissionOver(p0: intPtr, p1: int, p2: int, p3: boolean, p4: boolean, p5: boolean): [void, intPtr];
  export function playstatsMissionStarted(p0: intPtr, p1: int, p2: int, p3: boolean): [void, intPtr];
  export function playstatsNpcInvite(p0: intPtr): [void, intPtr];
  export function playstatsOddjobDone(p0: int, p1: int, p2: int): void;
  export function playstatsPropChange(p0: int, p1: int, p2: int, p3: int): void;
  export function playstatsRaceCheckpoint(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function playstatsRankUp(p0: int): void;
  export function playstatsShopItem(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function playstatsWebsiteVisited(p0: int, p1: int): void;
  export function pocakGay(p0: int, p1: _BoolPtr): [int, _BoolPtr];
  export function pointCamAtCoord(p0: int, p1: float, p2: float, p3: float): void;
  export function pointCamAtEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean): void;
  export function pointCamAtPedBone(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: boolean): void;
  export function popTimecycleModifier(): void;
  export function populateNow(): void;
  export function prefetchSrl(p0: charPtr): [void, charPtr];
  export function preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
  export function preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
  export function preloadVehicleMod(p0: int, p1: int, p2: int): void;
  export function prepareAlarm(p0: charPtr): [boolean, charPtr];
  export function prepareMusicEvent(p0: charPtr): [boolean, charPtr];
  export function prepareSynchronizedAudioEvent(p0: charPtr, p1: boolean): [int, charPtr];
  export function prepareSynchronizedAudioEventForScene(p0: int, p1: charPtr): [boolean, charPtr];
  export function processEntityAttachments(p0: int): void;
  export function pulseBlip(p0: int): void;
  export function pushTimecycleModifier(): void;
  export function raiseConvertibleRoof(p0: int, p1: boolean): void;
  export function refreshInterior(p0: int): void;
  export function refreshWaypoint(): void;
  export function registerBoolToSave(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function registerEntityForCutscene(p0: int, p1: charPtr, p2: int, p3: int, p4: int): [void, charPtr];
  export function registerEnumToSave(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function registerFloatToSave(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function registerHatedTargetsAroundPed(p0: int, p1: float): void;
  export function registerIntToSave(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function registerNamedRendertarget(p0: charPtr, p1: boolean): [boolean, charPtr];
  export function registerObjectScriptBrain(p0: charPtr, p1: int, p2: int, p3: float, p4: int, p5: int): [void, charPtr];
  export function registerPedheadshot(p0: int): int;
  export function registerSaveHouse(p0: float, p1: float, p2: float, p3: float, p4: intPtr, p5: int, p6: int): [int, intPtr];
  export function registerScriptWithAudio(p0: int): void;
  export function registerSynchronisedScriptSpeech(): void;
  export function registerTarget(p0: int, p1: int): void;
  export function registerTextLabelToSave(p0: intPtr, p1: charPtr): [void, intPtr, charPtr];
  export function registerWorldPointScriptBrain(p0: intPtr, p1: float, p2: int): [void, intPtr];
  export function releaseAmbientAudioBank(): void;
  export function releaseMissionAudioBank(): void;
  export function releaseMovieMeshSet(p0: int): void;
  export function releaseNamedRendertarget(p0: intPtr): [boolean, intPtr];
  export function releaseNamedScriptAudioBank(p0: charPtr): [void, charPtr];
  export function releasePreloadMods(p0: int): void;
  export function releaseScriptAudioBank(): void;
  export function releaseSoundId(p0: int): void;
  export function removeActionModeAsset(p0: charPtr): [void, charPtr];
  export function removeAllCoverBlockingAreas(): void;
  export function removeAllPedWeapons(p0: int, p1: boolean): void;
  export function removeAllPickupsOfType(p0: int): void;
  export function removeAllProjectilesOfType(p0: int, p1: boolean): void;
  export function removeAllShockingEvents(p0: boolean): void;
  export function removeAnimDict(p0: charPtr): [void, charPtr];
  export function removeAnimSet(p0: charPtr): [void, charPtr];
  export function removeBlip(p0: intPtr): [void, intPtr];
  export function removeClipSet(p0: charPtr): [void, charPtr];
  export function removeCoverPoint(p0: int): void;
  export function removeCurrentRise(p0: int): void;
  export function removeCutscene(): void;
  export function removeDecal(p0: int): void;
  export function removeDecalsFromObject(p0: int): void;
  export function removeDecalsFromObjectFacing(p0: int, p1: float, p2: float, p3: float): void;
  export function removeDecalsFromVehicle(p0: int): void;
  export function removeDecalsInRange(p0: float, p1: float, p2: float, p3: float): void;
  export function removeDispatchSpawnBlockingArea(p0: int): void;
  export function removeDisplayCash(): void;
  export function removeDoorFromSystem(p0: int): void;
  export function removeForcedObject(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function removeFromItemset(p0: int, p1: int): void;
  export function removeGroup(p0: int): void;
  export function removeIpl(p0: charPtr): [void, charPtr];
  export function removeLoadingPrompt(): void;
  export function removeModelHide(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function removeModelSwap(p0: float, p1: float, p2: float, p3: float, p4: int, p5: int, p6: boolean): void;
  export function removeMpGamerTag(p0: int): void;
  export function removeMultiplayerBankCash(): void;
  export function removeMultiplayerHudCash(): void;
  export function removeNamedPtfxAsset(p0: charPtr): [void, charPtr];
  export function removeNavmeshBlockingObject(p0: int): void;
  export function removeNavmeshRequiredRegions(): void;
  export function removeNotification(p0: int): void;
  export function removeParticleFx(p0: int, p1: boolean): void;
  export function removeParticleFxFromEntity(p0: int): void;
  export function removeParticleFxInRange(p0: float, p1: float, p2: float, p3: float): void;
  export function removePedDefensiveArea(p0: int, p1: boolean): void;
  export function removePedElegantly(p0: intPtr): [void, intPtr];
  export function removePedFromGroup(p0: int): void;
  export function removePedHelmet(p0: int, p1: boolean): void;
  export function removePedPreferredCoverSet(p0: int): void;
  export function removePickUpRopeForCargobob(p0: int): void;
  export function removePickup(p0: int): void;
  export function removePlayerHelmet(p0: int, p1: boolean): int;
  export function removePtfxAsset(): void;
  export function removeRelationshipGroup(p0: int): void;
  export function removeScenarioBlockingArea(p0: int, p1: boolean): void;
  export function removeScenarioBlockingAreas(): void;
  export function removeScriptFire(p0: int): void;
  export function removeShockingEvent(p0: int): boolean;
  export function removeShockingEventSpawnBlockingAreas(): void;
  export function removeSpeedZone(p0: int): boolean;
  export function removeStealthKill(p0: int, p1: boolean): void;
  export function removeStealthModeAsset(p0: charPtr): [void, charPtr];
  export function removeVehicleAsset(p0: int): void;
  export function removeVehicleHighDetailModel(p0: int): void;
  export function removeVehicleMod(p0: int, p1: int): void;
  export function removeVehicleRecording(p0: int, p1: intPtr): [void, intPtr];
  export function removeVehicleStuckCheck(p0: int): void;
  export function removeVehicleUpsidedownCheck(p0: int): void;
  export function removeVehicleWindow(p0: int, p1: int): void;
  export function removeVehiclesFromGeneratorsInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): void;
  export function removeWaypointRecording(p0: charPtr): [void, charPtr];
  export function removeWeaponAsset(p0: int): void;
  export function removeWeaponComponentFromPed(p0: int, p1: int, p2: int): void;
  export function removeWeaponComponentFromWeaponObject(p0: int, p1: int): void;
  export function removeWeaponFromPed(p0: int, p1: int): void;
  export function renderFirstPersonCam(p0: boolean, p1: float, p2: int): void;
  export function renderScriptCams(p0: boolean, p1: boolean, p2: int, p3: boolean, p4: boolean): void;
  export function reportCrime(p0: int, p1: int, p2: int): void;
  export function requestActionModeAsset(p0: charPtr): [void, charPtr];
  export function requestAdditionalCollisionAtCoord(p0: float, p1: float, p2: float): void;
  export function requestAdditionalText(p0: charPtr, p1: int): [void, charPtr];
  export function requestAdditionalText2(p0: charPtr, p1: int): [void, charPtr];
  export function requestAmbientAudioBank(p0: charPtr, p1: boolean): [boolean, charPtr];
  export function requestAnimDict(p0: charPtr): [void, charPtr];
  export function requestAnimSet(p0: charPtr): [void, charPtr];
  export function requestClipSet(p0: charPtr): [void, charPtr];
  export function requestCollisionAtCoord(p0: float, p1: float, p2: float): int;
  export function requestCollisionForModel(p0: int): void;
  export function requestCutscene(p0: charPtr, p1: int): [void, charPtr];
  export function requestCutsceneEx(p0: charPtr, p1: int, p2: int): [void, charPtr];
  export function requestHudScaleform(p0: int): void;
  export function requestInteriorRoomByName(p0: int, p1: charPtr): [void, charPtr];
  export function requestIpl(p0: charPtr): [void, charPtr];
  export function requestMenuPedModel(p0: int): void;
  export function requestMissionAudioBank(p0: charPtr, p1: boolean): [boolean, charPtr];
  export function requestModel(p0: int): void;
  export function requestNamedPtfxAsset(p0: charPtr): [void, charPtr];
  export function requestPtfxAsset(): int;
  export function requestScaleformMovie(p0: charPtr): [int, charPtr];
  export function requestScaleformMovieInstance(p0: charPtr): [int, charPtr];
  export function requestScaleformMovieInteractive(p0: charPtr): [int, charPtr];
  export function requestScript(p0: charPtr): [void, charPtr];
  export function requestScriptAudioBank(p0: charPtr, p1: boolean): [boolean, charPtr];
  export function requestScriptWithNameHash(p0: int): void;
  export function requestStealthModeAsset(p0: charPtr): [void, charPtr];
  export function requestStreamedTextureDict(p0: charPtr, p1: boolean): [void, charPtr];
  export function requestVehicleAsset(p0: int, p1: int): void;
  export function requestVehicleHighDetailModel(p0: int): void;
  export function requestVehiclePhoneExplosion(): void;
  export function requestVehicleRecording(p0: int, p1: charPtr): [void, charPtr];
  export function requestVehicleScaleformMovie(p0: int): void;
  export function requestWaypointRecording(p0: charPtr): [void, charPtr];
  export function requestWeaponAsset(p0: int, p1: int, p2: int): void;
  export function requestWeaponHighDetailModel(p0: int): void;
  export function reserveNetworkMissionObjects(p0: int): void;
  export function reserveNetworkMissionPeds(p0: int): void;
  export function reserveNetworkMissionVehicles(p0: int): void;
  export function resetAiMeleeWeaponDamageModifier(): void;
  export function resetAiWeaponDamageModifier(): void;
  export function resetAmbientVoice(p0: int): void;
  export function resetCameraAfkTimer(): void;
  export function resetCurrentIntensity(): void;
  export function resetDispatchIdealSpawnDistance(): void;
  export function resetDispatchSpawnBlockingAreas(): void;
  export function resetEditorValues(): void;
  export function resetEntityAlpha(p0: int): int;
  export function resetExclusiveScenarioGroup(): void;
  export function resetGroupFormationDefaultSpacing(p0: int): void;
  export function resetHudComponentValues(p0: int): void;
  export function resetLocalplayerState(): void;
  export function resetParticleFxAssetOldToNew(p0: charPtr): [void, charPtr];
  export function resetPedAudioFlags(p0: int): void;
  export function resetPedInVehicleContext(p0: int): void;
  export function resetPedLastVehicle(p0: int): void;
  export function resetPedMovementClipset(p0: int, p1: float): void;
  export function resetPedRagdollBlockingFlags(p0: int, p1: int): void;
  export function resetPedRagdollTimer(p0: int): void;
  export function resetPedStrafeClipset(p0: int): void;
  export function resetPedVisibleDamage(p0: int): int;
  export function resetPedWeaponMovementClipset(p0: int): void;
  export function resetPlayerArrestState(p0: int): void;
  export function resetPlayerInputGait(p0: int): void;
  export function resetPlayerStamina(p0: int): void;
  export function resetReticuleValues(): void;
  export function resetScenarioGroupsEnabled(): void;
  export function resetScenarioTypesEnabled(): void;
  export function resetTrevorRage(): void;
  export function resetVehicleStuckTimer(p0: int, p1: int): void;
  export function resetVehicleWheels(p0: int, p1: boolean): void;
  export function resetWantedLevelDifficulty(p0: int): void;
  export function respondingAsTemp(p0: float): void;
  export function restartFrontendMenu(p0: int, p1: int): void;
  export function restartScriptedConversation(): void;
  export function restorePlayerStamina(p0: int, p1: float): void;
  export function resurrectPed(p0: int): void;
  export function returnTwo(p0: int): int;
  export function reviveInjuredPed(p0: int): void;
  export function rollDownWindow(p0: int, p1: int): int;
  export function rollDownWindows(p0: int): void;
  export function rollUpWindow(p0: int, p1: int): int;
  export function ropeAreTexturesLoaded(): boolean;
  export function ropeConvertToSimple(p0: int): void;
  export function ropeDrawShadowEnabled(p0: intPtr, p1: boolean): [void, intPtr];
  export function ropeForceLength(p0: int, p1: float): int;
  export function ropeLoadTextures(): int;
  export function ropeResetLength(p0: int, p1: float): void;
  export function ropeSetUpdatePinverts(p0: int): void;
  export function ropeUnloadTextures(): int;
  export function scEmailMessageClearRecipList(): void;
  export function scEmailMessagePushGamerToRecipList(p0: intPtr): [void, intPtr];
  export function scGetCheckStringStatus(p0: int): int;
  export function scHasCheckStringTaskCompleted(p0: int): boolean;
  export function scInboxGetEmails(p0: int, p1: int): void;
  export function scInboxMessageGetDataBool(p0: int, p1: charPtr): [boolean, charPtr];
  export function scInboxMessageGetDataInt(p0: int, p1: charPtr, p2: intPtr): [boolean, charPtr, intPtr];
  export function scInboxMessageGetDataString(p0: int, p1: charPtr, p2: charPtr): [boolean, charPtr, charPtr];
  export function scInboxMessageGetString(p0: int): charPtr;
  export function scInboxMessageGetUgcdata(p0: int, p1: intPtr): [boolean, intPtr];
  export function scInboxMessageInit(p0: int): int;
  export function scInboxMessagePop(p0: int): boolean;
  export function scInboxMessagePush(p0: int): boolean;
  export function scStartCheckStringTask(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function screenDrawPositionBegin(p0: int, p1: int): void;
  export function screenDrawPositionEnd(): void;
  export function screenDrawPositionRatio(p0: float, p1: float, p2: float, p3: float): void;
  export function scriptIsMovingMobilePhoneOffscreen(p0: boolean): void;
  export function serverHandler(): void;
  export function setAbilityBarValue(p0: float, p1: float): void;
  export function setAchievementProgression(p0: int, p1: int): boolean;
  export function setActivateObjectPhysicsAsSoonAsItIsUnfrozen(p0: int, p1: boolean): void;
  export function setAggressiveHorns(p0: boolean): void;
  export function setAiBlipMaxDistance(p0: int, p1: float): void;
  export function setAiBlipType(p0: int, p1: int): void;
  export function setAiMeleeWeaponDamageModifier(p0: float): void;
  export function setAiWeaponDamageModifier(p0: float): void;
  export function setAirDragMultiplierForPlayersVehicle(p0: int, p1: float): void;
  export function setAllLowPriorityVehicleGeneratorsActive(p0: boolean): void;
  export function setAllRandomPedsFlee(p0: int, p1: boolean): void;
  export function setAllRandomPedsFleeThisFrame(p0: int): void;
  export function setAllVehicleGeneratorsActive(): void;
  export function setAllVehicleGeneratorsActiveInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): void;
  export function setAllVehiclesSpawn(p0: int, p1: boolean, p2: boolean, p3: boolean): int;
  export function setAmbientVoiceName(p0: int, p1: charPtr): [void, charPtr];
  export function setAmbientZoneListState(p0: charPtr, p1: boolean, p2: boolean): [void, charPtr];
  export function setAmbientZoneListStatePersistent(p0: charPtr, p1: boolean, p2: boolean): [void, charPtr];
  export function setAmbientZoneState(p0: intPtr, p1: boolean, p2: boolean): [void, intPtr];
  export function setAmbientZoneStatePersistent(p0: charPtr, p1: boolean, p2: boolean): [void, charPtr];
  export function setAmmoInClip(p0: int, p1: int, p2: int): boolean;
  export function setAnimLooped(p0: int, p1: boolean, p2: int, p3: boolean): void;
  export function setAnimRate(p0: int, p1: float, p2: int, p3: boolean): void;
  export function setAnimWeight(p0: int, p1: float, p2: int, p3: int, p4: boolean): void;
  export function setAnimalMood(p0: int, p1: int): void;
  export function setAudioFlag(p0: charPtr, p1: boolean): [void, charPtr];
  export function setAudioSceneVariable(p0: charPtr, p1: charPtr, p2: float): [void, charPtr, charPtr];
  export function setAudioVehiclePriority(p0: int, p1: int): void;
  export function setAutoGiveParachuteWhenEnterPlane(p0: int, p1: boolean): void;
  export function setBalanceAddMachine(p0: intPtr, p1: intPtr): [boolean, intPtr, intPtr];
  export function setBalanceAddMachines(p0: intPtr, p1: int, p2: intPtr): [boolean, intPtr, intPtr];
  export function setBikeLeanAngle(p0: int, p1: float, p2: float): void;
  export function setBit(p0: intPtr, p1: int): [void, intPtr];
  export function setBitsInRange(p0: intPtr, p1: int, p2: int, p3: int): [void, intPtr];
  export function setBlackout(p0: boolean): void;
  export function setBlipAlpha(p0: int, p1: int): void;
  export function setBlipAsFriendly(p0: int, p1: boolean): void;
  export function setBlipAsMissionCreatorBlip(p0: int, p1: boolean): void;
  export function setBlipAsShortRange(p0: int, p1: boolean): void;
  export function setBlipBright(p0: int, p1: boolean): void;
  export function setBlipCategory(p0: int, p1: int): void;
  export function setBlipColour(p0: int, p1: int): void;
  export function setBlipCoords(p0: int, p1: float, p2: float, p3: float): void;
  export function setBlipDisplay(p0: int, p1: int): void;
  export function setBlipFade(p0: int, p1: int, p2: int): void;
  export function setBlipFlashInterval(p0: int, p1: int): void;
  export function setBlipFlashTimer(p0: int, p1: int): void;
  export function setBlipFlashes(p0: int, p1: boolean): void;
  export function setBlipFlashesAlternate(p0: int, p1: boolean): void;
  export function setBlipHighDetail(p0: int, p1: boolean): void;
  export function setBlipNameFromTextFile(p0: int, p1: charPtr): [void, charPtr];
  export function setBlipNameToPlayerName(p0: int, p1: int): void;
  export function setBlipPriority(p0: int, p1: int): void;
  export function setBlipRotation(p0: int, p1: int): void;
  export function setBlipRoute(p0: int, p1: boolean): void;
  export function setBlipRouteColour(p0: int, p1: int): void;
  export function setBlipScale(p0: int, p1: float): void;
  export function setBlipSecondaryColour(p0: int, p1: float, p2: float, p3: float): void;
  export function setBlipShowCone(p0: int, p1: boolean): void;
  export function setBlipShrink(p0: int, p1: boolean): void;
  export function setBlipSprite(p0: int, p1: int): void;
  export function setBlockingOfNonTemporaryEvents(p0: int, p1: boolean): void;
  export function setBoatAnchor(p0: int, p1: boolean): void;
  export function setCamActive(p0: int, p1: boolean): void;
  export function setCamActiveWithInterp(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setCamAffectsAiming(p0: int, p1: boolean): void;
  export function setCamAnimCurrentPhase(p0: int, p1: float): void;
  export function setCamCoord(p0: int, p1: float, p2: float, p3: float): void;
  export function setCamDebugName(p0: int, p1: charPtr): [void, charPtr];
  export function setCamDofFnumberOfLens(p0: int, p1: float): void;
  export function setCamDofFocusDistanceBias(p0: int, p1: float): void;
  export function setCamDofMaxNearInFocusDistance(p0: int, p1: float): void;
  export function setCamDofMaxNearInFocusDistanceBlendLevel(p0: int, p1: float): void;
  export function setCamDofPlanes(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function setCamDofStrength(p0: int, p1: float): void;
  export function setCamEffect(p0: int): void;
  export function setCamFarClip(p0: int, p1: float): void;
  export function setCamFarDof(p0: int, p1: float): void;
  export function setCamFov(p0: int, p1: float): void;
  export function setCamInheritRollVehicle(p0: int, p1: boolean): void;
  export function setCamMotionBlurStrength(p0: int, p1: float): void;
  export function setCamNearClip(p0: int, p1: float): void;
  export function setCamNearDof(p0: int, p1: float): void;
  export function setCamParams(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: int, p10: int, p11: int): void;
  export function setCamRot(p0: int, p1: float, p2: float, p3: float, p4: int): void;
  export function setCamShakeAmplitude(p0: int, p1: float): void;
  export function setCamSplineDuration(p0: int, p1: int): void;
  export function setCamSplinePhase(p0: int, p1: float): void;
  export function setCamUseShallowDofMode(p0: int, p1: boolean): void;
  export function setCameraRange(p0: int, p1: float): void;
  export function setCanAttackFriendly(p0: int, p1: boolean, p2: boolean): void;
  export function setCanResprayVehicle(p0: int, p1: boolean): void;
  export function setCarHighSpeedBumpSeverityMultiplier(p0: float): void;
  export function setCargobobHookPosition(p0: int, p1: float, p2: float, p3: int): void;
  export function setCargobobPickupMagnetActive(p0: int, p1: boolean): void;
  export function setCargobobPickupMagnetStrength(p0: int, p1: float): void;
  export function setCgAtBoundcenter(p0: int): void;
  export function setCgoffset(p0: int, p1: float, p2: float, p3: float): void;
  export function setCheckpointCylinderHeight(p0: int, p1: float, p2: float, p3: float): void;
  export function setCheckpointIconRgba(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setCheckpointRgba(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setCheckpointScale(p0: int, p1: float): void;
  export function setCinematicButtonActive(p0: boolean): void;
  export function setCinematicCamShakeAmplitude(p0: float): void;
  export function setCinematicModeActive(p0: boolean): void;
  export function setClockDate(p0: int, p1: int, p2: int): void;
  export function setClockTime(p0: int, p1: int, p2: int): void;
  export function setCloudHatOpacity(p0: float): void;
  export function setCloudHatTransition(p0: charPtr, p1: float): [void, charPtr];
  export function setCombatFloat(p0: int, p1: int, p2: float): void;
  export function setControlNormal(p0: int, p1: int, p2: float): boolean;
  export function setConvertibleRoof(p0: int, p1: boolean): void;
  export function setCreateRandomCops(p0: boolean): void;
  export function setCreateRandomCopsNotOnScenarios(p0: boolean): void;
  export function setCreateRandomCopsOnScenarios(p0: boolean): void;
  export function setCreditsActive(p0: boolean): void;
  export function setCurrentIntensity(p0: float): void;
  export function setCurrentPedVehicleWeapon(p0: int, p1: int): boolean;
  export function setCurrentPedWeapon(p0: int, p1: int, p2: boolean): void;
  export function setCursorLocation(p0: float, p1: float): boolean;
  export function setCursorSprite(p0: int): void;
  export function setCustomRespawnPosition(p0: float, p1: float, p2: float, p3: float): void;
  export function setCutsceneAudioOverride(p0: charPtr): [void, charPtr];
  export function setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
  export function setCutsceneOrigin(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function setCutscenePedComponentVariation(p0: charPtr, p1: int, p2: int, p3: int, p4: int): [void, charPtr];
  export function setCutscenePedPropVariation(p0: charPtr, p1: int, p2: int, p3: int, p4: int): [void, charPtr];
  export function setCutsceneTriggerArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function setDamping(p0: int, p1: int, p2: float): void;
  export function setDebugLinesAndSpheresDrawingActive(p0: boolean): void;
  export function setDecisionMaker(p0: int, p1: int): void;
  export function setDesObjectState(p0: int, p1: int): void;
  export function setDesiredVerticalFlightPhase(p0: int, p1: float): void;
  export function setDirectorMode(p0: boolean): void;
  export function setDisableAmbientMeleeMove(p0: int, p1: boolean): void;
  export function setDisableBreaking(p0: int, p1: boolean): int;
  export function setDisableFragDamage(p0: int, p1: boolean): void;
  export function setDisableVehiclePetrolTankDamage(p0: int, p1: boolean): void;
  export function setDisableVehiclePetrolTankFires(p0: int, p1: boolean): void;
  export function setDispatchCopsForPlayer(p0: int, p1: boolean): void;
  export function setDispatchIdealSpawnDistance(p0: float): void;
  export function setDispatchTimeBetweenSpawnAttempts(p0: int, p1: float): void;
  export function setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: int, p1: float): void;
  export function setDisplayCash(): void;
  export function setDitchPoliceModels(p0: boolean): void;
  export function setDoorAccelerationLimit(p0: int, p1: int, p2: boolean, p3: boolean): void;
  export function setDoorAjarAngle(p0: int, p1: float, p2: boolean, p3: boolean): void;
  export function setDrawOrigin(p0: float, p1: float, p2: float, p3: int): void;
  export function setDriveTaskCruiseSpeed(p0: int, p1: float): void;
  export function setDriveTaskDrivingStyle(p0: int, p1: int): void;
  export function setDriveTaskMaxCruiseSpeed(p0: int, p1: float): void;
  export function setDrivebyTaskTarget(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float): void;
  export function setDriverAbility(p0: int, p1: float): void;
  export function setDriverAggressiveness(p0: int, p1: float): void;
  export function setDriverRacingModifier(p0: int, p1: float): void;
  export function setEmitterRadioStation(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function setEnableBoundAnkles(p0: int, p1: boolean): void;
  export function setEnableHandcuffs(p0: int, p1: boolean): void;
  export function setEnablePedEnveffScale(p0: int, p1: boolean): void;
  export function setEnableScuba(p0: int, p1: boolean): void;
  export function setEntityAlpha(p0: int, p1: int, p2: int): void;
  export function setEntityAlwaysPrerender(p0: int, p1: boolean): void;
  export function setEntityAnimCurrentTime(p0: int, p1: charPtr, p2: charPtr, p3: float): [void, charPtr, charPtr];
  export function setEntityAnimSpeed(p0: int, p1: charPtr, p2: charPtr, p3: float): [void, charPtr, charPtr];
  export function setEntityAsMissionEntity(p0: int, p1: boolean, p2: boolean): void;
  export function setEntityAsNoLongerNeeded(p0: intPtr): [void, intPtr];
  export function setEntityCanBeDamaged(p0: int, p1: boolean): void;
  export function setEntityCanBeDamagedByRelationshipGroup(p0: int, p1: boolean, p2: int): void;
  export function setEntityCanBeTargetedWithoutLos(p0: int, p1: boolean): void;
  export function setEntityCollision(p0: int, p1: boolean, p2: boolean): void;
  export function setEntityCollision2(p0: int, p1: boolean, p2: boolean): void;
  export function setEntityCoords(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
  export function setEntityCoords2(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
  export function setEntityCoordsNoOffset(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: boolean, p6: boolean): void;
  export function setEntityDynamic(p0: int, p1: boolean): void;
  export function setEntityHasGravity(p0: int, p1: boolean): void;
  export function setEntityHeading(p0: int, p1: float): void;
  export function setEntityHealth(p0: int, p1: int): void;
  export function setEntityIconColor(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setEntityIconVisibility(p0: int, p1: boolean): void;
  export function setEntityInvincible(p0: int, p1: boolean): void;
  export function setEntityIsTargetPriority(p0: int, p1: boolean, p2: float): void;
  export function setEntityLights(p0: int, p1: boolean): void;
  export function setEntityLoadCollisionFlag(p0: int, p1: boolean): void;
  export function setEntityLocallyInvisible(p0: int): void;
  export function setEntityLocallyVisible(p0: int): void;
  export function setEntityLodDist(p0: int, p1: int): void;
  export function setEntityMaxHealth(p0: int, p1: int): void;
  export function setEntityMaxSpeed(p0: int, p1: float): void;
  export function setEntityMotionBlur(p0: int, p1: boolean): void;
  export function setEntityNoCollisionEntity(p0: int, p1: int, p2: boolean): void;
  export function setEntityOnlyDamagedByPlayer(p0: int, p1: boolean): void;
  export function setEntityOnlyDamagedByRelationshipGroup(p0: int, p1: boolean, p2: int): void;
  export function setEntityProofs(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;
  export function setEntityQuaternion(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function setEntityRecordsCollisions(p0: int, p1: boolean): void;
  export function setEntityRenderScorched(p0: int, p1: boolean): void;
  export function setEntityRotation(p0: int, p1: float, p2: float, p3: float, p4: int, p5: boolean): void;
  export function setEntitySomething(p0: int, p1: boolean): void;
  export function setEntityTrafficlightOverride(p0: int, p1: int): void;
  export function setEntityVelocity(p0: int, p1: float, p2: float, p3: float): void;
  export function setEntityVisible(p0: int, p1: boolean, p2: boolean): void;
  export function setEntityVisibleInCutscene(p0: int, p1: boolean, p2: boolean): void;
  export function setEveryoneIgnorePlayer(p0: int, p1: boolean): void;
  export function setExclusivePhoneRelationships(p0: int): int;
  export function setExclusiveScenarioGroup(p0: charPtr): [void, charPtr];
  export function setExplosiveAmmoThisFrame(p0: int): void;
  export function setExplosiveMeleeThisFrame(p0: int): void;
  export function setFacialIdleAnimOverride(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function setFadeInAfterDeathArrest(p0: boolean): void;
  export function setFadeInAfterLoad(p0: boolean): void;
  export function setFadeOutAfterArrest(p0: boolean): void;
  export function setFadeOutAfterDeath(p0: boolean): void;
  export function setFakeWantedLevel(p0: int): void;
  export function setFarDrawVehicles(p0: boolean): void;
  export function setFarShadowsSuppressed(p0: boolean): void;
  export function setFireAmmoThisFrame(p0: int): void;
  export function setFirstPersonCamNearClip(p0: float): void;
  export function setFirstPersonCamPitchRange(p0: float, p1: float): void;
  export function setFlash(p0: float, p1: float, p2: float, p3: float, p4: float): void;
  export function setFlashLightFadeDistance(p0: float): int;
  export function setFocusArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function setFocusEntity(p0: int): void;
  export function setFollowPedCamCutsceneChat(p0: charPtr, p1: int): [boolean, charPtr];
  export function setFollowPedCamViewMode(p0: int): void;
  export function setFollowVehicleCamViewMode(p0: int): void;
  export function setFollowVehicleCamZoomLevel(p0: int): void;
  export function setForceHdVehicle(p0: int, p1: boolean): void;
  export function setForceObjectThisFrame(p0: int, p1: int, p2: int, p3: int): void;
  export function setForcePedFootstepsTracks(p0: boolean): void;
  export function setForceVehicleTrails(p0: boolean): void;
  export function setFrontendActive(p0: boolean): void;
  export function setFrontendRadioActive(p0: boolean): void;
  export function setFrozenRenderingDisabled(p0: boolean): void;
  export function setGamePaused(p0: boolean): void;
  export function setGamePausesForStreaming(p0: boolean): void;
  export function setGameplayCamRawPitch(p0: float): void;
  export function setGameplayCamRawYaw(p0: float): void;
  export function setGameplayCamRelativeHeading(p0: float): void;
  export function setGameplayCamRelativePitch(p0: float, p1: float): void;
  export function setGameplayCamShakeAmplitude(p0: float): void;
  export function setGameplayCoordHint(p0: float, p1: float, p2: float, p3: int, p4: int, p5: int, p6: int): void;
  export function setGameplayEntityHint(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int, p6: int, p7: int, p8: int): void;
  export function setGameplayHintFov(p0: float): void;
  export function setGameplayObjectHint(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int, p6: int, p7: int): void;
  export function setGameplayPedHint(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int, p6: int, p7: int): void;
  export function setGameplayVehicleHint(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int, p6: int, p7: int): void;
  export function setGarbageTrucks(p0: boolean): int;
  export function setGlobalMinBirdFlightHeight(p0: float): void;
  export function setGpsActive(p0: boolean): void;
  export function setGpsDisabledZone(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function setGpsFlags(p0: int, p1: float): void;
  export function setGpsFlashes(p0: boolean): void;
  export function setGravityLevel(p0: int): void;
  export function setGroupFormation(p0: int, p1: int): void;
  export function setGroupFormationSpacing(p0: int, p1: float, p2: float, p3: float): void;
  export function setGroupSeparationRange(p0: int, p1: float): void;
  export function setHdArea(p0: float, p1: float, p2: float, p3: float): void;
  export function setHeliBladesFullSpeed(p0: int): void;
  export function setHeliBladesSpeed(p0: int, p1: float): void;
  export function setHelicopterRollPitchYawMultHealth(p0: int, p1: float): void;
  export function setHighFallTask(p0: int, p1: int, p2: int, p3: int): void;
  export function setHornEnabled(p0: int, p1: boolean): void;
  export function setHudColour(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setHudColoursSwitch(p0: int, p1: int): void;
  export function setHudComponentPosition(p0: int, p1: float, p2: float): void;
  export function setIgnoreLowPriorityShockingEvents(p0: int, p1: boolean): void;
  export function setIgnoreNoGpsFlag(p0: boolean): void;
  export function setIkTarget(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int): void;
  export function setInitialPlayerStation(p0: charPtr): [void, charPtr];
  export function setInputExclusive(p0: int, p1: int): void;
  export function setInteriorActive(p0: int, p1: boolean): void;
  export function setLastDrivenVehicle(p0: int): void;
  export function setLocalPlayerInvisibleLocally(p0: boolean): void;
  export function setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;
  export function setLocalPlayerVisibleLocally(p0: boolean): void;
  export function setMapFullScreen(p0: boolean): void;
  export function setMaxWantedLevel(p0: int): void;
  export function setMicrophonePosition(p0: boolean, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float): void;
  export function setMinigameInProgress(p0: boolean): void;
  export function setMinimapAttitudeIndicatorLevel(p0: float, p1: boolean): void;
  export function setMinimapBlockWaypoint(p0: boolean): void;
  export function setMinimapComponent(p0: int, p1: boolean, p2: int): int;
  export function setMinimapRevealed(p0: boolean): void;
  export function setMissionFlag(p0: boolean): void;
  export function setMissionName(p0: boolean, p1: charPtr): [void, charPtr];
  export function setMissionName2(p0: boolean, p1: charPtr): [void, charPtr];
  export function setMissionTrainAsNoLongerNeeded(p0: intPtr, p1: boolean): [void, intPtr];
  export function setMissionTrainCoords(p0: int, p1: float, p2: float, p3: float): void;
  export function setMobilePhonePosition(p0: float, p1: float, p2: float): void;
  export function setMobilePhoneRadioState(p0: boolean): void;
  export function setMobilePhoneRotation(p0: float, p1: float, p2: float, p3: int): void;
  export function setMobilePhoneScale(p0: float): void;
  export function setMobileRadioEnabledDuringGameplay(p0: boolean): void;
  export function setModelAsNoLongerNeeded(p0: int): void;
  export function setMountedWeaponTarget(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float): void;
  export function setMpGamerTag(p0: int, p1: boolean): void;
  export function setMpGamerTagAlpha(p0: int, p1: int, p2: int): void;
  export function setMpGamerTagChatting(p0: int, p1: charPtr): [void, charPtr];
  export function setMpGamerTagColor(p0: int, p1: charPtr, p2: boolean, p3: boolean, p4: charPtr, p5: int, p6: int, p7: int, p8: int): [void, charPtr, charPtr];
  export function setMpGamerTagColour(p0: int, p1: int, p2: int): void;
  export function setMpGamerTagHealthBarColour(p0: int, p1: int): void;
  export function setMpGamerTagIcons(p0: int, p1: boolean): void;
  export function setMpGamerTagName(p0: int, p1: charPtr): [void, charPtr];
  export function setMpGamerTagVisibility(p0: int, p1: int, p2: boolean): void;
  export function setMpGamerTagWantedLevel(p0: int, p1: int): void;
  export function setMultiplayerBankCash(): void;
  export function setMultiplayerHudCash(p0: int, p1: int): void;
  export function setNetworkIdCanMigrate(p0: int, p1: boolean): void;
  export function setNetworkIdExistsOnAllMachines(p0: int, p1: boolean): void;
  export function setNetworkIdSyncToPlayer(p0: int, p1: int, p2: boolean): void;
  export function setNetworkIdVisibleInCutscene(p0: int, p1: boolean, p2: boolean): void;
  export function setNetworkObjectNonContact(p0: int, p1: boolean): void;
  export function setNetworkTaskAction(p0: int, p1: charPtr): [int, charPtr];
  export function setNetworkTaskParamBool(p0: int, p1: charPtr, p2: boolean): [void, charPtr];
  export function setNetworkTaskParamFloat(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function setNetworkVehicleRespotTimer(p0: int, p1: int): void;
  export function setNewWaypoint(p0: float, p1: float): void;
  export function setNextDesiredMoveState(p0: float): void;
  export function setNextRespawnToCustom(): void;
  export function setNightvision(p0: boolean): void;
  export function setNoLoadingScreen(p0: boolean): void;
  export function setNoiseoveride(p0: boolean): void;
  export function setNoisinessoveride(p0: float): void;
  export function setNorthYanktonMap(p0: boolean): void;
  export function setNotificationBackgroundColor(p0: int): void;
  export function setNotificationColorNext(p0: int): void;
  export function setNotificationFlashColor(p0: int, p1: int, p2: int, p3: int): void;
  export function setNotificationMessage(p0: charPtr, p1: int, p2: boolean, p3: int, p4: boolean, p5: charPtr, p6: charPtr): [int, charPtr, charPtr, charPtr];
  export function setNotificationMessage2(p0: charPtr, p1: charPtr, p2: boolean, p3: int, p4: charPtr, p5: charPtr): [int, charPtr, charPtr, charPtr, charPtr];
  export function setNotificationMessage3(p0: charPtr, p1: charPtr, p2: boolean, p3: int, p4: charPtr, p5: charPtr): [int, charPtr, charPtr, charPtr, charPtr];
  export function setNotificationMessage4(p0: charPtr, p1: charPtr, p2: boolean, p3: int, p4: charPtr, p5: charPtr, p6: float): [int, charPtr, charPtr, charPtr, charPtr];
  export function setNotificationMessageClanTag(p0: charPtr, p1: charPtr, p2: boolean, p3: int, p4: charPtr, p5: charPtr, p6: float, p7: charPtr): [int, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function setNotificationMessageClanTag2(p0: charPtr, p1: charPtr, p2: boolean, p3: int, p4: charPtr, p5: charPtr, p6: float, p7: charPtr, p8: int, p9: int): [int, charPtr, charPtr, charPtr, charPtr, charPtr];
  export function setNotificationTextEntry(p0: charPtr): [void, charPtr];
  export function setNumberOfParkedVehicles(p0: int): int;
  export function setObjectAsNoLongerNeeded(p0: intPtr): [void, intPtr];
  export function setObjectPhysicsParams(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float): void;
  export function setObjectTargettable(p0: int, p1: boolean): int;
  export function setObjectTextureVariant(p0: int, p1: int): void;
  export function setOverrideWeather(p0: charPtr): [void, charPtr];
  export function setPadShake(p0: int, p1: int, p2: int): void;
  export function setParachuteTaskTarget(p0: int, p1: float, p2: float, p3: float): void;
  export function setParachuteTaskThrust(p0: int, p1: float): void;
  export function setParkedVehicleDensityMultiplierThisFrame(p0: float): void;
  export function setParticleFxAssetOldToNew(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function setParticleFxBloodScale(p0: boolean): void;
  export function setParticleFxCamInsideNonplayerVehicle(p0: int, p1: boolean): void;
  export function setParticleFxCamInsideVehicle(p0: boolean): void;
  export function setParticleFxLoopedAlpha(p0: int, p1: float): void;
  export function setParticleFxLoopedColour(p0: int, p1: float, p2: float, p3: float, p4: boolean): void;
  export function setParticleFxLoopedEvolution(p0: int, p1: charPtr, p2: float, p3: boolean): [void, charPtr];
  export function setParticleFxLoopedFarClipDist(p0: int, p1: float): void;
  export function setParticleFxLoopedOffsets(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function setParticleFxLoopedScale(p0: int, p1: float): void;
  export function setParticleFxNonLoopedAlpha(p0: float): void;
  export function setParticleFxNonLoopedColour(p0: float, p1: float, p2: float): void;
  export function setParticleFxShootoutBoat(p0: int): void;
  export function setPauseMenuActive(p0: boolean): void;
  export function setPedAccuracy(p0: int, p1: int): int;
  export function setPedAiBlip(p0: int, p1: boolean): void;
  export function setPedAlertness(p0: int, p1: int): void;
  export function setPedAllowVehiclesOverride(p0: int, p1: boolean): void;
  export function setPedAllowedToDuck(p0: int, p1: boolean): void;
  export function setPedAlternateMovementAnim(p0: int, p1: int, p2: charPtr, p3: charPtr, p4: float, p5: boolean): [void, charPtr, charPtr];
  export function setPedAlternateWalkAnim(p0: int, p1: charPtr, p2: charPtr, p3: float, p4: boolean): [void, charPtr, charPtr];
  export function setPedAmmo(p0: int, p1: int, p2: int): void;
  export function setPedAmmoByType(p0: int, p1: int, p2: int): void;
  export function setPedAmmoToDrop(p0: int, p1: int): void;
  export function setPedAngledDefensiveArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: boolean): void;
  export function setPedArmour(p0: int, p1: int): void;
  export function setPedAsCop(p0: int, p1: boolean): void;
  export function setPedAsEnemy(p0: int, p1: boolean): void;
  export function setPedAsGroupLeader(p0: int, p1: int): void;
  export function setPedAsGroupMember(p0: int, p1: int): void;
  export function setPedAsNoLongerNeeded(p0: intPtr): [void, intPtr];
  export function setPedBlendFromParents(p0: int, p1: int, p2: int, p3: float, p4: float): void;
  export function setPedBoundsOrientation(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function setPedCanArmIk(p0: int, p1: boolean): void;
  export function setPedCanBeDraggedOut(p0: int, p1: boolean): void;
  export function setPedCanBeKnockedOffVehicle(p0: int, p1: int): void;
  export function setPedCanBeShotInVehicle(p0: int, p1: boolean): void;
  export function setPedCanBeTargetedWhenInjured(p0: int, p1: boolean): void;
  export function setPedCanBeTargetedWithoutLos(p0: int, p1: boolean): void;
  export function setPedCanBeTargetted(p0: int, p1: boolean): void;
  export function setPedCanBeTargettedByPlayer(p0: int, p1: int, p2: boolean): void;
  export function setPedCanBeTargettedByTeam(p0: int, p1: int, p2: boolean): void;
  export function setPedCanCowerInCover(p0: int, p1: boolean): void;
  export function setPedCanEvasiveDive(p0: int, p1: boolean): void;
  export function setPedCanHeadIk(p0: int, p1: boolean): void;
  export function setPedCanLegIk(p0: int, p1: boolean): void;
  export function setPedCanPeekInCover(p0: int, p1: boolean): void;
  export function setPedCanPlayAmbientAnims(p0: int, p1: boolean): void;
  export function setPedCanPlayAmbientBaseAnims(p0: int, p1: boolean): void;
  export function setPedCanPlayGestureAnims(p0: int, p1: boolean): void;
  export function setPedCanPlayInjuredAnims(p0: int, p1: boolean): void;
  export function setPedCanPlayVisemeAnims(p0: int, p1: boolean, p2: boolean): void;
  export function setPedCanRagdoll(p0: int, p1: boolean): void;
  export function setPedCanRagdollFromPlayerImpact(p0: int, p1: boolean): void;
  export function setPedCanSmashGlass(p0: int, p1: boolean, p2: boolean): void;
  export function setPedCanSwitchWeapon(p0: int, p1: boolean): void;
  export function setPedCanTeleportToGroupLeader(p0: int, p1: int, p2: boolean): void;
  export function setPedCanTorsoIk(p0: int, p1: boolean): void;
  export function setPedCanUseAutoConversationLookat(p0: int, p1: boolean): void;
  export function setPedCapsule(p0: int, p1: float): void;
  export function setPedChanceOfFiringBlanks(p0: int, p1: float, p2: float): void;
  export function setPedClothProne(p0: int, p1: int): void;
  export function setPedCombatAbility(p0: int, p1: int): void;
  export function setPedCombatAttributes(p0: int, p1: int, p2: boolean): void;
  export function setPedCombatMovement(p0: int, p1: int): void;
  export function setPedCombatRange(p0: int, p1: int): void;
  export function setPedComponentVariation(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setPedConfigFlag(p0: int, p1: int, p2: boolean): void;
  export function setPedCoordsKeepVehicle(p0: int, p1: float, p2: float, p3: float): void;
  export function setPedCoordsNoGang(p0: int, p1: float, p2: float, p3: float): void;
  export function setPedCowerHash(p0: int, p1: charPtr): [void, charPtr];
  export function setPedCurrentWeaponVisible(p0: int, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
  export function setPedDecoration(p0: int, p1: int, p2: int): void;
  export function setPedDefaultComponentVariation(p0: int): void;
  export function setPedDefensiveAreaAttachedToPed(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean): void;
  export function setPedDefensiveAreaDirection(p0: int, p1: float, p2: float, p3: float, p4: boolean): void;
  export function setPedDefensiveSphereAttachedToPed(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: boolean): void;
  export function setPedDensityMultiplierThisFrame(p0: float): void;
  export function setPedDesiredHeading(p0: int, p1: float): void;
  export function setPedDesiredMoveBlendRatio(p0: int, p1: float): void;
  export function setPedDiesInSinkingVehicle(p0: int, p1: boolean): void;
  export function setPedDiesInVehicle(p0: int, p1: boolean): void;
  export function setPedDiesInWater(p0: int, p1: boolean): void;
  export function setPedDiesInstantlyInWater(p0: int, p1: boolean): void;
  export function setPedDiesWhenInjured(p0: int, p1: boolean): int;
  export function setPedDriveByClipsetOverride(p0: int, p1: charPtr): [void, charPtr];
  export function setPedDropsInventoryWeapon(p0: int, p1: int, p2: float, p3: float, p4: float, p5: int): void;
  export function setPedDropsWeapon(p0: int): void;
  export function setPedDropsWeaponsWhenDead(p0: int, p1: boolean): void;
  export function setPedDucking(p0: int, p1: boolean): void;
  export function setPedEnableWeaponBlocking(p0: int, p1: boolean): int;
  export function setPedEnabledBikeRingtone(p0: int, p1: int): boolean;
  export function setPedEnveffScale(p0: int, p1: float): void;
  export function setPedEyeColor(p0: int, p1: int): void;
  export function setPedFaceFeature(p0: int, p1: int, p2: float): void;
  export function setPedFacialDecoration(p0: int, p1: int, p2: int): void;
  export function setPedFiringPattern(p0: int, p1: int): void;
  export function setPedFleeAttributes(p0: int, p1: int, p2: boolean): void;
  export function setPedGadget(p0: int, p1: int, p2: boolean): void;
  export function setPedGeneratesDeadBodyEvents(p0: int, p1: boolean): void;
  export function setPedGestureGroup(p0: int, p1: charPtr): [void, charPtr];
  export function setPedGetOutUpsideDownVehicle(p0: int, p1: boolean): void;
  export function setPedGravity(p0: int, p1: boolean): void;
  export function setPedGroupMemberPassengerIndex(p0: int, p1: int): void;
  export function setPedHairColor(p0: int, p1: int, p2: int): void;
  export function setPedHeadBlendData(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int, p6: int, p7: float, p8: float, p9: float, p10: boolean): void;
  export function setPedHeadOverlay(p0: int, p1: int, p2: int, p3: float): void;
  export function setPedHeadOverlayColor(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setPedHearingRange(p0: int, p1: float): void;
  export function setPedHelmet(p0: int, p1: boolean): void;
  export function setPedHelmetFlag(p0: int, p1: int): void;
  export function setPedHelmetPropIndex(p0: int, p1: int): void;
  export function setPedHelmetTextureIndex(p0: int, p1: int): void;
  export function setPedIdRange(p0: int, p1: float): void;
  export function setPedInVehicleContext(p0: int, p1: int): void;
  export function setPedInfiniteAmmo(p0: int, p1: boolean, p2: int): void;
  export function setPedInfiniteAmmoClip(p0: int, p1: boolean): void;
  export function setPedIntoVehicle(p0: int, p1: int, p2: int): void;
  export function setPedIsDrunk(p0: int, p1: boolean): void;
  export function setPedKeepTask(p0: int, p1: boolean): void;
  export function setPedLegIkMode(p0: int, p1: int): void;
  export function setPedLodMultiplier(p0: int, p1: float): void;
  export function setPedMaxHealth(p0: int, p1: int): void;
  export function setPedMaxMoveBlendRatio(p0: int, p1: float): void;
  export function setPedMaxTimeInWater(p0: int, p1: float): void;
  export function setPedMaxTimeUnderwater(p0: int, p1: float): void;
  export function setPedMinGroundTimeForStungun(p0: int, p1: int): void;
  export function setPedMinMoveBlendRatio(p0: int, p1: float): void;
  export function setPedModelIsSuppressed(p0: int, p1: boolean): void;
  export function setPedMoney(p0: int, p1: int): void;
  export function setPedMotionBlur(p0: int, p1: boolean): void;
  export function setPedMoveAnimsBlendOut(p0: int): void;
  export function setPedMoveRateOverride(p0: int, p1: float): void;
  export function setPedMovementClipset(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function setPedMute(p0: int): void;
  export function setPedNameDebug(p0: int, p1: charPtr): [void, charPtr];
  export function setPedNeverLeavesGroup(p0: int, p1: boolean): void;
  export function setPedNonCreationArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function setPedParachuteTintIndex(p0: int, p1: int): void;
  export function setPedPathAvoidFire(p0: int, p1: boolean): void;
  export function setPedPathCanDropFromHeight(p0: int, p1: boolean): void;
  export function setPedPathCanUseClimbovers(p0: int, p1: boolean): int;
  export function setPedPathCanUseLadders(p0: int, p1: boolean): int;
  export function setPedPathPreferToAvoidWater(p0: int, p1: boolean): void;
  export function setPedPathsBackToOriginal(p0: int, p1: int, p2: int, p3: int, p4: int, p5: int): void;
  export function setPedPathsInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean): void;
  export function setPedPathsWidthPlant(p0: int, p1: boolean): void;
  export function setPedPinnedDown(p0: int, p1: boolean, p2: int): int;
  export function setPedPlaysHeadOnHornAnimWhenDiesInVehicle(p0: int, p1: boolean): void;
  export function setPedPopulationBudget(p0: int): void;
  export function setPedPreferredCoverSet(p0: int, p1: int): void;
  export function setPedPrimaryLookat(p0: int, p1: int): void;
  export function setPedPropIndex(p0: int, p1: int, p2: int, p3: int, p4: boolean): void;
  export function setPedRagdollBlockingFlags(p0: int, p1: int): void;
  export function setPedRagdollForceFall(p0: int): void;
  export function setPedRagdollOnCollision(p0: int, p1: boolean): void;
  export function setPedRandomComponentVariation(p0: int, p1: boolean): void;
  export function setPedRandomProps(p0: int): void;
  export function setPedRelationshipGroupDefaultHash(p0: int, p1: int): void;
  export function setPedRelationshipGroupHash(p0: int, p1: int): void;
  export function setPedReserveParachuteTintIndex(p0: int, p1: int): void;
  export function setPedResetFlag(p0: int, p1: int, p2: boolean): void;
  export function setPedSeeingRange(p0: int, p1: float): void;
  export function setPedShootRate(p0: int, p1: int): void;
  export function setPedShootsAtCoord(p0: int, p1: float, p2: float, p3: float, p4: boolean): void;
  export function setPedSphereDefensiveArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: boolean, p6: boolean): void;
  export function setPedStayInVehicleWhenJacked(p0: int, p1: boolean): void;
  export function setPedStealthMovement(p0: int, p1: boolean, p2: charPtr): [void, charPtr];
  export function setPedSteersAroundObjects(p0: int, p1: boolean): void;
  export function setPedSteersAroundPeds(p0: int, p1: boolean): void;
  export function setPedSteersAroundVehicles(p0: int, p1: boolean): void;
  export function setPedStrafeClipset(p0: int, p1: charPtr): [void, charPtr];
  export function setPedSuffersCriticalHits(p0: int, p1: boolean): void;
  export function setPedSweat(p0: int, p1: float): void;
  export function setPedTalk(p0: int): void;
  export function setPedTargetLossResponse(p0: int, p1: int): void;
  export function setPedTargettableVehicleDestroy(p0: int, p1: int, p2: int): void;
  export function setPedToInformRespectedFriends(p0: int, p1: float, p2: int): void;
  export function setPedToLoadCover(p0: int, p1: boolean): void;
  export function setPedToRagdoll(p0: int, p1: int, p2: int, p3: int, p4: boolean, p5: boolean, p6: boolean): boolean;
  export function setPedToRagdollWithFall(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: float, p12: float, p13: float): boolean;
  export function setPedUsingActionMode(p0: int, p1: boolean, p2: int, p3: charPtr): [void, charPtr];
  export function setPedVisualFieldCenterAngle(p0: int, p1: float): void;
  export function setPedVisualFieldMaxAngle(p0: int, p1: float): void;
  export function setPedVisualFieldMaxElevationAngle(p0: int, p1: float): void;
  export function setPedVisualFieldMinAngle(p0: int, p1: float): void;
  export function setPedVisualFieldMinElevationAngle(p0: int, p1: float): void;
  export function setPedVisualFieldPeripheralRange(p0: int, p1: float): void;
  export function setPedWaypointRouteOffset(p0: int, p1: float, p2: float, p3: float): int;
  export function setPedWeaponMovementClipset(p0: int, p1: charPtr): [void, charPtr];
  export function setPedWeaponTintIndex(p0: int, p1: int, p2: int): void;
  export function setPedWetnessEnabledThisFrame(p0: int): void;
  export function setPedWetnessHeight(p0: int, p1: float): void;
  export function setPhoneLean(p0: boolean): void;
  export function setPickupRegenerationTime(p0: int, p1: int): void;
  export function setPlaneMinHeightAboveTerrain(p0: int, p1: int): void;
  export function setPlaybackSpeed(p0: int, p1: float): void;
  export function setPlaybackToUseAi(p0: int, p1: int): void;
  export function setPlaybackToUseAiTryToRevertBackLater(p0: int, p1: int, p2: int, p3: boolean): void;
  export function setPlayerAngry(p0: int, p1: boolean): void;
  export function setPlayerBlipPositionThisFrame(p0: float, p1: float): void;
  export function setPlayerCanBeHassledByGangs(p0: int, p1: boolean): void;
  export function setPlayerCanDoDriveBy(p0: int, p1: boolean): void;
  export function setPlayerCanLeaveParachuteSmokeTrail(p0: int, p1: boolean): void;
  export function setPlayerCanUseCover(p0: int, p1: boolean): int;
  export function setPlayerCashChange(p0: int, p1: int): void;
  export function setPlayerClothLockCounter(p0: int): void;
  export function setPlayerClothPackageIndex(p0: int): void;
  export function setPlayerClothPinFrames(p0: int, p1: boolean): void;
  export function setPlayerControl(p0: int, p1: boolean, p2: int): void;
  export function setPlayerForceSkipAimIntro(p0: int, p1: boolean): void;
  export function setPlayerForcedAim(p0: int, p1: boolean): void;
  export function setPlayerForcedZoom(p0: int, p1: boolean): void;
  export function setPlayerHasReserveParachute(p0: int): void;
  export function setPlayerHealthRechargeMultiplier(p0: int, p1: float): void;
  export function setPlayerInvertedUp(): int;
  export function setPlayerInvincible(p0: int, p1: boolean): void;
  export function setPlayerInvisibleLocally(p0: int, p1: boolean): void;
  export function setPlayerLockon(p0: int, p1: boolean): void;
  export function setPlayerLockonRangeOverride(p0: int, p1: float): void;
  export function setPlayerMaxArmour(p0: int, p1: int): void;
  export function setPlayerMayNotEnterAnyVehicle(p0: intPtr): [void, intPtr];
  export function setPlayerMayOnlyEnterThisVehicle(p0: int, p1: int): void;
  export function setPlayerMeleeWeaponDamageModifier(p0: int, p1: float): void;
  export function setPlayerMeleeWeaponDefenseModifier(p0: int, p1: float): void;
  export function setPlayerModel(p0: int, p1: int): void;
  export function setPlayerNoiseMultiplier(p0: int, p1: float): void;
  export function setPlayerParachuteModelOverride(p0: int, p1: int): void;
  export function setPlayerParachutePackModelOverride(p0: int, p1: int): void;
  export function setPlayerParachutePackTintIndex(p0: int, p1: int): void;
  export function setPlayerParachuteSmokeTrailColor(p0: int, p1: int, p2: int, p3: int): void;
  export function setPlayerParachuteTintIndex(p0: int, p1: int): void;
  export function setPlayerParachuteVariationOverride(p0: int, p1: int, p2: int, p3: int, p4: boolean): void;
  export function setPlayerReserveParachuteTintIndex(p0: int, p1: int): void;
  export function setPlayerResetFlagPreferRearSeats(p0: int, p1: int): void;
  export function setPlayerSimulateAiming(p0: int, p1: boolean): void;
  export function setPlayerSneakingNoiseMultiplier(p0: int, p1: float): void;
  export function setPlayerSprint(p0: int, p1: boolean): void;
  export function setPlayerStealthPerceptionModifier(p0: int, p1: float): void;
  export function setPlayerSwitchOutro(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int): void;
  export function setPlayerTargetingMode(p0: int): void;
  export function setPlayerTeam(p0: int, p1: int): void;
  export function setPlayerVehicleDamageModifier(p0: int, p1: float): void;
  export function setPlayerVehicleDefenseModifier(p0: int, p1: float): void;
  export function setPlayerVisibleLocally(p0: int, p1: boolean): void;
  export function setPlayerWantedCentrePosition(p0: int, p1: float, p2: float, p3: float): void;
  export function setPlayerWantedLevel(p0: int, p1: int, p2: boolean): void;
  export function setPlayerWantedLevelNoDrop(p0: int, p1: int, p2: boolean): void;
  export function setPlayerWantedLevelNow(p0: int, p1: boolean): void;
  export function setPlayerWeaponDamageModifier(p0: int, p1: float): void;
  export function setPlayerWeaponDefenseModifier(p0: int, p1: int): void;
  export function setPlayerpadShakesWhenControllerDisabled(p0: boolean): void;
  export function setPlayersLastVehicle(p0: int): int;
  export function setPoliceIgnorePlayer(p0: int, p1: boolean): void;
  export function setPoliceRadarBlips(p0: int): void;
  export function setRadarAsExteriorThisFrame(): void;
  export function setRadarAsInteriorThisFrame(p0: int, p1: float, p2: float, p3: int, p4: int): void;
  export function setRadarBigmapEnabled(p0: boolean, p1: boolean): void;
  export function setRadarZoom(p0: int): void;
  export function setRadarZoomLevelThisFrame(p0: float): void;
  export function setRadioAutoUnfreeze(p0: boolean): void;
  export function setRadioToStationIndex(p0: int): void;
  export function setRadioToStationName(p0: charPtr): [void, charPtr];
  export function setRadioTrack(p0: charPtr, p1: charPtr): [void, charPtr, charPtr];
  export function setRainFxIntensity(p0: float): void;
  export function setRandomBoats(p0: boolean): int;
  export function setRandomEventFlag(p0: int): void;
  export function setRandomSeed(p0: int): void;
  export function setRandomTrains(p0: boolean): void;
  export function setRandomVehicleDensityMultiplierThisFrame(p0: float): void;
  export function setRandomWeatherType(): void;
  export function setReducePedModelBudget(p0: boolean): void;
  export function setReduceVehicleModelBudget(p0: boolean): void;
  export function setRelationshipBetweenGroups(p0: int, p1: int, p2: int): void;
  export function setRenderTrainAsDerailed(p0: int, p1: boolean): void;
  export function setRoadsBackToOriginal(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function setRoadsBackToOriginalInAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function setRoadsInAngledArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean, p8: boolean, p9: boolean): void;
  export function setRoadsInArea(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: boolean): void;
  export function setRunSprintMultiplierForPlayer(p0: int, p1: float): void;
  export function setSaveHouse(p0: int, p1: boolean, p2: boolean): void;
  export function setSaveMenuActive(p0: boolean): void;
  export function setScaleformMovieAsNoLongerNeeded(p0: intPtr): [void, intPtr];
  export function setScaleformMovieToUseSystemTime(p0: int, p1: boolean): void;
  export function setScenarioGroupEnabled(p0: charPtr, p1: boolean): [void, charPtr];
  export function setScenarioPedDensityMultiplierThisFrame(p0: float, p1: float): void;
  export function setScenarioPedsSpawnInSphereArea(p0: float, p1: float, p2: float, p3: float, p4: int): void;
  export function setScenarioPedsToBeReturnedByNextCommand(p0: boolean): void;
  export function setScenarioTypeEnabled(p0: charPtr, p1: boolean): [void, charPtr];
  export function setScriptAsNoLongerNeeded(p0: charPtr): [void, charPtr];
  export function setScriptVehicleGenerator(p0: int, p1: boolean): void;
  export function setScriptWithNameHashAsNoLongerNeeded(p0: int): void;
  export function setScriptedAnimSeatOffset(p0: int, p1: float): void;
  export function setScriptedConversionCoordThisFrame(p0: float, p1: float, p2: float): void;
  export function setSeethrough(p0: boolean): void;
  export function setSequenceToRepeat(p0: int, p1: boolean): void;
  export function setShowPedInPauseMenu(p0: boolean): void;
  export function setSirenWithNoDriver(p0: int, p1: boolean): void;
  export function setSomeVehicleDensityMultiplierThisFrame(p0: float): void;
  export function setSomethingMultiplierThisFrame(p0: boolean): void;
  export function setSpecialAbilityMultiplier(p0: float): void;
  export function setSrlTime(p0: float): void;
  export function setStateOfClosestDoorOfType(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: float, p6: boolean): void;
  export function setStaticEmitterEnabled(p0: charPtr, p1: boolean): [void, charPtr];
  export function setStoreEnabled(p0: boolean): void;
  export function setStreamedTextureDictAsNoLongerNeeded(p0: charPtr): [void, charPtr];
  export function setStreaming(p0: boolean): void;
  export function setSuperJumpThisFrame(p0: int): void;
  export function setSwimMultiplierForPlayer(p0: int, p1: float): void;
  export function setSynchronizedAudioEventPositionThisFrame(p0: charPtr, p1: int): [void, charPtr];
  export function setSynchronizedSceneLooped(p0: int, p1: boolean): void;
  export function setSynchronizedSceneOcclusionPortal(p0: int, p1: boolean): void;
  export function setSynchronizedSceneOrigin(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int): void;
  export function setSynchronizedScenePhase(p0: int, p1: float): void;
  export function setSynchronizedSceneRate(p0: int, p1: float): void;
  export function setTaskVehicleChaseBehaviorFlag(p0: int, p1: int, p2: boolean): void;
  export function setTaskVehicleChaseIdealPursuitDistance(p0: int, p1: float): void;
  export function setTaxiLights(p0: int, p1: boolean): void;
  export function setTeamPickupObject(p0: int, p1: int, p2: boolean): void;
  export function setTextCentre(p0: boolean): void;
  export function setTextChatUnk(p0: boolean): void;
  export function setTextColour(p0: int, p1: int, p2: int, p3: int): void;
  export function setTextDropShadow(): void;
  export function setTextDropshadow(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setTextEdge(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function setTextFont(p0: int): void;
  export function setTextJustification(p0: int): void;
  export function setTextLeading(p0: boolean): void;
  export function setTextOutline(): void;
  export function setTextProportional(p0: boolean): void;
  export function setTextRenderId(p0: int): void;
  export function setTextRightJustify(p0: boolean): void;
  export function setTextScale(p0: float, p1: float): void;
  export function setTextWrap(p0: float, p1: float): void;
  export function setThirdPersonAimCamNearClip(p0: float): void;
  export function setThisScriptCanBePaused(p0: boolean): void;
  export function setThisScriptCanRemoveBlipsCreatedByAnyScript(p0: boolean): void;
  export function setTimeExclusiveDisplayTexture(p0: int, p1: boolean): void;
  export function setTimeIdleDrop(p0: boolean, p1: boolean): void;
  export function setTimeScale(p0: float): void;
  export function setTimecycleModifier(p0: charPtr): [void, charPtr];
  export function setTimecycleModifierStrength(p0: float): void;
  export function setTowTruckCraneHeight(p0: int, p1: float): void;
  export function setTrackedPointInfo(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function setTrainCruiseSpeed(p0: int, p1: float): int;
  export function setTrainSpeed(p0: int, p1: float): int;
  export function setTransitionTimecycleModifier(p0: charPtr, p1: float): [void, charPtr];
  export function setTvAudioFrontend(p0: boolean): void;
  export function setTvChannel(p0: int): void;
  export function setTvVolume(p0: float): void;
  export function setUiLayer(p0: int): void;
  export function setUnkMapFlag(p0: int): void;
  export function setUseHiDof(): void;
  export function setUsedByPlayer(p0: int, p1: boolean): void;
  export function setUserRadioControlEnabled(p0: boolean): void;
  export function setUseridsUihidden(p0: int, p1: intPtr): [boolean, intPtr];
  export function setVariableOnSound(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function setVariableOnStream(p0: charPtr, p1: float): [void, charPtr];
  export function setVehRadioStation(p0: int, p1: charPtr): [void, charPtr];
  export function setVehicleAlarm(p0: int, p1: boolean): void;
  export function setVehicleAllowNoPassengersLockon(p0: int, p1: boolean): void;
  export function setVehicleAsAmbientEmmitter(p0: int): void;
  export function setVehicleAsNoLongerNeeded(p0: intPtr): [void, intPtr];
  export function setVehicleAutomaticallyAttaches(p0: int, p1: boolean, p2: int): int;
  export function setVehicleBodyHealth(p0: int, p1: float): void;
  export function setVehicleBoostActive(p0: int, p1: boolean): void;
  export function setVehicleBrakeLights(p0: int, p1: boolean): void;
  export function setVehicleBurnout(p0: int, p1: boolean): void;
  export function setVehicleCanBeTargetted(p0: int, p1: boolean): void;
  export function setVehicleCanBeUsedByFleeingPeds(p0: int, p1: boolean): void;
  export function setVehicleCanBeVisiblyDamaged(p0: int, p1: boolean): void;
  export function setVehicleCanBreak(p0: int, p1: boolean): void;
  export function setVehicleCeilingHeight(p0: int, p1: float): void;
  export function setVehicleColourCombination(p0: int, p1: int): void;
  export function setVehicleColours(p0: int, p1: int, p2: int): void;
  export function setVehicleCreatesMoneyPickupsWhenExploded(p0: int, p1: boolean): void;
  export function setVehicleCustomPrimaryColour(p0: int, p1: int, p2: int, p3: int): void;
  export function setVehicleCustomSecondaryColour(p0: int, p1: int, p2: int, p3: int): void;
  export function setVehicleDamage(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: boolean): void;
  export function setVehicleDeformationFixed(p0: int): void;
  export function setVehicleDensityMultiplierThisFrame(p0: float): void;
  export function setVehicleDirtLevel(p0: int, p1: float): void;
  export function setVehicleDoorBroken(p0: int, p1: int, p2: boolean): void;
  export function setVehicleDoorCanBreak(p0: int, p1: int, p2: boolean): void;
  export function setVehicleDoorControl(p0: int, p1: int, p2: int, p3: float): void;
  export function setVehicleDoorLatched(p0: int, p1: int, p2: boolean, p3: boolean, p4: boolean): void;
  export function setVehicleDoorOpen(p0: int, p1: int, p2: boolean, p3: boolean): void;
  export function setVehicleDoorShut(p0: int, p1: int, p2: boolean): void;
  export function setVehicleDoorsLocked(p0: int, p1: int): void;
  export function setVehicleDoorsLockedForAllPlayers(p0: int, p1: boolean): void;
  export function setVehicleDoorsLockedForPlayer(p0: int, p1: int, p2: boolean): void;
  export function setVehicleDoorsLockedForTeam(p0: int, p1: int, p2: boolean): void;
  export function setVehicleDoorsShut(p0: int, p1: boolean): void;
  export function setVehicleEngineCanDegrade(p0: int, p1: boolean): void;
  export function setVehicleEngineHealth(p0: int, p1: float): void;
  export function setVehicleEngineOn(p0: int, p1: boolean, p2: boolean, p3: boolean): void;
  export function setVehicleEnginePowerMultiplier(p0: int, p1: float): void;
  export function setVehicleEngineTorqueMultiplier(p0: int, p1: float): void;
  export function setVehicleEnveffScale(p0: int, p1: float): void;
  export function setVehicleExclusiveDriver(p0: int, p1: int): void;
  export function setVehicleExclusiveDriver2(p0: int, p1: int, p2: int): void;
  export function setVehicleExplodesOnHighExplosionDamage(p0: int, p1: boolean): void;
  export function setVehicleExtra(p0: int, p1: int, p2: boolean): void;
  export function setVehicleExtraColours(p0: int, p1: int, p2: int): void;
  export function setVehicleFixed(p0: int): void;
  export function setVehicleForkliftHeight(p0: int, p1: float): void;
  export function setVehicleForwardSpeed(p0: int, p1: float): void;
  export function setVehicleFrictionOverride(p0: int, p1: float): void;
  export function setVehicleFullbeam(p0: int, p1: boolean): void;
  export function setVehicleGravity(p0: int, p1: boolean): void;
  export function setVehicleHalt(p0: int, p1: float, p2: int, p3: boolean): void;
  export function setVehicleHandbrake(p0: int, p1: boolean): void;
  export function setVehicleHasBeenOwnedByPlayer(p0: int, p1: boolean): void;
  export function setVehicleHasStrongAxles(p0: int, p1: boolean): void;
  export function setVehicleHeadlightColor(p0: int, p1: int): void;
  export function setVehicleHudSpecialAbilityBarActive(p0: int, p1: boolean): void;
  export function setVehicleIndicatorLights(p0: int, p1: int, p2: boolean): void;
  export function setVehicleInteriorlight(p0: int, p1: boolean): void;
  export function setVehicleIsConsideredByPlayer(p0: int, p1: boolean): void;
  export function setVehicleIsStolen(p0: int, p1: boolean): int;
  export function setVehicleIsWanted(p0: int, p1: boolean): void;
  export function setVehicleJetEngineOn(p0: int, p1: boolean): void;
  export function setVehicleLightMultiplier(p0: int, p1: float): void;
  export function setVehicleLights(p0: int, p1: int): void;
  export function setVehicleLightsMode(p0: int, p1: int): void;
  export function setVehicleLivery(p0: int, p1: int): void;
  export function setVehicleLodMultiplier(p0: int, p1: float): void;
  export function setVehicleMod(p0: int, p1: int, p2: int, p3: boolean): void;
  export function setVehicleModColor1(p0: int, p1: int, p2: int, p3: int): void;
  export function setVehicleModColor2(p0: int, p1: int, p2: int): void;
  export function setVehicleModKit(p0: int, p1: int): void;
  export function setVehicleModelIsSuppressed(p0: int, p1: boolean): void;
  export function setVehicleNameDebug(p0: int, p1: charPtr): [void, charPtr];
  export function setVehicleNeedsToBeHotwired(p0: int, p1: boolean): void;
  export function setVehicleNeonLightEnabled(p0: int, p1: int, p2: boolean): void;
  export function setVehicleNeonLightsColour(p0: int, p1: int, p2: int, p3: int): void;
  export function setVehicleNitroEnabled(p0: int, p1: boolean): void;
  export function setVehicleNumberPlateText(p0: int, p1: charPtr): [void, charPtr];
  export function setVehicleNumberPlateTextIndex(p0: int, p1: int): void;
  export function setVehicleOnGroundProperly(p0: int): boolean;
  export function setVehicleOutOfControl(p0: int, p1: boolean, p2: boolean): void;
  export function setVehiclePetrolTankHealth(p0: int, p1: float): void;
  export function setVehiclePopulationBudget(p0: int): void;
  export function setVehicleProvidesCover(p0: int, p1: boolean): void;
  export function setVehicleRadioEnabled(p0: int, p1: boolean): void;
  export function setVehicleRadioLoud(p0: int, p1: boolean): void;
  export function setVehicleReduceGrip(p0: int, p1: boolean): void;
  export function setVehicleRudderBroken(p0: int, p1: boolean): void;
  export function setVehicleSearchlight(p0: int, p1: boolean, p2: boolean): void;
  export function setVehicleShootAtTarget(p0: int, p1: int, p2: float, p3: float, p4: float): void;
  export function setVehicleSilent(p0: int, p1: boolean): void;
  export function setVehicleSiren(p0: int, p1: boolean): void;
  export function setVehicleSt(p0: int, p1: boolean): void;
  export function setVehicleSteerBias(p0: int, p1: float): void;
  export function setVehicleStrong(p0: int, p1: boolean): void;
  export function setVehicleTimedExplosion(p0: int, p1: int, p2: boolean): void;
  export function setVehicleTyreBurst(p0: int, p1: int, p2: boolean, p3: float): void;
  export function setVehicleTyreFixed(p0: int, p1: int): void;
  export function setVehicleTyreSmokeColor(p0: int, p1: int, p2: int, p3: int): void;
  export function setVehicleTyresCanBurst(p0: int, p1: boolean): void;
  export function setVehicleUndriveable(p0: int, p1: boolean): void;
  export function setVehicleWheelType(p0: int, p1: int): void;
  export function setVehicleWheelsCanBreak(p0: int, p1: boolean): int;
  export function setVehicleWheelsCanBreakOffWhenBlowUp(p0: int, p1: boolean): void;
  export function setVehicleWindowTint(p0: int, p1: int): void;
  export function setVerticalFlightPhase(p0: int, p1: float): void;
  export function setWantedLevelDifficulty(p0: int, p1: float): void;
  export function setWantedLevelMultiplier(p0: float): void;
  export function setWarningMessage(p0: charPtr, p1: int, p2: charPtr, p3: boolean, p4: int, p5: intPtr, p6: intPtr, p7: boolean): [void, charPtr, charPtr, intPtr, intPtr];
  export function setWarningMessage3(p0: charPtr, p1: charPtr, p2: int, p3: charPtr, p4: boolean, p5: int, p6: int, p7: intPtr, p8: intPtr, p9: boolean): [void, charPtr, charPtr, charPtr, intPtr, intPtr];
  export function setWarningMessageWithHeader(p0: charPtr, p1: charPtr, p2: int, p3: charPtr, p4: boolean, p5: int, p6: intPtr, p7: intPtr, p8: boolean): [void, charPtr, charPtr, charPtr, intPtr, intPtr];
  export function setWaypointOff(): void;
  export function setWeaponAnimationOverride(p0: int, p1: int): void;
  export function setWeaponObjectTintIndex(p0: int, p1: int): void;
  export function setWeaponSmokegrenadeAssigned(p0: int): boolean;
  export function setWeatherTypeNow(p0: charPtr): [void, charPtr];
  export function setWeatherTypeNowPersist(p0: charPtr): [void, charPtr];
  export function setWeatherTypeOverTime(p0: charPtr, p1: float): [void, charPtr];
  export function setWeatherTypePersist(p0: charPtr): [void, charPtr];
  export function setWeatherTypeTransition(p0: int, p1: int, p2: float): void;
  export function setWidescreenBorders(p0: boolean, p1: int): int;
  export function setWidescreenFormat(p0: int): void;
  export function setWind(p0: float): void;
  export function setWindDirection(p0: float): void;
  export function setWindSpeed(p0: float): void;
  export function setZoneEnabled(p0: int, p1: boolean): void;
  export function shakeCam(p0: int, p1: charPtr, p2: float): [void, charPtr];
  export function shakeCinematicCam(p0: charPtr, p1: float): [void, charPtr];
  export function shakeGameplayCam(p0: charPtr, p1: float): [void, charPtr];
  export function shapeTestResultEntity(p0: int): void;
  export function shootSingleBulletBetweenCoords(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: boolean, p8: int, p9: int, p10: boolean, p11: boolean, p12: float): void;
  export function shootSingleBulletBetweenCoordsPresetParams(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: boolean, p8: int, p9: int, p10: boolean, p11: boolean, p12: float, p13: int): void;
  export function shootSingleBulletBetweenCoordsWithExtraParams(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: boolean, p8: int, p9: int, p10: boolean, p11: boolean, p12: float, p13: int, p14: boolean, p15: boolean, p16: boolean, p17: boolean): void;
  export function showCursorThisFrame(): void;
  export function showFriendIndicatorOnBlip(p0: int, p1: boolean): void;
  export function showHeadingIndicatorOnBlip(p0: int, p1: boolean): void;
  export function showHudComponentThisFrame(p0: int): void;
  export function showNumberOnBlip(p0: int, p1: int): void;
  export function showOutlineIndicatorOnBlip(p0: int, p1: boolean): void;
  export function showSocialClubLegalScreen(): void;
  export function showTickOnBlip(p0: int, p1: boolean): void;
  export function showWeaponWheel(p0: boolean): void;
  export function shutdownAndLaunchSinglePlayerGame(): void;
  export function shutdownCreatorBudget(): void;
  export function shutdownLoadingScreen(): void;
  export function simulatePlayerInputGait(p0: int, p1: float, p2: int, p3: float, p4: boolean, p5: boolean): void;
  export function sittingTv(p0: int): charPtr;
  export function skipRadioForward(): void;
  export function skipTimeInPlaybackRecordedVehicle(p0: int, p1: float): void;
  export function skipToEndAndStopPlaybackRecordedVehicle(p0: int): void;
  export function skipToNextScriptedConversationLine(): void;
  export function slideObject(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: boolean): boolean;
  export function smashVehicleWindow(p0: int, p1: int): void;
  export function soundVehicleHornThisFrame(p0: int): void;
  export function specialAbilityChargeAbsolute(p0: int, p1: int, p2: boolean): void;
  export function specialAbilityChargeContinuous(p0: int, p1: int): void;
  export function specialAbilityChargeLarge(p0: int, p1: boolean, p2: boolean): void;
  export function specialAbilityChargeMedium(p0: int, p1: int, p2: int): void;
  export function specialAbilityChargeNormalized(p0: int, p1: float, p2: boolean): void;
  export function specialAbilityChargeSmall(p0: int, p1: boolean, p2: boolean): void;
  export function specialAbilityDeactivate(p0: int): void;
  export function specialAbilityDeactivateFast(p0: int): void;
  export function specialAbilityDepleteMeter(p0: int, p1: boolean): void;
  export function specialAbilityFillMeter(p0: int, p1: boolean): void;
  export function specialAbilityLock(p0: int): void;
  export function specialAbilityReset(p0: int): void;
  export function specialAbilityUnlock(p0: int): void;
  export function specialFrontendEqual(p0: float, p1: float, p2: float): void;
  export function startAlarm(p0: charPtr, p1: boolean): [void, charPtr];
  export function startAudioScene(p0: charPtr): [boolean, charPtr];
  export function startCutscene(p0: int): void;
  export function startCutsceneAtCoords(p0: float, p1: float, p2: float, p3: int): void;
  export function startEntityFire(p0: int): int;
  export function startFiringAmnesty(p0: int): void;
  export function startNetworkedParticleFxLoopedOnEntity(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean, p11: boolean): [int, charPtr];
  export function startNetworkedParticleFxLoopedOnEntityBone(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: boolean, p12: boolean): [int, charPtr];
  export function startNetworkedParticleFxNonLoopedAtCoord(p0: charPtr, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: boolean, p10: boolean): [boolean, charPtr];
  export function startNetworkedParticleFxNonLoopedOnEntity(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean, p11: boolean): [boolean, charPtr];
  export function startNetworkedParticleFxNonLoopedOnPedBone(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: boolean, p12: boolean): [boolean, charPtr];
  export function startParticleFxLoopedAtCoord(p0: charPtr, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: boolean, p10: boolean, p11: boolean): [int, charPtr];
  export function startParticleFxLoopedOnEntity(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean, p11: boolean): [int, charPtr];
  export function startParticleFxLoopedOnEntityBone(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: boolean, p12: boolean): [int, charPtr];
  export function startParticleFxLoopedOnPedBone(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: boolean, p12: boolean): [int, charPtr];
  export function startParticleFxNonLoopedAtCoord(p0: charPtr, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: boolean, p10: boolean): [int, charPtr];
  export function startParticleFxNonLoopedOnEntity(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: boolean, p10: boolean, p11: boolean): [boolean, charPtr];
  export function startParticleFxNonLoopedOnPedBone(p0: charPtr, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: boolean, p12: boolean): [boolean, charPtr];
  export function startPlaybackRecordedVehicle(p0: int, p1: int, p2: charPtr, p3: boolean): [void, charPtr];
  export function startPlaybackRecordedVehicleUsingAi(p0: int, p1: int, p2: intPtr, p3: float, p4: int): [void, intPtr];
  export function startPlaybackRecordedVehicleWithFlags(p0: int, p1: int, p2: charPtr, p3: int, p4: int, p5: int): [void, charPtr];
  export function startPlayerSwitch(p0: int, p1: int, p2: int, p3: int): void;
  export function startPlayerTeleport(p0: int, p1: float, p2: float, p3: float, p4: float, p5: boolean, p6: boolean, p7: boolean): void;
  export function startPreloadedConversation(): void;
  export function startRecording(p0: int): void;
  export function startRopeUnwindingFront(p0: int): void;
  export function startRopeWinding(p0: int): void;
  export function startSaveArray(p0: intPtr, p1: int, p2: charPtr): [void, intPtr, charPtr];
  export function startSaveData(p0: intPtr, p1: int, p2: boolean): [void, intPtr];
  export function startSaveStruct(p0: intPtr, p1: int, p2: charPtr): [void, intPtr, charPtr];
  export function startScreenEffect(p0: charPtr, p1: int, p2: boolean): [void, charPtr];
  export function startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
  export function startScriptFire(p0: float, p1: float, p2: float, p3: int, p4: boolean): int;
  export function startScriptPhoneConversation(p0: boolean, p1: boolean): void;
  export function startShapeTestBound(p0: int, p1: int, p2: int): int;
  export function startShapeTestBoundingBox(p0: int, p1: int, p2: int): int;
  export function startShapeTestBox(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: int, p10: int, p11: int, p12: int): int;
  export function startShapeTestCapsule(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int): int;
  export function startShapeTestCapsule2(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: int, p9: int): int;
  export function startShapeTestLosProbe(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int): int;
  export function startShapeTestRay(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int): int;
  export function startShapeTestSurroundingCoords(p0: Vector3NativePtr, p1: Vector3NativePtr, p2: int, p3: int, p4: int): [int, Vector3NativePtr, Vector3NativePtr];
  export function startVehicleAlarm(p0: int): int;
  export function startVehicleHorn(p0: int, p1: int, p2: int, p3: boolean): void;
  export function statClearSlotForReload(p0: int): int;
  export function statDeleteSlot(p0: int): int;
  export function statGetBool(p0: int, p1: _BoolPtr, p2: int): [boolean, _BoolPtr];
  export function statGetBoolMasked(p0: int, p1: int, p2: int): boolean;
  export function statGetDate(p0: int, p1: intPtr, p2: int, p3: int): [boolean, intPtr];
  export function statGetFloat(p0: int, p1: floatPtr, p2: int): [boolean, floatPtr];
  export function statGetInt(p0: int, p1: intPtr, p2: int): [boolean, intPtr];
  export function statGetLicensePlate(p0: int): charPtr;
  export function statGetMaskedInt(p0: int, p1: intPtr, p2: int, p3: int, p4: int): [boolean, intPtr];
  export function statGetNumberOfDays(p0: int): int;
  export function statGetNumberOfHours(p0: int): int;
  export function statGetNumberOfMinutes(p0: int): int;
  export function statGetNumberOfSeconds(p0: int): int;
  export function statGetPos(p0: int, p1: floatPtr, p2: floatPtr, p3: floatPtr, p4: int): [boolean, floatPtr, floatPtr, floatPtr];
  export function statGetString(p0: int, p1: int): charPtr;
  export function statGetUserId(p0: int): charPtr;
  export function statIncrement(p0: int, p1: float): void;
  export function statLoad(p0: int): boolean;
  export function statLoadPending(p0: int): boolean;
  export function statSave(p0: int, p1: boolean, p2: int): boolean;
  export function statSavePending(): int;
  export function statSavePendingOrRequested(): int;
  export function statSetBool(p0: int, p1: boolean, p2: boolean): boolean;
  export function statSetBoolMasked(p0: int, p1: boolean, p2: int, p3: boolean): boolean;
  export function statSetCurrentPosixTime(p0: int, p1: boolean): boolean;
  export function statSetDate(p0: int, p1: intPtr, p2: int, p3: boolean): [boolean, intPtr];
  export function statSetFloat(p0: int, p1: float, p2: boolean): boolean;
  export function statSetGxtLabel(p0: int, p1: charPtr, p2: boolean): [boolean, charPtr];
  export function statSetInt(p0: int, p1: int, p2: boolean): boolean;
  export function statSetLicensePlate(p0: int, p1: charPtr): [boolean, charPtr];
  export function statSetMaskedInt(p0: int, p1: int, p2: int, p3: int, p4: boolean): boolean;
  export function statSetPos(p0: int, p1: float, p2: float, p3: float, p4: boolean): boolean;
  export function statSetProfileSetting(p0: int, p1: int): void;
  export function statSetString(p0: int, p1: charPtr, p2: boolean): [boolean, charPtr];
  export function statSetUserId(p0: int, p1: charPtr, p2: boolean): [boolean, charPtr];
  export function statSlotIsLoaded(p0: int): boolean;
  export function steerUnlockBias(p0: int, p1: boolean): void;
  export function stopAlarm(p0: charPtr, p1: boolean): [void, charPtr];
  export function stopAllAlarms(p0: boolean): void;
  export function stopAllGarageActivity(): void;
  export function stopAllScreenEffects(): void;
  export function stopAnimPlayback(p0: int, p1: int, p2: boolean): void;
  export function stopAnimTask(p0: int, p1: charPtr, p2: charPtr, p3: float): [void, charPtr, charPtr];
  export function stopAnyPedModelBeingSuppressed(): void;
  export function stopAudioScene(p0: charPtr): [void, charPtr];
  export function stopAudioScenes(): void;
  export function stopCamPointing(p0: int): void;
  export function stopCamShaking(p0: int, p1: boolean): void;
  export function stopCinematicCamShaking(p0: boolean): void;
  export function stopCinematicShot(p0: int): void;
  export function stopCurrentPlayingAmbientSpeech(p0: int): void;
  export function stopCutscene(p0: boolean): void;
  export function stopCutsceneCamShaking(): void;
  export function stopCutsceneImmediately(): void;
  export function stopEntityAnim(p0: int, p1: charPtr, p2: charPtr, p3: float): [int, charPtr, charPtr];
  export function stopEntityFire(p0: int): void;
  export function stopFireInRange(p0: float, p1: float, p2: float, p3: float): void;
  export function stopGameplayCamShaking(p0: boolean): void;
  export function stopGameplayHint(p0: boolean): void;
  export function stopPadShake(p0: int): void;
  export function stopParticleFxLooped(p0: int, p1: boolean): void;
  export function stopPedRingtone(p0: int): void;
  export function stopPedSpeaking(p0: int, p1: boolean): void;
  export function stopPedWeaponFiringWhenDropped(p0: int): void;
  export function stopPlaybackRecordedVehicle(p0: int): void;
  export function stopPlayerSwitch(): void;
  export function stopPlayerTeleport(): void;
  export function stopRecordingAndDiscardClip(): void;
  export function stopRecordingAndSaveClip(): void;
  export function stopRopeUnwindingFront(p0: int): void;
  export function stopRopeWinding(p0: int): void;
  export function stopSaveArray(): void;
  export function stopSaveData(): void;
  export function stopSaveStruct(): void;
  export function stopScreenEffect(p0: charPtr): [void, charPtr];
  export function stopScriptGlobalShaking(p0: boolean): void;
  export function stopScriptedConversation(p0: boolean): int;
  export function stopSound(p0: int): void;
  export function stopStream(): void;
  export function stopSynchronizedAudioEvent(p0: int): boolean;
  export function stopSynchronizedEntityAnim(p0: int, p1: float, p2: boolean): boolean;
  export function stopSynchronizedMapEntityAnim(p0: float, p1: float, p2: float, p3: float, p4: int, p5: float): boolean;
  export function stringToInt(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function suppressAgitationEventsNextFrame(): void;
  export function suppressShockingEventTypeNextFrame(p0: int): void;
  export function suppressShockingEventsNextFrame(): void;
  export function switchCrimeType(p0: int, p1: int): void;
  export function switchInPlayer(p0: int): void;
  export function switchOutPlayer(p0: int, p1: int, p2: int): void;
  export function switchTrainTrack(p0: int, p1: boolean): int;
  export function tan(p0: float): float;
  export function taskAchieveHeading(p0: int, p1: float, p2: int): void;
  export function taskAimGunAtCoord(p0: int, p1: float, p2: float, p3: float, p4: int, p5: boolean, p6: boolean): void;
  export function taskAimGunAtEntity(p0: int, p1: int, p2: int, p3: boolean): void;
  export function taskAimGunScripted(p0: int, p1: int, p2: boolean, p3: boolean): void;
  export function taskAimGunScriptedWithTarget(p0: int, p1: int, p2: float, p3: float, p4: float, p5: int, p6: boolean, p7: boolean): void;
  export function taskArrestPed(p0: int, p1: int): void;
  export function taskBoatMission(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: int, p8: float, p9: int, p10: float, p11: int): void;
  export function taskChatToPed(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: float): void;
  export function taskClearDefensiveArea(p0: int): void;
  export function taskClearLookAt(p0: int): void;
  export function taskClimb(p0: int, p1: boolean): void;
  export function taskClimbLadder(p0: int, p1: int): void;
  export function taskCombatHatedTargetsAroundPed(p0: int, p1: float, p2: int): void;
  export function taskCombatHatedTargetsAroundPedTimed(p0: int, p1: float, p2: int, p3: int): void;
  export function taskCombatHatedTargetsInArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int): void;
  export function taskCombatPed(p0: int, p1: int, p2: int, p3: int): void;
  export function taskCombatPedTimed(p0: int, p1: int, p2: int, p3: int): void;
  export function taskCower(p0: int, p1: int): void;
  export function taskDriveBy(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: int, p8: boolean, p9: int): void;
  export function taskEnterVehicle(p0: int, p1: int, p2: int, p3: int, p4: float, p5: int, p6: int): void;
  export function taskEveryoneLeaveVehicle(p0: int): void;
  export function taskExitCover(p0: int, p1: int, p2: float, p3: float, p4: float): void;
  export function taskExtendRoute(p0: float, p1: float, p2: float): void;
  export function taskFlushRoute(): void;
  export function taskFollowNavMeshToCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: float, p7: boolean, p8: float): void;
  export function taskFollowNavMeshToCoordAdvanced(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: float, p7: int, p8: float, p9: float, p10: float, p11: float): void;
  export function taskFollowPointRoute(p0: int, p1: float, p2: int): void;
  export function taskFollowToOffsetOfEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float, p8: boolean): void;
  export function taskFollowWaypointRecording(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function taskForceMotionState(p0: int, p1: int, p2: boolean): void;
  export function taskGetOffBoat(p0: int, p1: int): void;
  export function taskGoStraightToCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: float, p7: float): void;
  export function taskGoStraightToCoordRelativeToEntity(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int): void;
  export function taskGoToCoordAndAimAtHatedEntitiesNearCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: float, p10: float, p11: boolean, p12: int, p13: int, p14: int): void;
  export function taskGoToCoordAnyMeans(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: boolean, p7: int, p8: float): void;
  export function taskGoToCoordAnyMeansExtraParams(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: boolean, p7: int, p8: float, p9: int, p10: int, p11: int): void;
  export function taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: boolean, p7: int, p8: float, p9: int, p10: int, p11: int, p12: int): void;
  export function taskGoToCoordWhileAimingAtCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: boolean, p9: float, p10: float, p11: boolean, p12: int, p13: boolean, p14: int): void;
  export function taskGoToCoordWhileAimingAtEntity(p0: int, p1: float, p2: float, p3: float, p4: int, p5: float, p6: boolean, p7: float, p8: float, p9: boolean, p10: int, p11: boolean, p12: int, p13: int): void;
  export function taskGoToEntity(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: int): void;
  export function taskGoToEntityWhileAimingAtCoord(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: boolean, p7: float, p8: float, p9: boolean, p10: boolean, p11: int): void;
  export function taskGoToEntityWhileAimingAtEntity(p0: int, p1: int, p2: int, p3: float, p4: boolean, p5: float, p6: float, p7: boolean, p8: boolean, p9: int): void;
  export function taskGotoEntityAiming(p0: int, p1: int, p2: float, p3: float): void;
  export function taskGotoEntityOffset(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: int): void;
  export function taskGotoEntityOffsetXy(p0: int, p1: int, p2: int, p3: float, p4: float, p5: float, p6: float, p7: boolean): void;
  export function taskGuardAssignedDefensiveArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int): void;
  export function taskGuardCurrentPosition(p0: int, p1: float, p2: float, p3: boolean): void;
  export function taskGuardSphereDefensiveArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float, p8: float, p9: float, p10: float): void;
  export function taskHandsUp(p0: int, p1: int, p2: int, p3: int, p4: boolean): void;
  export function taskHeliChase(p0: int, p1: int, p2: float, p3: float, p4: float): void;
  export function taskHeliMission(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: int, p8: float, p9: float, p10: float, p11: int, p12: int, p13: int, p14: int): void;
  export function taskJump(p0: int, p1: boolean): void;
  export function taskLeaveAnyVehicle(p0: int, p1: int, p2: int): void;
  export function taskLeaveVehicle(p0: int, p1: int, p2: int): void;
  export function taskLookAtCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: int): void;
  export function taskLookAtEntity(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function taskMoveNetwork(p0: int, p1: charPtr, p2: float, p3: boolean, p4: charPtr, p5: int): [void, charPtr, charPtr];
  export function taskMoveNetworkAdvanced(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int, p9: float, p10: boolean, p11: charPtr, p12: int): [void, charPtr, charPtr];
  export function taskOpenVehicleDoor(p0: int, p1: int, p2: int, p3: int, p4: float): void;
  export function taskParachute(p0: int, p1: boolean): void;
  export function taskParachuteToTarget(p0: int, p1: float, p2: float, p3: float): void;
  export function taskPatrol(p0: int, p1: charPtr, p2: int, p3: boolean, p4: boolean): [void, charPtr];
  export function taskPause(p0: int, p1: int): void;
  export function taskPedSlideToCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float): void;
  export function taskPedSlideToCoordHdgRate(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function taskPerformSequence(p0: int, p1: int): int;
  export function taskPerformSequenceFromProgress(p0: int, p1: int, p2: int, p3: int): void;
  export function taskPlaneChase(p0: int, p1: int, p2: float, p3: float, p4: float): void;
  export function taskPlaneLand(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float): void;
  export function taskPlaneMission(p0: int, p1: int, p2: int, p3: int, p4: float, p5: float, p6: float, p7: int, p8: float, p9: float, p10: float, p11: float, p12: float): void;
  export function taskPlantBomb(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function taskPlayAnim(p0: int, p1: charPtr, p2: charPtr, p3: float, p4: float, p5: int, p6: int, p7: float, p8: boolean, p9: boolean, p10: boolean): [void, charPtr, charPtr];
  export function taskPlayAnimAdvanced(p0: int, p1: charPtr, p2: charPtr, p3: float, p4: float, p5: float, p6: float, p7: float, p8: float, p9: float, p10: float, p11: int, p12: int, p13: float, p14: int, p15: int): [void, charPtr, charPtr];
  export function taskPlayPhoneGestureAnimation(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: float, p5: float, p6: boolean, p7: boolean): [void, charPtr, charPtr, charPtr];
  export function taskPutPedDirectlyIntoCover(p0: int, p1: float, p2: float, p3: float, p4: int, p5: boolean, p6: float, p7: boolean, p8: boolean, p9: int, p10: boolean): void;
  export function taskPutPedDirectlyIntoMelee(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float): void;
  export function taskRappelFromHeli(p0: int, p1: int): void;
  export function taskReactAndFleePed(p0: int, p1: int): void;
  export function taskReloadWeapon(p0: int, p1: boolean): void;
  export function taskScriptedAnimation(p0: int, p1: intPtr, p2: intPtr, p3: intPtr, p4: float, p5: float): [void, intPtr, intPtr, intPtr];
  export function taskSeekCoverFromPed(p0: int, p1: int, p2: int, p3: boolean): void;
  export function taskSeekCoverFromPos(p0: int, p1: float, p2: float, p3: float, p4: int, p5: boolean): void;
  export function taskSeekCoverToCoords(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: int, p8: boolean): void;
  export function taskSeekCoverToCoverPoint(p0: int, p1: int, p2: float, p3: float, p4: float, p5: int, p6: boolean): void;
  export function taskSetBlockingOfNonTemporaryEvents(p0: int, p1: boolean): void;
  export function taskSetDecisionMaker(p0: int, p1: int): void;
  export function taskSetSphereDefensiveArea(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function taskShockingEventReact(p0: int, p1: int): void;
  export function taskShootAtCoord(p0: int, p1: float, p2: float, p3: float, p4: int, p5: int): void;
  export function taskShootAtEntity(p0: int, p1: int, p2: int, p3: int): void;
  export function taskShuffleToNextVehicleSeat(p0: int, p1: int): void;
  export function taskSkyDive(p0: int): void;
  export function taskSmartFleeCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int, p6: boolean, p7: boolean): void;
  export function taskSmartFleePed(p0: int, p1: int, p2: float, p3: int, p4: boolean, p5: boolean): void;
  export function taskStandGuard(p0: int, p1: float, p2: float, p3: float, p4: float, p5: charPtr): [void, charPtr];
  export function taskStandStill(p0: int, p1: int): void;
  export function taskStartScenarioAtPosition(p0: int, p1: charPtr, p2: float, p3: float, p4: float, p5: float, p6: int, p7: boolean, p8: boolean): [void, charPtr];
  export function taskStartScenarioInPlace(p0: int, p1: charPtr, p2: int, p3: boolean): [void, charPtr];
  export function taskStayInCover(p0: int): void;
  export function taskStealthKill(p0: int, p1: int, p2: int, p3: float, p4: int): void;
  export function taskStopPhoneGestureAnimation(p0: int): void;
  export function taskSwapWeapon(p0: int, p1: boolean): void;
  export function taskSweepAimEntity(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: charPtr, p5: int, p6: int, p7: float, p8: float): [void, charPtr, charPtr, charPtr, charPtr];
  export function taskSweepAimPosition(p0: int, p1: charPtr, p2: charPtr, p3: charPtr, p4: charPtr, p5: int, p6: float, p7: float, p8: float, p9: float, p10: float): [void, charPtr, charPtr, charPtr, charPtr];
  export function taskSynchronizedScene(p0: int, p1: int, p2: charPtr, p3: charPtr, p4: float, p5: float, p6: int, p7: int, p8: float, p9: int): [void, charPtr, charPtr];
  export function taskThrowProjectile(p0: int, p1: float, p2: float, p3: float): void;
  export function taskToggleDuck(p0: boolean, p1: boolean): void;
  export function taskTurnPedToFaceCoord(p0: int, p1: float, p2: float, p3: float, p4: int): void;
  export function taskTurnPedToFaceEntity(p0: int, p1: int, p2: int): void;
  export function taskUseMobilePhone(p0: int, p1: int): void;
  export function taskUseMobilePhoneTimed(p0: int, p1: int): void;
  export function taskUseNearestScenarioChainToCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int): void;
  export function taskUseNearestScenarioChainToCoordWarp(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int): void;
  export function taskUseNearestScenarioToCoord(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int): void;
  export function taskUseNearestScenarioToCoordWarp(p0: int, p1: float, p2: float, p3: float, p4: float, p5: int): void;
  export function taskVehicleAimAtCoord(p0: int, p1: float, p2: float, p3: float): void;
  export function taskVehicleAimAtPed(p0: int, p1: int): void;
  export function taskVehicleChase(p0: int, p1: int): void;
  export function taskVehicleDriveToCoord(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: int, p8: int, p9: float, p10: float): void;
  export function taskVehicleDriveToCoordLongrange(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float): void;
  export function taskVehicleDriveWander(p0: int, p1: int, p2: float, p3: int): void;
  export function taskVehicleEscort(p0: int, p1: int, p2: int, p3: int, p4: float, p5: int, p6: float, p7: int, p8: float): void;
  export function taskVehicleFollow(p0: int, p1: int, p2: int, p3: float, p4: int, p5: int): void;
  export function taskVehicleFollowWaypointRecording(p0: int, p1: int, p2: charPtr, p3: int, p4: int, p5: int, p6: int, p7: float, p8: boolean, p9: float): [void, charPtr];
  export function taskVehicleGotoNavmesh(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float): void;
  export function taskVehicleHeliProtect(p0: int, p1: int, p2: int, p3: float, p4: int, p5: float, p6: int, p7: int): void;
  export function taskVehicleMission(p0: int, p1: int, p2: int, p3: int, p4: float, p5: int, p6: float, p7: float, p8: boolean): void;
  export function taskVehicleMissionCoorsTarget(p0: int, p1: int, p2: float, p3: float, p4: float, p5: int, p6: int, p7: int, p8: float, p9: float, p10: boolean): void;
  export function taskVehicleMissionPedTarget(p0: int, p1: int, p2: int, p3: int, p4: float, p5: int, p6: float, p7: float, p8: boolean): void;
  export function taskVehiclePark(p0: int, p1: int, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float, p8: boolean): void;
  export function taskVehiclePlayAnim(p0: int, p1: charPtr, p2: charPtr): [void, charPtr, charPtr];
  export function taskVehicleShootAtCoord(p0: int, p1: float, p2: float, p3: float, p4: float): void;
  export function taskVehicleShootAtPed(p0: int, p1: int, p2: float): void;
  export function taskVehicleTempAction(p0: int, p1: int, p2: int, p3: int): void;
  export function taskWanderInArea(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float): void;
  export function taskWanderStandard(p0: int, p1: float, p2: int): void;
  export function taskWarpPedIntoVehicle(p0: int, p1: int, p2: int): void;
  export function taskWrithe(p0: int, p1: int, p2: int, p3: int): void;
  export function terminateAllScriptsWithThisName(p0: charPtr): [void, charPtr];
  export function terminateThisThread(): void;
  export function terminateThread(p0: int): void;
  export function testProbeAgainstAllWater(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: int, p7: float): boolean;
  export function testProbeAgainstWater(p0: float, p1: float, p2: float, p3: float, p4: float, p5: float, p6: Vector3NativePtr): [boolean, Vector3NativePtr];
  export function testVerticalProbeAgainstAllWater(p0: float, p1: float, p2: float, p3: int, p4: floatPtr): [boolean, floatPtr];
  export function textureDownloadGetName(p0: int): charPtr;
  export function textureDownloadHasFailed(p0: int): boolean;
  export function textureDownloadRelease(p0: int): void;
  export function textureDownloadRequest(p0: intPtr, p1: charPtr, p2: charPtr, p3: boolean): [int, intPtr, charPtr, charPtr];
  export function toggleStealthRadar(p0: boolean): void;
  export function toggleVehicleMod(p0: int, p1: int, p2: boolean): void;
  export function trackObjectVisibility(p0: int): void;
  export function trackVehicleVisibility(p0: int): void;
  export function transitionFromBlurred(p0: float): boolean;
  export function transitionToBlurred(p0: float): boolean;
  export function triggerMusicEvent(p0: charPtr): [boolean, charPtr];
  export function triggerScriptEvent(p0: int, p1: intPtr, p2: int, p3: int): [void, intPtr];
  export function unblockDecisionMakerEvent(p0: int, p1: int): void;
  export function uncuffPed(p0: int): void;
  export function unfreezeRadioStation(p0: charPtr): [void, charPtr];
  export function unkGetInteriorAtCoords(p0: float, p1: float, p2: float, p3: int): int;
  export function unlockMinimapAngle(): void;
  export function unlockMinimapPosition(): void;
  export function unlockMissionNewsStory(p0: int): void;
  export function unpausePlaybackRecordedVehicle(p0: int): void;
  export function unpinInterior(p0: int): void;
  export function unpinRopeVertex(p0: int, p1: int): int;
  export function unregisterPedheadshot(p0: int): void;
  export function unregisterScriptWithAudio(): void;
  export function updateDisplayCash(p0: boolean): void;
  export function updateNavmeshBlockingObject(p0: int, p1: float, p2: float, p3: float, p4: float, p5: float, p6: float, p7: float, p8: int): void;
  export function updateOnscreenKeyboard(): int;
  export function updatePedHeadBlendData(p0: int, p1: float, p2: float, p3: float): void;
  export function updateRope(p0: int, p1: boolean): void;
  export function updateTaskAimGunScriptedTarget(p0: int, p1: int, p2: float, p3: float, p4: float, p5: boolean): void;
  export function updateTaskHandsUpDuration(p0: int, p1: int): void;
  export function updateTaskSweepAimEntity(p0: int, p1: int): void;
  export function updateTaskSweepAimPosition(p0: int, p1: float, p2: float, p3: float): void;
  export function useFreemodeMapBehavior(p0: boolean): void;
  export function useParticleFxAsset(p0: charPtr): [void, charPtr];
  export function usePlayerColourInsteadOfTeamColour(p0: boolean): void;
  export function useSirenAsHorn(p0: int, p1: boolean): void;
  export function useWaypointRecordingAsAssistedMovementRoute(p0: intPtr, p1: boolean, p2: float, p3: float): [void, intPtr];
  export function usingMissionCreator(p0: boolean): void;
  export function usingNetworkWeapontype(p0: int): boolean;
  export function vehToNet(p0: int): int;
  export function vehicleHasLandingGear(p0: int): boolean;
  export function vehicleWaypointPlaybackOverrideSpeed(p0: int, p1: float): void;
  export function vehicleWaypointPlaybackPause(p0: int): void;
  export function vehicleWaypointPlaybackResume(p0: int): void;
  export function vehicleWaypointPlaybackUseDefaultSpeed(p0: int): void;
  export function wasCounterActivated(p0: int, p1: int): boolean;
  export function wasCutsceneSkipped(): boolean;
  export function wasPedKilledByStealth(p0: int): boolean;
  export function wasPedKilledByTakedown(p0: int): boolean;
  export function wasPedSkeletonUpdated(p0: int): boolean;
  export function washDecalsFromVehicle(p0: int, p1: float): void;
  export function washDecalsInRange(p0: int, p1: int, p2: int, p3: int, p4: int): void;
  export function waypointPlaybackGetIsPaused(p0: int): boolean;
  export function waypointPlaybackOverrideSpeed(p0: int, p1: float, p2: boolean): void;
  export function waypointPlaybackPause(p0: int, p1: boolean, p2: boolean): void;
  export function waypointPlaybackResume(p0: int, p1: boolean, p2: int, p3: int): void;
  export function waypointPlaybackStartAimingAtCoord(p0: int, p1: float, p2: float, p3: float, p4: boolean): void;
  export function waypointPlaybackStartAimingAtPed(p0: int, p1: int, p2: boolean): void;
  export function waypointPlaybackStartShootingAtCoord(p0: int, p1: float, p2: float, p3: float, p4: boolean, p5: int): void;
  export function waypointPlaybackStartShootingAtPed(p0: int, p1: int, p2: boolean, p3: int): void;
  export function waypointPlaybackStopAimingOrShooting(p0: int): void;
  export function waypointPlaybackUseDefaultSpeed(p0: int): void;
  export function waypointRecordingGetClosestWaypoint(p0: charPtr, p1: float, p2: float, p3: float, p4: intPtr): [boolean, charPtr, intPtr];
  export function waypointRecordingGetCoord(p0: charPtr, p1: int, p2: Vector3NativePtr): [boolean, charPtr, Vector3NativePtr];
  export function waypointRecordingGetNumPoints(p0: charPtr, p1: intPtr): [boolean, charPtr, intPtr];
  export function waypointRecordingGetSpeedAtPoint(p0: charPtr, p1: int): [float, charPtr];
  export function wouldEntityBeOccluded(p0: int, p1: float, p2: float, p3: float, p4: boolean): boolean;
}
