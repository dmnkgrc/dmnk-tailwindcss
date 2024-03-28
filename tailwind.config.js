/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Bg Shades
				sumiInk: {
					100: "#16161D",
					200: "#181820",
					300: "#1a1a22",
					400: "#1F1F28",
					500: "#2A2A37",
					600: "#363646",
					700: "#54546D", //fg
				},

				// Popup and Floats
				waveBlue: {
					100: "#223249",
					200: "#2D4F67",
				},

				// Diff and Git
				winterGreen: "#2B3328",
				winterYellow: "#49443C",
				winterRed: "#43242B",
				winterBlue: "#252535",
				autumnGreen: "#76946A",
				autumnRed: "#C34043",
				autumnYellow: "#DCA561",

				// Diag
				samuraiRed: "#E82424",
				roninYellow: "#FF9E3B",

				// Fg and Comments
				oldWhite: "#C8C093",
				fujiWhite: "#DCD7BA",
				fujiGray: "#727169",

				oniViolet: {
					100: "#957FB8",
					200: "#b8b4d0",
				},
				crystalBlue: "#7E9CD8",
				springViolet: { 100: "#938AA9", 200: "#9CABCA" },
				springBlue: "#7FB4CA",
				lightBlue: "#A3D4D5", // unused yet

				waveAqua: {
					100: "#6A9589",
					200: "#7AA89F", // improve lightness: desaturated greenish Aqua
				},

				springGreen: "#98BB6C",
				boatYellow: {
					100: "#938056",
					200: "#C0A36E",
				},
				carpYellow: "#E6C384",

				sakuraPink: "#D27E99",
				waveRed: "#E46876",
				peachRed: "#FF5D62",
				surimiOrange: "#FFA066",
				katanaGray: "#717C7C",

				dragonBlack: {
					100: "#0d0c0c",
					200: "#12120f",
					300: "#1D1C19",
					400: "#181616",
					500: "#282727",
					600: "#393836",
					700: "#625e5a",
				},

				dragonWhite: "#c5c9c5",
				dragonGreen: { 100: "#87a987", 200: "#8a9a7b" },
				dragonPink: "#a292a3",
				dragonOrange: { 100: "#b6927b", 200: "#b98d7b" },
				dragonGray: { 100: "#a6a69c", 200: "#9e9b93", 300: "#7a8382" },
				dragonBlue: { 100: "#658594", 200: "#8ba4b0" },
				dragonViolet: "#8992a7",
				dragonRed: "#c4746e",
				dragonAqua: "#8ea4a2",
				dragonAsh: "#737c73",
				dragonTeal: "#949fb5",
				dragonYellow: "#c4b28a",

				lotusInk: { 100: "#545464", 200: "#43436c" },
				lotusGray: { 100: "#dcd7ba", 200: "#716e61", 300: "#8a8980" },
				lotusWhite: {
					100: "#d5cea3",
					200: "#dcd5ac",
					300: "#e5ddb0",
					400: "#f2ecbc",
					500: "#e7dba0",
					600: "#e4d794",
				},
				lotusViolet: {
					100: "#a09cac",
					200: "#766b90",
					300: "#c9cbd1",
					400: "#624c83",
				},
				lotusBlue: {
					100: "#c7d7e0",
					200: "#b5cbd2",
					300: "#9fb5c9",
					400: "#4d699b",
					500: "#5d57a3",
				},
				lotusGreen: { 100: "#6f894e", 200: "#6e915f", 300: "#b7d0ae" },
				lotusPink: "#b35b79",
				lotusOrange: { 100: "#cc6d00", 200: "#e98a00" },
				lotusYellow: {
					100: "#77713f",
					200: "#836f4a",
					300: "#de9800",
					400: "#f9d791",
				},
				lotusRed: {
					100: "#c84053",
					200: "#d7474b",
					300: "#e82424",
					400: "#d9a594",
				},
				lotusAqua: { 100: "#597b75", 200: "#5e857a" },
				lotusTeal: { 100: "#4e8ca2", 200: "#6693bf", 300: "#5a7785" },
				lotusCyan: "#d7e3d8",
			},
			mono: ["CommitMono", "ui-monospace", "SFMono-Regular"],
		},
	},
	plugins: [],
};
