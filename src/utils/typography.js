import Typography from "typography"
import grandViewTheme from "typography-theme-alton"

grandViewTheme.overrideThemeStyles = () => ({
  a: {
    fontSize: "18px",
  },

  "a:hover": {
    textDecoration: "none",
  },

  h1: {
    fontWeight: "300",
  },
})

const typography = new Typography(grandViewTheme)

export default typography
