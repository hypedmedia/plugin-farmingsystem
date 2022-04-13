import * as alt from 'alt-server';

import { FarmingController } from './src/controller';

import './farmingLists/farmingTools';
import './farmingLists/farmingItems';
import { PluginSystem } from '../../../server/systems/plugins';
import { SYSTEM_EVENTS } from '../../../shared/enums/system';

export const OSFarming = {
    name: 'OSFarming',
    version: 'v1.0',
}

PluginSystem.registerPlugin(OSFarming.name, () => {
    alt.log(`~lg~${OSFarming.name} ${OSFarming.version} successfully loaded.`);
});

alt.on(SYSTEM_EVENTS.BOOTUP_ENABLE_ENTRY, () => {
    FarmingController.createSpots();
});