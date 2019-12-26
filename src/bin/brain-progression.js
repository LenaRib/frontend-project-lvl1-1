#!/usr/bin/env node
import runGame from '../engine';
import { gameRules, generateProgression, calcNumber } from '../games/game-progression';

console.log(runGame(gameRules, generateProgression, calcNumber));
