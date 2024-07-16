import colors from "./colors";
const dark = {
    primary: {...colors.white , foreground: colors.gray },
    secondary: { ...colors.gray, foreground: colors.white },
    background: {
      ...colors.slate,
      DEFAULT: colors.slate[950]
    },
    foreground: colors.white
  }
  
  const light = {
    primary: {...colors.gray, 500: "#000000", DEFAULT: "#000000", foreground: colors.white },
    secondary: {...colors.white, foreground: colors.gray },
    background: {
      ...colors.white,
      DEFAULT: "#ffffff"
    },
    foreground: colors.gray
  }
  
  
  const base = {
    primary: { 
      ...colors.emerald,
      foreground: colors.white
    },
    secondary: {
      ... colors.white,
      foreground: colors.gray  
    },
    background: {
      ...colors.slate,
      DEFAULT: colors.slate[950]
    },
    foreground: colors.white
  }
  
  const lightbase = {
    primary: {
      ...colors.emerald,
      foreground: colors.gray[50]
    },
    secondary: { ...colors.gray,
      foreground: colors.white
    },
    background: {
      ...colors.white,
      DEFAULT: colors.white[950]
    },
    foreground: colors.gray
  }
  
  const bee = {
    primary: colors.yellow,
    secondary: colors.white,
    background: {
      ...colors.gray,
      DEFAULT: "#000000"
    },
    foreground: colors.white
  }
  
  const lightbee = {
    primary: {...colors.yellow , foreground: colors.white },
    secondary: {...colors.gray, foreground: colors.white },
    background: {
      ...colors.white,
      DEFAULT: "#ffffff"
    },
    foreground: colors.gray
  }
  
  
  const lightpastel = {
    primary: {
        ...colors.purple,
        foreground: colors.white
    },
    secondary: {
        ...colors.gray,
        foreground: colors.white
    },
    background: {
        ...colors.white,
        DEFAULT: "#ffffff"
    },
    foreground: {
      ...colors.gray,
      DEFAULT: colors.gray[950]
    }
  }
  
  const darkpastel = {
    primary: colors.fuchsia,
    secondary: colors.white,
    background: {
      ...colors.gray,
      DEFAULT: "black"
    },
    foreground: colors.gray
  }

  
const themes = {
    "light": light,
    "dark": dark,
    "base": base,
    "lightBase": lightbase,
    "bee": bee,
    "lightBee": lightbee,
    "lightPastel": lightpastel,
}

export default themes;



