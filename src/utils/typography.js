import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"

grandViewTheme.overrideThemeStyles = () => ({
  a: {
    color: "#DEEAF3",
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
