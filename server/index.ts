import * as alt from 'alt-server';
import './src/defaults/index';
// import './src/defaults/farmingLists/farmingTools';
// import './src/defaults/farmingLists/farmingItems';
import { FarmingController } from './src/controller';
import { PluginSystem } from '../../../server/systems/plugins';
import { config } from './src/config';

PluginSystem.registerPlugin(config.pluginName, () => {
    const spots = FarmingController.createSpots();
    alt.log(`~lg~[PLUGIN] ==> ${config.pluginName} successfully loaded. ${spots} spots created.`);
});
