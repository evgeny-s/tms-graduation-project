import React from 'react';
import {
    GiVikingHelmet, GiSpartanHelmet, GiCheckedShield, GiVikingShield, GiSpikedMace,
    GiShardSword, GiBrain, GiInvisible, GiMuscularTorso, GiCelebrationFire, GiLightningTrio,
    GiWhirlwind, GiHeartBottle
} from 'react-icons/gi';
import {GiChewedSkull, GiHarryPotterSkull, GiPirateSkull, GiSurprisedSkull} from 'react-icons/gi';
import {GiRobotGolem, GiSpikedDragonHead} from 'react-icons/gi';
import {GiSecretBook} from "react-icons/gi";

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
    Life: <GiHeartBottle color='green'/>
};

const Skills = {
    SimpleSkill: <GiSecretBook color='yellow'/>
};

const BOSS = {
    BOSSWALLSMALL: <GiRobotGolem color='red'/>,
    BOSSWALLBIG: <GiSpikedDragonHead color='red'/>,
    BOSS1: <GiChewedSkull color='black'/>,
    BOSS2: <GiHarryPotterSkull color='black'/>,
    BOSS3: <GiPirateSkull color='black'/>,
    BOSS4: <GiSurprisedSkull color='black'/>
};

export {Certifications, Medecine, Skills, Ultimate, BOSS};
