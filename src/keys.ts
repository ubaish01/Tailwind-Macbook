import brightness from "./assets/keys/brightness.svg";
import switchIcon from "./assets/keys/switch.svg";
import search from "./assets/keys/search.svg";
import mic from "./assets/keys/mic.svg";
import moon from "./assets/keys/moon.svg";
import backward from "./assets/keys/backward.svg";
import playpause from "./assets/keys/playpause.svg";
import forward from "./assets/keys/forward.svg";
import volume from "./assets/keys/volume.svg";
import mute from "./assets/keys/mute.svg";

import fn from "./assets/keys/globe.svg";
import control from "./assets/keys/collapse.svg";
import option from "./assets/keys/options.svg";
import command from "./assets/keys/command.svg";

export const functional = [
  {
    label: "F1",
    icon: brightness,
  },
  {
    label: "F2",
    icon: brightness,
  },
  {
    label: "F3",
    icon: switchIcon,
  },
  {
    label: "F4",
    icon: search,
  },
  {
    label: "F5",
    icon: mic,
  },
  {
    label: "F6",
    icon: moon,
  },
  {
    label: "F7",
    icon: backward,
  },
  {
    label: "F8",
    icon: playpause,
  },
  {
    label: "F9",
    icon: forward,
  },
  {
    label: "F10",
    icon: volume,
  },
  {
    label: "F11",
    icon: volume,
  },
  {
    label: "F12",
    icon: mute,
  },
];

export const numberKeys = [
  {
    label: "`",
    alternate: "~",
  },
  {
    label: "1",
    alternate: "!",
  },
  {
    label: "2",
    alternate: "@",
  },
  {
    label: "3",
    alternate: "#",
  },
  {
    label: "4",
    alternate: "$",
  },
  {
    label: "5",
    alternate: "%",
  },
  {
    label: "6",
    alternate: "^",
  },
  {
    label: "7",
    alternate: "&",
  },
  {
    label: "8",
    alternate: "*",
  },
  {
    label: "9",
    alternate: "(",
  },
  {
    label: "0",
    alternate: ")",
  },
  {
    label: "-",
    alternate: "_",
  },
  {
    label: "=",
    alternate: "+",
  },
];

export const qwerty: { label: string; alternate?: string }[] = [
  {
    label: "q",
  },
  {
    label: "w",
  },
  {
    label: "e",
  },
  {
    label: "r",
  },
  {
    label: "t",
  },
  {
    label: "y",
  },
  {
    label: "u",
  },
  {
    label: "i",
  },
  {
    label: "o",
  },
  {
    label: "p",
  },
  {
    label: "[",
    alternate: "{",
  },
  {
    label: "]",
    alternate: "}",
  },
  {
    label: "\\",
    alternate: "|",
  },
];

export const asdf: { label: string; alternate?: string }[] = [
  {
    label: "a",
  },
  {
    label: "s",
  },
  {
    label: "e",
  },
  {
    label: "f",
  },
  {
    label: "g",
  },
  {
    label: "h",
  },
  {
    label: "j",
  },
  {
    label: "k",
  },
  {
    label: "l",
  },
  {
    label: ";",
    alternate: ":",
  },
  {
    label: `'`,
    alternate: `"`,
  },
];

export const secondLast: { label: string; alternate?: string }[] = [
  {
    label: "z",
  },
  {
    label: "x",
  },
  {
    label: "c",
  },
  {
    label: "v",
  },
  {
    label: "b",
  },
  {
    label: "n",
  },
  {
    label: "m",
  },
  {
    label: ",",
    alternate: "<",
  },
  {
    label: ".",
    alternate: ">",
  },
  {
    label: "/",
    alternate: "?",
  },
];

export const lastRow: { label: string; icon?: string; width?: string }[] = [
  {
    label: "fn",
    icon: fn,
  },
  {
    label: "control",
    icon: control,
  },
  {
    label: "option",
    icon: option,
  },
];
