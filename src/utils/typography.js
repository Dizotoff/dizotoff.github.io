import Typography from "typography"
import theme from "typography-theme-lawton"

theme.overrideThemeStyles = () => ({
  a: {
    color: "#222222",
  },

  "a:hover": {
    textDecoration: "none",
  },

  h1: {
    fontSize: "100px",
  },
})

const typography = new Typography(theme)

export default typography
