import React from 'react';
import {
    GiVikingHelmet, GiSpartanHelmet, GiCheckedShield, GiVikingShield, GiSpikedMace,
    GiShardSword, GiBrain, GiInvisible, GiMuscularTorso, GiCelebrationFire, GiLightningTrio,
    GiWhirlwind, GiHeartBottle
} from 'react-icons/gi';
import {DiReact} from "react-icons/di";

const Certifications = {
    Helmet1: <GiVikingHelmet color='orange'/>,
    Helmet2: <GiSpartanHelmet color='orange'/>,
    Shield1: <GiCheckedShield color='orange'/>,
    Shield2: <GiVikingShield color='orange'/>,
    Sword1: <GiSpikedMace color='orange'/>,
    Sword2: <GiShardSword color='orange'/>,
    Passive1: <GiBrain color='orange'/>,
    Passive2: <GiInvisible color='orange'/>,
    Passive3: <GiMuscularTorso color='orange'/>,
};

const Ultimate = {
    Fire: <GiCelebrationFire color='blue'/>,
    Lightning: <GiLightningTrio color='blue'/>,
    Wind: <GiWhirlwind color='blue'/>
};

const Medecine = {
    Life: <GiHeartBottle color='red'/>
};

const Skills = {
    SimpleSkill: <DiReact color='yellow'/>
};

export {Certifications, Medecine, Skills, Ultimate};
