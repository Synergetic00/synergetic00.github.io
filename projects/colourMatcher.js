function Block(name, hex) {
    this.name = name;
    this.hex = hex;
}

var array = [
    new Block("bedrock", "#545454"),
    new Block("bone_block_side", "#e1ddca"),
    new Block("bone_block_top", "#cac6ae"),
    new Block("bookshelf", "#695638"),
    new Block("brick", "#926457"),
    new Block("cauldron_side", "#3f3f3f"),
    new Block("clay", "#9fa5b1"),
    new Block("coal_block", "#131313"),
    new Block("coarse_dirt", "#77553b"),
    new Block("cobblestone", "#7b7b7b"),
    new Block("cobblestone_mossy", "#667966"),
    new Block("concrete_black", "#080a0f"),
    new Block("concrete_blue", "#2d2f8f"),
    new Block("concrete_brown", "#603c20"),
    new Block("concrete_cyan", "#157788"),
    new Block("concrete_gray", "#373a3e"),
    new Block("concrete_green", "#495b24"),
    new Block("concrete_light_blue", "#2489c7"),
    new Block("concrete_lime", "#5ea919"),
    new Block("concrete_magenta", "#a9309f"),
    new Block("concrete_orange", "#e06101"),
    new Block("concrete_pink", "#d6658f"),
    new Block("concrete_powder_black", "#191b20"),
    new Block("concrete_powder_blue", "#4649a7"),
    new Block("concrete_powder_brown", "#7e5536"),
    new Block("concrete_powder_cyan", "#25949d"),
    new Block("concrete_powder_gray", "#4d5155"),
    new Block("concrete_powder_green", "#61772d"),
    new Block("concrete_powder_light_blue", "#4ab5d6"),
    new Block("concrete_powder_lime", "#7ebd2a"),
    new Block("concrete_powder_magenta", "#c154b9"),
    new Block("concrete_powder_orange", "#e38420"),
    new Block("concrete_powder_pink", "#e59ab5"),
    new Block("concrete_powder_purple", "#8438b2"),
    new Block("concrete_powder_red", "#a83633"),
    new Block("concrete_powder_silver", "#9b9b94"),
    new Block("concrete_powder_white", "#e2e4e4"),
    new Block("concrete_powder_yellow", "#e9c737"),
    new Block("concrete_purple", "#64209c"),
    new Block("concrete_red", "#8e2121"),
    new Block("concrete_silver", "#7d7d73"),
    new Block("concrete_white", "#cfd5d6"),
    new Block("concrete_yellow", "#f1af15"),
    new Block("crafting_table_front", "#756142"),
    new Block("crafting_table_side", "#78613d"),
    new Block("crafting_table_top", "#704a2c"),
    new Block("daylight_detector_inverted_top", "#6d7175"),
    new Block("daylight_detector_side", "#433724"),
    new Block("daylight_detector_top", "#877862"),
    new Block("diamond_block", "#6bded9"),
    new Block("dirt", "#866043"),
    new Block("dirt_podzol_side", "#7c583a"),
    new Block("dirt_podzol_top", "#5a3f1d"),
    new Block("dispenser_front_horizontal", "#7b7b7b"),
    new Block("dispenser_front_vertical", "#585858"),
    new Block("dropper_front_horizontal", "#7b7b7b"),
    new Block("dropper_front_vertical", "#595959"),
    new Block("emerald_block", "#51da75"),
    new Block("end_bricks", "#e2e7ab"),
    new Block("end_stone", "#dde0a5"),
    new Block("furnace_front_off", "#4f4f4f"),
    new Block("furnace_front_on", "#7e6756"),
    new Block("furnace_side", "#787878"),
    new Block("furnace_top", "#666666"),
    new Block("glazed_terracotta_black", "#451e20"),
    new Block("glazed_terracotta_blue", "#314491"),
    new Block("glazed_terracotta_brown", "#7e6a53"),
    new Block("glazed_terracotta_cyan", "#33747a"),
    new Block("glazed_terracotta_gray", "#535b5e"),
    new Block("glazed_terracotta_green", "#718b3e"),
    new Block("glazed_terracotta_light_blue", "#61a6d1"),
    new Block("glazed_terracotta_lime", "#a3c536"),
    new Block("glazed_terracotta_magenta", "#cf63be"),
    new Block("glazed_terracotta_orange", "#a39257"),
    new Block("glazed_terracotta_pink", "#ed9cb7"),
    new Block("glazed_terracotta_purple", "#6d3197"),
    new Block("glazed_terracotta_red", "#b63b34"),
    new Block("glazed_terracotta_silver", "#91a7a9"),
    new Block("glazed_terracotta_white", "#b9d3ce"),
    new Block("glazed_terracotta_yellow", "#ecc35c"),
    new Block("glowstone", "#907646"),
    new Block("gold_block", "#faf050"),
    new Block("grass_path_side", "#8d6844"),
    new Block("grass_path_top", "#967d47"),
    new Block("grass_side", "#7f6941"),
    new Block("gravel", "#7f7c7a"),
    new Block("hardened_clay", "#975d43"),
    new Block("hardened_clay_stained_black", "#251710"),
    new Block("hardened_clay_stained_blue", "#4a3c5b"),
    new Block("hardened_clay_stained_brown", "#4d3324"),
    new Block("hardened_clay_stained_cyan", "#575b5b"),
    new Block("hardened_clay_stained_gray", "#3a2a24"),
    new Block("hardened_clay_stained_green", "#4c532a"),
    new Block("hardened_clay_stained_light_blue", "#726d8a"),
    new Block("hardened_clay_stained_lime", "#677635"),
    new Block("hardened_clay_stained_magenta", "#96586d"),
    new Block("hardened_clay_stained_orange", "#a25426"),
    new Block("hardened_clay_stained_pink", "#a24e4f"),
    new Block("hardened_clay_stained_purple", "#764656"),
    new Block("hardened_clay_stained_red", "#8f3d2f"),
    new Block("hardened_clay_stained_silver", "#876b62"),
    new Block("hardened_clay_stained_white", "#d2b2a1"),
    new Block("hardened_clay_stained_yellow", "#ba8523"),
    new Block("hay_block_side", "#9f7512"),
    new Block("hay_block_top", "#a98c10"),
    new Block("ice", "#7dadff"),
    new Block("ice_packed", "#a4c1f4"),
    new Block("iron_bars", "#6d6d6b"),
    new Block("iron_block", "#dedede"),
    new Block("iron_trapdoor", "#c9c9c9"),
    new Block("jukebox_side", "#684533"),
    new Block("jukebox_top", "#6e4a38"),
    new Block("lapis_block", "#26438a"),
    new Block("log_acacia", "#696359"),
    new Block("log_acacia_top", "#9f5c3f"),
    new Block("log_big_oak", "#342917"),
    new Block("log_big_oak_top", "#51412b"),
    new Block("log_birch", "#d1d0cb"),
    new Block("log_birch_top", "#b9a676"),
    new Block("log_jungle", "#57441b"),
    new Block("log_jungle_top", "#a07b4d"),
    new Block("log_oak", "#665132"),
    new Block("log_oak_top", "#a08250"),
    new Block("log_spruce", "#2e1d0c"),
    new Block("log_spruce_top", "#6c5432"),
    new Block("magma", "#86411a"),
    new Block("melon_side", "#8c9124"),
    new Block("melon_top", "#959824"),
    new Block("mushroom_block_inside", "#cbab79"),
    new Block("mushroom_block_skin_brown", "#8e6a53"),
    new Block("mushroom_block_skin_red", "#b72725"),
    new Block("mushroom_block_skin_stem", "#d0ccc2"),
    new Block("mycelium_side", "#705749"),
    new Block("mycelium_top", "#6f6469"),
    new Block("netherrack", "#6f3634"),
    new Block("nether_brick", "#2d161b"),
    new Block("nether_wart_block", "#750607"),
    new Block("noteblock", "#684533"),
    new Block("observer_back", "#454243"),
    new Block("observer_front", "#6b6b6b"),
    new Block("observer_side", "#3e3c3c"),
    new Block("observer_top", "#676767"),
    new Block("obsidian", "#14121e"),
    new Block("piston_bottom", "#666666"),
    new Block("piston_side", "#6b6761"),
    new Block("piston_top_normal", "#987f56"),
    new Block("piston_top_sticky", "#8b9261"),
    new Block("planks_acacia", "#a95c33"),
    new Block("planks_big_oak", "#3d2812"),
    new Block("planks_birch", "#c4b37b"),
    new Block("planks_jungle", "#9a6e4d"),
    new Block("planks_oak", "#9d7f4e"),
    new Block("planks_spruce", "#684e2f"),
    new Block("prismarine_bricks", "#64a190"),
    new Block("prismarine_dark", "#3c584b"),
    new Block("prismarine_rough", "#64978c"),
    new Block("pumpkin_face_off", "#87470c"),
    new Block("pumpkin_face_on", "#b9881e"),
    new Block("pumpkin_side", "#c77b18"),
    new Block("pumpkin_top", "#c07615"),
    new Block("purpur_block", "#a77aa7"),
    new Block("purpur_pillar", "#aa7faa"),
    new Block("purpur_pillar_top", "#aa7faa"),
    new Block("quartz_block_bottom", "#e8e5dc"),
    new Block("quartz_block_chiseled", "#e8e5dc"),
    new Block("quartz_block_chiseled_top", "#e8e5dc"),
    new Block("quartz_block_lines", "#e8e4dc"),
    new Block("quartz_block_lines_top", "#e9e6df"),
    new Block("quartz_block_side", "#ece9e3"),
    new Block("quartz_block_top", "#ece9e3"),
    new Block("redstone_block", "#a31a09"),
    new Block("redstone_lamp_off", "#4c2f1d"),
    new Block("redstone_lamp_on", "#7f5f3b"),
    new Block("red_nether_brick", "#440407"),
    new Block("red_sand", "#aa5821"),
    new Block("red_sandstone_bottom", "#a2531c"),
    new Block("red_sandstone_carved", "#a2521c"),
    new Block("red_sandstone_normal", "#a6541e"),
    new Block("red_sandstone_smooth", "#a9561f"),
    new Block("red_sandstone_top", "#a6551e"),
    new Block("sand", "#dbd3a0"),
    new Block("sandstone_bottom", "#d4cd94"),
    new Block("sandstone_carved", "#d8d09b"),
    new Block("sandstone_normal", "#d9d19d"),
    new Block("sandstone_smooth", "#dcd4a3"),
    new Block("sandstone_top", "#dad29e"),
    new Block("sea_lantern", "#b2ccc2"),
    new Block("shulker_top_black", "#1a1b1f"),
    new Block("shulker_top_blue", "#2d2f8f"),
    new Block("shulker_top_brown", "#6c4325"),
    new Block("shulker_top_cyan", "#147c89"),
    new Block("shulker_top_gray", "#383c40"),
    new Block("shulker_top_green", "#50661f"),
    new Block("shulker_top_light_blue", "#33a7d5"),
    new Block("shulker_top_lime", "#66af17"),
    new Block("shulker_top_magenta", "#b038a6"),
    new Block("shulker_top_orange", "#ec6c0a"),
    new Block("shulker_top_pink", "#e97da0"),
    new Block("shulker_top_purple", "#8b608b"),
    new Block("shulker_top_red", "#8f201f"),
    new Block("shulker_top_silver", "#7f7f76"),
    new Block("shulker_top_white", "#dadfdf"),
    new Block("shulker_top_yellow", "#f9be1e"),
    new Block("slime", "#78c865"),
    new Block("snow", "#f0fbfb"),
    new Block("soul_sand", "#554033"),
    new Block("sponge", "#c2c355"),
    new Block("sponge_wet", "#9d9c3d"),
    new Block("stone", "#7d7d7d"),
    new Block("stonebrick", "#7a7a7a"),
    new Block("stonebrick_carved", "#767676"),
    new Block("stonebrick_cracked", "#777777"),
    new Block("stonebrick_mossy", "#727769"),
    new Block("stone_andesite", "#838384"),
    new Block("stone_andesite_smooth", "#858587"),
    new Block("stone_diorite", "#b4b4b7"),
    new Block("stone_diorite_smooth", "#b8b8bb"),
    new Block("stone_granite", "#997263"),
    new Block("stone_granite_smooth", "#a07362"),
    new Block("stone_slab_side", "#a7a7a7"),
    new Block("stone_slab_top", "#a2a2a2"),
    new Block("structure_block", "#605161"),
    new Block("structure_block_corner", "#493e4b"),
    new Block("structure_block_data", "#544656"),
    new Block("structure_block_load", "#4a3d4b"),
    new Block("structure_block_save", "#615062"),
    new Block("tnt_bottom", "#aa4e34"),
    new Block("tnt_side", "#a6614e"),
    new Block("tnt_top", "#793f2f"),
    new Block("trapdoor", "#81602f"),
    new Block("wool_colored_black", "#15151a"),
    new Block("wool_colored_blue", "#35399d"),
    new Block("wool_colored_brown", "#724829"),
    new Block("wool_colored_cyan", "#158a91"),
    new Block("wool_colored_gray", "#3f4448"),
    new Block("wool_colored_green", "#556e1b"),
    new Block("wool_colored_light_blue", "#3aafd9"),
    new Block("wool_colored_lime", "#70b91a"),
    new Block("wool_colored_magenta", "#bd45b4"),
    new Block("wool_colored_orange", "#f17614"),
    new Block("wool_colored_pink", "#ee8dad"),
    new Block("wool_colored_purple", "#7a2aad"),
    new Block("wool_colored_red", "#a12723"),
    new Block("wool_colored_silver", "#8e8e87"),
    new Block("wool_colored_white", "#eaeced"),
    new Block("wool_colored_yellow", "#f9c628")
]

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function onChange() {
    var hexValue = document.getElementById('colorpicker').value;
    document.getElementById("output").innerHTML = getNearest(array,hexValue);
}

function getDistance(current, match) {

    var cur = current;
    var mtc = match.hex;

    var r1 = hexToRgb(cur).r;
    var g1 = hexToRgb(cur).g;
    var b1 = hexToRgb(cur).b;

    var r2 = hexToRgb(mtc).r;
    var g2 = hexToRgb(mtc).g;
    var b2 = hexToRgb(mtc).b;

    var r = Math.abs(r1 - r2);
    var g = Math.abs(g1 - g2);
    var b = Math.abs(b1 - b2);

    r /= 255;
    g /= 255;
    b /= 255;

    return (r + g + b) / 3;
}

function getNearest(map, current) {

    var shortest = 1000000;
    var index = 0;
  
    for (var i = 0; i < map.length; i++)
    {
        var dist = getDistance(current,map[i])
        if (dist < shortest) {
            shortest = dist;
            index = i;
        }
    }
  
    return array[index].name;
}