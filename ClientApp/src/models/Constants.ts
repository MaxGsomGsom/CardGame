import { ZoneParams } from './ZoneParams';
import { Coords } from './Coords';

export const MinResizeDelta = 10;
export const NumberOfCards = 30;
export const FrameDuration = 1000 / 60;
export const WindowOffset = 10;
export const CardWidth = 50;
export const CardHeight = 100;
export const InitPersonalZoneParams: ZoneParams = { x: 250, y: 10, width: 500, height: 150 };
export const ThrowZoneParams: ZoneParams = { x: 10, y: 10, width: 150, height: 150 };
export const InfoZoneParams: Coords = { x: 10, y: 170 };
export const UserNameKey = 'userName';
export const PersonalZoneParamsKey = 'personalZone';
