/* eslint-disable */
declare module 'alt' {
  export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number);
  }

  export class Entity extends WorldObject {
    id: number;
    model: number;
    rot: Vector3;

    getSyncedMeta(key: string): any;
    setSyncedMeta(key: string, p1: any): void;
  }

  export class WorldObject extends BaseObject {
    dimension: number;
    pos: Vector3;
  }

  export class BaseObject {
    type: number;

    destroy(): void;
    getMeta(key: string): any;
    setMeta(key: string, p1: any): void;
  }

  export class Player extends Entity {
    armour: number;
    currentWeapon: number;
    currentWeaponComponents: Array<number>;
    currentWeaponTintIndex: number;
    entityAimOffset: any;
    entityAimingAt: Entity | undefined | null;
    flashlightActive: boolean;
    health: number;
    ip: string;
    maxArmour: number;
    maxHealth: number;
    name: string;
    ping: number;
    seat: number;
    vehicle: Vehicle | undefined | null;

    addWeaponComponent(weaponHash: number, component: number): void;
    giveWeapon(weaponHash: number, ammo: number, equipNow: boolean): void;
    kick(): void;
    removeAllWeapons(): void;
    removeWeapon(weaponHash: number): void;
    removeWeaponComponent(weaponHash: number, component: number): void;
    setDateTime(day: number, month: number, year: number, hour: number, minute: number, second: number): void;
    setWeaponTintIndex(weaponHash: number, tintIndex: number): void;
    setWeather(weather: number): void;
    spawn(x: number, y: number, z: number, delay: number): void;
  }

  export class Vehicle extends Entity {
    activeRadioStation: number;
    bodyAdditionalHealth: number;
    bodyHealth: number;
    customPrimaryColor: Record<string, any>;
    customSecondaryColor: Record<string, any>;
    customTires: boolean;
    darkness: number;
    dashboardColor: number;
    daylightOn: boolean;
    dirtLevel: number;
    driver: Player | undefined | null;
    engineHealth: number;
    engineOn: boolean;
    flamethrowerActive: boolean;
    handbrakeActive: boolean;
    hasArmoredWindows: number;
    headlightColor: number;
    interiorColor: number;
    lockState: number;
    manualEngineControl: boolean;
    modKit: number;
    modKitsCount: number;
    neon: Record<string, any>;
    neonColor: Record<string, any>;
    nightlightOn: boolean;
    numberPlateIndex: number;
    numberPlateText: string;
    pearlColor: number;
    petrolTankHealth: number;
    primaryColor: number;
    repairsCount: number;
    roofOpened: boolean;
    secondaryColor: number;
    sirenActive: boolean;
    tireSmokeColor: Record<string, any>;
    wheelColor: number;
    wheelsCount: number;
    windowTint: number;

    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number);
    doesWheelHasTire(wheelId: number): number;
    getAppearanceDataBase64(): string;
    getArmoredWindowHealth(windowId: number): number;
    getArmoredWindowShootCount(windowId: number): number;
    getBumperDamageLevel(part: number): number;
    getDamageStatusBase64(): string;
    getDoorState(doorId: number): number;
    getExtra(category: number): boolean;
    getGamestateDataBase64(): string;
    getHealthDataBase64(): string;
    getMod(category: number): number;
    getModsCount(category: number): number;
    getPartBulletHoles(part: number): number;
    getPartDamageLevel(part: number): number;
    getScriptDataBase64(): string;
    getWheelHealth(wheelId: number): number;
    isLightDamaged(lightId: number): boolean;
    isSpecialLightDamaged(specialLightId: number): boolean;
    isWheelBurst(wheelId: number): number;
    isWindowDamaged(windowId: number): boolean;
    isWindowOpened(windowId: number): boolean;
    setAppearanceDataBase64(appearanceData: string): void;
    setArmoredWindowHealth(p0: number, p1: number): void;
    setArmoredWindowShootCount(p0: number, p1: number): void;
    setBumperDamageLevel(p0: number, p1: number): void;
    setDamageStatusBase64(damageStatus: string): void;
    setDoorState(p0: number, p1: number): void;
    setExtra(category: number, state: boolean): void;
    setGamestateDataBase64(gamestateData: string): void;
    setHealthDataBase64(healthData: string): void;
    setLightDamaged(p0: number, p1: boolean): void;
    setMod(category: number, id: number): void;
    setPartBulletHoles(p0: number, p1: number): void;
    setPartDamageLevel(p0: number, p1: number): void;
    setScriptDataBase64(scriptData: string): void;
    setSpecialLightDamaged(p0: number, p1: boolean): void;
    setWheelBurst(p0: number, p1: boolean): void;
    setWheelHasTire(p0: number, p1: boolean): void;
    setWheelHealth(wheelId: number, health: number): void;
    setWheels(p0: number, p1: number): void;
    setWindowDamaged(p0: number, p1: boolean): void;
    setWindowOpened(p0: number, p1: boolean): void;
  }

  export class Blip extends WorldObject {

  }

  export class PointBlip extends Blip {

    constructor(type: number, x: number, y: number, z: number);
  }

  export class Checkpoint extends WorldObject {

    constructor(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number);
  }

  export class VoiceChannel extends BaseObject {

    addPlayer(targetEntity: Record<string, any>): void;
    constructor(isSpatial: boolean, maxDistance: number);
    isPlayerInChannel(targetEntity: Record<string, any>): boolean;
    isPlayerMuted(targetEntity: Record<string, any>): boolean;
    mutePlayer(targetEntity: Record<string, any>): void;
    removePlayer(targetEntity: Record<string, any>): void;
    unmutePlayer(targetEntity: Record<string, any>): void;
  }

  export class Colshape extends WorldObject {
    colshapeType: number;

    isEntityIn(targetEntity: Record<string, any>): boolean;
  }

  export class ColshapeCylinder extends Colshape {

    constructor(x: number, y: number, z: number, radius: number, height: number);
  }

  export class ColshapeSphere extends Colshape {

    constructor(x: number, y: number, z: number, radius: number);
  }

  export class ColshapeCircle extends Colshape {

    constructor(x: number, y: number, radius: number);
  }

  export class ColshapeCuboid extends Colshape {

    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
  }

  export class ColshapeRectangle extends Colshape {

    constructor(x1: number, y1: number, x2: number, y2: number);
  }

  var currentResource: string;
  var rootDir: string;

  export function createBlipForCoords(type: number, x: number, y: number, z: number): Record<string, any> | undefined | null;
  export function createCheckpoint(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number): Record<string, any> | undefined | null;
  export function createVehicle(model: string | number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number): Vehicle;
  export function createVoiceChannel(isSpatial: boolean, maxDistance: number): Record<string, any> | undefined | null;
  export function emit(evName: string, ...args: any[]): void;
  export function emitClient(v8Player: Record<string, any> | null, evName: string, ...args: any[]): void;
  export function getPlayersByName(name: string): Array<any>;
  export function getResourceExports(name: string): any;
  export function getResourceMain(name: string): string;
  export function getResourcePath(name: string): string;
  export function hasResource(name: string): boolean;
  export function hash(str: string): number;
  export function log(...str: string[]): void;
  export function logError(...str: string[]): void;
  export function logWarning(...str: string[]): void;
  export function on(evName: string, p1Fn: Function): void;
  export function onClient(evName: string, p1Fn: Function): void;
  export function removeEntity(_this: Record<string, any>): void;
  export function removeVoiceChannel(_this: Record<string, any>): void;
  export function resourceLoaded(name: string, p1: any): void;
}
